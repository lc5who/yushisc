(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bonus-teamorder"],{"10a1":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}));var n={uvNavbar:a("de6e").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),e._l(e.teamList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"goods"},[a("v-uni-view",{staticClass:"jzn"}),a("v-uni-view",{staticClass:"fenmo"},[a("v-uni-view",{staticClass:"yingying"},[a("v-uni-view",{staticClass:"caiy"},[e._v("订单编号："+e._s(t.orderSn))]),a("v-uni-view",{staticClass:"jzn_fu"},[e._v(e._s(t.status_text))])],1),a("v-uni-view",{staticClass:"pcy"},[a("v-uni-view",{staticClass:"pcy_tu"},[a("v-uni-image",{attrs:{src:t.goodsLogo,mode:""}})],1),a("v-uni-view",{staticClass:"pcy_ww"},[a("v-uni-view",{staticClass:"pcy_a"},[e._v(e._s(t.goodsName))]),a("v-uni-view",{staticClass:"qianwang"},[a("v-uni-view",{staticClass:"pcy_b"},[e._v("价格："+e._s(t.price))])],1),a("v-uni-view",{staticClass:"pcy_rr"},[e._v("佣金："+e._s(t.sumPrice))]),a("v-uni-view",{staticClass:"xdsj"},[e._v("下单时间："+e._s(t.create_time_text))])],1)],1),a("v-uni-view",{staticClass:"meiemei"},[a("v-uni-view",{staticClass:"limi"},[e._v("归属人:"+e._s(t.sellusername))]),a("v-uni-view",{staticClass:"limi"},[e._v("购买人："+e._s(t.buyusername))])],1)],1)],1)}))],2)},u=[]},"32b7":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bf0f"),a("d4b5"),a("5ef2"),a("5c47"),a("0506"),a("2797"),a("dc8a");var r=n(a("2634")),u=n(a("9b1b")),i=n(a("2fdc")),o=n(a("80b1")),s=n(a("efe5")),d=n(a("39d8")),l=function(){function e(){var t=this;(0,o.default)(this,e),(0,d.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,d.default)(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,a){e&&a&&(t.requestComFun=e,t.requestComFail=a)}})}return(0,s.default)(e,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var t=(0,i.default)((0,r.default)().mark((function t(){var a,n=this,i=arguments;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:{},a.baseUrl=this.config.baseUrl,a.dataType=a.dataType||this.config.dataType,a.responseType=a.responseType||this.config.responseType,a.url=a.url||"",a.data=a.data||{},a.params=a.params||{},a.header=a.header||this.config.header,a.method=a.method||this.config.method,a.custom=(0,u.default)((0,u.default)({},this.config.custom),a.custom||{}),t.abrupt("return",new Promise((function(t,r){var i=!0,o={};a.complete=function(e){e.config=o,n.validateStatus(e.statusCode)?(e=n.requestComFun(e),t(e)):(e=n.requestComFail(e),r(e))};o=(0,u.default)({},n.requestBeforeFun(a,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n={errMsg:e,config:t};r(n),i=!1})));var s=(0,u.default)({},o);if(i){delete s.custom;var d=e.posUrl(s.url)?s.url:s.baseUrl+s.url;if("{}"!==JSON.stringify(s.params)){var l=e.addQueryString(s.params);d+=-1===d.indexOf("?")?"?".concat(l):"&".concat(l)}s.url=d,uni.request(s)}})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,u.default)({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"POST"},a))}},{key:"put",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"PUT"},a))}},{key:"delete",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"DELETE"},a))}},{key:"connect",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"CONNECT"},a))}},{key:"head",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"HEAD"},a))}},{key:"options",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"OPTIONS"},a))}},{key:"trace",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,u.default)({url:e,data:t,method:"TRACE"},a))}},{key:"upload",value:function(t,a){var n=this,r=a.filePath,i=a.name,o=a.header,s=a.formData,d=a.custom;return new Promise((function(a,l){var c=!0,f={},v=(0,u.default)({},n.config.header);delete v["content-type"];var p={baseUrl:n.config.baseUrl,url:t,filePath:r,method:"UPLOAD",name:i,header:o||v,formData:s,custom:(0,u.default)((0,u.default)({},n.config.custom),d||{}),complete:function(e){e.config=f,200===e.statusCode?(e=n.requestComFun(e),a(e)):(e=n.requestComFail(e),l(e))}};f=(0,u.default)({},n.requestBeforeFun(p,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,a={errMsg:e,config:t};l(a),c=!1})));var h=(0,u.default)({},f);c&&(delete h.custom,h.url=e.posUrl(h.url)?h.url:h.baseUrl+h.url,uni.uploadFile(h))}))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var t="";return Object.keys(e).forEach((function(a){t+=a+"="+encodeURIComponent(e[a])+"&"})),t.substring(0,t.length-1)}}]),e}();t.default=l},"35af":function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,".page[data-v-6c347762]{width:100%;height:100%}.goods[data-v-6c347762]{width:100%;background-color:#fff;box-shadow:2px 2px 4px #ccc;margin-bottom:5px;padding-bottom:16px}.jzn[data-v-6c347762]{width:90%;margin:auto;padding-top:10px;display:flex;justify-content:space-between}.yingying[data-v-6c347762]{width:90%;margin:auto;margin-top:5px;display:flex;justify-content:space-between;align-items:center}.caiy[data-v-6c347762]{font-size:14px;color:#80817f}.jzn_fu[data-v-6c347762]{color:#ea4335}.pcy[data-v-6c347762]{width:96%;padding:3px 10px 1px 10px;display:flex;justify-content:space-between}.pcy_tu[data-v-6c347762]{width:24%;padding:10px}.pcy_tu uni-image[data-v-6c347762]{width:100%;height:106px;border-radius:10px}.pcy_ww[data-v-6c347762]{width:64%;padding:8px;font-size:14px}.pcy_a[data-v-6c347762]{margin:auto;font-size:17px;font-weight:700;margin-bottom:10px}.qianwang[data-v-6c347762]{height:32px;align-items:center;display:flex;justify-content:space-between}.pcy_b[data-v-6c347762]{font-size:17px;color:#ff4848;font-weight:700}.pcy_rr[data-v-6c347762]{font-size:17px;color:#1ca537;font-weight:700;margin-bottom:5px}.xdsj[data-v-6c347762]{color:#80817f;font-size:12px}.meiemei[data-v-6c347762]{width:98%;margin:auto;display:flex}.limi[data-v-6c347762]{width:50%;color:#ea4335;font-weight:700;text-align:center}",""]),e.exports=t},3688:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("7ad1"),r={data:function(){return{navstyle:{title:"账户管理",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},teamList:[]}},onLoad:function(){var e=this;(0,n.teamOrderList)().then((function(t){e.teamList=t.data.data,console.log(e.teamList)}))},methods:{leftClick:function(){uni.reLaunch({url:"/pages/index/user"})}}};t.default=r},"3d77d":function(e,t,a){"use strict";a.r(t);var n=a("3688"),r=a.n(n);for(var u in n)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=r.a},"641e":function(e,t,a){"use strict";var n=a("a94b"),r=a.n(n);r.a},"7ad1":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.addAddress=function(e){return(0,r.default)({method:"POST",url:"/user/addaddress",data:e})},t.addressList=function(){return(0,r.default)({method:"GET",url:"/user/addresslist"})},t.areaList=function(){return(0,r.default)({method:"GET",url:"/user/area"})},t.base64upload=function(e){return(0,r.default)({method:"post",url:"/index/base64upload",data:e})},t.delAddress=function(e){return(0,r.default)({method:"POST",url:"/user/deladdress",data:e})},t.detelePay=function(e){return(0,r.default)({method:"POST",url:"/user/detelePay",data:e})},t.editAddress=function(e){return(0,r.default)({method:"POST",url:"/user/editaddress",data:e})},t.getPay=function(e){return(0,r.default)({method:"get",url:"/user/getPay?type=".concat(e)})},t.realname=function(e){return(0,r.default)({method:"post",url:"/user/realname",data:e})},t.setAddress=function(e){return(0,r.default)({method:"GET",url:"/user/getaddress?addressId=".concat(e)})},t.setPay=function(e){return(0,r.default)({method:"POST",url:"/user/setPay",data:e})},t.teamOrderList=function(){return(0,r.default)({method:"GET",url:"/user/getTeamOrder"})};var r=n(a("a064"))},9314:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.USE_ALIPAY=t.API_BASE_URL=void 0;t.API_BASE_URL="https://wuxueqz.com/api";t.USE_ALIPAY=!1},"995f":function(e,t,a){"use strict";a.r(t);var n=a("10a1"),r=a("3d77d");for(var u in r)["default"].indexOf(u)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(u);a("641e");var i=a("828b"),o=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"6c347762",null,!1,n["a"],void 0);t["default"]=o.exports},a064:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.request=s,a("bf0f");var r=n(a("9b1b")),u=n(a("32b7")),i=a("9314"),o=new u.default;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.request(e)}o.setConfig((function(e){return e.baseUrl=i.API_BASE_URL,e.header=(0,r.default)({},e.header),e})),o.validateStatus=function(e){return 200===e},o.interceptor.request((function(e,t){var a=uni.getStorageSync("token");return console.log(a,4444),e.header=a?(0,r.default)({Token:a},e.header):(0,r.default)({},e.header),e})),o.interceptor.response((function(e){var t=e.data;return 1!==t.code?(uni.showToast({title:t.msg,duration:1500}),401===t.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel&&console.log("用户点击取消")}}),Promise.reject(e)):e.data}),(function(e){return console.log("response error",e),uni.showToast({title:e.msg,duration:1500}),Promise.reject(e)}));var d=s;t.default=d},a94b:function(e,t,a){var n=a("35af");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("967d").default;r("482c1d2e",n,!0,{sourceMap:!1,shadowMode:!1})}}]);