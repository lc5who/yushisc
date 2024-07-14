<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use app\common\model\User;

/**
 * 提现
 *
 * @icon fa fa-circle-o
 */
class Withdraw extends Backend
{

    /**
     * Withdraw模型对象
     * @var \app\admin\model\Withdraw
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Withdraw;

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
        $list = $this->model::with(['Bankinfo','User'])
            ->where($where)
            ->order($sort, $order)
            ->paginate($limit);
        $result = ['total' => $list->total(), 'rows' => $list->items()];
        return json($result);
    }

    public function pass()
    {
        $id = input('ids');
        $withdraw = \app\admin\model\Withdraw::get($id);
        if (!$withdraw) $this->error('无此提现订单');
        if ($withdraw['status']!=0) $this->error('该笔提现已经审核过了');
        $withdraw->save([
            'status'=>1,
            'checkTime'=>time()
        ]);
        $this->success('审核成功');
    }

    public function reject()
    {
        $id = input('ids');
        $withdraw = \app\admin\model\Withdraw::get($id);
        if (!$withdraw) $this->error('无此提现订单');
        if ($withdraw['status']!=0) $this->error('该笔提现已经审核过了');
        $withdraw->save([
            'status'=>2,
            'checkTime'=>time()
        ]);
        User::score($withdraw['money'],$withdraw['userId'],'提现拒绝');
        $this->success('拒绝成功');
    }



    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
