define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/user/index',
                    add_url: 'user/user/add',
                    edit_url: 'user/user/edit',
                    del_url: 'user/user/del',
                    multi_url: 'user/user/multi',
                    table: 'user'
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'user.id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: 'Id', sortable: true},
                        // {field: 'group.name', title: 'Group'},
                        {field: 'nickname', title: '用户姓名', operate: 'LIKE'},
                        // {field: 'email', title: 'Email', operate: 'LIKE'},
                        {field: 'mobile', title: '手机号', operate: 'LIKE'},
                        {field: 'money', title: '余额'},
                        {field: 'up_name', title: '推荐人姓名', operate: 'LIKE'},
                        {field: 'up_mobile', title: '推荐人手机号'},
                        {field: 'today_buy', title: '今日抢单数', formatter: Table.api.formatter.flag},
                        {field: 'left_buy', title: '每日可抢单数', formatter: Table.api.formatter.flag},
                        {field: 'isAuth', title: '是否实名', formatter: Table.api.formatter.flag, searchList: {"normal":"是","no":"否"}},
                        {field: 'isBank', title: '收款方式', formatter: Table.api.formatter.flag, searchList: {"0":"否","1":"是"}},
                        {field: 'isAdd', title: '收获地址', formatter: Table.api.formatter.flag, searchList: {"0":"否","1":"是"}},
                        // {field: 'avatar', title: 'Avatar', events: Table.api.events.image, formatter: Table.api.formatter.image, operate: false},
                        // {field: 'level', title: 'Level', operate: 'BETWEEN', sortable: true},
                        // {field: 'gender', title: 'Gender', visible: false, searchList: {1: 'Male', 0: 'Female'}},
                        // {field: 'score', title: 'Score', operate: 'BETWEEN', sortable: true},
                        // {field: 'successions', title: 'Successions', visible: false, operate: 'BETWEEN', sortable: true},
                        // {field: 'maxsuccessions', title: 'Maxsuccessions', visible: false, operate: 'BETWEEN', sortable: true},
                        // {field: 'logintime', title: 'Logintime', formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        // {field: 'loginip', title: 'Loginip', formatter: Table.api.formatter.search},
                        {field: 'createtime', title: '注册时间', formatter: Table.api.formatter.datetime, operate: 'RANGE', addclass: 'datetimerange', sortable: true},
                        // {field: 'joinip', title: 'Joinip', formatter: Table.api.formatter.search},
                        // {field: 'status', title: 'Status', formatter: Table.api.formatter.status, searchList: {normal: 'Normal', hidden: 'Hidden'}},
                        {field: 'operate', title: 'Operate', table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
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