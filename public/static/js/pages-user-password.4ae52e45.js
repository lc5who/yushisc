(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-password"],{"11d5":function(e,t,r){"use strict";r("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("7d0c"),n={onLoad:function(){var e=this;(0,a.memberInfo)().then((function(t){e.userInfo=t.data,console.log(e.userInfo)}))},data:function(){return{navstyle:{title:"修改登录密码",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},userInfo:{},userForm:{password:"",newpassword:"",nwpassword:""}}},methods:{leftClick:function(){uni.reLaunch({url:"/pages/user/login"})},savePassClick:function(){this.userForm.password?this.userForm.newpassword?this.userForm.nwpassword?(0,a.saveInfo)({password:this.userForm.password,newpassword:this.userForm.newpassword,newpassword2:this.userForm.nwpassword}).then((function(e){1==e.code&&(uni.reLaunch({url:"/pages/user/login"}),uni.showToast({title:e.msg,duration:2e3}))})):uni.showToast({title:"请输入确认新密码",duration:2e3}):uni.showToast({title:"请输入新的密码",duration:2e3}):uni.showToast({title:"请输入原密码",duration:2e3})}}};t.default=n},"32b7":function(e,t,r){"use strict";r("6a54");var a=r("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("bf0f"),r("d4b5"),r("5ef2"),r("5c47"),r("0506"),r("2797"),r("dc8a");var n=a(r("2634")),o=a(r("9b1b")),u=a(r("2fdc")),s=a(r("80b1")),i=a(r("efe5")),l=a(r("39d8")),d=function(){function e(){var t=this;(0,s.default)(this,e),(0,l.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,l.default)(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,r){e&&r&&(t.requestComFun=e,t.requestComFail=r)}})}return(0,i.default)(e,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var t=(0,u.default)((0,n.default)().mark((function t(){var r,a=this,u=arguments;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=u.length>0&&void 0!==u[0]?u[0]:{},r.baseUrl=this.config.baseUrl,r.dataType=r.dataType||this.config.dataType,r.responseType=r.responseType||this.config.responseType,r.url=r.url||"",r.data=r.data||{},r.params=r.params||{},r.header=r.header||this.config.header,r.method=r.method||this.config.method,r.custom=(0,o.default)((0,o.default)({},this.config.custom),r.custom||{}),t.abrupt("return",new Promise((function(t,n){var u=!0,s={};r.complete=function(e){e.config=s,a.validateStatus(e.statusCode)?(e=a.requestComFun(e),t(e)):(e=a.requestComFail(e),n(e))};s=(0,o.default)({},a.requestBeforeFun(r,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a={errMsg:e,config:t};n(a),u=!1})));var i=(0,o.default)({},s);if(u){delete i.custom;var l=e.posUrl(i.url)?i.url:i.baseUrl+i.url;if("{}"!==JSON.stringify(i.params)){var d=e.addQueryString(i.params);l+=-1===l.indexOf("?")?"?".concat(d):"&".concat(d)}i.url=l,uni.request(i)}})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,o.default)({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"POST"},r))}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"PUT"},r))}},{key:"delete",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"DELETE"},r))}},{key:"connect",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"CONNECT"},r))}},{key:"head",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"HEAD"},r))}},{key:"options",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"OPTIONS"},r))}},{key:"trace",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"TRACE"},r))}},{key:"upload",value:function(t,r){var a=this,n=r.filePath,u=r.name,s=r.header,i=r.formData,l=r.custom;return new Promise((function(r,d){var c=!0,f={},p=(0,o.default)({},a.config.header);delete p["content-type"];var v={baseUrl:a.config.baseUrl,url:t,filePath:n,method:"UPLOAD",name:u,header:s||p,formData:i,custom:(0,o.default)((0,o.default)({},a.config.custom),l||{}),complete:function(e){e.config=f,200===e.statusCode?(e=a.requestComFun(e),r(e)):(e=a.requestComFail(e),d(e))}};f=(0,o.default)({},a.requestBeforeFun(v,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,r={errMsg:e,config:t};d(r),c=!1})));var h=(0,o.default)({},f);c&&(delete h.custom,h.url=e.posUrl(h.url)?h.url:h.baseUrl+h.url,uni.uploadFile(h))}))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var t="";return Object.keys(e).forEach((function(r){t+=r+"="+encodeURIComponent(e[r])+"&"})),t.substring(0,t.length-1)}}]),e}();t.default=d},"7d0c":function(e,t,r){"use strict";r("6a54");var a=r("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.caplogDetail=function(e){return(0,n.default)({method:"get",url:"/user/caplogdetail",data:e})},t.checkShare=function(e){return(0,n.default)({method:"POST",url:"/login/checkshare",data:e})},t.draw=function(e){return(0,n.default)({method:"POST",url:"/user/draw",data:e})},t.drawInfo=function(){return(0,n.default)({method:"GET",url:"/user/drawInfo"})},t.drawList=function(){return(0,n.default)({method:"GET",url:"/user/drawList"})},t.loginOut=function(){return(0,n.default)({method:"POST",url:"/login/loginOut"})},t.memberInfo=function(){return(0,n.default)({method:"GET",url:"/user/userInfo"})},t.memberLogin=function(e){return(0,n.default)({method:"POST",url:"/login/login",data:e})},t.qgDetail=function(){return(0,n.default)({method:"GET",url:"/qg/index"})},t.rechargeData=function(e){return(0,n.default)({method:"POST",url:"/user/recharge",data:e})},t.rechargeMethod=function(e){return(0,n.default)({method:"POST",url:"/index/rechargeMethod",data:e})},t.registerUser=function(e){return(0,n.default)({method:"POST",url:"/login/register",data:e})},t.retrievePass=function(e){return(0,n.default)({method:"POST",url:"/user/retrieve",data:e})},t.saveInfo=function(e){return(0,n.default)({method:"POST",url:"/user/saveInfo",data:e})};var n=a(r("a064"))},"8fea":function(e,t,r){var a=r("ae27");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=r("967d").default;n("272db3cc",a,!0,{sourceMap:!1,shadowMode:!1})},9218:function(e,t,r){"use strict";r.r(t);var a=r("11d5"),n=r.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},9314:function(e,t,r){"use strict";r("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.USE_ALIPAY=t.API_BASE_URL=void 0;t.API_BASE_URL="https://wuxueqz.com/api";t.USE_ALIPAY=!1},a064:function(e,t,r){"use strict";r("6a54");var a=r("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.request=i,r("bf0f");var n=a(r("9b1b")),o=a(r("32b7")),u=r("9314"),s=new o.default;function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.request(e)}s.setConfig((function(e){return e.baseUrl=u.API_BASE_URL,e.header=(0,n.default)({},e.header),e})),s.validateStatus=function(e){return 200===e},s.interceptor.request((function(e,t){var r=uni.getStorageSync("token");return console.log(r,4444),e.header=r?(0,n.default)({Token:r},e.header):(0,n.default)({},e.header),e})),s.interceptor.response((function(e){var t=e.data;return console.log(t,111111),1!==t.code?(console.log(t,22222),uni.showToast({title:t.msg,duration:1500}),401===t.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel&&console.log("用户点击取消")}}),Promise.reject(e)):e.data}),(function(e){return console.log("response error",e),uni.showToast({title:e.data.msg,duration:1500}),Promise.reject(e)}));var l=i;t.default=l},a4e4:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a}));var a={uvNavbar:r("de6e").default},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",[r("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),r("v-uni-view",{staticClass:"password_box"},[r("v-uni-view",{staticClass:"password_list"},[r("v-uni-view",{staticClass:"password_laber"},[e._v("原登录密码")]),r("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,type:"text",placeholder:"请输入原密码"},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password",t)},expression:"userForm.password"}})],1),r("v-uni-view",{staticClass:"password_list"},[r("v-uni-view",{staticClass:"password_laber"},[e._v("新的密码")]),r("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,type:"text",placeholder:"请输入新的密码"},model:{value:e.userForm.newpassword,callback:function(t){e.$set(e.userForm,"newpassword",t)},expression:"userForm.newpassword"}})],1),r("v-uni-view",{staticClass:"password_list"},[r("v-uni-view",{staticClass:"password_laber"},[e._v("确认新密码")]),r("v-uni-input",{staticClass:"uni-input",attrs:{password:!0,type:"text",placeholder:"请输入确认新密码"},model:{value:e.userForm.nwpassword,callback:function(t){e.$set(e.userForm,"nwpassword",t)},expression:"userForm.nwpassword"}})],1),r("v-uni-button",{staticClass:"exitbtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePassClick.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)},o=[]},ae27:function(e,t,r){var a=r("c86c");t=a(!1),t.push([e.i,".page[data-v-2cc29e2b]{width:100%;height:100%;background-color:#fafafa}.password_box[data-v-2cc29e2b]{display:flex;flex-direction:column}.password_list[data-v-2cc29e2b]{display:flex;flex-direction:row;width:100%;padding:5px 5px;height:50px;border-bottom:1px solid #d1d1d1;align-items:center}.password_laber[data-v-2cc29e2b]{width:30%;font-size:13px;text-align:center}.password_list uni-input[data-v-2cc29e2b]{height:28px;background-color:#fff;padding:5px 10px;border-radius:5px;font-size:13px}.exitbtn[data-v-2cc29e2b]{width:80%;border-radius:50px;background:linear-gradient(135deg,#d66c6b,#ed6266);font-size:14px;margin:32px auto 0 auto;color:#fff;padding:3px 0;border:none}",""]),e.exports=t},aeae:function(e,t,r){"use strict";r.r(t);var a=r("a4e4"),n=r("9218");for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("f07d");var u=r("828b"),s=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"2cc29e2b",null,!1,a["a"],void 0);t["default"]=s.exports},f07d:function(e,t,r){"use strict";var a=r("8fea"),n=r.n(a);n.a}}]);