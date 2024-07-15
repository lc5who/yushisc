<?php

namespace app\api\controller;

use app\admin\model\Bankinfo;
use app\admin\model\Goods;
use app\admin\model\Paylist;
use app\admin\model\Settle;
use app\common\controller\Api;
use \app\admin\model\Order as OrderModel;
use \app\admin\model\User as UserModel;
use think\Db;
/**
 * 首页接口
 */
class Order extends Api
{
    protected $noNeedLogin = ['index'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function index()
    {
        $this->success('请求成功');
    }

    public function buyOrderList()
    {
        $today = \fast\Date::unixtime('day');
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        $list = [];
        if ($status=='1'){
            $list = OrderModel::with('goods')->where('buyUserId',$user['id'])->where('status','0')->order('id desc')->paginate($limit);
            $this->success('获取成功',$list);
        }
        if ($status=='4'){
            $list = OrderModel::with('goods')->where('buyUserId',$user['id'])->where('status','1')->order('id desc')->paginate($limit);
            $this->success('获取成功',$list);
        }

        if ($status=='2'){
            $list = Paylist::with(['seller','buyer'])->where('buyer_id',$user['id'])->where('createtime','>=',$today)->where('status','0')->select();
            $this->success('获取成功',$list);
        }

        if ($status=='3'){
            $list = Paylist::with(['seller','buyer'])->where('buyer_id',$user['id'])->where('createtime','>=',$today)->where('status','>','0')->select();
            $this->success('获取成功',$list);
        }
        $this->success('获取成功',$list);
    }

    public function sellOrderList()
    {
        $today = \fast\Date::unixtime('day');
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        $list = [];
        if ($status<2){
            $list = Goods::where('seller_id',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
            $this->success('获取成功',$list);
        }
        if ($status==3){
            $list = Paylist::with(['seller','buyer'])->where('createtime','>=',$today)->where('seller_id',$user['id'])->where('status','<=','1')->select();
            $this->success('获取成功',$list);
        }

        if ($status==4){
            $list = Paylist::with(['seller','buyer'])->where('createtime','>=',$today)->where('seller_id',$user['id'])->where('status','2')->select();
            $this->success('获取成功',$list);
        }
        $this->success('获取成功',$list);

    }

    public function payInfo()
    {
        $user = $this->auth->getUser();
        $orderId = input('orderId');
        $today = \fast\Date::unixtime('day');
        $paylist = Paylist::with('seller')->where('id',$orderId)->find();
        if (!$paylist) $this->error('没有待支付的款项');
        if ($paylist['status']!='0') $this->error('当前款项已支付');
        $bankInfo = Bankinfo::where('userId',$paylist['seller_id'])->select();
        $payData = [];
        $bankData = [
            'bank'=>[
                'id'=>0,
                'bankName'=>0,
                'name'=>0,
                'card'=>0,
                'status'=>0,
            ],
            'wx'=>[
                'id'=>0,
                'qrcode'=>'',
                'status'=>0,
            ],
            'alipay'=>[
                'id'=>0,
                'qrcode'=>'',
                'status'=>0,
            ]
        ];
        foreach ($bankInfo as $bf){
            if ($bf['type']==0){
                $bankData['bank']=[
                    'id'=>$bf['id'],
                    'bankName'=>$bf['bankName'],
                    'name'=>$bf['name'],
                    'card'=>$bf['cardNum'],
                    'status'=>1,
                ];
            }
            if ($bf['type']==1){
                $bankData['wx']=[
                    'id'=>$bf['id'],
                    'qrcode'=>$bf['img'],
                    'status'=>1,
                ];
            }
            if ($bf['type']==2){
                $bankData['alipay']=[
                    'id'=>$bf['id'],
                    'qrcode'=>$bf['img'],
                    'status'=>1,
                ];
            }
        }
        $payData['payInfo'] = $bankData;
        $payData['orderId']=$paylist['id'];
        $payData['money']=$paylist['money'];
        $payData['payListId']=$paylist['id'];
        $payData['seller']=$paylist['seller']['nickname'];
        $this->success('获取成功',$payData);
    }

    public function Pay()
    {
        $payId = input('payId');
        $payPic = input('payPic');
        $payListId = input('payListId');
        if (empty($payPic)) $this->error('请上传凭证');
        if ($payId<1) $this->error('请选择支付方式');
        $payInfo = Paylist::get($payListId);
        if (!$payInfo) $this->error('无此支付订单');
        if ($payInfo['status']!='0') $this->error('当前订单已支付');
        $payInfo->save([
            'bankinfo_id'=>$payId,
            'payimage'=>$payPic,
            'paytime'=>time(),
            'status'=>'1',
        ]);
        $this->success('提交成功，等待卖家确认');
    }

    public function confirmDetail()
    {
        $seller = $this->auth->getUser();
        $orderId = input('orderId');
        $today = \fast\Date::unixtime('day');
        $paylist = Paylist::with(['buyer','seller'])->where('seller_id',$seller['id'])->where('id',$orderId)->find();
//        $buyer = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->find();
        $total = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->sum('money');
        $list = [
            'buyerName'=>$paylist['buyer']['nickname'],
            'buyerMobile'=>$paylist['buyer']['username'],
            'pay'=>$paylist['money'],
            'reception'=>$paylist['payimage'],
        ];

        $data = [
            'orderId'=>$paylist['id'],
            'sellerId'=>$seller['id'],
            'sellerName'=>$seller['nickname'],
            'sellerMobile'=>$seller['username'],
            'price'=>$list['pay'],
            'totalReceive'=>$total,
            'list'=>$list,
        ];

        $this->success('ok',$data);
    }
    public function confirmOrder()
    {
        $today = \fast\Date::unixtime('day');
        $seller = $this->auth->getUser();
        $orderId = input('orderId');
        $pa = Paylist::get($orderId);
        if (!$pa) $this->success('无此支付订单');
        if ($pa['status']==2) $this->success('该订单已确认收款');
        if ($pa['status']!=1) $this->success('该订单等待买家打款');
        $pa->save([
            'status'=>'2',
            'checktime'=>time()
        ]);
        $this->success('确认成功');
    }
}
