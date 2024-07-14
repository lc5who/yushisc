<?php

namespace app\admin\controller;

use app\common\controller\Backend;
/**
 * 
 *
 * @icon fa fa-circle-o
 */
class Order extends Backend
{

    /**
     * Order模型对象
     * @var \app\admin\model\Order
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Order;
        $this->view->assign("statusList", $this->model->getStatusList());
    }

    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if (false === $this->request->isAjax()) {
            return $this->view->fetch();
        }
        //如果发送的来源是 Selectpage，则转发到 Selectpage
        if ($this->request->request('keyField')) {
            return $this->selectpage();
        }
        [$where, $sort, $order, $offset, $limit] = $this->buildparams();
        $list = $this->model::with('goods')
            ->where($where)
            ->order($sort, $order)
            ->paginate($limit);
        $result = ['total' => $list->total(), 'rows' => $list->items()];
        return json($result);
    }

    public function handle()
    {
        $today = \fast\Date::unixtime('day');
//        $orders= $this->model->where('createtime','>=',$today)->where('status','0')->select();
        $orders= $this->model->where('status','0')->select();
        foreach ($orders as $k=>$order){
            $order->save([
                'endTime'=>time(),
                'status'=>'1',
            ]);
            //确认订单之后做的事
            //1.新增商品,提价
            $goods = \app\admin\model\Goods::get($order['goodsId']);
            $goods->save([
                'status'=>2,
            ]);
            $w =date('w');
            if($w==5){
                $online_fee= $goods['goodsPrice']*config('site.zwsjf')/100;
            }
            else{
                $online_fee=$goods['goodsPrice']*config('site.ydssjf')/100;
            }
            $newGoods = [
                'goodsName'=>$goods['goodsName'],
                'goodsimage'=>$goods['goodsimage'],
                'goodsContent'=>$goods['goodsContent'],
                'goodsSn'=>getSn(),
                'goodsPrice'=>$goods['goodsPrice']*1.05,
                'seller_id'=>$goods['buyer_id'],
                'mobile'=>$goods['buymobile'],
                'username'=>$goods['buyusername'],
                'status'=>'0',
                'onlineStatus'=>0,
                'onlinePrice'=>$online_fee,
            ];
            \app\admin\model\Goods::create($newGoods);
        }
        $this->success('ok');
    }
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
