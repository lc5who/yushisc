(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bonus-address_edit"],{"0616":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2634")),r=n(i("2fdc"));i("5c47"),i("0506"),i("fd3c"),i("dd2b"),i("1851");var o=n(i("2132")),s=n(i("fe21")),l=n(i("a651")),u={name:"uv-picker",emits:["confirm","cancel","close","change"],mixins:[o.default,s.default,l.default],computed:{textStyle:function(){var e=this;return function(t,i){var n={display:"block"};return e.color&&(n.color=e.color),e.activeColor&&i===e.innerIndex[t]&&(n.color=e.activeColor),n}}},data:function(){return{lastIndex:[],innerIndex:[],innerColumns:[],columnIndex:0}},watch:{defaultIndex:{immediate:!0,handler:function(e){this.setIndexs(e,!0)}},columns:{deep:!0,immediate:!0,handler:function(e){this.setColumns(e)}}},methods:{open:function(){this.$refs.pickerPopup.open()},close:function(){this.$refs.pickerPopup.close()},popupChange:function(e){e.show||this.$emit("close")},getItemText:function(e){return this.$uv.test.object(e)?e[this.keyName]:e},cancel:function(){this.$emit("cancel"),this.close()},confirm:function(){var e=this;this.$emit("confirm",this.$uv.deepClone({indexs:this.innerIndex,value:this.innerColumns.map((function(t,i){return t[e.innerIndex[i]]})),values:this.innerColumns})),this.closeOnClickConfirm&&this.close()},changeHandler:function(e){for(var t=e.detail.value,i=0,n=0,a=0;a<t.length;a++){var r=t[a];if(r!==(this.lastIndex[a]||0)){n=a,i=r;break}}this.columnIndex=n;var o=this.innerColumns;this.setLastIndex(t),this.setIndexs(t),this.$emit("change",{value:this.innerColumns.map((function(e,i){return e[t[i]]})),index:i,indexs:t,values:o,columnIndex:n})},setIndexs:function(e,t){this.innerIndex=this.$uv.deepClone(e),t&&this.setLastIndex(e)},setLastIndex:function(e){this.lastIndex=this.$uv.deepClone(e)},setColumnValues:function(e,t){this.innerColumns.splice(e,1,t);for(var i=this.$uv.deepClone(this.innerIndex),n=0;n<this.innerColumns.length;n++)n>this.columnIndex&&(i[n]=0);this.setIndexs(i)},getColumnValues:function(e){var t=this;return(0,r.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$uv.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns[e]},setColumns:function(e){this.innerColumns=this.$uv.deepClone(e),0===this.innerIndex.length&&(this.innerIndex=new Array(e.length).fill(0))},getIndexs:function(){return this.innerIndex},getValues:function(){var e=this;return(0,r.default)((0,a.default)().mark((function t(){return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$uv.sleep();case 2:case"end":return t.stop()}}),t)})))(),this.innerColumns.map((function(t,i){return t[e.innerIndex[i]]}))}}};t.default=u},"0fb3":function(e,t,i){"use strict";var n=i("5930"),a=i.n(n);a.a},1851:function(e,t,i){"use strict";var n=i("8bdb"),a=i("84d6"),r=i("1cb5");n({target:"Array",proto:!0},{fill:a}),r("fill")},"24dc":function(e,t,i){var n=i("b117");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("c81a5d02",n,!0,{sourceMap:!1,shadowMode:!1})},2632:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o=n(i("9b1b")),s={props:(0,o.default)({show:{type:Boolean,default:!0},showBorder:{type:Boolean,default:!1},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"},cancelColor:{type:String,default:"#909193"},confirmColor:{type:String,default:"#3c9cff"},title:{type:String,default:""}},null===(a=uni.$uv)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.toolbar)};t.default=s},2701:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uvLoadingIcon:i("9e16").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uv-switch",class:[e.disabled&&"uv-switch--disabled"],style:[e.switchStyle,e.$uv.addStyle(e.customStyle)],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uv-switch__bg",style:[e.bgStyle]}),i("v-uni-view",{ref:"uv-switch__node",staticClass:"uv-switch__node",class:[e.innerValue&&"uv-switch__node--on"],style:[e.nodeStyle]},[i("uv-loading-icon",{attrs:{show:e.loading,mode:"circle",timingFunction:"linear",color:e.innerValue?e.activeColor:"#AAABAD",size:.6*e.size}})],1)],1)},r=[]},3394:function(e,t,i){"use strict";var n=i("24dc"),a=i.n(n);a.a},"390f":function(e,t,i){"use strict";var n=i("be2d"),a=i.n(n);a.a},"45d4":function(e,t,i){"use strict";i.r(t);var n=i("2701"),a=i("fb68");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("0fb3");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"83d11034",null,!1,n["a"],void 0);t["default"]=s.exports},"5354e":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.addAddress=function(e){return(0,a.default)({method:"POST",url:"/user/addaddress",data:e})},t.addressList=function(){return(0,a.default)({method:"GET",url:"/user/addresslist"})},t.areaList=function(){return(0,a.default)({method:"GET",url:"/user/area"})},t.base64upload=function(e){return(0,a.default)({method:"post",url:"/index/base64upload",data:e})},t.delAddress=function(e){return(0,a.default)({method:"POST",url:"/user/deladdress",data:e})},t.detelePay=function(e){return(0,a.default)({method:"POST",url:"/user/detelePay",data:e})},t.editAddress=function(e){return(0,a.default)({method:"POST",url:"/user/editaddress",data:e})},t.getPay=function(e){return(0,a.default)({method:"get",url:"/user/getPay?type=".concat(e)})},t.realname=function(e){return(0,a.default)({method:"post",url:"/user/realname",data:e})},t.setAddress=function(e){return(0,a.default)({method:"GET",url:"/user/getaddress?addressId=".concat(e)})},t.setPay=function(e){return(0,a.default)({method:"POST",url:"/user/setPay",data:e})},t.teamOrderList=function(){return(0,a.default)({method:"GET",url:"/user/getTeamOrder"})};var a=n(i("3e23"))},"54e5":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uv-line-1[data-v-5d1fcf43]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.uv-line-2[data-v-5d1fcf43]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.uv-line-3[data-v-5d1fcf43]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.uv-line-4[data-v-5d1fcf43]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.uv-line-5[data-v-5d1fcf43]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}uni-view[data-v-5d1fcf43], uni-scroll-view[data-v-5d1fcf43], uni-swiper-item[data-v-5d1fcf43]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-picker[data-v-5d1fcf43]{position:relative}.uv-picker__view__column[data-v-5d1fcf43]{display:flex;flex-direction:row;flex:1;justify-content:center}.uv-picker__view__column__item[data-v-5d1fcf43]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;text-align:center;display:block;color:#303133}.uv-picker__view__column__item--disabled[data-v-5d1fcf43]{cursor:not-allowed;opacity:.35}.uv-picker--loading[data-v-5d1fcf43]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.87);z-index:1000}',""]),e.exports=t},5930:function(e,t,i){var n=i("9f61");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("ec43bbae",n,!0,{sourceMap:!1,shadowMode:!1})},6533:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2132")),r=n(i("fe21")),o=n(i("2632")),s={name:"uv-toolbar",emits:["confirm","cancel"],mixins:[a.default,r.default,o.default],methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}};t.default=s},6547:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uvPopup:i("6cf0").default,uvToolbar:i("93f1").default,uvLoadingIcon:i("9e16").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("uv-popup",{ref:"pickerPopup",attrs:{mode:"bottom",round:e.round,"close-on-click-overlay":e.closeOnClickOverlay},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.popupChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uv-picker"},[e.showToolbar?i("uv-toolbar",{attrs:{cancelColor:e.cancelColor,confirmColor:e.confirmColor,cancelText:e.cancelText,confirmText:e.confirmText,title:e.title},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}}):e._e(),i("v-uni-picker-view",{staticClass:"uv-picker__view",style:{height:""+e.$uv.addUnit(e.visibleItemCount*e.itemHeight)},attrs:{indicatorStyle:"height: "+e.$uv.addUnit(e.itemHeight),value:e.innerIndex,immediateChange:e.immediateChange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeHandler.apply(void 0,arguments)}}},e._l(e.innerColumns,(function(t,n){return i("v-uni-picker-view-column",{key:n,staticClass:"uv-picker__view__column"},e._l(t,(function(a,r){return e.$uv.test.array(t)?i("v-uni-text",{key:r,staticClass:"uv-picker__view__column__item uv-line-1",style:[{height:e.$uv.addUnit(e.itemHeight),lineHeight:e.$uv.addUnit(e.itemHeight),fontWeight:r===e.innerIndex[n]?"bold":"normal"},e.textStyle(n,r)]},[e._v(e._s(e.getItemText(a)))]):e._e()})),1)})),1),e.loading?i("v-uni-view",{staticClass:"uv-picker--loading"},[i("uv-loading-icon",{attrs:{mode:"circle"}})],1):e._e()],1)],1)},r=[]},"667a":function(e,t,i){"use strict";i.r(t);var n=i("6547"),a=i("bde2");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("e73a");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5d1fcf43",null,!1,n["a"],void 0);t["default"]=s.exports},"7c7d":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,".password_box[data-v-026052a5]{display:flex;flex-direction:column}.password_list[data-v-026052a5]{display:flex;flex-direction:row;padding:5px 5px;height:50px;border-bottom:1px solid #efefef;align-items:center}.password_laber[data-v-026052a5]{width:25%;font-size:13px;text-align:center}.right[data-v-026052a5]{margin-left:auto}.password_list uni-input[data-v-026052a5]{width:75%;height:28px;background-color:#fff;padding:5px 10px;border-radius:5px;font-size:13px}.delete[data-v-026052a5]{margin-top:3px}.delete uni-button[data-v-026052a5]{background-color:#fff;border-radius:0;margin:0;font-size:14px;color:#f2180c;text-align:left;border:none}.exitbtn[data-v-026052a5]{width:80%;border-radius:50px;background:linear-gradient(135deg,#d66c6b,#ed6266);font-size:14px;margin:32px auto 0 auto;color:#fff;padding:3px 0;border:none}.password_textarea[data-v-026052a5]{width:100%;height:100px;padding:0 10px}.uni-textarea[data-v-026052a5]{width:90%;height:100px;border:1px solid #efefef;border-radius:4px 4px;padding:10px 10px}",""]),e.exports=t},"88fc":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.show?i("v-uni-view",{class:["uv-toolbar",{"uv-border-bottom":e.showBorder}],on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.noop.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uv-toolbar__cancel__wrapper",attrs:{"hover-class":"uv-hover-class"}},[i("v-uni-text",{staticClass:"uv-toolbar__wrapper__cancel",style:{color:e.cancelColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))])],1),e.title?i("v-uni-text",{staticClass:"uv-toolbar__title uv-line-1"},[e._v(e._s(e.title))]):e._e(),i("v-uni-view",{staticClass:"uv-toolbar__confirm__wrapper",attrs:{"hover-class":"uv-hover-class"}},[i("v-uni-text",{staticClass:"uv-toolbar__wrapper__confirm",style:{color:e.confirmColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v(e._s(e.confirmText))])],1)],1):e._e()},a=[]},"8ccf":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var a,r,o=n(i("9b1b")),s={props:(0,o.default)({value:{type:[Boolean,String,Number],default:!1},modelValue:{type:[Boolean,String,Number],default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[String,Number],default:25},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#fff"},activeValue:{type:[String,Number,Boolean],default:!0},inactiveValue:{type:[String,Number,Boolean],default:!1},asyncChange:{type:Boolean,default:!1},space:{type:[String,Number],default:0}},null===(a=uni.$uv)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.switch)};t.default=s},"93f1":function(e,t,i){"use strict";i.r(t);var n=i("88fc"),a=i("a949");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("3394");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"57ebf702",null,!1,n["a"],void 0);t["default"]=s.exports},"9f61":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-83d11034], uni-scroll-view[data-v-83d11034], uni-swiper-item[data-v-83d11034]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-switch[data-v-83d11034]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.uv-switch__node[data-v-83d11034]{display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.uv-switch__bg[data-v-83d11034]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.uv-switch--disabled[data-v-83d11034]{opacity:.6}',""]),e.exports=t},a651:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var a,r,o=n(i("9b1b")),s={props:(0,o.default)({showToolbar:{type:Boolean,default:!0},title:{type:String,default:""},round:{type:[String,Number],default:0},columns:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},itemHeight:{type:[String,Number],default:44},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"},cancelColor:{type:String,default:"#909193"},confirmColor:{type:String,default:"#3c9cff"},color:{type:String,default:""},activeColor:{type:String,default:""},visibleItemCount:{type:[String,Number],default:5},keyName:{type:String,default:"text"},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickConfirm:{type:Boolean,default:!0},defaultIndex:{type:Array,default:function(){return[]}},immediateChange:{type:Boolean,default:!0}},null===(a=uni.$uv)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.picker)};t.default=s},a949:function(e,t,i){"use strict";i.r(t);var n=i("6533"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},b02c:function(e,t,i){"use strict";i.r(t);var n=i("f393"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},b117:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uv-line-1[data-v-57ebf702]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.uv-line-2[data-v-57ebf702]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.uv-line-3[data-v-57ebf702]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.uv-line-4[data-v-57ebf702]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.uv-line-5[data-v-57ebf702]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.uv-border-bottom[data-v-57ebf702]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.uv-hover-class[data-v-57ebf702]{opacity:.7}uni-view[data-v-57ebf702], uni-scroll-view[data-v-57ebf702], uni-swiper-item[data-v-57ebf702]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-toolbar[data-v-57ebf702]{height:42px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.uv-toolbar__wrapper__cancel[data-v-57ebf702]{color:#909193;font-size:15px;padding:0 15px}.uv-toolbar__title[data-v-57ebf702]{color:#303133;padding:0 %?60?%;font-size:16px;flex:1;text-align:center}.uv-toolbar__wrapper__confirm[data-v-57ebf702]{color:#3c9cff;font-size:15px;padding:0 15px}',""]),e.exports=t},b425:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2132")),r=n(i("fe21")),o=n(i("8ccf")),s={name:"uv-switch",mixins:[a.default,r.default,o.default],data:function(){return{bgColor:"#ffffff",innerValue:!1}},watch:{value:{immediate:!0,handler:function(e){if(e!==this.inactiveValue&&e!==this.activeValue)return this.$uv.error("v-model绑定的值必须为inactiveValue、activeValue二者之一");this.innerValue=e}}},created:function(){this.innerValue=this.value||this.modelValue},computed:{isActive:function(){return this.innerValue===this.activeValue},switchStyle:function(){var e={};return e.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)+2),e.height=this.$uv.addUnit(this.$uv.getPx(this.size)+2),this.customInactiveColor&&(e.borderColor="rgba(0, 0, 0, 0)"),e.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,e},nodeStyle:function(){var e={};e.width=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space),e.height=this.$uv.addUnit(this.$uv.getPx(this.size)-this.space);var t=this.isActive?this.$uv.addUnit(this.space):this.$uv.addUnit(this.$uv.getPx(this.size));return e.transform="translateX(-".concat(t,")"),e},bgStyle:function(){var e={};return e.width=this.$uv.addUnit(2*this.$uv.getPx(this.size)-this.$uv.getPx(this.size)/2),e.height=this.$uv.addUnit(this.$uv.getPx(this.size)),e.backgroundColor=this.inactiveColor,e.transform="scale(".concat(this.isActive?0:1,")"),e},customInactiveColor:function(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler:function(){var e=this;if(!this.disabled&&!this.loading){var t=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||(this.$emit("input",t),this.$emit("update:modelValue",t)),this.$nextTick((function(){e.$emit("change",t)}))}}}};t.default=s},bde2:function(e,t,i){"use strict";i.r(t);var n=i("0616"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},be2d:function(e,t,i){var n=i("7c7d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("9c4e4116",n,!0,{sourceMap:!1,shadowMode:!1})},e73a:function(e,t,i){"use strict";var n=i("f2ae"),a=i.n(n);a.a},e92a:function(e,t,i){"use strict";i.r(t);var n=i("f1f1"),a=i("b02c");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("390f");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"026052a5",null,!1,n["a"],void 0);t["default"]=s.exports},f1f1:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uvNavbar:i("317d").default,uvSwitch:i("45d4").default,uvIcon:i("8278").default,uvPicker:i("667a").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("uv-navbar",{attrs:{leftIconColor:e.navstyle.txtColor,titleStyle:e.titleStyle,title:e.navstyle.title,leftIcon:e.navstyle.leftIcon,bgColor:e.navstyle.bgColor,fixed:!1,safeAreaInsetTop:!1},on:{leftClick:function(t){arguments[0]=t=e.$handleEvent(t),e.leftClick.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"password_box"},[i("v-uni-view",{staticClass:"password_list"},[i("v-uni-view",{staticClass:"password_laber"},[e._v("设为默认地址")]),i("v-uni-view",{staticClass:"right"},[i("uv-switch",{attrs:{size:"25"},model:{value:e.userForm.adress,callback:function(t){e.$set(e.userForm,"adress",t)},expression:"userForm.adress"}})],1)],1),i("v-uni-view",{staticClass:"password_list"},[i("v-uni-view",{staticClass:"password_laber"},[e._v("收货人")]),i("v-uni-input",{staticClass:"uni-input",attrs:{type:"text"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),i("v-uni-view",{staticClass:"password_list"},[i("v-uni-view",{staticClass:"password_laber"},[e._v("手机号码")]),i("v-uni-input",{staticClass:"uni-input",attrs:{type:"number"},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}})],1),i("v-uni-view",{staticClass:"password_list"},[i("v-uni-view",{staticClass:"password_laber"},[e._v("收货地址")]),i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.userForm.place))])],1),i("v-uni-view",{staticClass:"password_list"},[i("v-uni-view",{staticClass:"password_laber",staticStyle:{width:"30%"}},[e._v("重新设置详细地址")]),i("v-uni-view",{staticClass:"right"},[i("uv-switch",{attrs:{size:"25"},model:{value:e.reseat,callback:function(t){e.reseat=t},expression:"reseat"}})],1)],1),e.reseat?i("v-uni-view",{staticClass:"password_list",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"password_laber"},[e._v("所在地区")]),i("v-uni-input",{staticClass:"uni-input",attrs:{type:"text"},model:{value:e.addressName,callback:function(t){e.addressName=t},expression:"addressName"}}),i("uv-icon",{attrs:{name:"arrow-right"}})],1):e._e(),e.reseat?i("v-uni-view",{staticClass:"password_view"},[i("v-uni-view",{staticClass:"password_laber",staticStyle:{width:"100%",height:"36px","line-height":"36px","text-align":"left","padding-left":"15px"}},[e._v("详细地址")]),i("v-uni-view",{staticClass:"password_textarea"},[i("v-uni-textarea",{staticClass:"uni-textarea",attrs:{maxlength:"140"},model:{value:e.userForm.userAddress,callback:function(t){e.$set(e.userForm,"userAddress",t)},expression:"userForm.userAddress"}})],1)],1):e._e(),i("v-uni-view",{staticClass:"delete"},[i("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteClick.apply(void 0,arguments)}}},[e._v("删除收货地址")])],1),i("v-uni-button",{staticClass:"exitbtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmClick()}}},[e._v("确定")]),i("uv-picker",{ref:"picker",attrs:{loading:e.loading,columns:e.addressList,keyName:"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}})],1)],1)},r=[]},f2ae:function(e,t,i){var n=i("54e5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("967d").default;a("2c5a5d32",n,!0,{sourceMap:!1,shadowMode:!1})},f393:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("4100"),i("64aa"),i("bd06"),i("5c47"),i("0506");var n=i("5354e"),a={onLoad:function(e){var t=this;this.id=e.id,this.userForm.addressId=e.id,(0,n.setAddress)(this.id).then((function(e){t.adressInfo=e.data,1==t.adressInfo.isDefault?t.userForm.adress=!0:t.userForm.adress=!1,t.userForm.name=t.adressInfo.name,t.userForm.phone=t.adressInfo.phone,t.userForm.userAddress=t.adressInfo.userAddress,t.userForm.cityId=t.adressInfo.cityId,t.userForm.areaId=t.adressInfo.areaId,t.userForm.provinceId=t.adressInfo.provinceId;var i=t.adressInfo.provinceName+t.adressInfo.cityName+t.adressInfo.areaName;t.addressName=i,t.getData(),console.log(t.adressInfo,1111)}))},data:function(){return{navstyle:{title:"编辑地址",txtColor:"#333333",bgColor:"#FFFFFF",leftIcon:"arrow-left"},titleStyle:{fontWeight:700},userForm:{adress:!1,addressId:"",name:"",phone:"",provinceId:"",cityId:"",areaId:"",userAddress:"",isDefault:"0",provinceName:"",cityName:"",areaName:""},reseat:!1,addressName:"",id:"",adressInfo:{},loading:!0,provinces:[],citys:[],areas:[],pickerValue:[0,0,0],defaultValue:[3442,1,2]}},created:function(){this.getData()},computed:{addressList:function(){return[this.provinces,this.citys,this.areas]}},methods:{leftClick:function(){uni.reLaunch({url:"/pages/bonus/address"})},getData:function(){var e=this;(0,n.areaList)().then((function(t){var i=t.data;console.log(i,33333),console.log("获取的数据：",t),e.provinces=i.sort((function(e,t){return Number(e.code)>Number(t.code)?1:-1})),console.log(e.provinces),e.handlePickValueDefault(),setTimeout((function(){e.loading=!1}),200)}))},change:function(e){if(!this.loading){var t,i,n=e.columnIndex,a=e.index,r=e.indexs;if(0===n)this.citys=(null===(t=this.provinces[a])||void 0===t?void 0:t.children)||[],this.areas=(null===(i=this.citys[0])||void 0===i?void 0:i.children)||[],this.$refs.picker.setIndexs([a,0,0],!0);else if(1===n){var o;this.areas=(null===(o=this.citys[a])||void 0===o?void 0:o.children)||[],this.$refs.picker.setIndexs(r,!0)}}},handlePickValueDefault:function(){var e,t,i=this;this.pickerValue[0]=this.provinces.findIndex((function(e){return Number(e.id)===i.defaultValue[0]})),this.citys=(null===(e=this.provinces[this.pickerValue[0]])||void 0===e?void 0:e.children)||[],this.pickerValue[1]=this.citys.findIndex((function(e){return Number(e.id)===i.defaultValue[1]})),this.areas=(null===(t=this.citys[this.pickerValue[1]])||void 0===t?void 0:t.children)||[],this.pickerValue[2]=this.areas.findIndex((function(e){return Number(e.id)===i.defaultValue[2]})),this.$refs.picker.setIndexs([this.pickerValue[0],this.pickerValue[1],this.pickerValue[2]],!0)},open:function(){this.$refs.picker.open(),this.handlePickValueDefault()},confirm:function(e){this.userForm.provinceId=e.value[0].id,this.userForm.provinceName=e.value[0].name,this.userForm.cityId=e.value[1].id,this.userForm.cityName=e.value[1].name,this.userForm.areaId=e.value[2].id,this.userForm.areaName=e.value[2].name,this.addressName=e.value[0].name+"/"+e.value[1].name+"/"+e.value[2].name},confirmClick:function(){this.userForm.name?this.userForm.phone?/^1[3456789]\d{9}$/.test(this.userForm.phone)?this.userForm.areaId?this.userForm.userAddress?(this.userForm.adress=this.userForm.isDefault=1,delete this.userForm.adress,(0,n.editAddress)(this.userForm).then((function(e){1==e.code&&(uni.showToast({icon:"none",title:e.msg,duration:2e3}),uni.reLaunch({url:"/pages/bonus/address"}))}))):uni.showToast({icon:"none",title:"请输入详细地址"}):uni.showToast({icon:"none",title:"请选择省市区"}):uni.showToast({icon:"none",title:"手机号码格式不正确"}):uni.showToast({icon:"none",title:"请输入手机号"}):uni.showToast({icon:"none",title:"请输入收货人姓名"})},deleteClick:function(){(0,n.delAddress)({addressId:this.userForm.addressId}).then((function(e){1==e.code&&(uni.showToast({icon:"none",title:e.msg,duration:2e3}),uni.reLaunch({url:"/pages/bonus/address"}))}))}}};t.default=a},fb68:function(e,t,i){"use strict";i.r(t);var n=i("b425"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a}}]);