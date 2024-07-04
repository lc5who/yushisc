<?php

namespace app\admin\controller;

use app\admin\model\User;
use app\common\controller\Backend;
use \app\admin\model\Goods as GoodsModel;
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
        \app\admin\model\Goods::where('id',$ids)->update(['onlineStatus'=>'0']);
        $this->success('下架成功');
    }

    public function online()
    {
        $ids = $this->request->param('ids');
        $good=GoodsModel::get($ids);
        if (!$good) $this->error('无此商品');
//            ->update(['onlineStatus'=>'1']);
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
            'onlineStatus'=>'1'
        ]);
        \app\common\model\User::money(-$online_fee,$good['seller_id'],"商品编号:{$good['goodsSn']},上架费{$online_fee},上架时间{$now_str}");
        $this->success('上架成功');
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
