(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-art-index"],{"3e23":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.request=l,n("bf0f");var r=a(n("9b1b")),o=a(n("6c29")),u=n("ec57"),i=new o.default;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.request(e)}i.setConfig((function(e){return e.baseUrl=u.API_BASE_URL,e.header=(0,r.default)({},e.header),e})),i.validateStatus=function(e){return 200===e},i.interceptor.request((function(e,t){var n=uni.getStorageSync("token");return console.log(n,4444),e.header=n?(0,r.default)({Token:n},e.header):(0,r.default)({},e.header),e})),i.interceptor.response((function(e){var t=e.data;return 1!==t.code?(uni.showToast({title:t.msg,duration:1500}),401===t.code&&uni.showModal({title:"提示",content:"你已被登出，可以取消继续留在该页面，或者重新登录",confirmText:"重新登录",cancelText:"取消",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/login"}):e.cancel&&console.log("用户点击取消")}}),Promise.reject(e)):e.data}),(function(e){return console.log("response error",e),uni.showToast({title:e.msg,duration:1500}),Promise.reject(e)}));var c=l;t.default=c},"4c94":function(e,t,n){"use strict";n.r(t);var a=n("cde8"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},"6c29":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("bf0f"),n("d4b5"),n("5ef2"),n("5c47"),n("0506"),n("2797"),n("dc8a");var r=a(n("2634")),o=a(n("9b1b")),u=a(n("2fdc")),i=a(n("80b1")),l=a(n("efe5")),c=a(n("39d8")),s=function(){function e(){var t=this;(0,i.default)(this,e),(0,c.default)(this,"config",{baseUrl:"",header:{"content-type":"application/json;charset=UTF-8"},method:"GET",dataType:"json",responseType:"text",custom:{}}),(0,c.default)(this,"interceptor",{request:function(e){e&&(t.requestBeforeFun=e)},response:function(e,n){e&&n&&(t.requestComFun=e,t.requestComFail=n)}})}return(0,l.default)(e,[{key:"requestBeforeFun",value:function(e){return e}},{key:"requestComFun",value:function(e){return e}},{key:"requestComFail",value:function(e){return e}},{key:"validateStatus",value:function(e){return 200===e}},{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"request",value:function(){var t=(0,u.default)((0,r.default)().mark((function t(){var n,a=this,u=arguments;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:{},n.baseUrl=this.config.baseUrl,n.dataType=n.dataType||this.config.dataType,n.responseType=n.responseType||this.config.responseType,n.url=n.url||"",n.data=n.data||{},n.params=n.params||{},n.header=n.header||this.config.header,n.method=n.method||this.config.method,n.custom=(0,o.default)((0,o.default)({},this.config.custom),n.custom||{}),t.abrupt("return",new Promise((function(t,r){var u=!0,i={};n.complete=function(e){e.config=i,a.validateStatus(e.statusCode)?(e=a.requestComFun(e),t(e)):(e=a.requestComFail(e),r(e))};i=(0,o.default)({},a.requestBeforeFun(n,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a={errMsg:e,config:t};r(a),u=!1})));var l=(0,o.default)({},i);if(u){delete l.custom;var c=e.posUrl(l.url)?l.url:l.baseUrl+l.url;if("{}"!==JSON.stringify(l.params)){var s=e.addQueryString(l.params);c+=-1===c.indexOf("?")?"?".concat(s):"&".concat(s)}l.url=c,uni.request(l)}})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request((0,o.default)({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"POST"},n))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"PUT"},n))}},{key:"delete",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"DELETE"},n))}},{key:"connect",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"CONNECT"},n))}},{key:"head",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"HEAD"},n))}},{key:"options",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"OPTIONS"},n))}},{key:"trace",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request((0,o.default)({url:e,data:t,method:"TRACE"},n))}},{key:"upload",value:function(t,n){var a=this,r=n.filePath,u=n.name,i=n.header,l=n.formData,c=n.custom;return new Promise((function(n,s){var d=!0,f={},v=(0,o.default)({},a.config.header);delete v["content-type"];var h={baseUrl:a.config.baseUrl,url:t,filePath:r,method:"UPLOAD",name:u,header:i||v,formData:l,custom:(0,o.default)((0,o.default)({},a.config.custom),c||{}),complete:function(e){e.config=f,200===e.statusCode?(e=a.requestComFun(e),n(e)):(e=a.requestComFail(e),s(e))}};f=(0,o.default)({},a.requestBeforeFun(h,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"handle cancel",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n={errMsg:e,config:t};s(n),d=!1})));var p=(0,o.default)({},f);d&&(delete p.custom,p.url=e.posUrl(p.url)?p.url:p.baseUrl+p.url,uni.uploadFile(p))}))}}],[{key:"posUrl",value:function(e){return/(http|https):\/\/([\w.]+\/?)\S*/.test(e)}},{key:"addQueryString",value:function(e){var t="";return Object.keys(e).forEach((function(n){t+=n+"="+encodeURIComponent(e[n])+"&"})),t.substring(0,t.length-1)}}]),e}();t.default=s},8125:function(e,t,n){var a=n("f03e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("967d").default;r("770c431d",a,!0,{sourceMap:!1,shadowMode:!1})},b334:function(e,t,n){"use strict";var a=n("8125"),r=n.n(a);r.a},b9a7:function(e,t,n){"use strict";n.r(t);var a=n("fd85"),r=n("4c94");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("b334");var u=n("828b"),i=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"089f795c",null,!1,a["a"],void 0);t["default"]=i.exports},c4a3:function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.aList=function(){return(0,r.default)({method:"GET",url:"/articles/alist"})},t.aListInfo=function(e){return(0,r.default)({method:"GET",url:"/articles/info?articleId=".concat(e)})};var r=a(n("3e23"))},cde8:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("c4a3"),r={data:function(){return{navstyle:{title:"新闻列表",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},articleId:"",articleInfo:""}},onLoad:function(e){var t=this;this.articleId=e.articleId,(0,a.aListInfo)(this.articleId).then((function(e){t.articleInfo=e.data}))},methods:{leftClick:function(){var e=getCurrentPages();console.log(e),uni.navigateBack({delta:1})}}};t.default=r},ec57:function(e,t,n){"use strict";n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.USE_ALIPAY=t.API_BASE_URL=void 0;t.API_BASE_URL="https://ycsj.wuxueqz.com/api";t.USE_ALIPAY=!1},f03e:function(e,t,n){var a=n("c86c");t=a(!1),t.push([e.i,".news_title[data-v-089f795c]{display:flex;flex-direction:column;justify-content:center;width:100%;height:auto;line-height:42px;font-size:22px;border-bottom:1px solid #000;text-align:center}.article_meta[data-v-089f795c]{padding:10px;display:flex;flex-direction:row;justify-content:flex-start;border-bottom:#f3f4f5 solid 1px}.article_content[data-v-089f795c]{line-height:37px;padding:5%;word-wrap:break-word;width:90%}",""]),e.exports=t},fd85:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uvNavbar:n("317d").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"news_title"},[e._v(e._s(e.articleInfo.articleTitle))]),n("v-uni-view",{staticClass:"article_meta"},[e._v("日期："+e._s(e.articleInfo.date))]),n("v-uni-view",{staticClass:"article_content",domProps:{innerHTML:e._s(e.articleInfo.articleContent)}})],1)},o=[]}}]);