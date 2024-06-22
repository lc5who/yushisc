<?php

namespace app\api\controller;

use app\admin\model\Notice;
use app\common\controller\Api;

/**
 * 首页接口
 */
class Articles extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function alist()
    {
        $typelist= $this->request->param('typelist');

        if ($typelist=="qg"){
            $data = Notice::where('typelist',"抢购页公告")->select();
            $this->success('请求成功',$data);
        }
        if ($typelist=="home"){
            $data = Notice::where('typelist',"首页公告")->select();
            $this->success('请求成功',$data);
        }
        if (empty($typelist)){
            $data = Notice::all();
            $this->success('请求成功',$data);
        }

        $this->success('请求成功');
    }

    public function info()
    {
        $articleId= $this->request->param('articleId');
        $data = Notice::where('articleId',$articleId)->field('articleTitle,articleContent,createtime,date')->find();
        $this->success('获取成功',$data);
    }
}
