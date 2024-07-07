<?php

namespace app\admin\model;

use think\Model;


class Sign extends Model
{

    

    

    // 表名
    protected $name = 'sign';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = false;
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'status_text'
    ];
    

    
    public function getStatusList()
    {
        return ['0' => __('Status 0'), '1' => __('Status 1'), '2' => __('Status 2')];
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }
    public function setStatusAttr($value,$data)
    {
        if ($value=='1'){
            User::where('id',$data['user_id'])->update(['isAuth'=>'normal']);
        }
        return $value;
    }
}
