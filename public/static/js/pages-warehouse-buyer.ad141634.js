(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-warehouse-buyer"],{"09a5":function(t,e,a){"use strict";a.r(e);var n=a("e58e"),i=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},"0ea6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticStyle:{"font-size":"13px",color:"rgb(119, 119, 119)","text-align":"center","padding-top":"50%"}},[this._v("没有相关订单")])},i=[]},"1bcf":function(t,e,a){"use strict";a.r(e);var n=a("0ea6"),i=a("09a5");for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);var s=a("828b"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"e8618e06",null,!1,n["a"],void 0);e["default"]=r.exports},2991:function(t,e,a){"use strict";a.r(e);var n=a("5057b"),i=a("a0bd");for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);a("dd81");var s=a("828b"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"7a6f81f8",null,!1,n["a"],void 0);e["default"]=r.exports},"32b7":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("bf0f"),a("d4b5"),a("5ef2"),a("5c47"),a("0506"),a("2797"),a("dc8a");var i=n(a("2634")),u=n(a("9b1b")),s=n(a("2fdc")),r=n(a("80b1")),o=n(a("efe5")),l=n(a("39d8")),c=function(){function t(){var e=this;(0,r.default)(this,t),(0,l.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,l.default)(this,"interceptor",{request:function(t){t&&(e.requestBeforeFun=t)},response:function(t,a){t&&a&&(e.requestComFun=t,e.requestComFail=a)}})}return(0,o.default)(t,[{key:"requestBeforeFun",value:function(t){return t}},{key:"requestComFun",value:function(t){return t}},{key:"requestComFail",value:function(t){return t}},{key:"validateStatus",value:function(t){return 200===t}},{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"request",value:function(){var e=(0,s.default)((0,i.default)().mark((function e(){var a,n=this,s=arguments;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:{},a.baseUrl=this.config.baseUrl,a.dataType=a.dataType||this.config.dataType,a.responseType=a.responseType||this.config.responseType,a.url=a.url||"",a.data=a.data||{},a.params=a.params||{},a.header=a.header||this.config.header,a.method=a.method||this.config.method,a.custom=(0,u.default)((0,u.default)({},this.config.custom),a.custom||{}),e.abrupt("return",new Promise((function(e,i){var s=!0,r={};a.complete=function(t){t.config=r,n.validateStatus(t.statusCode)?(t=n.requestComFun(t),e(t)):(t=n.requestComFail(t),i(t))};r=(0,u.default)({},n.requestBeforeFun(a,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={errMsg:t,config:e};i(n),s=!1})));var o=(0,u.default)({},r);if(s){delete o.custom;var l=t.posUrl(o.url)?o.url:o.baseUrl+o.url;if("{}"!==JSON.stringify(o.params)){var c=t.addQueryString(o.params);l+=-1===l.indexOf("?")?"?".concat(c):"&".concat(c)}o.url=l,uni.request(o)}})));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,u.default)({url:t,method:"GET"},e))}},{key:"post",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"POST"},a))}},{key:"put",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"PUT"},a))}},{key:"delete",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"DELETE"},a))}},{key:"connect",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"CONNECT"},a))}},{key:"head",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"HEAD"},a))}},{key:"options",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"OPTIONS"},a))}},{key:"trace",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:t,data:e,method:"TRACE"},a))}},{key:"upload",value:function(e,a){var n=this,i=a.filePath,s=a.name,r=a.header,o=a.formData,l=a.custom;return new Promise((function(a,c){var d=!0,f={},v=(0,u.default)({},n.config.header);delete v["content-type"];var p={baseUrl:n.config.baseUrl,url:e,filePath:i,method:"UPLOAD",name:s,header:r||v,formData:o,custom:(0,u.default)((0,u.default)({},n.config.custom),l||{}),complete:function(t){t.config=f,200===t.statusCode?(t=n.requestComFun(t),a(t)):(t=n.requestComFail(t),c(t))}};f=(0,u.default)({},n.requestBeforeFun(p,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,a={errMsg:t,config:e};c(a),d=!1})));var h=(0,u.default)({},f);d&&(delete h.custom,h.url=t.posUrl(h.url)?h.url:h.baseUrl+h.url,uni.uploadFile(h))}))}}],[{key:"posUrl",value:function(t){return/(http|https):\/\/([\w.]+\/?)\S*/.test(t)}},{key:"addQueryString",value:function(t){var e="";return Object.keys(t).forEach((function(a){e+=a+"="+encodeURIComponent(t[a])+"&"})),e.substring(0,e.length-1)}}]),t}();e.default=c},"5057b":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return n}));var n={uvNavbar:a("de6e").default,uvTabs:a("2ff5").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uv-navbar",{attrs:{leftIconColor:t.navstyle.txtColor,titleStyle:t.titleStyle,title:t.navstyle.title,leftIcon:t.navstyle.leftIcon,bgColor:t.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"order_tab"},[a("uv-tabs",{attrs:{lineWidth:"32",lineHeight:"2",lineColor:"#f56c6c",activeStyle:{color:"#303133"},itemStyle:"flex:1;font-size:16px",list:t.list},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"content"},[t._l(t.buyList,(function(e,n){return 1==t.status||4==t.status?a("v-uni-view",{key:n,staticClass:"goods"},[a("v-uni-view",{staticClass:"jzn"},[a("v-uni-view",{staticClass:"jzn_fu"},[t._v(t._s(e.status_text))]),a("v-uni-view",{staticClass:"jzn_fu"},[t._v(t._s(e.goodsUsellname))])],1),a("v-uni-view",{staticClass:"caiy"},[t._v("订单编号："),a("v-uni-text",[t._v(t._s(e.orderSn))])],1),a("v-uni-view",{staticClass:"pcy"},[a("v-uni-view",{staticClass:"pcy_tu"},[a("v-uni-image",{attrs:{src:e.goods.goodsimage,mode:""}})],1),a("v-uni-view",{staticClass:"pcy_ww"},[a("v-uni-view",{staticClass:"pcy_a"},[t._v(t._s(e.goods.goodsSn))]),a("v-uni-view",{staticClass:"pcy_a"},[t._v(t._s(e.goods.goodsName))]),a("v-uni-view",{staticClass:"qianwang"},[a("v-uni-view",{staticClass:"pcy_b"},[t._v("价格"),a("v-uni-text",[t._v(t._s(e.price))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"qianwang"},[a("v-uni-view",{staticClass:"pcy_b"})],1)],1):t._e()})),t._l(t.buyList,(function(e,n){return 2==t.status||3==t.status?a("v-uni-view",{key:n,staticClass:"goods"},[a("v-uni-view",{staticClass:"pcy"},[a("v-uni-view",{staticClass:"pcy_ww"},[a("v-uni-view",{staticClass:"pcy_a"},[t._v("支付订单Id： "+t._s(e.id))]),a("v-uni-view",{staticClass:"pcy_a"},[t._v("归属人： "+t._s(e.seller.nickname))]),a("v-uni-view",{staticClass:"pcy_a"},[t._v("金额："+t._s(e.money))]),a("v-uni-view",{staticClass:"qianwang"},[a("v-uni-view",{staticClass:"pcy_b"},[t._v("订单状态："),a("v-uni-text",[t._v(t._s(0==e.status?"未支付":"已打款"))])],1)],1)],1),a("v-uni-view",{staticClass:"pcy_tu1"},[0==e.status?a("v-uni-view",{staticClass:"pcy_a",staticStyle:{margin:"0"}},[a("v-uni-button",{staticClass:"playBtn",attrs:{click:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.buyerClick(e,n)}}},[t._v("前往打款")])],1):t._e()],1)],1)],1):t._e()}))],2),0==t.buyList.length?a("empty-vue"):t._e()],1)},u=[]},6462:function(t,e,a){var n=a("b86e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("db095526",n,!0,{sourceMap:!1,shadowMode:!1})},9314:function(t,e,a){"use strict";a("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.USE_ALIPAY=e.API_BASE_URL=void 0;e.API_BASE_URL="https://szx.wuxueqz.com/api";e.USE_ALIPAY=!1},"966d":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.confirmDetail=function(t){return(0,i.default)({method:"POST",url:"/order/confirmDetail",params:t})},e.confirmOrder=function(t){return(0,i.default)({method:"POST",url:"/order/confirmOrder",params:t})},e.fetchBuyOrderList=function(t){return(0,i.default)({method:"GET",url:"/order/buyOrderList",params:t})},e.fetchsellOrderList=function(t){return(0,i.default)({method:"GET",url:"/order/sellOrderList",params:t})},e.getPayInfo=function(t){return(0,i.default)({method:"POST",url:"/order/payInfo",params:t})},e.submitPay=function(t){return(0,i.default)({method:"POST",url:"/order/pay",params:t})};var i=n(a("a064"))},a064:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.request=o,a("bf0f");var i=n(a("9b1b")),u=n(a("32b7")),s=a("9314"),r=new u.default;function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.request(t)}r.setConfig((function(t){return t.baseUrl=s.API_BASE_URL,t.header=(0,i.default)({},t.header),t})),r.validateStatus=function(t){return 200===t},r.interceptor.request((function(t,e){var a=uni.getStorageSync("token");return console.log(a,4444),t.header=a?(0,i.default)({Token:a},t.header):(0,i.default)({},t.header),t})),r.interceptor.response((function(t){var e=t.data;return console.log(e,111111),1!==e.code?(console.log(e,22222),uni.showToast({title:e.msg,duration:1500}),401===e.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(t){t.confirm?uni.navigateTo({url:"/pages/user/login"}):t.cancel&&console.log("用户点击取消")}}),Promise.reject(t)):t.data}),(function(t){return console.log("response error",t),uni.showToast({title:t.data.msg,duration:1500}),Promise.reject(t)}));var l=o;e.default=l},a0bd:function(t,e,a){"use strict";a.r(e);var n=a("c232"),i=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);e["default"]=i.a},b86e:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,".page[data-v-7a6f81f8]{width:100%;height:100%;background-color:#fafafa}.order_tab[data-v-7a6f81f8]{display:flex;justify-content:space-between;padding:8px 0;font-size:16px;line-height:35px}.uv-tabs[data-v-7a6f81f8]{width:100%!important}.goods[data-v-7a6f81f8]{width:100%;background-color:#fff;box-shadow:2px 2px 4px #ccc;margin-bottom:5px;padding-bottom:15px}.jzn[data-v-7a6f81f8]{width:90%;margin:auto;padding-top:10px;display:flex;justify-content:space-between}.jzn_fu[data-v-7a6f81f8]{color:#ea4335}.caiy[data-v-7a6f81f8]{font-size:14px;color:#80817f;padding-left:15px}.pcy[data-v-7a6f81f8]{padding:3px 10px 1px 10px;display:flex;justify-content:space-between}.pcy_tu[data-v-7a6f81f8]{width:37%;padding:10px}.pcy_tu uni-image[data-v-7a6f81f8]{width:100%;height:104px;border-radius:10px}.pcy_tu1[data-v-7a6f81f8]{width:37%;padding:10px;display:flex;justify-content:center;align-items:center}.pcy_ww[data-v-7a6f81f8]{width:64%;padding:8px;font-size:14px}.pcy_a[data-v-7a6f81f8]{margin:auto;font-size:15px;font-weight:700;margin-bottom:10px}.qianwang[data-v-7a6f81f8]{height:31px;align-items:center;display:flex;justify-content:space-between}.pcy_b[data-v-7a6f81f8]{font-size:15px;color:#ff4848;font-weight:700}.sjth[data-v-7a6f81f8]{width:100%;display:flex;justify-content:flex-end;height:20px;padding:0 10px}.playBtn[data-v-7a6f81f8]{background-color:#dadada;float:right;font-size:13px}",""]),t.exports=e},c232:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("1bcf")),u=a("966d"),s={components:{emptyVue:i.default},data:function(){return{navstyle:{title:"买方仓库",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},list:[{state:4,name:"我的仓库"},{state:1,name:"买入订单"},{state:2,name:"待付款"},{state:3,name:"已付款"}],page:1,limit:50,status:4,buyList:[]}},onLoad:function(t){this.status=t.state},methods:{leftClick:function(){uni.reLaunch({url:"/pages/index/user"})},buyerClick:function(t,e){0==t.status&&uni.navigateTo({url:"/pages/warehouse/buyerDetail?orderId="+t.id})},tabClick:function(t){console.log("item",t),this.status=t.state,this.loadData()},loadData:function(){var t=this;this.buyList=[],(0,u.fetchBuyOrderList)({page:this.page,limit:this.limit,status:this.status}).then((function(e){console.log(e,4444),console.log(t.status),1==t.status||4==t.status?t.buyList=e.data.data:t.buyList=e.data,console.log(t.buyList,33333)}))}}};e.default=s},dd81:function(t,e,a){"use strict";var n=a("6462"),i=a.n(n);i.a},e58e:function(t,e){}}]);