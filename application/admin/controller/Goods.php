<?php

namespace app\admin\controller;

use app\admin\model\User;
use app\common\controller\Backend;
use \app\admin\model\Goods as GoodsModel;
use app\admin\model\Order;
use think\Db;
use think\exception\PDOException;

/**
 * 商品列管理
 *
 * @icon fa fa-circle-o
 */
class Goods extends Backend
{

    /**
     * Goods模型对象
     * @var \app\admin\model\Goods
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Goods;
        $this->view->assign("statusList", $this->model->getStatusList());
    }

    public function offline()
    {
        $ids = $this->request->param('ids');
        \app\admin\model\Goods::where('id',$ids)->update(['onlineStatus'=>'0','status'=>'0']);
        $this->success('下架成功');
    }

    public function online()
    {
        $ids = $this->request->param('ids');
        $good=GoodsModel::get($ids);
        if (!$good) $this->error('无此商品');
        $w =date('w');
        $online_fee = 0;
        $now =time();
        $now_str = date('Ymd H:i:s',$now);
        if($w==5){
            $online_fee= $good['goodsPrice']*config('site.zwsjf')/100;
        }
        else{
            $online_fee= $good['goodsPrice']*config('site.ydssjf')/100;
        }
        $good->save([
            'onlinetime'=>$now,
            'onlinePrice'=>$online_fee,
            'onlineStatus'=>'1',
            'status'=>'1'
        ]);
        // \app\common\model\User::money(-$online_fee,$good['seller_id'],"商品编号:{$good['goodsSn']},上架费{$online_fee},上架时间{$now_str}");
        $this->success('上架成功');
    }
    public function clear()
    {
        $today = \fast\Date::unixtime('day');
        $ids = $this->request->param('ids');
        $good=GoodsModel::get($ids);
        if (!$good) $this->error('无此商品');
        User::where('id',$good['buyer_id'])->setInc('left_buy');
        User::where('id',$good['buyer_id'])->setDec('today_buy');
        Order::where('orderSn',$good['orderSn'])->where('createtime','>',$today)->delete();
        $good->save([
            'buyer_id'=>0,
            'status'=>'1',
            'buyusername'=>'',
            'buymobile'=>'',
            'onlineStatus'=>'1',
            'orderSn'=>'',
        ]);

        $this->success('清除成功');
    }
    public function multi($ids = null)
    {
        if (false === $this->request->isPost()) {
            $this->error(__('Invalid parameters'));
        }
        $ids = $ids ?: $this->request->post('ids');
        if (empty($ids)) {
            $this->error(__('Parameter %s can not be empty', 'ids'));
        }

        if (false === $this->request->has('params')) {
            $this->error(__('No rows were updated'));
        }
        parse_str($this->request->post('params'), $values);
        $values = $this->auth->isSuperAdmin() ? $values : array_intersect_key($values, array_flip(is_array($this->multiFields) ? $this->multiFields : explode(',', $this->multiFields)));
        if (empty($values)) {
            $this->error(__('You have no permission'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds)) {
            $this->model->where($this->dataLimitField, 'in', $adminIds);
        }
        $count = 0;
        Db::startTrans();
        try {
            $list = $this->model->where($this->model->getPk(), 'in', $ids)->select();
            foreach ($list as $item) {
                if(isset($values['onlineStatus'])){
                    if($values['onlineStatus']>0){
                        $w =date('w');
                        $online_fee = 0;
                        $now =time();
                        $now_str = date('Ymd H:i:s',$now);
                        if($w==5){
                            $online_fee= $item['goodsPrice']*config('site.zwsjf')/100;
                        }
                        else{
                            $online_fee= $item['goodsPrice']*config('site.ydssjf')/100;
                        }
                        $count += $item->allowField(true)->isUpdate(true)->save(
                            [
                                'onlinetime'=>$now,
                                'onlinePrice'=>$online_fee,
                                'onlineStatus'=>'1',
                                'status'=>'1'
                            ]
                        );
                    }else{
                        $count += $item->allowField(true)->isUpdate(true)->save($values);
                    }
                }else{
                    $count += $item->allowField(true)->isUpdate(true)->save($values);
                }

            }
            Db::commit();
        } catch (PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($count) {
            $this->success();
        }
        $this->error(__('No rows were updated'));
    }
    
    public function sjf()
    {
        $goods=\app\admin\model\Goods::where('isSjf','0')->where('status','0')->where('onlineStatus','0')->select();
        foreach ($goods as $good) {
            \app\common\model\User::money(-$good['onlinePrice'],$good['seller_id'],"商品编号:{$good['goodsSn']},上架费{$good['onlinePrice']}");
            $good->save([
                'isSjf'=>'1',
            ]);
        }
        $this->success('操作成功');
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
