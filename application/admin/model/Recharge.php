<?php

namespace app\admin\model;

use think\Model;


class Recharge extends Model
{

    

    

    // 表名
    protected $name = 'recharge';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'pmdata_text',
        'status_text'
    ];
    

    
    public function getPmdataList()
    {
        return ['后台充值' => __('后台充值'), '银行卡' => __('银行卡'), '微信' => __('微信'), '支付宝' => __('支付宝')];
    }

    public function getStatusList()
    {
        return ['0' => __('Status 0'), '1' => __('Status 1'), '2' => __('Status 2')];
    }


    public function getPmdataTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['pmdata']) ? $data['pmdata'] : '');
        $list = $this->getPmdataList();
        return isset($list[$value]) ? $list[$value] : '';
    }


    public function getStatusTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['status']) ? $data['status'] : '');
        $list = $this->getStatusList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
