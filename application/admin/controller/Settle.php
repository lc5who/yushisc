<?php

namespace app\admin\controller;

use app\admin\model\User;
use app\common\controller\Backend;
use app\admin\model\Order;
use think\Db;

/**
 * 汇算
 *
 * @icon fa fa-circle-o
 */
class Settle extends Backend
{

    /**
     * Settle模型对象
     * @var \app\admin\model\Settle
     */
    protected $model = null;

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\admin\model\Settle;

    }

    public function index()
    {
//                $now = time();
        $now =1719103307;
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
        $list = $this->model
            ->where($where)
            ->where('createtime','>',$now)
            ->order($sort, $order)
            ->paginate($limit);
        $result = ['total' => $list->total(), 'rows' => $list->items()];
        return json($result);
    }

    public function count()
    {
        $zero = \fast\Date::unixtime('day');
//        $now = time();
        $now =1719103307;
        //查询今日的订单
        $sql = "SELECT a.user_id,a.online_amount,b.buy_amount from(SELECT sellUserId as user_id,SUM(price) as online_amount from fa_order where createtime>{$now} GROUP by sellUserId) a left JOIN (SELECT buyUserId as user_id,SUM(price) as buy_amount from fa_order where createtime>{$now} GROUP by buyUserid) b on a.user_id = b.user_id union SELECT b.user_id,a.online_amount,b.buy_amount from (SELECT sellUserId as user_id,SUM(price) as online_amount from fa_order where createtime>{$now} GROUP by sellUserId) a right JOIN (SELECT buyUserId as user_id,SUM(price) as buy_amount from fa_order where createtime>{$now} GROUP by buyUserid) b on a.user_id = b.user_id";
        $res = Db::query($sql);
//        $data =json_encode($res,JSON_UNESCAPED_UNICODE);
        $data =[];
        foreach ($res as $k=>$v){
            $user = User::get($v['user_id']);
            $res[$k]['user_mobile']=$user['username'];
            $res[$k]['user_name']=$user['nickname'];
            if ($v['online_amount']==null) $res[$k]['online_amount']=0;
            if ($v['buy_amount']==null) $res[$k]['buy_amount']=0;
            if ($v['buy_amount']>$v['online_amount']){
                $res[$k]['pay']=$v['buy_amount']-$v['online_amount'];
                $res[$k]['income']=0;
            }else{
                $res[$k]['income']=$v['online_amount']-$v['buy_amount'];
                $res[$k]['pay']=0;
            }
            \app\admin\model\Settle::create($res[$k]);
        }
        $this->success('汇算成功','/master.php/settle?addtabs=1',$res);
    }

    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
