<?php

namespace app\api\controller;

use app\admin\model\Goods;
use app\admin\model\Order;
use app\common\controller\Api;
use think\Db;

/**
 * 首页接口
 */
class Qg extends Api
{
    protected $noNeedLogin = ['index'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function index()
    {
        $user = $this->auth->getUser();
        $data = [
            "manyminutes" => "1",
            "rushswitch" => config('site.qgkg'),
            "starttime" => config('site.qgkssj'),
            "endtime" => config('site.qgsusj'),
            "qgbackimage" => "http=>\/\/dtqzuwsa.xinzhihuikeji.cn\/\/uploads\/20240318\/990c4e271502f9405548bc39924869d2.jpg",
            "name" => config('site.name'),
            "price_more" => "0.00",
            "ordercount" => 0,
            "sumprice" => 0,
            'txswitch' => config('site.txswitch'),
            'isBank'=>$user['isBank'],
            'isAuth'=>$user['isAuth'],
            'isAdd'=>$user['isAdd'],
        ];
        $this->success('获取成功', $data);
    }

    public function createOrder()
    {
        $user = $this->auth->getUser();
        $startTime = strtotime(date('Y-m-d') . ' ' . config('site.qgkssj'));
        $endTime = strtotime(date('Y-m-d') . ' ' . config('site.qgsusj'));
        $today = \fast\Date::unixtime('day');
        $maxBuy = config('site.jyrkqds');
        $now = time();
        $vipStartTime = $startTime - 60;
        if ($user['isVip'] == 0) {
            if ($now > $endTime || $now < $startTime) {

                $this->error('当前时间无法抢购');
            }
        } else {
            if ($now > $endTime || $now < $vipStartTime) {
                $this->error('当前时间无法抢购');
            }
            if ($now >= $vipStartTime && $now < $startTime) {
                if ($user['today_buy'] > 1) $this->error('当前时间仅可抢两单');
            }
        }


//        $todayBuy = Order::where('buyUserId',$user['id'])->where('createtime','>',$today)->count();
        if ($user['left_buy'] <= 0) $this->error('最大可抢购' . $maxBuy . '单');


        $id = $this->request->param('id');
        $goods = Goods::get($id);
        if (!$goods) $this->error('无此商品');
        if ($goods['seller_id'] == $user['id']) $this->error('不能抢购自己的商品');
        if ($goods['buyer_id'] > 0) $this->error('此商品被人抢走啦');
        $orderSn = 'QG' . getSn();
        $goods->save([
            'orderSn' => $orderSn,
            'buyusername' => $user['nickname'],
            'buymobile' => $user['mobile'],
            'buyer_id' => $user['id'],
            'onlineStatus' => 0,
        ]);

        Order::create([
            'orderSn' => $orderSn,
            'sellUserId' => $goods['seller_id'],
            'buyUserId' => $user['id'],
            'goodsId' => $goods['id'],
            'price' => $goods['goodsPrice'],
            'status' => '0',
        ]);
        $user->setInc('today_buy');
        $user->setDec('left_buy');
        // $upUser = \app\admin\model\User::get($user['up_id']);
        // if ($upUser){
        //     \app\common\model\User::score($goods['goodsPrice']*0.004,$upUser['id'],'佣金奖励');
        //     Db::name('commission')->where('user_id',$upUser['id'])->where('sub_id',$user['id'])->setInc('money',$goods['goodsPrice']*0.004);
        // }
//        $todayAmount = Order::where('buyUserId',$user['id'])->where('createtime','>',$today)->sum('price');
//        if($todayAmount>=70000)
        $this->success('抢购成功');
    }

    public function goodsList()
    {
        $today = \fast\Date::unixtime('day');
        $user = $this->auth->getUser();
        $limit = $this->request->param('limit', 20);
//        $page = $this->request->param('page',1);
        $list = Goods::where('status', '1')->where('onlineStatus', '1')->where('seller_id', '<>', $user['id'])->paginate($limit);
        $ordercount = Order::where('buyUserId', $user['id'])->where('createtime', '>=', $today)->count();
        $orderprice = Order::where('buyUserId', $user['id'])->where('createtime', '>=', $today)->sum('price');
        $result = ['info' => ['ordercount' => $ordercount, 'orderprice' => $orderprice], 'list' => $list];
        $this->success('获取成功', $result);
    }

    public function goodsDetail()
    {
        $user =$this->auth->getUser();
        $id = $this->request->param('id');
        $goods = Goods::get($id);
        $goods['starttime'] = config('site.qgkssj');
        $goods['isVip'] = $user['isVip'];
        $this->success('获取成功', $goods);
    }
}
