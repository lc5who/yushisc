define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'recharge/index' + location.search,
                    add_url: 'recharge/add',
                    edit_url: 'recharge/edit',
                    del_url: 'recharge/del',
                    multi_url: 'recharge/multi',
                    import_url: 'recharge/import',
                    approve_url: 'recharge/check?state=1',
                    refuse_url: 'recharge/check?state=2',
                    table: 'recharge',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'realname', title: __('Realname'), operate: 'LIKE'},
                        {field: 'username', title: __('Username')},
                        {field: 'money', title: __('Money'), operate:'BETWEEN'},
                        {field: 'pmdata', title: __('Pmdata'), searchList: {"后台充值":__('后台充值'),"银行卡":__('银行卡'),"微信":__('微信'),"支付宝":__('支付宝')}, formatter: Table.api.formatter.normal},
                        {field: 'czpzimage', title: __('Czpzimage'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'status', title: __('Status'), searchList: {"0":__('Status 0'),"1":__('Status 1'),"2":__('Status 2')}, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'mark', title: __('Mark'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'buttons', title: __('Operate'), table: table, events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'approve',
                                    title: 'approve',
                                    text:'通过',
                                    classname: 'btn btn-xs btn-success btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'recharge/check?state=1', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认通过？',
                                    success: function () {
                                        $(".btn-refresh").trigger("click");
                                    },
                                    visible:function (row){
                                        if (row.status!='0'){
                                            return false
                                        }else {
                                            return  true
                                        }
                                        return  true
                                    }
                                },
                                {
                                    name: 'refuse',
                                    title: 'refuse',
                                    text:'拒绝',
                                    classname: 'btn btn-xs btn-danger btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'recharge/check?state=2', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认拒绝?',
                                    success: function () {
                                        $(".btn-refresh").trigger("click");
                                    },
                                    visible:function (row){
                                        if (row.status!='0'){
                                            return false
                                        }else {
                                            return  true
                                        }
                                        return  true
                                    }
                                }
                            ],
                            formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
