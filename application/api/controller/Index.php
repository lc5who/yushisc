<?php

namespace app\api\controller;

use app\admin\model\Banner;
use app\admin\model\Cmbank;
use app\admin\model\Sign;
use app\common\controller\Api;
use app\common\exception\UploadException;
use app\common\library\Upload;
use think\Config;

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
        $this->success('上传成功',[$avatar_path]);
    }
}
