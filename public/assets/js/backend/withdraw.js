define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'withdraw/index' + location.search,
                    add_url: 'withdraw/add',
                    edit_url: 'withdraw/edit',
                    del_url: 'withdraw/del',
                    multi_url: 'withdraw/multi',
                    import_url: 'withdraw/import',
                    table: 'withdraw',
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
                        // {field: 'userId', title: __('Userid')},
                        {field: 'user.nickname', title: '用户姓名'},
                        {field: 'user.username', title: '用户手机'},
                        {field: 'orderNo', title: __('Orderno'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'currency', title: __('Currency'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'payid', title: __('Payid')},
                        {field: 'money', title: __('Money'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'commission', title: __('Commission'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'status', title: __('Status'),searchList: {"0":'待审核',"1":'通过',"2":'拒绝'}, formatter: Table.api.formatter.status},
                        {field: 'bankinfo.type', title: '提现渠道', searchList: {"0":'银行卡',"1":'微信',"2":'支付宝'}, formatter: Table.api.formatter.flag},

                        // {field: 'bankinfo.username', title: __('Username'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'bankinfo.name', title: __('Name'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'bankinfo.mobile', title: __('Mobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'bankinfo.bankName', title: __('Bankname'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'bankinfo.cardNum', title: __('Cardnum'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'bankinfo.img', title: __('Img'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.image},

                        // {field: 'bankinfo.type_text', title: __('Type_text'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'bankinfo.status_text', title: __('Status_text'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                                               {field: 'checkTime', title: __('Checktime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                                                {field: 'createtime', title: '申请时间', operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.buttons,
                            buttons: [
                                {
                                    name: 'pass',
                                    title: 'pass',
                                    text:'通过',
                                    classname: 'btn btn-xs btn-success btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'withdraw/pass', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认通过？',
                                    success: function () {
                                        table.bootstrapTable('refresh', {});
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
                                    name: 'reject',
                                    title: 'reject',
                                    text:'拒绝',
                                    classname: 'btn btn-xs btn-danger btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'withdraw/reject', //parent.$(".btn-refresh").trigger("click");
                                    success: function () {
                                        table.bootstrapTable('refresh', {});
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
                               ],formatter: Table.api.formatter.buttons}
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
