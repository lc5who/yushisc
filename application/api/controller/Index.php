<?php

namespace app\api\controller;

use app\admin\model\Banner;
use app\common\controller\Api;

/**
 * 首页接口
 */
class Index extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function index()
    {
        $this->success('请求成功');
    }

    public function banner()
    {
        $this->success('ok',Banner::all());
    }

    public function rechargeMethod()
    {
        $this->success('获取成功',[
            'bank'=>[
                'bankName'=>'农业银行',
                'name'=>'张三',
                'card'=>'1231231231',
                'status'=>1,
            ],
            'wx'=>[
                'qrcode'=>'http://141.11.183.159/uploads/20240622/15db8a1d9209c9ca1416ac4d2308004f.png',
                'status'=>1,
            ],
            'alipay'=>[
                'qrcode'=>'http://141.11.183.159/uploads/20240622/15db8a1d9209c9ca1416ac4d2308004f.png',
                'status'=>1,
            ]
        ]);
    }
}
