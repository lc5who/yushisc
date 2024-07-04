<?php

namespace app\admin\model;

use think\Model;


class Cmbank extends Model
{

    

    

    // 表名
    protected $name = 'cmbank';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [
        'typelist_text'
    ];
    

    
    public function getTypelistList()
    {
        return ['wx' => __('Wx'), 'alipay' => __('Alipay'), 'bank' => __('Bank')];
    }


    public function getTypelistTextAttr($value, $data)
    {
        $value = $value ? $value : (isset($data['typelist']) ? $data['typelist'] : '');
        $list = $this->getTypelistList();
        return isset($list[$value]) ? $list[$value] : '';
    }




}
