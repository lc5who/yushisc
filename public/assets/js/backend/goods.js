define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'goods/index' + location.search,
                    add_url: 'goods/add',
                    edit_url: 'goods/edit',
                    del_url: 'goods/del',
                    multi_url: 'goods/multi',
                    import_url: 'goods/import',
                    offline_url:'goods/offline',
                    online_url:'goods/online',
                    clear_url:'goods/clear',
                    table: 'goods',
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
                        {field: 'goodsimage', title: __('Goodsimage'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'goodsSn', title: __('Goodssn'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'goodsName', title: __('Goodsname'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'orderSn', title: __('Ordersn'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'goodsPrice', title: __('Goodsprice')},
                         {field: 'onlinePrice', title: '上架费'},
                         {field: 'isSjf', title: '扣除上架费',searchList: {"0":'未收取',"1":'已收取'}, formatter: Table.api.formatter.label},
                        {field: 'onlinetime', title: __('Onlinetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'mobile', title: __('Mobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'username', title: __('Username'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'buymobile', title: __('Buymobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'buyusername', title: __('Buyusername'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'status', title: __('Status'), searchList: {"0":'待委卖',"1":'已委卖',"2":'交易完成'}, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'onlineStatus', title: __('Onlinestatus'), searchList: {"0":'已下架',"1":'已上架'}, formatter: Table.api.formatter.status},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                        {field: 'buttons', title: __('Operate'), table: table, events: Table.api.events.buttons,
                            buttons: [
                                {
                                    name: 'offline',
                                    title: 'offline',
                                    text:'下架商品',
                                    classname: 'btn btn-xs btn-danger btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'goods/offline', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认下架',
                                    success: function () {
                                        $(".btn-refresh").trigger("click");
                                    }
                                },
                                {
                                    name: 'online',
                                    title: 'online',
                                    text:'上架商品',
                                    classname: 'btn btn-xs btn-success btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'goods/online', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认上架',
                                    success: function () {
                                        $(".btn-refresh").trigger("click");
                                    }
                                },
                                {
                                    name: 'clear',
                                    title: 'clear',
                                    text:'清除买家信息',
                                    classname: 'btn btn-xs btn-info btn-ajax',
                                    icon: 'fa fa-list',
                                    url: 'goods/clear', //parent.$(".btn-refresh").trigger("click");
                                    confirm: '确认清除？',
                                    success: function () {
                                        $(".btn-refresh").trigger("click");
                                    }
                                }
                            ],
                            formatter: Table.api.formatter.buttons}
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
