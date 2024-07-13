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
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);


        if ($status=='3'){
            $list = OrderModel::with('goods')->where('buyUserId',$user['id'])->where('status','in','3,4')->order('id desc')->paginate($limit);
        }else{
            $list = OrderModel::with('goods')->where('buyUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        }

        $this->success('获取成功',$list);
    }

    public function sellOrderList()
    {
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        if ($status<2){
            $list = Goods::where('seller_id',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
            $this->success('获取成功',$list);
        }
        if ($status==3){
            $status=2;
        }
        $list = OrderModel::with('goods')->where('sellUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        $this->success('获取成功',$list);
//        if ($status!=-1){
//
//        }else{

//            $list = Goods::where('seller_id',$user['id'])->where('status','0')->order('id desc')->paginate($limit);
//            $this->success('获取成功',$list);
//        }

    }

    public function payInfo()
    {
        $user = $this->auth->getUser();
        $orderId = input('orderId');
        $order= OrderModel::get($orderId);
        if (!$order) $this->error('无此订单');
        if ($order['status']!='2') $this->error('当前订单已支付');
        $today = \fast\Date::unixtime('day');
        $paylist = Paylist::where('buyer_id',$user['id'])->where('createtime','>',$today)->where('status','0')->find();

        if (!$paylist) $this->error('无需支付');
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
        $payData['orderId']=$order['id'];
        $payData['money']=$paylist['money'];
        $payData['payListId']=$paylist['id'];
        $this->success('获取成功',$payData);
    }

    public function Pay()
    {
        $orderId = input('orderId');
        $payId = input('payId');
        $payPic = input('payPic');
        $payListId = input('payListId');
        $payInfo = Paylist::get($payListId);
        $order= OrderModel::get($orderId);
        if (!$payInfo) $this->error('无此订单');
        if ($payInfo['status']!='0') $this->error('当前订单已支付');
        $payInfo->save([
            'bankinfo_id'=>$payId,
            'payimage'=>$payPic,
            'paytime'=>time(),
            'status'=>'1',
        ]);
        // if ($order){
        //     $order->save([
        //         'status'=>'3'
        //     ]);
        // }
        $this->success('提交成功，等待卖家确认');
    }

    public function confirmDetail()
    {
        $orderId = input('orderId');
        $order= OrderModel::get($orderId);
        $goods = Goods::get($order['goodsId']);
//      $seller = UserModel::get('sellUserId');

        $seller = $this->auth->getUser();
        $today = \fast\Date::unixtime('day');
        $paylist = Paylist::with(['buyer','seller'])->where('seller_id',$seller['id'])->where('createtime','>=',$today)->select();
//        $buyer = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->find();
//        $total = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->sum('money');
        $total = 0;
        $list = [];
        foreach ($paylist as $k=>$v){
            $total=$total+$v['money'];
            if($v['status']!=0){
                 $list[]=[
                'buyerName'=>$v['buyer']['nickname'],
                'buyerMobile'=>$v['buyer']['username'],
                'pay'=>$v['money'],
                'reception'=>$v['payimage'],
            ];
            }
           

        }


        $data = [
            'orderId'=>1,
            'goodsName'=>$goods['goodsName'],
            'goodsLogo'=>$goods['goodsimage'],
            'sellerId'=>$seller['id'],
            'sellerName'=>$seller['nickname'],
            'sellerMobile'=>$seller['username'],
            'price'=>$order['price'],
            'totalReceive'=>$total,
            'list'=>$list,
        ];

        $this->success('ok',$data);
    }
    public function confirmOrder()
    {
        $today = \fast\Date::unixtime('day');
        $seller = $this->auth->getUser();

//        $pl = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->where('status','1')->select();
//
//        foreach ($pl as $payInfo) {
//            $payInfo->save([
//                'status'=>2,
//                'paytime'=>time()
//            ]);
//
//            $buyIsok = Paylist::where('buyer_id',$payInfo['buyer_id'])->where('createtime','>=',$today)->where('status','<','2')->find();
//            if ($buyIsok){
//                //do nothing
//            }else{
//
//            }
//        }

        $pa = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->where('status','0')->select();
        if($pa) $this->error('还有买家并未上传凭证,无法确认收款');
        $paylist = Paylist::where('seller_id',$seller['id'])->where('createtime','>=',$today)->where('status','1')->update([
            'status'=>2,
            'paytime'=>time()
        ]);

//        $orderId = input('orderId');
//        $order= OrderModel::get($orderId);
//        if (!$order) $this->error('无此订单');
//        if ($order['status']!='3') $this->error('当前订单不可确认');

        //确认卖家的订单
        $orders= OrderModel::where('sellUserId',$seller['id'])->where('status','in','2,3')->where('createtime','>',$today)->select();
        $w =date('w');
        foreach ($orders as $k=>$order){
            $order->save([
                'endTime'=>time(),
                'status'=>'4',
            ]);
            //确认订单之后做的事
            //1.新增商品,提价
            $buyer = \app\admin\model\User::get($order['buyUserId']);
            $upUser = \app\admin\model\User::get($buyer['up_id']);
            if ($upUser){
                \app\common\model\User::score($order['price']*0.004,$upUser['id'],'佣金奖励');
                Db::name('commission')->where('user_id',$upUser['id'])->where('sub_id',$buyer['id'])->setInc('money',$order['price']*0.004);
            }


            $goods = Goods::get($order['goodsId']);
            if($w==5){
                $online_fee= $goods['goodsPrice']*config('site.zwsjf')/100;
            }
            else{
                $online_fee=$goods['goodsPrice']*config('site.ydssjf')/100;
            }
            $newGoods = [
                'goodsName'=>$goods['goodsName'],
                'goodsimage'=>$goods['goodsimage'],
                'goodsSn'=>getSn(),
                'goodsPrice'=>$goods['goodsPrice']*1.05,
                'seller_id'=>$goods['buyer_id'],
                'mobile'=>$goods['buymobile'],
                'username'=>$goods['buyusername'],
                'status'=>'0',
                'onlineStatus'=>0,
                'onlinePrice'=>$online_fee,
            ];
            Goods::create($newGoods);
            // \app\common\model\User::money(-$online_fee,$newGoods['seller_id'],"商品编号:{$newGoods['goodsSn']},上架费{$online_fee}");
        }

        //确认买家的订单
        $orders= OrderModel::where('buyUserId',$seller['id'])->where('status','in','2,3')->where('createtime','>=',$today)->select();
        $w =date('w');
        foreach ($orders as $k=>$order){
            $order->save([
                'endTime'=>time(),
                'status'=>'4',
            ]);
            //确认订单之后做的事
            //1.新增商品,提价
//            $buyer = \app\admin\model\User::get($order['buyUserId']);
            $upUser = \app\admin\model\User::get($seller['up_id']);
            if ($upUser){
                \app\common\model\User::score($order['price']*0.004,$upUser['id'],'佣金奖励');
                Db::name('commission')->where('user_id',$upUser['id'])->where('sub_id',$seller['id'])->setInc('money',$order['price']*0.004);
            }


            $goods = Goods::get($order['goodsId']);
            if($w==5){
                $online_fee= $goods['goodsPrice']*config('site.zwsjf')/100;
            }
            else{
                $online_fee=$goods['goodsPrice']*config('site.ydssjf')/100;
            }
            $newGoods = [
                'goodsName'=>$goods['goodsName'],
                'goodsimage'=>$goods['goodsimage'],
                'goodsSn'=>getSn(),
                'goodsPrice'=>$goods['goodsPrice']*1.05,
                'seller_id'=>$goods['buyer_id'],
                'mobile'=>$goods['buymobile'],
                'username'=>$goods['buyusername'],
                'status'=>'0',
                'onlineStatus'=>0,
                'onlinePrice'=>$online_fee,
            ];
            Goods::create($newGoods);
            // \app\common\model\User::money(-$online_fee,$newGoods['seller_id'],"商品编号:{$newGoods['goodsSn']},上架费{$online_fee}");
        }

        $this->success('确认成功');
    }
}
