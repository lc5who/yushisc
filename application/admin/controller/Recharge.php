<?php

namespace app\admin\controller;

use app\common\controller\Backend;
use app\common\model\User;
use think\Db;
use think\exception\PDOException;
use think\exception\ValidateException;

/**
 * 充值
 *
 * @icon fa fa-circle-o
 */
class Recharge extends Backend
{

    /**
     * Recharge模型对象
     * @var \app\admin\model\Recharge
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Recharge;
        $this->view->assign("pmdataList", $this->model->getPmdataList());
        $this->view->assign("statusList", $this->model->getStatusList());
    }

    public function add()
    {
        if (false === $this->request->isPost()) {
            return $this->view->fetch();
        }
        $params = $this->request->post('row/a');
        if (empty($params)) {
            $this->error(__('Parameter %s can not be empty', ''));
        }
        $params = $this->preExcludeFields($params);

        if ($this->dataLimit && $this->dataLimitFieldAutoFill) {
            $params[$this->dataLimitField] = $this->auth->id;
        }
        User::money($params['money'], $params['user_id'], '后台充值'.$params['mark']);
        $user = User::get($params['user_id']);
        if (!$user) $this->error('无此会员');
        $params['pmdata']='后台充值';
        $params['realname']=$user['nickname'];
        $params['username']=$user['username'];
        $params['status']='1';

        $result = false;
        Db::startTrans();
        try {
            //是否采用模型验证
            if ($this->modelValidate) {
                $name = str_replace("\\model\\", "\\validate\\", get_class($this->model));
                $validate = is_bool($this->modelValidate) ? ($this->modelSceneValidate ? $name . '.add' : $name) : $this->modelValidate;
                $this->model->validateFailException()->validate($validate);
            }
            $result = $this->model->allowField(true)->save($params);
            Db::commit();
        } catch (ValidateException|PDOException|Exception $e) {
            Db::rollback();
            $this->error($e->getMessage());
        }
        if ($result === false) {
            $this->error(__('No rows were inserted'));
        }


//        $user = User::get($params['user_id']);
        if ($user['money']>=0){
                $now= time();
                // User::money(-$online_fee, $rec['user_id'], '支出上架费'.$online_fee);
                \app\admin\model\Goods::where('seller_id',$user['id'])->where('onlineStatus','0')->where('status','0')->update([
                    'onlinetime'=>$now,
                    'onlineStatus'=>'1',
                    'status'=>'1',
                    'isSjf'=>'1',
                ]);
            }
        $this->success();
    }

    public function check()
    {
        $id = input('ids');
        $state = input('state');
        $rec =\app\admin\model\Recharge::get($id);
        $rec->save([
            'status'=>$state,
        ]);
        if ($state=='1'){
            User::money($rec['money'], $rec['user_id'], '充值成功');
            $user = User::get($rec['user_id']);
            $online_fee = \app\admin\model\Goods::where('seller_id',$user['id'])->where('onlineStatus','0')->sum('onlinePrice');
            if ($user['money']>=0){
                $now= time();
                // User::money(-$online_fee, $rec['user_id'], '支出上架费'.$online_fee);
                \app\admin\model\Goods::where('seller_id',$user['id'])->where('onlineStatus','0')->where('status','0')->update([
                    'onlinetime'=>$now,
                    'onlineStatus'=>'1',
                    'status'=>'1',
                    'isSjf'=>'1'
                ]);
            }
        }
//        if ($user['money'])
        $this->success('审核成功');
    }



    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
