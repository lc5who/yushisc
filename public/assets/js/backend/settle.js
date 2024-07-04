define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'settle/index' + location.search,
                    add_url: 'settle/add',
                    edit_url: 'settle/edit',
                    del_url: 'settle/del',
                    multi_url: 'settle/multi',
                    import_url: 'settle/import',
                    settle_url: 'settle/count',
                    table: 'settle',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'user_mobile', title: __('User_mobile'), operate: 'LIKE'},
                        {field: 'user_name', title: __('User_name'), operate: 'LIKE'},
                        {field: 'buy_amount', title: __('Buy_amount'), operate:'BETWEEN'},
                        {field: 'online_amount', title: __('Online_amount'), operate:'BETWEEN'},
                        {field: 'pay', title: __('Pay'), operate:'BETWEEN'},
                        {field: 'income', title: __('Income'), operate:'BETWEEN'},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);


            $(document).on("click", ".btn-start,.btn-pause", function () {
                //在table外不可以使用添加.btn-change的方法
                //只能自己调用Talbe.api.multi实现
                //如果操作全部则ids可以置为空
                // var ids = Table.api.selectedids(table);
                // Table.api.multi("changestatus", ids.join(","), table, this);
                //$('.btn-refresh').click()
                console.log(121111)
            });
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        settle: function () {
            Controller.api.bindevent();
            $('.btn-refresh').click()
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
