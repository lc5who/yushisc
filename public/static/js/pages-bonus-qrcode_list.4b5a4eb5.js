(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bonus-qrcode_list"],{"32b7":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("bf0f"),n("d4b5"),n("5ef2"),n("5c47"),n("0506"),n("2797"),n("dc8a");var r=a(n("2634")),u=a(n("9b1b")),o=a(n("2fdc")),i=a(n("80b1")),d=a(n("efe5")),l=a(n("39d8")),s=function(){function e(){var t=this;(0,i.default)(this,e),(0,l.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,l.default)(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,n){e&&n&&(t.requestComFun=e,t.requestComFail=n)}})}return(0,d.default)(e,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var t=(0,o.default)((0,r.default)().mark((function t(){var n,a=this,o=arguments;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},n.baseUrl=this.config.baseUrl,n.dataType=n.dataType||this.config.dataType,n.responseType=n.responseType||this.config.responseType,n.url=n.url||"",n.data=n.data||{},n.params=n.params||{},n.header=n.header||this.config.header,n.method=n.method||this.config.method,n.custom=(0,u.default)((0,u.default)({},this.config.custom),n.custom||{}),t.abrupt("return",new Promise((function(t,r){var o=!0,i={};n.complete=function(e){e.config=i,a.validateStatus(e.statusCode)?(e=a.requestComFun(e),t(e)):(e=a.requestComFail(e),r(e))};i=(0,u.default)({},a.requestBeforeFun(n,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={errMsg:e,config:t};r(a),o=!1})));var d=(0,u.default)({},i);if(o){delete d.custom;var l=e.posUrl(d.url)?d.url:d.baseUrl+d.url;if("{}"!==JSON.stringify(d.params)){var s=e.addQueryString(d.params);l+=-1===l.indexOf("?")?"?".concat(s):"&".concat(s)}d.url=l,uni.request(d)}})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,u.default)({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"POST"},n))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"PUT"},n))}},{key:"delete",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"DELETE"},n))}},{key:"connect",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"CONNECT"},n))}},{key:"head",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"HEAD"},n))}},{key:"options",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"OPTIONS"},n))}},{key:"trace",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"TRACE"},n))}},{key:"upload",value:function(t,n){var a=this,r=n.filePath,o=n.name,i=n.header,d=n.formData,l=n.custom;return new Promise((function(n,s){var c=!0,f={},v=(0,u.default)({},a.config.header);delete v["content-type"];var h={baseUrl:a.config.baseUrl,url:t,filePath:r,method:"UPLOAD",name:o,header:i||v,formData:d,custom:(0,u.default)((0,u.default)({},a.config.custom),l||{}),complete:function(e){e.config=f,200===e.statusCode?(e=a.requestComFun(e),n(e)):(e=a.requestComFail(e),s(e))}};f=(0,u.default)({},a.requestBeforeFun(h,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n={errMsg:e,config:t};s(n),c=!1})));var p=(0,u.default)({},f);c&&(delete p.custom,p.url=e.posUrl(p.url)?p.url:p.baseUrl+p.url,uni.uploadFile(p))}))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var t="";return Object.keys(e).forEach((function(n){t+=n+"="+encodeURIComponent(e[n])+"&"})),t.substring(0,t.length-1)}}]),e}();t.default=s},"34d2":function(e,t,n){"use strict";n.r(t);var a=n("38c7"),r=n("ac40");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("5e73");var o=n("828b"),i=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"49103240",null,!1,a["a"],void 0);t["default"]=i.exports},3589:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d4b5");var a=n("7ad1"),r={data:function(){return{navstyle:{title:"收款码管理",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},cardlist:[]}},onShow:function(){this.getPayEvent()},methods:{leftClick:function(){uni.reLaunch({url:"/pages/bonus/bankcard"})},getPayEvent:function(){var e=this;(0,a.getPay)(2).then((function(t){console.log(t),e.cardlist=t.data}))},addClick:function(){uni.navigateTo({url:"/pages/bonus/qrcode_add"})},detailClick:function(e){uni.navigateTo({url:"/pages/bonus/qrcode_add?id="+e.id}),uni.setStorageSync("qrcode",JSON.stringify(e))},deleteClick:function(e){var t=this;(0,a.detelePay)({id:e.id}).then((function(e){1==e.code&&(uni.showToast({title:e.msg,icon:"success",duration:2e3}),setTimeout((function(){t.getPayEvent()}),2e3))}))}}};t.default=r},"38c7":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uvNavbar:n("de6e").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),e._l(e.cardlist,(function(t,a){return n("v-uni-view",{key:a,staticClass:"bank_box addr_list"},[n("v-uni-view",{staticClass:"qrcode_title"},[e._v(e._s(1==t.type?"微信二维码":"支付宝二维码"))]),n("v-uni-view",{staticClass:"sc_xg"},[n("v-uni-view",{staticClass:"bank_btn_del",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.deleteClick(t)}}},[e._v("删除")]),n("v-uni-view",{staticClass:"bank_btn_edit",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.detailClick(t)}}},[e._v("修改")])],1),n("v-uni-view",{staticClass:"sk_qrcode"},[n("v-uni-image",{attrs:{src:t.img,mode:""}})],1)],1)})),n("v-uni-view",{staticClass:"retrieve_submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addClick.apply(void 0,arguments)}}},[n("v-uni-button",[e._v("+ 添加收款码")])],1)],2)},u=[]},"5e73":function(e,t,n){"use strict";var a=n("b1a8"),r=n.n(a);r.a},"6b39":function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".retrieve_submit[data-v-49103240]{padding-bottom:16px;margin:32px 32px 16px 32px}.retrieve_submit uni-button[data-v-49103240]{background:linear-gradient(#d66c6b,#ed6266);border-radius:26px;color:#fff}.bank_box[data-v-49103240]{box-sizing:border-box;display:flex;flex-direction:column;background:#3d4249;color:#fff;width:95%;border-radius:10px;margin:10px auto;padding:10px;word-wrap:break-word}.qrcode_title[data-v-49103240]{text-align:center;flex-direction:row;justify-content:space-between;margin-bottom:10px}.sc_xg[data-v-49103240]{width:90%;margin:auto;display:flex;justify-content:space-between;margin-bottom:10px}.bank_box uni-image[data-v-49103240]{display:block;margin:auto auto;width:213px;height:213px}.bank_btn_del[data-v-49103240]{width:36%;text-align:center;align-self:flex-end;background:red;color:#fff;padding:5px 10px;border-radius:5px;font-size:14px}.bank_btn_edit[data-v-49103240]{width:36%;text-align:center;align-self:flex-end;background:#5a0;color:#fff;padding:5px 10px;border-radius:5px;font-size:14px}",""]),e.exports=t},"7ad1":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.addAddress=function(e){return(0,r.default)({method:"POST",url:"/user/addaddress",data:e})},t.addressList=function(){return(0,r.default)({method:"GET",url:"/user/addresslist"})},t.areaList=function(){return(0,r.default)({method:"GET",url:"/user/area"})},t.base64upload=function(e){return(0,r.default)({method:"post",url:"/index/base64upload",data:e})},t.delAddress=function(e){return(0,r.default)({method:"POST",url:"/user/deladdress",data:e})},t.detelePay=function(e){return(0,r.default)({method:"POST",url:"/user/detelePay",data:e})},t.editAddress=function(e){return(0,r.default)({method:"POST",url:"/user/editaddress",data:e})},t.getPay=function(e){return(0,r.default)({method:"get",url:"/user/getPay?type=".concat(e)})},t.realname=function(e){return(0,r.default)({method:"post",url:"/user/realname",data:e})},t.setAddress=function(e){return(0,r.default)({method:"GET",url:"/user/getaddress?addressId=".concat(e)})},t.setPay=function(e){return(0,r.default)({method:"POST",url:"/user/setPay",data:e})},t.teamOrderList=function(){return(0,r.default)({method:"GET",url:"/user/getTeamOrder"})};var r=a(n("a064"))},9314:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.USE_ALIPAY=t.API_BASE_URL=void 0;t.API_BASE_URL="https://wuxueqz.com/api";t.USE_ALIPAY=!1},a064:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.request=d,n("bf0f");var r=a(n("9b1b")),u=a(n("32b7")),o=n("9314"),i=new u.default;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.request(e)}i.setConfig((function(e){return e.baseUrl=o.API_BASE_URL,e.header=(0,r.default)({},e.header),e})),i.validateStatus=function(e){return 200===e},i.interceptor.request((function(e,t){var n=uni.getStorageSync("token");return console.log(n,4444),e.header=n?(0,r.default)({Token:n},e.header):(0,r.default)({},e.header),e})),i.interceptor.response((function(e){var t=e.data;return console.log(t,111111),1!==t.code?(console.log(t,22222),uni.showToast({title:t.msg,duration:1500}),401===t.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel&&console.log("用户点击取消")}}),Promise.reject(e)):e.data}),(function(e){return console.log("response error",e),uni.showToast({title:e.data.msg,duration:1500}),Promise.reject(e)}));var l=d;t.default=l},ac40:function(e,t,n){"use strict";n.r(t);var a=n("3589"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},b1a8:function(e,t,n){var a=n("6b39");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("967d").default;r("549913c3",a,!0,{sourceMap:!1,shadowMode:!1})}}]);