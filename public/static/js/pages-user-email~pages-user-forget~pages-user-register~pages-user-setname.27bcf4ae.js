(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-email~pages-user-forget~pages-user-register~pages-user-setname"],{"0869":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-8302844a], uni-scroll-view[data-v-8302844a], uni-swiper-item[data-v-8302844a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-link[data-v-8302844a]{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1;color:#3c9cff}',""]),e.exports=t},"25d9":function(e,t,i){"use strict";i.r(t);var n=i("cc0c"),a=i("3f56");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("9bfe");var r=i("828b"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e06e6c4a",null,!1,n["a"],void 0);t["default"]=l.exports},"2b99":function(e,t,i){"use strict";var n=i("40b0"),a=i.n(n);a.a},"2fa4":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uv-line-1[data-v-e06e6c4a]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.uv-line-2[data-v-e06e6c4a]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.uv-line-3[data-v-e06e6c4a]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.uv-line-4[data-v-e06e6c4a]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.uv-line-5[data-v-e06e6c4a]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.uv-reset-button[data-v-e06e6c4a]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.uv-reset-button[data-v-e06e6c4a]::after{border:none}uni-view[data-v-e06e6c4a], uni-scroll-view[data-v-e06e6c4a], uni-swiper-item[data-v-e06e6c4a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-text[data-v-e06e6c4a]{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;flex:1;width:100%}.uv-text__price[data-v-e06e6c4a]{font-size:14px;color:#606266}.uv-text__value[data-v-e06e6c4a]{font-size:14px;display:flex;flex-direction:row;color:#606266;flex-wrap:wrap;text-overflow:ellipsis;align-items:center}.uv-text__value--primary[data-v-e06e6c4a]{color:#3c9cff}.uv-text__value--warning[data-v-e06e6c4a]{color:#f9ae3d}.uv-text__value--success[data-v-e06e6c4a]{color:#5ac725}.uv-text__value--info[data-v-e06e6c4a]{color:#909399}.uv-text__value--error[data-v-e06e6c4a]{color:#f56c6c}.uv-text__value--main[data-v-e06e6c4a]{color:#303133}.uv-text__value--content[data-v-e06e6c4a]{color:#606266}.uv-text__value--tips[data-v-e06e6c4a]{color:#909193}.uv-text__value--light[data-v-e06e6c4a]{color:#c0c4cc}',""]),e.exports=t},"3efb":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var a,o,r=n(i("9b1b")),l={props:(0,r.default)({color:{type:String,default:""},fontSize:{type:[String,Number],default:14},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""},text:{type:String,default:""}},null===(a=uni.$uv)||void 0===a||null===(o=a.props)||void 0===o?void 0:o.link)};t.default=l},"3f56":function(e,t,i){"use strict";i.r(t);var n=i("4a49"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"40b0":function(e,t,i){var n=i("0869");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("ce0e9ab0",n,!0,{sourceMap:!1,shadowMode:!1})},"41dc":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("5c47"),i("0506"),i("c223");var n=i("b8ef"),a=i("4169"),o={computed:{value:function(){var e=this.text,t=this.mode,i=this.format,o=this.href;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||(0,a.error)("金额模式下，text参数需要为金额格式"),(0,n.func)(i)?i(e):(0,a.priceFormat)(e,2)):"date"===t?(!(0,n.date)(e)&&(0,a.error)("日期模式下，text参数需要为日期或时间戳格式"),(0,n.func)(i)?i(e):i?(0,a.timeFormat)(e,i):(0,a.timeFormat)(e,"yyyy-mm-dd")):"phone"===t?(0,n.func)(i)?i(e):"encrypt"===i?"".concat(e.substr(0,3),"****").concat(e.substr(7)):e:"name"===t?("string"!==typeof e&&(0,a.error)("姓名模式下，text参数需要为字符串格式"),(0,n.func)(i)?i(e):"encrypt"===i?this.formatName(e):e):"link"===t?(!(0,n.url)(o)&&(0,a.error)("超链接模式下，href参数需要为URL格式"),e):e}},methods:{formatName:function(e){var t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){for(var i="",n=0,a=e.length-2;n<a;n++)i+="*";t=e.substr(0,1)+i+e.substr(-1,1)}else t=e;return t}}};t.default=o},"4a49":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("41dc")),o=n(i("e247")),r=n(i("f5a2")),l=(n(i("4f1d")),n(i("b4a9")),n(i("6522"))),u={name:"uv-text",emits:["click"],mixins:[o.default,r.default,a.default,l.default],computed:{valueStyle:function(){var e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:this.$uv.addUnit(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),!this.isNvue||"price"==this.mode||this.prefixIcon||this.suffixIcon||(e.flex=1,e.textAlign="left"===this.align?"flex-start":"center"===this.align?"center":"right"),this.lineHeight&&(e.lineHeight=this.$uv.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),this.$uv.deepMerge(e,this.$uv.addStyle(this.customStyle))},isNvue:function(){return!1},isMp:function(){return!1}},data:function(){return{}},methods:{clickHandler:function(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};t.default=u},"4f1d":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};t.default=n},6522:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var a,o,r=n(i("9b1b")),l={props:(0,r.default)({type:{type:String,default:""},show:{type:Boolean,default:!0},text:{type:[String,Number],default:""},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},mode:{type:String,default:""},href:{type:String,default:""},format:{type:[String,Function],default:""},call:{type:Boolean,default:!0},openType:{type:String,default:""},bold:{type:Boolean,default:!1},block:{type:Boolean,default:!1},lines:{type:[String,Number],default:""},color:{type:String,default:"#303133"},size:{type:[String,Number],default:15},iconStyle:{type:[Object,String],default:function(){return{fontSize:"15px"}}},decoration:{type:String,default:"none"},margin:{type:[Object,String,Number],default:0},lineHeight:{type:[String,Number],default:""},align:{type:String,default:"left"},wordWrap:{type:String,default:"normal"}},null===(a=uni.$uv)||void 0===a||null===(o=a.props)||void 0===o?void 0:o.text)};t.default=l},"723a":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uv-link",style:[e.linkStyle,e.$uv.addStyle(e.customStyle)],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.openLink.apply(void 0,arguments)}}},[e._v(e._s(e.text))])},a=[]},"729a":function(e,t,i){var n=i("2fa4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("7eb50376",n,!0,{sourceMap:!1,shadowMode:!1})},"9bfe":function(e,t,i){"use strict";var n=i("729a"),a=i.n(n);a.a},b4a9:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{openType:String},emits:["getphonenumber","getuserinfo","error","opensetting","launchapp","contact","chooseavatar","addgroupapp","chooseaddress","subscribe","login","im"],methods:{onGetPhoneNumber:function(e){this.$emit("getphonenumber",e.detail)},onGetUserInfo:function(e){this.$emit("getuserinfo",e.detail)},onError:function(e){this.$emit("error",e.detail)},onOpenSetting:function(e){this.$emit("opensetting",e.detail)},onLaunchApp:function(e){this.$emit("launchapp",e.detail)},onContact:function(e){this.$emit("contact",e.detail)},onChooseavatar:function(e){this.$emit("chooseavatar",e.detail)},onAgreeprivacyauthorization:function(e){this.$emit("agreeprivacyauthorization",e.detail)},onAddgroupapp:function(e){this.$emit("addgroupapp",e.detail)},onChooseaddress:function(e){this.$emit("chooseaddress",e.detail)},onSubscribe:function(e){this.$emit("subscribe",e.detail)},onLogin:function(e){this.$emit("login",e.detail)},onIm:function(e){this.$emit("im",e.detail)}}};t.default=n},b962:function(e,t,i){"use strict";i.r(t);var n=i("f486"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},c800:function(e,t,i){"use strict";i.r(t);var n=i("723a"),a=i("b962");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("2b99");var r=i("828b"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8302844a",null,!1,n["a"],void 0);t["default"]=l.exports},cc0c:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uvIcon:i("0f5d").default,uvLink:i("c800").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{staticClass:"uv-text",class:[],style:{margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},["price"===e.mode?i("v-uni-text",{class:["uv-text__price",e.type&&"uv-text__value--"+e.type],style:[e.valueStyle]},[e._v("￥")]):e._e(),e.prefixIcon?i("v-uni-view",{staticClass:"uv-text__prefix-icon"},[i("uv-icon",{attrs:{name:e.prefixIcon,customStyle:e.$uv.addStyle(e.iconStyle)}})],1):e._e(),"link"===e.mode?i("uv-link",{attrs:{text:e.value,href:e.href,underLine:!0}}):e.openType&&e.isMp?[i("v-uni-button",{staticClass:"uv-reset-button uv-text__value",style:[e.valueStyle],attrs:{openType:e.openType,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetUserInfo.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.onContact.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetPhoneNumber.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.onError.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.onLaunchApp.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.onOpenSetting.apply(void 0,arguments)}}},[e._v(e._s(e.value))])]:i("v-uni-text",{staticClass:"uv-text__value",class:[e.type&&"uv-text__value--"+e.type,e.lines&&"uv-line-"+e.lines],style:[e.valueStyle]},[e._v(e._s(e.value))]),e.suffixIcon?i("v-uni-view",{staticClass:"uv-text__suffix-icon"},[i("uv-icon",{attrs:{name:e.suffixIcon,customStyle:e.$uv.addStyle(e.iconStyle)}})],1):e._e()],2):e._e()},o=[]},f486:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("e247")),o=n(i("f5a2")),r=n(i("3efb")),l={name:"uv-link",emits:["click"],mixins:[a.default,o.default,r.default],computed:{linkStyle:function(){var e={color:this.color,fontSize:this.$uv.addUnit(this.fontSize),lineHeight:this.$uv.addUnit(this.$uv.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return e}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}};t.default=l}}]);