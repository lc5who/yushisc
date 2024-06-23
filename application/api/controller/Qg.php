<?php

namespace app\api\controller;

use app\admin\model\Goods;
use app\admin\model\Order;
use app\common\controller\Api;

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
        $data = [
            "manyminutes"=> "1",
        "rushswitch"=> "1",
        "salestarttime"=> "18:00:00",
        "saleendtime"=> "23:30:00",
        "qgbackimage"=> "http=>\/\/dtqzuwsa.xinzhihuikeji.cn\/\/uploads\/20240318\/990c4e271502f9405548bc39924869d2.jpg",
        "name"=> "佛山市尚卓轩科技有限公司",
        "price_more"=> "0.00",
        "ordercount"=> 0,
        "sumprice"=> 0
        ];
        $this->success('获取成功');
    }

    public function createOrder()
    {
        $user = $this->auth->getUser();
        $id = $this->request->param('id');
        $goods = Goods::get($id);
        if (!$goods) $this->error('无此商品');
        if ($goods['buyer_id']>0) $this->error('此商品被人抢走啦');
        $orderSn = 'QG'.getSn();
        $goods->save([
            'orderSn'=>$orderSn,
            'buyusername'=>$user['nickname'],
            'buymobile'=>$user['mobile'],
            'buyer_id'=>$user['id'],
            'status'=>2,
            'onlineStatus'=>0,
        ]);

        Order::create([
            'orderSn'=>$orderSn,
            'sellUserId'=>$goods['seller_id'],
            'buyUserId'=>$user['id'],
            'goodsId'=>$goods['id'],
            'price'=>$goods['goodsPrice'],
            'status'=>'1',
        ]);
        $this->success('抢购成功');
    }

    public function goodsList()
    {
        $limit = $this->request->param('limit',20);
//        $page = $this->request->param('page',1);
        $list = Goods::where('status','1')->where('onlineStatus','1')->paginate($limit);
        $result = ['info' => ['ordercount'=>0,'orderprice'=>0], 'list'=>$list];
        $this->success('获取成功',$result);
    }

    public function goodsDetail()
    {
        $id = $this->request->param();
        $goods = Goods::get($id);
        $this->success('获取成功',$goods);
    }
}
