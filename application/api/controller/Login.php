<?php

namespace app\api\controller;

use app\admin\model\Goods;
use app\common\controller\Api;
use app\common\library\Sms;
use think\Validate;
use \app\admin\model\User;

/**
 * 登陆接口
 */
class Login extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function login()
    {
        $account = $this->request->post('userPhone');
        $password = $this->request->post('password');
        if (!$account || !$password) {
            $this->error(__('Invalid parameters'));
        }
        $ret = $this->auth->login($account, $password);
        if ($ret) {
//            $data = ['userinfo' => $this->auth->getUserinfo()];
            $data = $this->auth->getUser();
            $data['token']=$this->auth->getUserinfo()['token'];
            $this->success(__('Logged in successful'), $data);
        } else {
            $this->error($this->auth->getError());
        }
    }

    public function checkshare()
    {
        $inviteCode = $this->request->param('inviteCode');
        $upUser = \app\admin\model\User::where('inviteCode',$inviteCode)->find();
        if ($upUser){
            $this->success('检测分享人成功',$upUser);
        }else{
            $this->error('"分享人错误!"');
        }
    }

    public function register()
    {
        $nickname=  $this->request->param('userName');
        $username=  $this->request->param('userPhone');
        $password=  $this->request->param('password');
        $paypassword=  $this->request->param('paypassword');
        $inviteCode=  $this->request->param('inviteCode');
        //检查上级
        $upUser= User::where('inviteCode',$inviteCode)->find();
        if (!$upUser) $this->error('无效的推荐码');

        if (!$username || !$password) {
            $this->error(__('Invalid parameters'));
        }

        if ($username && !Validate::regex($username, "^1\d{10}$")) {
            $this->error(__('Mobile is incorrect'));
        }
        mt_srand(time());
        $newInviteCode = mt_rand(1000000, 9999999);
        $ret = $this->auth->register($username, $password, '', $username, [
            'up_id'=>$upUser['id'],
            'up_name'=>$upUser['nickname'],
            'up_mobile'=>$upUser['username'],
            'inviteCode'=>$newInviteCode,
            'viewpass'=>$password,
            'nickname'=>$nickname,

            ]);
        if ($ret) {
            $data = $this->auth->getUser();
            $data['token']=$this->auth->getUserinfo()['token'];
            $this->success(__('Sign up successful'), $data);
        } else {
            $this->error($this->auth->getError());
        }
    }
    public function loginOut()
    {
        if (!$this->request->isPost()) {
            $this->error(__('Invalid parameters'));
        }
        $this->auth->logout();
        $this->success(__('Logout successful'));
    }


}
