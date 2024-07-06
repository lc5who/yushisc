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

        //获取要付款的
        $buy=[];
        $sell=[];
        foreach ($res as $k=>$v){
            if ($v['income']==0){
                $buy[$v['user_id']]=$v['pay'];
            }
            if ($v['pay']==0){
                $sell[$v['user_id']]=$v['income'];
            }
        }
        //进行匹配
        arsort($buy);
        arsort($sell);
        $sellerIds = array_keys($sell);
        $buyerIds = array_keys($buy);
        $sellerP =array_values($sell);
        $buyerP =array_values($buy);

//        dump($sellerP);
//        dump($sell);

        //买家要支付的多
        if (count($buyerP)>=count($sellerP)){

            for ($j=0;$j<count($sellerP);$j++){
                if ($sellerP[$j]==0) continue;
                $payInfo=[
                    'seller_id'=>$sellerIds[$j],
                    'buyer_id'=>0,
                    'money'=>0.00
                ];
                for ($i=0;$i<count($buyerP);$i++){
                    if ($buyerP[$i]==0) continue;
                    if ($sellerP[$j]>=$buyerP[$i]){
                        $sellerP[$j]=$sellerP[$j]-$buyerP[$i];

                        $payInfo['buyer_id']=$buyerIds[$i];
                        $payInfo['money']=$buyerP[$i];
                        \app\admin\model\Paylist::create($payInfo);
                        $buyerP[$i]=0;
                    }else{

                        $buyerP[$i]=$buyerP[$i]-$sellerP[$j];
                        $payInfo['buyer_id']=$buyerIds[$i];
                        $payInfo['money']=$buyerP[$i];
                        \app\admin\model\Paylist::create($payInfo);
                        $sellerP[$j]=0;
                        break;
                    }
                }
            }
        }else{
            //卖家多
            for ($j=0;$j<count($buyerP);$j++){
                if ($buyerP[$j]==0) continue;
                $payInfo=[
                    'seller_id'=>0,
                    'buyer_id'=>$buyerIds[$j],
                    'money'=>0.00
                ];
                for ($i=0;$i<count($sellerP);$i++){
                    if ($sellerP[$i]==0) continue;
                    if ($buyerP[$j]>=$sellerP[$i]){
                        $buyerP[$j]=$buyerP[$j]-$sellerP[$i];

                        $payInfo['seller_id']=$sellerIds[$i];
                        $payInfo['money']=$sellerP[$i];
                        \app\admin\model\Paylist::create($payInfo);
                        $sellerP[$i]=0;
                    }else{

                        $sellerP[$i]=$sellerP[$i]-$buyerP[$j];
                        $payInfo['seller_id']=$sellerIds[$i];
                        $payInfo['money']=$buyerP[$j];
                        \app\admin\model\Paylist::create($payInfo);
                        $buyerP[$j]=0;
                        break;
                    }
                }
            }

        }

        $this->success('汇算成功','/master.php/settle?addtabs=1',$res);
    }

    public function isSettle()
    {
        $today = \fast\Date::unixtime('day');
        $paylist = \app\admin\model\Paylist::where('createtime','>',$today)->select();
        if ($paylist) $this->error('今日已汇算');
        $this->success('ok');
    }
    /**
     * 默认生成的控制器所继承的父类中有index/add/edit/del/multi五个基础方法、destroy/restore/recyclebin三个回收站方法
     * 因此在当前控制器中可不用编写增删改查的代码,除非需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */


}
