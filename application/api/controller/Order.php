<?php

namespace app\api\controller;

use app\admin\model\Banner;
use app\common\controller\Api;
use \app\admin\model\Order as OrderModel;
/**
 * 首页接口
 */
class Order extends Api
{
    protected $noNeedLogin = ['index'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function index()
    {
        $this->success('请求成功');
    }

    public function buyOrderList()
    {
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        $list = OrderModel::where('buyUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        $this->success('获取成功',$list);
    }

    public function sellOrderList()
    {
        $user = $this->auth->getUser();
        $status = $this->request->param('status');
        $limit = $this->request->param('limit',50);
        $list = OrderModel::where('sellUserId',$user['id'])->where('status',$status)->order('id desc')->paginate($limit);
        $this->success('获取成功',$list);
    }
}
