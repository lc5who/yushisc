(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-email"],{"0a11":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".page[data-v-0162ee3c]{width:100%;height:100%;background-color:#fafafa}.retrieve[data-v-0162ee3c]{display:flex;flex-direction:column;font-size:14px;color:#333}.listinput[data-v-0162ee3c]{padding:4px 5%;font-size:14px;color:#585858;line-height:42px}.exitbtn[data-v-0162ee3c]{width:80%;border-radius:50px;background:linear-gradient(135deg,#d66c6b,#ed6266);font-size:14px;margin:32px auto 0 auto;color:#fff;padding:3px 0;border:none}",""]),t.exports=e},"25a4":function(t,e,n){"use strict";n.r(e);var a=n("cd1f"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"32ac":function(t,e,n){"use strict";n.r(e);var a=n("b32b"),o=n("25a4");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("b779");var r=n("828b"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"0162ee3c",null,!1,a["a"],void 0);e["default"]=u.exports},"7a01":function(t,e,n){var a=n("0a11");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("967d").default;o("19cc9fda",a,!0,{sourceMap:!1,shadowMode:!1})},b32b:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uvNavbar:n("317d").default,uvText:n("e7d1").default,uvInput:n("0500").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uv-navbar",{attrs:{leftIconColor:t.navstyle.txtColor,titleStyle:t.titleStyle,title:t.navstyle.title,leftIcon:t.navstyle.leftIcon,bgColor:t.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"retrieve"},[n("v-uni-view",{staticClass:"listinput"},[n("uv-text",{attrs:{text:"邮箱"}}),n("uv-input",{staticStyle:{padding:"3px 9px"},attrs:{border:"surround",placeholder:"请输入邮箱"},model:{value:t.userform.email,callback:function(e){t.$set(t.userform,"email",e)},expression:"userform.email"}})],1),n("v-uni-button",{staticClass:"exitbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitEvnent.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},i=[]},b779:function(t,e,n){"use strict";var a=n("7a01"),o=n.n(a);o.a},cd1f:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("5c47"),n("0506");var a=n("c72a"),o={data:function(){return{navstyle:{title:"修改邮箱",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},userform:{email:""},showKeyBoard:!1}},methods:{leftClick:function(){uni.reLaunch({url:"/pages/user/account"})},openModal:function(){this.showKeyBoard=!0},enterSuccess:function(t){console.log(t),this.showKeyBoard=!1},close:function(){this.showKeyBoard=!1},submitEvnent:function(){if(this.userform.email){/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.userform.email)?(0,a.saveInfo)({email:this.userform.email}).then((function(t){1==t.code&&(uni.reLaunch({url:"/pages/user/account"}),uni.showToast({title:t.msg,duration:2e3}))})):uni.showToast({title:"邮箱格式不正确",duration:2e3})}else uni.showToast({title:"请输入邮箱",duration:2e3})}}};e.default=o}}]);