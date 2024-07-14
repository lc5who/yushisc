define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'order/index' + location.search,
                    add_url: 'order/add',
                    edit_url: 'order/edit',
                    del_url: 'order/del',
                    multi_url: 'order/multi',
                    import_url: 'order/import',
                    table: 'order',
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
                        {field: 'goods.goodsimage', title: '商品图片', formatter: Table.api.formatter.image},
                        {field: 'orderSn', title: __('Ordersn'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'goods.goodsName', title: '商品金额'},
                        // {field: 'buyUserId', title: __('Buyuserid')},
                        // {field: 'goodsId', title: __('Goodsid')},
                        // {field: 'payid', title: __('Payid'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'price', title: '商品价格'},
                        {field: 'goods.username', title: '卖方姓名'},
                        {field: 'goods.mobile', title: '卖方电话'},
                        {field: 'goods.buyusername', title: '买方姓名'},
                        {field: 'goods.buymobile', title: '买方电话'},
                        // {field: 'isdk', title: __('Isdk'), formatter: Table.api.formatter.label, searchList: {"0":"否","1":"是"}},
                        {field: 'status', title: __('Status'), searchList: {"0":'等待确认','1':'交易完成'}, formatter: Table.api.formatter.status},
                        // {field: 'draw', title: __('Draw'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'onlinePrice', title: '上架费'},
                        // {field: 'num', title: __('Num')},
                        // {field: 'sumPrice', title: __('Sumprice'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'payMoney', title: __('Paymoney'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'payMoney', title: '支付金额'},
                        // {field: 'payPic', title: '打款凭证',formatter: Table.api.formatter.image}
                        // {field: 'type', title: __('Type')},
                        // {field: 'dkinfo', title: __('Dkinfo'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'payTime', title: __('Paytime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'endTime', title: __('Endtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
            $(document).on("click", ".btn-handle", function () {
                Layer.confirm('确认今日订单已完成？',function (){
                    $.ajax({
                        url: '/master.php/order/handle',
                        type: 'get',
                        success:function (ret){
                            Toastr.success('操作成功')
                            table.bootstrapTable('refresh', {});
                        }
                    })
                    Layer.closeAll()
                })
            })
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
