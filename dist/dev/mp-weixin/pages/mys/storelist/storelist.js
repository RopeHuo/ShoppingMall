(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/mys/storelist/storelist"],{221:
/*!********************************************************************!*\
  !*** ./src/main.js?{"page":"pages%2Fmys%2Fstorelist%2Fstorelist"} ***!
  \********************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){e(/*! uni-pages */4);n(e(/*! vue */2));function n(t){return t&&t.__esModule?t:{default:t}}t(n(e(/*! ./pages/mys/storelist/storelist.vue */222)).default)}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},222:
/*!***********************************************!*\
  !*** ./src/pages/mys/storelist/storelist.vue ***!
  \***********************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! ./storelist.vue?vue&type=template&id=0d63add3& */223),o=e(/*! ./storelist.vue?vue&type=script&lang=js& */225);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e(/*! ./storelist.vue?vue&type=style&index=0&lang=scss& */227);var a=e(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */24),s=Object(a.default)(o.default,r.render,r.staticRenderFns,!1,null,null,null);s.options.__file="src/pages/mys/storelist/storelist.vue",n.default=s.exports},223:
/*!******************************************************************************!*\
  !*** ./src/pages/mys/storelist/storelist.vue?vue&type=template&id=0d63add3& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./storelist.vue?vue&type=template&id=0d63add3& */224);e.d(n,"render",function(){return r.render}),e.d(n,"staticRenderFns",function(){return r.staticRenderFns})},224:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--15-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/mys/storelist/storelist.vue?vue&type=template&id=0d63add3& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n),e.d(n,"render",function(){return r}),e.d(n,"staticRenderFns",function(){return o});var r=function(){var t=this.$createElement;this._self._c},o=[];r._withStripped=!0},225:
/*!************************************************************************!*\
  !*** ./src/pages/mys/storelist/storelist.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./storelist.vue?vue&type=script&lang=js& */226),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=o.a},226:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/mys/storelist/storelist.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={components:{UniLoadMore:function(){return e.e(/*! import() | components/UniLoadMore/UniLoadMore */"components/UniLoadMore/UniLoadMore").then(e.bind(null,/*! @/components/UniLoadMore/UniLoadMore */346))}},data:function(){return{noData:"more",page:1,listRows:10,dataList:[]}},onShow:function(){this.page=1,this.listRows=10,this.dataList=[],this.reqStoreList()},onReachBottom:function(){if("more"!==this.noData)return!1;this.reqStoreList()},methods:{reqStoreList:function(){var n=this;this.noData="loading";var e=t.getStorageSync("access_token");this.$request.GET({url:this.$api.apiUrl.GET_V6_SHOP_LISTING,data:{token:e,page:this.page,listRows:this.listRows}}).then(function(t){"SUCCESS"===t.code?(t.data.length<10?n.noData="noMore":(n.page++,n.noData="more"),n.dataList=n.dataList.concat(t.data)):n.$api.msg(t.msg)})}}};n.default=r}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},227:
/*!*********************************************************************************!*\
  !*** ./src/pages/mys/storelist/storelist.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var r=e(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../node_modules/css-loader??ref--8-oneOf-1-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../node_modules/vue-loader/lib??vue-loader-options!../../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./storelist.vue?vue&type=style&index=0&lang=scss& */228),o=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n.default=o.a},228:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/mys/storelist/storelist.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}},[[221,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/mys/storelist/storelist.js.map