<?php

namespace app\api\controller;

use app\admin\model\Banner;
use app\admin\model\Cmbank;
use app\admin\model\Goods;
use app\admin\model\Score;
use app\admin\model\Sign;
use app\common\controller\Api;
use app\common\exception\UploadException;
use app\common\library\Upload;
use think\Config;
use think\Db;
use app\admin\model\Settle;

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
        $user= $this->auth->getUser();
        $bank = Cmbank::where('typelist','bank')->find();
        $data = [
            'online_fee'=>-$user['money'],
            'bank'=>[
                'bankName'=>'0',
                'name'=>'0',
                'card'=>'0',
                'status'=>0,
            ],
            'wx'=>[
                'qrcode'=>'0',
                'status'=>0,
            ],
            'alipay'=>[
                'qrcode'=>'0',
                'status'=>0,
            ]
        ];
        if ($bank){
            $data['bank']=[
                'bankName'=>$bank['bankName'],
                'name'=>$bank['name'],
                'card'=>$bank['bankName'],
                'status'=>$bank['openswitch'],
            ];
        }
        $wx = Cmbank::where('typelist','wx')->find();
        if ($wx){
            $data['wx']=[
                'qrcode'=>$wx['qrcodeimage'],
                'status'=>$wx['openswitch'],
            ];
        }
        $alipay = Cmbank::where('typelist','alipay')->find();
        if ($alipay){
            $data['alipay']=[
                'qrcode'=>$alipay['qrcodeimage'],
                'status'=>$alipay['openswitch'],
            ];
        }
        $this->success('获取成功',$data);
    }

    public function upload()
    {
        Config::set('default_return_type', 'json');
        //必须设定cdnurl为空,否则cdnurl函数计算错误
        Config::set('upload.cdnurl', '');
        $chunkid = $this->request->post("chunkid");
        if ($chunkid) {
            if (!Config::get('upload.chunking')) {
                $this->error(__('Chunk file disabled'));
            }
            $action = $this->request->post("action");
            $chunkindex = $this->request->post("chunkindex/d");
            $chunkcount = $this->request->post("chunkcount/d");
            $filename = $this->request->post("filename");
            $method = $this->request->method(true);
            if ($action == 'merge') {
                $attachment = null;
                //合并分片文件
                try {
                    $upload = new Upload();
                    $attachment = $upload->merge($chunkid, $chunkcount, $filename);
                } catch (UploadException $e) {
                    $this->error($e->getMessage());
                }
                $this->success(__('Uploaded successful'), ['url' => $attachment->url, 'fullurl' => cdnurl($attachment->url, true)]);
            } elseif ($method == 'clean') {
                //删除冗余的分片文件
                try {
                    $upload = new Upload();
                    $upload->clean($chunkid);
                } catch (UploadException $e) {
                    $this->error($e->getMessage());
                }
                $this->success();
            } else {
                //上传分片文件
                //默认普通上传文件
                $file = $this->request->file('file');
                try {
                    $upload = new Upload($file);
                    $upload->chunk($chunkid, $chunkindex, $chunkcount);
                } catch (UploadException $e) {
                    $this->error($e->getMessage());
                }
                $this->success();
            }
        } else {
            $attachment = null;
            //默认普通上传文件
            $file = $this->request->file('file');
            try {
                $upload = new Upload($file);
                $attachment = $upload->upload();
            } catch (UploadException $e) {
                $this->error($e->getMessage());
            } catch (\Exception $e) {
                $this->error($e->getMessage());
            }

            $this->success(__('Uploaded successful'), ['url' => $attachment->url, 'fullurl' => cdnurl($attachment->url, true)]);
        }

    }
//    public function base64upload ()
//    {
//            $base64_image = $this->request->file('base64');
//            $decoded_image = base64_decode($base64_image);
//            $file_name = uniqid() . '.png';
//            $file_path = '/public/' . $file_name;
//            $this->success(__('Uploaded successful'), ['url' => $file_path]);
//
//    }

    public function base64upload(){
        $url=$this->request->post("base64");
        $decode_img = base64_decode(str_replace('data:image/png;base64', '', $url));
        $rootPath =  'uploads/images' . DIRECTORY_SEPARATOR;
        $subPath = date('Ymd') . "/";
        $savePath = $rootPath . $subPath;
        // 如果目录不存在，则创建目录
        if (!is_dir($savePath)) {
            mkdir($savePath, 0755, true);
        }

        $filename = uniqid() . '.png'; // 生成唯一文件名
        file_put_contents($savePath.$filename, $decode_img);

        $avatar_path = '/uploads/images/'.$subPath.$filename;

//        $user = $this->auth->getUser();
//        Sign::create([
//            'user_id'=>$user['id'],
//            'name'=>$user['nickname'],
//            'up_name'=>$user['up_name'],
//            'up_id'=>$user['up_id'],
//            'authimage'=>$avatar_path,
//        ]);
        $this->success('上传成功',['url'=>$avatar_path]);
    }

    public function setuserbuy()
    {
        \app\admin\model\User::where('id','>','0')->update([
            'today_buy'=>0,
            'left_buy'=>\config('site.jyrkqds')
        ]);
        echo  'ok';
    }

    public function reward()
    {
        $today = \fast\Date::unixtime('day');
        $users = \app\admin\model\User::where('today_buy','>',0)->select();
        foreach ($users as $user) {
            $amount = \app\admin\model\Order::where('buyUserId',$user['id'])->where('createtime','>',$today)->where('status','>=','3')->sum('price');
            if ($amount>=70000){
                \app\common\model\User::money(288,$user['id'],'抢购金额超70000奖励');
                continue;
            }
            if ($amount>=50000){
                \app\common\model\User::money(188,$user['id'],'抢购金额超50000奖励');
                continue;
            }
            if ($amount>=20000){
                \app\common\model\User::money(88,$user['id'],'抢购金额超20000奖励');
                continue;
            }
        }
    }
    public function gain()
    {
        $today = \fast\Date::unixtime('day');
        $orders = \app\admin\model\Order::where('createtime','>',$today)->where('status','4')->select();
        $w =date('w');
        foreach ($orders as $k=>$order){
            //确认订单之后做的事
            //1.新增商品,提价
            $buyer = \app\admin\model\User::get($order['buyUserId']);
            $upUser = \app\admin\model\User::get($buyer['up_id']);
            if ($upUser){
                \app\common\model\User::score($order['price']*0.004,$upUser['id'],'佣金奖励');
                Db::name('commission')->where('user_id',$upUser['id'])->where('sub_id',$buyer['id'])->setInc('money',$order['price']*0.004);
            }


            $goods = Goods::get($order['goodsId']);
            if($w==5){
                $online_fee= $goods['goodsPrice']*config('site.zwsjf')/100;
            }
            else{
                $online_fee=$goods['goodsPrice']*config('site.ydssjf')/100;
            }
            $newGoods = [
                'goodsName'=>$goods['goodsName'],
                'goodsimage'=>$goods['goodsimage'],
                'goodsSn'=>getSn(),
                'goodsPrice'=>$goods['goodsPrice']*1.05,
                'seller_id'=>$goods['buyer_id'],
                'mobile'=>$goods['buymobile'],
                'username'=>$goods['buyusername'],
                'status'=>'1',
                'onlineStatus'=>0,
                'onlinePrice'=>$online_fee,
            ];
            Goods::create($newGoods);
        }

    }
    public function settleCount()
    {
        $today = \fast\Date::unixtime('day');
        $w =date('w');

        $settles= Settle::where('createtime','>',$today)->select();
        foreach ($settles as $settle) {
            $data=[
                'online_fee'=>0,
                'reward_fee'=>0,
                'real_fee'=>0,
            ];
            if ($settle['buy_amount']>0){
                if($w==5){
                    
                    $data['online_fee']=floor($settle['buy_amount']*config('site.zwsjf')/100);
                }
                else{
                    $data['online_fee']=floor($settle['buy_amount']*config('site.ydssjf')/100);
                }
                if ($settle['buy_amount']>=20000){
                    $data['reward_fee']=88;
                }
                if ($settle['buy_amount']>=50000){
                    $data['reward_fee']=188;
//                    \app\common\model\User::money(288,$settle['user_id'],'抢购金额超70000奖励');
                }
                if ($settle['buy_amount']>=70000){
                    $data['reward_fee']=288;
                }
                $data['real_fee']=$data['online_fee']-$data['reward_fee'];
                $settle->save($data);

                //
                if ($data['online_fee']>0) \app\common\model\User::money(-$data['online_fee'],$settle['user_id'],'扣除上架费');
                if ($data['reward_fee']>0) \app\common\model\User::money($data['reward_fee'],$settle['user_id'],'奖励上架费');
            }

        }

    }

    public function setScore()
    {
        $today = \fast\Date::unixtime('day');
        $settles= Settle::where('createtime','>=',$today)->select();
        foreach ($settles as $settle) {
            if ($settle['buy_amount']>0){
                $user = \app\admin\model\User::get($settle['user_id']);

                $upUser = \app\admin\model\User::get($user['up_id']);
                if ($upUser){
                    $yj = floor($settle['buy_amount']*0.004);
                    \app\common\model\User::score($yj,$upUser['id'],'佣金奖励');
                    Db::name('commission')->where('user_id',$upUser['id'])->where('sub_id',$user['id'])->setInc('money',$settle['buy_amount']*0.004);
                    Score::create([
                        'user_id'=>$upUser['id'],
                        'mobile'=>$upUser['username'],
                        'name'=>$upUser['nickname'],
                        'score'=>$yj,
                    ]);
                }
            }
        }
    }

    public function ordertogood()
    {
        $orders = \app\admin\model\Order::all();
        foreach ($orders as $order) {
            $goods = Goods::get($order['goodsId']);
            $newGoods = [
                'goodsName'=>$goods['goodsName'],
                'goodsimage'=>$goods['goodsimage'],
                'goodsSn'=>getSn(),
                'goodsPrice'=>$goods['goodsPrice']*1.05,
                'seller_id'=>$goods['buyer_id'],
                'mobile'=>$goods['buymobile'],
                'username'=>$goods['buyusername'],
                'status'=>'0',
                'onlineStatus'=>1,
//                'onlinePrice'=>$online_fee,
            ];
            Goods::create($newGoods);
        }
    }
}
