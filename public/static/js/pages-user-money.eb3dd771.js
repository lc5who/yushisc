(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-money"],{"32b7":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("bf0f"),n("d4b5"),n("5ef2"),n("5c47"),n("0506"),n("2797"),n("dc8a");var r=a(n("2634")),u=a(n("9b1b")),i=a(n("2fdc")),o=a(n("80b1")),l=a(n("efe5")),s=a(n("39d8")),d=function(){function e(){var t=this;(0,o.default)(this,e),(0,s.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,s.default)(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,n){e&&n&&(t.requestComFun=e,t.requestComFail=n)}})}return(0,l.default)(e,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var t=(0,i.default)((0,r.default)().mark((function t(){var n,a=this,i=arguments;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:{},n.baseUrl=this.config.baseUrl,n.dataType=n.dataType||this.config.dataType,n.responseType=n.responseType||this.config.responseType,n.url=n.url||"",n.data=n.data||{},n.params=n.params||{},n.header=n.header||this.config.header,n.method=n.method||this.config.method,n.custom=(0,u.default)((0,u.default)({},this.config.custom),n.custom||{}),t.abrupt("return",new Promise((function(t,r){var i=!0,o={};n.complete=function(e){e.config=o,a.validateStatus(e.statusCode)?(e=a.requestComFun(e),t(e)):(e=a.requestComFail(e),r(e))};o=(0,u.default)({},a.requestBeforeFun(n,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={errMsg:e,config:t};r(a),i=!1})));var l=(0,u.default)({},o);if(i){delete l.custom;var s=e.posUrl(l.url)?l.url:l.baseUrl+l.url;if("{}"!==JSON.stringify(l.params)){var d=e.addQueryString(l.params);s+=-1===s.indexOf("?")?"?".concat(d):"&".concat(d)}l.url=s,uni.request(l)}})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,u.default)({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"POST"},n))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"PUT"},n))}},{key:"delete",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"DELETE"},n))}},{key:"connect",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"CONNECT"},n))}},{key:"head",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"HEAD"},n))}},{key:"options",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"OPTIONS"},n))}},{key:"trace",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"TRACE"},n))}},{key:"upload",value:function(t,n){var a=this,r=n.filePath,i=n.name,o=n.header,l=n.formData,s=n.custom;return new Promise((function(n,d){var c=!0,f={},v=(0,u.default)({},a.config.header);delete v["content-type"];var h={baseUrl:a.config.baseUrl,url:t,filePath:r,method:"UPLOAD",name:i,header:o||v,formData:l,custom:(0,u.default)((0,u.default)({},a.config.custom),s||{}),complete:function(e){e.config=f,200===e.statusCode?(e=a.requestComFun(e),n(e)):(e=a.requestComFail(e),d(e))}};f=(0,u.default)({},a.requestBeforeFun(h,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n={errMsg:e,config:t};d(n),c=!1})));var g=(0,u.default)({},f);c&&(delete g.custom,g.url=e.posUrl(g.url)?g.url:g.baseUrl+g.url,uni.uploadFile(g))}))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var t="";return Object.keys(e).forEach((function(n){t+=n+"="+encodeURIComponent(e[n])+"&"})),t.substring(0,t.length-1)}}]),e}();t.default=d},"6a67":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uvNavbar:n("de6e").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"management"},[n("v-uni-view",{staticClass:"balance"},[n("v-uni-view",{staticClass:"ba_use"},[e._v("余额"),n("v-uni-view",{staticClass:"uni-image"})],1),n("v-uni-view",{staticClass:"ba_money"},[n("v-uni-text",{staticStyle:{"font-size":"12px"}},[e._v("余额:")]),n("v-uni-text",{staticStyle:{"font-size":"18px",display:"inline-block"}},[e._v(e._s(e.userInfo.money))])],1),n("v-uni-view",{staticClass:"ba_money"},[n("v-uni-text",{staticStyle:{"font-size":"12px"}},[e._v("佣金:")]),n("v-uni-text",{staticStyle:{"font-size":"18px",display:"inline-block"}},[e._v(e._s(e.userInfo.score))])],1)],1),n("v-uni-view",{staticClass:"ma_box"},e._l(e.moneyList,(function(t,a){return n("v-uni-view",{key:a,staticClass:"boxfi",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.moneyClick(t)}}},[n("v-uni-image",{staticClass:"uni-image",attrs:{src:t.src,mode:t.mode}}),e._v(e._s(t.title))],1)})),1)],1)],1)},u=[]},"71c0":function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("7d0c"),r={data:function(){return{navstyle:{title:"我的钱包",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},userInfo:{},txswitch:"",moneyList:[{mode:"scaleToFill",src:"../../static/images/ass_chong.png",title:"充值",url:"/pages/user/moneyRecharge"},{mode:"scaleToFill",src:"../../static/images/zhuan_z.png",title:"转账",url:"/pages/user/transfer"},{mode:"scaleToFill",src:"../../static/images/ass_tixian.png",title:"提现",url:"/pages/user/extract"}]}},onLoad:function(){var e=this;(0,a.memberInfo)().then((function(t){e.userInfo=t.data,console.log(e.userInfo)})),(0,a.qgDetail)().then((function(t){e.txswitch=t.data.txswitch,console.log(e.txswitch)}))},methods:{leftClick:function(){uni.reLaunch({url:"/pages/index/user"})},moneyClick:function(e){"转账"!=e.title&&(1==this.txswitch||"提现"!=e.title)?uni.navigateTo({url:e.url}):uni.showToast({title:"未开放",duration:2e3})}}};t.default=r},"7b13":function(e,t,n){"use strict";n.r(t);var a=n("71c0"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},"7d0c":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.caplogDetail=function(e){return(0,r.default)({method:"get",url:"/user/caplogdetail",data:e})},t.checkShare=function(e){return(0,r.default)({method:"POST",url:"/login/checkshare",data:e})},t.draw=function(e){return(0,r.default)({method:"POST",url:"/user/draw",data:e})},t.drawInfo=function(){return(0,r.default)({method:"GET",url:"/user/drawInfo"})},t.drawList=function(){return(0,r.default)({method:"GET",url:"/user/drawList"})},t.loginOut=function(){return(0,r.default)({method:"POST",url:"/login/loginOut"})},t.memberInfo=function(){return(0,r.default)({method:"GET",url:"/user/userInfo"})},t.memberLogin=function(e){return(0,r.default)({method:"POST",url:"/login/login",data:e})},t.qgDetail=function(){return(0,r.default)({method:"GET",url:"/qg/index"})},t.rechargeData=function(e){return(0,r.default)({method:"POST",url:"/user/recharge",data:e})},t.rechargeMethod=function(e){return(0,r.default)({method:"POST",url:"/index/rechargeMethod",data:e})},t.registerUser=function(e){return(0,r.default)({method:"POST",url:"/login/register",data:e})},t.retrievePass=function(e){return(0,r.default)({method:"POST",url:"/user/retrieve",data:e})},t.saveInfo=function(e){return(0,r.default)({method:"POST",url:"/user/saveInfo",data:e})};var r=a(n("a064"))},"7ea9":function(e,t,n){"use strict";var a=n("8fbf"),r=n.n(a);r.a},"8fbf":function(e,t,n){var a=n("b62e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("967d").default;r("29fb55d9",a,!0,{sourceMap:!1,shadowMode:!1})},9314:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.USE_ALIPAY=t.API_BASE_URL=void 0;t.API_BASE_URL="https://szx.wuxueqz.com/api";t.USE_ALIPAY=!1},a064:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.request=l,n("bf0f");var r=a(n("9b1b")),u=a(n("32b7")),i=n("9314"),o=new u.default;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.request(e)}o.setConfig((function(e){return e.baseUrl=i.API_BASE_URL,e.header=(0,r.default)({},e.header),e})),o.validateStatus=function(e){return 200===e},o.interceptor.request((function(e,t){var n=uni.getStorageSync("token");return console.log(n,4444),e.header=n?(0,r.default)({Token:n},e.header):(0,r.default)({},e.header),e})),o.interceptor.response((function(e){var t=e.data;return console.log(t,111111),1!==t.code?(console.log(t,22222),uni.showToast({title:t.msg,duration:1500}),401===t.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel&&console.log("用户点击取消")}}),Promise.reject(e)):e.data}),(function(e){return console.log("response error",e),uni.showToast({title:e.data.msg,duration:1500}),Promise.reject(e)}));var s=l;t.default=s},b220:function(e,t,n){"use strict";n.r(t);var a=n("6a67"),r=n("7b13");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("7ea9");var i=n("828b"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"dbc32e64",null,!1,a["a"],void 0);t["default"]=o.exports},b62e:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".page[data-v-dbc32e64]{width:100%;height:100%;background-color:#fafafa}.balance[data-v-dbc32e64]{position:relative;width:84%;margin:10px auto;background:linear-gradient(135deg,#d66c6b,#ed6266);border-radius:10px;color:#fff;padding:0 21px}.ma_box[data-v-dbc32e64]{display:flex;justify-content:space-between;width:85%;margin:10px auto;padding:16px 21px;border-radius:10px;background-color:#fff;font-size:16px}.ba_use .uni-image[data-v-dbc32e64]{width:21px;height:21px;margin-top:12px;margin-left:16px;background-image:url(/static/img/user/eye.png);background-size:100% 100%}.ba_use[data-v-dbc32e64]{display:flex;line-height:42px;font-size:17px}.ba_money[data-v-dbc32e64]{font-size:32px;padding-bottom:10px;margin-right:10px}.boxfi[data-v-dbc32e64]{display:flex;flex-wrap:nowrap;text-align:center;line-height:37px;align-items:center}.boxfi uni-image[data-v-dbc32e64]{width:21px;height:21px;margin-right:5px}",""]),e.exports=t}}]);