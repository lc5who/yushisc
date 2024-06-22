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
}
