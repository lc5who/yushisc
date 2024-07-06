<?php

namespace app\admin\controller;

use app\admin\model\User;
use app\common\controller\Backend;


/**
 * 仓库
 *
 * @icon fa fa-circle-o
 */
class Cangku extends Backend
{

    /**
     * Cangku模型对象
     * @var \app\admin\model\Cangku
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Cangku;

    }

    public function set($ids = null)
    {
        $row = $this->model->get($ids);
        if (!$row) {
           $this->error(__('No Results were found'));
        }
        $adminIds = $this->getDataLimitAdminIds();
        if (is_array($adminIds) && !in_array($row[$this->dataLimitField], $adminIds)) {
            $this->error(__('You have no permission'));
        }
        if (false === $this->request->isPost()) {
            $this->view->assign('row', $row);
            return $this->view->fetch();
        }
        $params = $this->request->post('row/a');
        if (empty($params)) {
            $this->error(__('Parameter %s can not be empty', ''));
        }
        //查询该用户
        $user = User::where('mobile',$params['phone'])->find();
        if (!$user) $this->error('无此用户');

        $goodsSn = getSn();
        \app\admin\model\Goods::create([
            'goodsName'=>$row['name'],
            'goodsimage'=>$row['mainimage'],
            'goodsSn'=>$goodsSn,
            'goodsPrice'=>$row['price'],
            'mobile'=>$user['mobile'],
            'username'=>$user['nickname'],
            'status'=>$params['onlineStatus'],
            'createtime'=>time(),
            'onlineStatus'=>$params['onlineStatus'],
            'seller_id'=>$user['id'],
        ]);
        $this->success();
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
