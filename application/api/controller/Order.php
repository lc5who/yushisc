<?php

namespace app\api\controller;

use app\admin\model\Bankinfo;
use app\admin\model\Goods;
use app\admin\model\Settle;
use app\common\controller\Api;
use \app\admin\model\Order as OrderModel;
use \app\admin\model\User as UserModel;
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
        $list = OrderModel::with('goods')->where('buyUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        $this->success('获取成功',$list);
    }

    public function sellOrderList()
    {
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        $list = OrderModel::with('goods')->where('sellUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        $this->success('获取成功',$list);
    }

    public function payInfo()
    {
        $orderId = input('orderId');
        $order= OrderModel::get($orderId);
        if (!$order) $this->error('无此订单');
        if ($order['status']!='2') $this->error('当前订单不可支付');
        $bankInfo = Bankinfo::where('userId',$order['sellUserId'])->select();
        $payData = [];
        $bankData = [];
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
        $payData['payMoney']=$order['payMoney'];
        $this->success('获取成功',$payData);
    }

    public function Pay()
    {
        $orderId = input('orderId');
        $payId = input('payId');
        $payPic = input('payPic');
        $order= OrderModel::get($orderId);
        if (!$order) $this->error('无此订单');
        if ($order['status']!='2') $this->error('当前订单不可支付');
        if ($order['payid']>0) $this->error('当前订单已支付');
        $order->save([
            'payid'=>$payId,
            'payPic'=>$payPic,
            'payTime'=>time(),
            'isdk'=>1,
            'status'=>'3',
        ]);
//        $buyer = UserModel::get($order['buyUserId']);
//        $seller = UserModel::get($order['sellUserId']);
        $this->success('提交成功，等待卖家确认');
    }

    public function confirmDetail()
    {
        $orderId = input('orderId');
        $order= OrderModel::get($orderId);
        $goods = Goods::get($order['goodsId']);
        $seller = UserModel::get('sellUserId');
        $buyer = UserModel::get('buyUserId');
        $today = \fast\Date::unixtime('day');
        $settle = Settle::where('user_id',$seller['id'])->where('createtime','>=',$today)->find();
        $data = [
            'orderId'=>1,
            'goodsName'=>$goods['goodsName'],
            'goodsLogo'=>$goods['goodsImage'],
            'sellerId'=>$seller['id'],
            'sellerName'=>$seller['nickname'],
            'sellerMobile'=>$seller['username'],
            'price'=>$order['price'],
            'totalReceive'=>$settle['income'],
            'buyerName'=>$buyer['nickname'],
            'buyerMobile'=>$buyer['username'],
            'pay'=>$order['payMoney'],
            'reception'=>$order['payPic'],
        ];
        $this->success('ok',$data);
    }
    public function confirmOrder()
    {
        $orderId = input('orderId');
        $order= OrderModel::get($orderId);
        if (!$order) $this->error('无此订单');
        if ($order['status']!='3') $this->error('当前订单不可确认');
        $order->save([
            'endTime'=>time(),
            'status'=>'4',
        ]);

        //确认订单之后做的事
        //1.新增商品,提价
        $goods = Goods::get($order['goodsId']);
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
        ];
        Goods::create($newGoods);
        $this->success('确认成功');
    }
}
