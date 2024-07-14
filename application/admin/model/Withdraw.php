<?php

namespace app\admin\model;

use think\Model;


class Withdraw extends Model
{

    

    

    // 表名
    protected $name = 'withdraw';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'checkTime_text'
    ];
    

    



    public function getChecktimeTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['checkTime']) ? $data['checkTime'] : '');
        return is_numeric($value) ? date("Y-m-d H:i:s", $value) : $value;
    }

    protected function setChecktimeAttr($value)
    {
        return $value === '' ? null : ($value && !is_numeric($value) ? strtotime($value) : $value);
    }

    public function Bankinfo()
    {
        return $this->belongsTo('Bankinfo','payid');
    }
    public function User()
    {
        return $this->belongsTo('User','userId');
    }
}
