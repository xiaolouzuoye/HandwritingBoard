(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/v-tabs/v-tabs"],{

/***/ 59:
/*!************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-tabs.vue?vue&type=template&id=552d3ab8&scoped=true& */ 60);
/* harmony import */ var _v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-tabs.vue?vue&type=script&lang=js& */ 62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v-tabs.vue?vue&type=style&index=0&id=552d3ab8&lang=scss&scoped=true& */ 64);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "552d3ab8",
  null,
  false,
  _v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/v-tabs/v-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=template&id=552d3ab8&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./v-tabs.vue?vue&type=template&id=552d3ab8&scoped=true& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_template_id_552d3ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 61:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=template&id=552d3ab8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 62:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./v-tabs.vue?vue&type=script&lang=js& */ 63);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * v-tabs
 * @property {Number} value 选中的下标
 * @property {Array} tabs tabs 列表
 * @property {String} bgColor = '#fff' 背景颜色
 * @property {String} color = '#333' 默认颜色
 * @property {String} activeColor = '#2979ff' 选中文字颜色
 * @property {String} fontSize = '28rpx' 默认文字大小
 * @property {String} activeFontSize = '28rpx' 选中文字大小
 * @property {Boolean} bold = [true | false] 选中文字是否加粗
 * @property {Boolean} scroll = [true | false] 是否滚动
 * @property {String} height = '60rpx' tab 的高度
 * @property {String} lineHeight = '10rpx' 下划线的高度
 * @property {String} lineColor = '#2979ff' 下划线的颜色
 * @property {Number} lineScale = 0.5 下划线的宽度缩放比例
 * @property {String} lineRadius = '10rpx' 下划线圆角
 * @property {Boolean} pills = [true | false] 是否胶囊样式
 * @property {String} pillsColor = '#2979ff' 胶囊背景色
 * @property {String} pillsBorderRadius = '10rpx' 胶囊圆角大小
 * @property {String} field 如果是对象，显示的键名
 * @property {Boolean} fixed = [true | false] 是否固定
 * @property {String} paddingItem = '0 22rpx' 选项的边距
 *
 * @event {Function(current)} change 改变标签触发
 */var _default2 =
{
  props: {
    value: {
      type: Number,
      default: 0 },

    tabs: {
      type: Array,
      default: function _default() {
        return [];
      } },

    bgColor: {
      type: String,
      default: '#fff' },

    padding: {
      type: String,
      default: '0' },

    color: {
      type: String,
      default: '#333' },

    activeColor: {
      type: String,
      default: '#2979ff' },

    fontSize: {
      type: String,
      default: '28rpx' },

    activeFontSize: {
      type: String,
      default: '32rpx' },

    bold: {
      type: Boolean,
      default: true },

    scroll: {
      type: Boolean,
      default: true },

    height: {
      type: String,
      default: '70rpx' },

    lineColor: {
      type: String,
      default: '#2979ff' },

    lineHeight: {
      type: String,
      default: '10rpx' },

    lineScale: {
      type: Number,
      default: 0.5 },

    lineRadius: {
      type: String,
      default: '10rpx' },

    pills: {
      type: Boolean,
      deafult: false },

    pillsColor: {
      type: String,
      default: '#2979ff' },

    pillsBorderRadius: {
      type: String,
      default: '10rpx' },

    field: {
      type: String,
      default: '' },

    fixed: {
      type: Boolean,
      default: false },

    paddingItem: {
      type: String,
      default: '0 22rpx' } },


  data: function data() {
    return {
      elId: '',
      lineWidth: 30,
      currentWidth: 0, // 当前选项的宽度
      lineLeft: 0, // 滑块距离左侧的位置
      pillsLeft: 0, // 胶囊距离左侧的位置
      scrollLeft: 0, // 距离左边的位置
      containerWidth: 0, // 容器的宽度
      current: 0 // 当前选中项
    };
  },
  watch: {
    value: function value(newVal) {var _this = this;
      this.current = newVal;
      this.$nextTick(function () {
        _this.getTabItemWidth();
      });
    },
    current: function current(newVal) {
      this.$emit('input', newVal);
    },
    tabs: function tabs(newVal) {var _this2 = this;
      this.$nextTick(function () {
        _this2.getTabItemWidth();
      });
    } },

  methods: {
    // 产生随机字符串
    randomString: function randomString(len) {
      len = len || 32;
      var $chars =
      'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },
    // 切换事件
    change: function change(index) {
      if (this.current !== index) {
        this.current = index;

        this.$emit('change', index);
      }
    },
    // 获取左移动位置
    getTabItemWidth: function getTabItemWidth() {var _this3 = this;
      var query = uni.
      createSelectorQuery().

      in(this);

      // 获取容器的宽度
      query.
      select("#".concat(this.elId)).
      boundingClientRect(function (data) {
        if (!_this3.containerWidth && data) {
          _this3.containerWidth = data.width;
        }
      }).
      exec();
      // 获取所有的 tab-item 的宽度
      query.
      selectAll('.v-tabs__container-item').
      boundingClientRect(function (data) {
        if (!data) {
          return;
        }
        var lineLeft = 0;
        var currentWidth = 0;
        if (data) {
          for (var i = 0; i < data.length; i++) {
            if (i < _this3.current) {
              lineLeft += data[i].width;
            } else if (i == _this3.current) {
              currentWidth = data[i].width;
            } else {
              break;
            }
          }
        }
        // 当前滑块的宽度
        _this3.currentWidth = currentWidth;
        // 缩放后的滑块宽度
        _this3.lineWidth = currentWidth * _this3.lineScale * 1;
        // 滑块作移动的位置
        _this3.lineLeft = lineLeft + currentWidth / 2;
        // 胶囊距离左侧的位置
        _this3.pillsLeft = lineLeft;
        // 计算滚动的距离左侧的位置
        if (_this3.scroll) {
          _this3.scrollLeft = _this3.lineLeft - _this3.containerWidth / 2;
        }
      }).
      exec();
    } },

  mounted: function mounted() {var _this4 = this;
    this.elId = 'xfjpeter_' + this.randomString();
    this.current = this.value;
    this.$nextTick(function () {
      _this4.getTabItemWidth();
    });
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 64:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=style&index=0&id=552d3ab8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../uni/HBuilderX.2.8.8.20200820.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./v-tabs.vue?vue&type=style&index=0&id=552d3ab8&lang=scss&scoped=true& */ 65);
/* harmony import */ var _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_HBuilderX_2_8_8_20200820_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_v_tabs_vue_vue_type_style_index_0_id_552d3ab8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/1/sg/components/v-tabs/v-tabs.vue?vue&type=style&index=0&id=552d3ab8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wLzEvc2cvY29tcG9uZW50cy92LXRhYnMvdi10YWJzLnZ1ZT8yMWY0Iiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvMS9zZy9jb21wb25lbnRzL3YtdGFicy92LXRhYnMudnVlPzQwOWEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC8xL3NnL2NvbXBvbmVudHMvdi10YWJzL3YtdGFicy52dWU/ZTEyYSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wLzEvc2cvY29tcG9uZW50cy92LXRhYnMvdi10YWJzLnZ1ZT85NWY3IiwidW5pLWFwcDovLy9jb21wb25lbnRzL3YtdGFicy92LXRhYnMudnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvMS9zZy9jb21wb25lbnRzL3YtdGFicy92LXRhYnMudnVlPzc4ZDAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC8xL3NnL2NvbXBvbmVudHMvdi10YWJzL3YtdGFicy52dWU/OWExYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStIO0FBQy9IO0FBQzBEO0FBQ0w7QUFDc0M7OztBQUczRjtBQUNxTTtBQUNyTSxnQkFBZ0IsK01BQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQTZ3QixDQUFnQiwweEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrRWp5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREE7O0FBS0E7QUFDQSxpQkFEQTtBQUVBLGFBRkEsc0JBRUE7QUFDQTtBQUNBLE9BSkEsRUFMQTs7QUFXQTtBQUNBLGtCQURBO0FBRUEscUJBRkEsRUFYQTs7QUFlQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFmQTs7QUFtQkE7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBbkJBOztBQXVCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUF2QkE7O0FBMkJBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQSxFQTNCQTs7QUErQkE7QUFDQSxrQkFEQTtBQUVBLHNCQUZBLEVBL0JBOztBQW1DQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUFuQ0E7O0FBdUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQXZDQTs7QUEyQ0E7QUFDQSxrQkFEQTtBQUVBLHNCQUZBLEVBM0NBOztBQStDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUEvQ0E7O0FBbURBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQSxFQW5EQTs7QUF1REE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBdkRBOztBQTJEQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUEzREE7O0FBK0RBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQS9EQTs7QUFtRUE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBbkVBOztBQXVFQTtBQUNBLGtCQURBO0FBRUEsc0JBRkEsRUF2RUE7O0FBMkVBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQTNFQTs7QUErRUE7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBL0VBOztBQW1GQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFuRkEsRUFEQTs7O0FBeUZBLE1BekZBLGtCQXlGQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLG1CQUZBO0FBR0EscUJBSEEsRUFHQTtBQUNBLGlCQUpBLEVBSUE7QUFDQSxrQkFMQSxFQUtBO0FBQ0EsbUJBTkEsRUFNQTtBQUNBLHVCQVBBLEVBT0E7QUFDQSxnQkFSQSxDQVFBO0FBUkE7QUFVQSxHQXBHQTtBQXFHQTtBQUNBLFNBREEsaUJBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBTkE7QUFPQSxXQVBBLG1CQU9BLE1BUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLFFBVkEsZ0JBVUEsTUFWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQWRBLEVBckdBOztBQXFIQTtBQUNBO0FBQ0EsZ0JBRkEsd0JBRUEsR0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQURBLENBRkEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQUNBLFVBZEEsa0JBY0EsS0FkQSxFQWNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FwQkE7QUFxQkE7QUFDQSxtQkF0QkEsNkJBc0JBO0FBQ0E7QUFDQSx5QkFEQTs7QUFHQSxRQUhBLENBR0EsSUFIQTs7QUFLQTtBQUNBO0FBQ0EsWUFEQSxZQUNBLFNBREE7QUFFQSx3QkFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLFVBUEE7QUFRQTtBQUNBO0FBQ0EsZUFEQSxDQUNBLHlCQURBO0FBRUEsd0JBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQS9CQTtBQWdDQSxVQWhDQTtBQWlDQSxLQXZFQSxFQXJIQTs7QUE4TEEsU0E5TEEscUJBOExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsR0FwTUEsRTs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQUE7QUFBQTtBQUFrN0MsQ0FBZ0IsbzRDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdDhDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tcG9uZW50cy92LXRhYnMvdi10YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92LXRhYnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1MmQzYWI4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdi10YWJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdi10YWJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi92LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTUyZDNhYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjU1MmQzYWI4XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdi10YWJzL3YtdGFicy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3YtdGFicy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUyZDNhYjgmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3YtdGFicy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92LXRhYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG4gIDx2aWV3IDppZD1cImVsSWRcIiBjbGFzcz1cInYtdGFic1wiPlxyXG4gICAgPHNjcm9sbC12aWV3XHJcbiAgICAgIDpzY3JvbGwteD1cInNjcm9sbFwiXHJcbiAgICAgIDpzY3JvbGwtbGVmdD1cInNjcm9sbCA/IHNjcm9sbExlZnQgOiAwXCJcclxuICAgICAgOnNjcm9sbC13aXRoLWFuaW1hdGlvbj1cInNjcm9sbFwiXHJcbiAgICAgIDpzdHlsZT1cInsgcG9zaXRpb246IGZpeGVkID8gJ2ZpeGVkJyA6ICdyZWxhdGl2ZScsIHpJbmRleDogMTk5MyB9XCJcclxuICAgID5cclxuICAgICAgPHZpZXdcclxuICAgICAgICBjbGFzcz1cInYtdGFic19fY29udGFpbmVyXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBzY3JvbGwgPyAnaW5saW5lLWZsZXgnIDogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2hpdGVTcGFjZTogc2Nyb2xsID8gJ25vd3JhcCcgOiAnbm9ybWFsJyxcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGJnQ29sb3IsXHJcbiAgICAgICAgICBwYWRkaW5nXHJcbiAgICAgICAgfVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dmlld1xyXG4gICAgICAgICAgY2xhc3M9XCJ2LXRhYnNfX2NvbnRhaW5lci1pdGVtXCJcclxuICAgICAgICAgIHYtZm9yPVwiKHYsIGkpIGluIHRhYnNcIlxyXG4gICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICBjb2xvcjogY3VycmVudCA9PSBpID8gYWN0aXZlQ29sb3IgOiBjb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IGN1cnJlbnQgPT0gaSA/IGZvbnRTaXplIDogZm9udFNpemVcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgQGNsaWNrPVwiY2hhbmdlKGkpXCJcclxuICAgICAgICA+XHJcblx0XHQ8aW1hZ2UgOnNyYz1cInYuaWNvblwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG4gICAgICAgIDx2aWV3Pnt7IHYudGV4dCB9fTwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXdcclxuICAgICAgICAgIHYtaWY9XCIhcGlsbHNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJ2LXRhYnNfX2NvbnRhaW5lci1saW5lXCJcclxuICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZUNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogbGluZVdpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBsaW5lSGVpZ2h0LFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGxpbmVSYWRpdXMsXHJcbiAgICAgICAgICAgIGxlZnQ6IGxpbmVMZWZ0ICsgJ3B4JyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtsaW5lV2lkdGggLyAyfXB4KWBcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgID48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXdcclxuICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgY2xhc3M9XCJ2LXRhYnNfX2NvbnRhaW5lci1waWxsc1wiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHBpbGxzQ29sb3IsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogcGlsbHNCb3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIGxlZnQ6IHBpbGxzTGVmdCArICdweCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiBjdXJyZW50V2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgID48L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvc2Nyb2xsLXZpZXc+XHJcbiAgICA8dmlld1xyXG4gICAgICBjbGFzcz1cInYtdGFic19fcGxhY2Vob2xkZXJcIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXhlZCA/IGhlaWdodCA6ICcwJyxcclxuICAgICAgICBwYWRkaW5nXHJcbiAgICAgIH1cIlxyXG4gICAgPjwvdmlldz5cclxuICA8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKipcclxuICogdi10YWJzXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB2YWx1ZSDpgInkuK3nmoTkuIvmoIdcclxuICogQHByb3BlcnR5IHtBcnJheX0gdGFicyB0YWJzIOWIl+ihqFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gYmdDb2xvciA9ICcjZmZmJyDog4zmma/popzoibJcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGNvbG9yID0gJyMzMzMnIOm7mOiupOminOiJslxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gYWN0aXZlQ29sb3IgPSAnIzI5NzlmZicg6YCJ5Lit5paH5a2X6aKc6ImyXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBmb250U2l6ZSA9ICcyOHJweCcg6buY6K6k5paH5a2X5aSn5bCPXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBhY3RpdmVGb250U2l6ZSA9ICcyOHJweCcg6YCJ5Lit5paH5a2X5aSn5bCPXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYm9sZCA9IFt0cnVlIHwgZmFsc2VdIOmAieS4reaWh+Wtl+aYr+WQpuWKoOeyl1xyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHNjcm9sbCA9IFt0cnVlIHwgZmFsc2VdIOaYr+WQpua7muWKqFxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gaGVpZ2h0ID0gJzYwcnB4JyB0YWIg55qE6auY5bqmXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsaW5lSGVpZ2h0ID0gJzEwcnB4JyDkuIvliJLnur/nmoTpq5jluqZcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxpbmVDb2xvciA9ICcjMjk3OWZmJyDkuIvliJLnur/nmoTpopzoibJcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxpbmVTY2FsZSA9IDAuNSDkuIvliJLnur/nmoTlrr3luqbnvKnmlL7mr5TkvotcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxpbmVSYWRpdXMgPSAnMTBycHgnIOS4i+WIkue6v+WchuinklxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHBpbGxzID0gW3RydWUgfCBmYWxzZV0g5piv5ZCm6IO25ZuK5qC35byPXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwaWxsc0NvbG9yID0gJyMyOTc5ZmYnIOiDtuWbiuiDjOaZr+iJslxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcGlsbHNCb3JkZXJSYWRpdXMgPSAnMTBycHgnIOiDtuWbiuWchuinkuWkp+Wwj1xyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZmllbGQg5aaC5p6c5piv5a+56LGh77yM5pi+56S655qE6ZSu5ZCNXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZml4ZWQgPSBbdHJ1ZSB8IGZhbHNlXSDmmK/lkKblm7rlrppcclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHBhZGRpbmdJdGVtID0gJzAgMjJycHgnIOmAiemhueeahOi+uei3nVxyXG4gKlxyXG4gKiBAZXZlbnQge0Z1bmN0aW9uKGN1cnJlbnQpfSBjaGFuZ2Ug5pS55Y+Y5qCH562+6Kem5Y+RXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIHRhYnM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZ0NvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJyNmZmYnXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcwJ1xyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJyMzMzMnXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlQ29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnIzI5NzlmZidcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcyOHJweCdcclxuICAgIH0sXHJcbiAgICBhY3RpdmVGb250U2l6ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICczMnJweCdcclxuICAgIH0sXHJcbiAgICBib2xkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBzY3JvbGw6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICc3MHJweCdcclxuICAgIH0sXHJcbiAgICBsaW5lQ29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnIzI5NzlmZidcclxuICAgIH0sXHJcbiAgICBsaW5lSGVpZ2h0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJzEwcnB4J1xyXG4gICAgfSxcclxuICAgIGxpbmVTY2FsZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDAuNVxyXG4gICAgfSxcclxuICAgIGxpbmVSYWRpdXM6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnMTBycHgnXHJcbiAgICB9LFxyXG4gICAgcGlsbHM6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVhZnVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwaWxsc0NvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJyMyOTc5ZmYnXHJcbiAgICB9LFxyXG4gICAgcGlsbHNCb3JkZXJSYWRpdXM6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnMTBycHgnXHJcbiAgICB9LFxyXG4gICAgZmllbGQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGZpeGVkOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZ0l0ZW06IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnMCAyMnJweCdcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbElkOiAnJyxcclxuICAgICAgbGluZVdpZHRoOiAzMCxcclxuICAgICAgY3VycmVudFdpZHRoOiAwLCAvLyDlvZPliY3pgInpobnnmoTlrr3luqZcclxuICAgICAgbGluZUxlZnQ6IDAsIC8vIOa7keWdl+i3neemu+W3puS+p+eahOS9jee9rlxyXG4gICAgICBwaWxsc0xlZnQ6IDAsIC8vIOiDtuWbiui3neemu+W3puS+p+eahOS9jee9rlxyXG4gICAgICBzY3JvbGxMZWZ0OiAwLCAvLyDot53nprvlt6bovrnnmoTkvY3nva5cclxuICAgICAgY29udGFpbmVyV2lkdGg6IDAsIC8vIOWuueWZqOeahOWuveW6plxyXG4gICAgICBjdXJyZW50OiAwIC8vIOW9k+WJjemAieS4remhuVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlKG5ld1ZhbCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBuZXdWYWxcclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0VGFiSXRlbVdpZHRoKClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjdXJyZW50KG5ld1ZhbCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG5ld1ZhbClcclxuICAgIH0sXHJcbiAgICB0YWJzKG5ld1ZhbCkge1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRUYWJJdGVtV2lkdGgoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy8g5Lqn55Sf6ZqP5py65a2X56ym5LiyXHJcbiAgICByYW5kb21TdHJpbmcobGVuKSB7XHJcbiAgICAgIGxlbiA9IGxlbiB8fCAzMlxyXG4gICAgICBsZXQgJGNoYXJzID1cclxuICAgICAgICAnQUJDREVGR0hKS01OUFFSU1RXWFlaYWJjZGVmaGlqa21ucHJzdHd4eXoyMzQ1Njc4JyAvKioqKum7mOiupOWOu+aOieS6huWuueaYk+a3t+a3hueahOWtl+espm9PTGwsOWdxLFZ2LFV1LEkxKioqKi9cclxuICAgICAgbGV0IG1heFBvcyA9ICRjaGFycy5sZW5ndGhcclxuICAgICAgbGV0IHB3ZCA9ICcnXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBwd2QgKz0gJGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhQb3MpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwd2RcclxuICAgIH0sXHJcbiAgICAvLyDliIfmjaLkuovku7ZcclxuICAgIGNoYW5nZShpbmRleCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50ICE9PSBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGluZGV4XHJcblxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGluZGV4KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W5bem56e75Yqo5L2N572uXHJcbiAgICBnZXRUYWJJdGVtV2lkdGgoKSB7XHJcbiAgICAgIGxldCBxdWVyeSA9IHVuaVxyXG4gICAgICAgIC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuICAgICAgICAvLyAjaWZuZGVmIE1QLUFMSVBBWVxyXG4gICAgICAgIC5pbih0aGlzKVxyXG4gICAgICAvLyAjZW5kaWZcclxuICAgICAgLy8g6I635Y+W5a655Zmo55qE5a695bqmXHJcbiAgICAgIHF1ZXJ5XHJcbiAgICAgICAgLnNlbGVjdChgIyR7dGhpcy5lbElkfWApXHJcbiAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcldpZHRoICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJXaWR0aCA9IGRhdGEud2lkdGhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5leGVjKClcclxuICAgICAgLy8g6I635Y+W5omA5pyJ55qEIHRhYi1pdGVtIOeahOWuveW6plxyXG4gICAgICBxdWVyeVxyXG4gICAgICAgIC5zZWxlY3RBbGwoJy52LXRhYnNfX2NvbnRhaW5lci1pdGVtJylcclxuICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgbGluZUxlZnQgPSAwXHJcbiAgICAgICAgICBsZXQgY3VycmVudFdpZHRoID0gMFxyXG4gICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGkgPCB0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxpbmVMZWZ0ICs9IGRhdGFbaV0ud2lkdGhcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gdGhpcy5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50V2lkdGggPSBkYXRhW2ldLndpZHRoXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDlvZPliY3mu5HlnZfnmoTlrr3luqZcclxuICAgICAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gY3VycmVudFdpZHRoXHJcbiAgICAgICAgICAvLyDnvKnmlL7lkI7nmoTmu5HlnZflrr3luqZcclxuICAgICAgICAgIHRoaXMubGluZVdpZHRoID0gY3VycmVudFdpZHRoICogdGhpcy5saW5lU2NhbGUgKiAxXHJcbiAgICAgICAgICAvLyDmu5HlnZfkvZznp7vliqjnmoTkvY3nva5cclxuICAgICAgICAgIHRoaXMubGluZUxlZnQgPSBsaW5lTGVmdCArIGN1cnJlbnRXaWR0aCAvIDJcclxuICAgICAgICAgIC8vIOiDtuWbiui3neemu+W3puS+p+eahOS9jee9rlxyXG4gICAgICAgICAgdGhpcy5waWxsc0xlZnQgPSBsaW5lTGVmdFxyXG4gICAgICAgICAgLy8g6K6h566X5rua5Yqo55qE6Led56a75bem5L6n55qE5L2N572uXHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gdGhpcy5saW5lTGVmdCAtIHRoaXMuY29udGFpbmVyV2lkdGggLyAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXhlYygpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5lbElkID0gJ3hmanBldGVyXycgKyB0aGlzLnJhbmRvbVN0cmluZygpXHJcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnZhbHVlXHJcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiSXRlbVdpZHRoKClcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4udi10YWJzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAyMDBycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgc2Nyb2xsLXZpZXd7XHJcblx0ICB3aWR0aDogNzUwcnB4O1xyXG4gIH1cclxuICAmX19jb250YWluZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHQgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAvLyBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdCAgZmxleC13cmFwOiB3cmFwO1xyXG5cdCAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICBwYWRkaW5nOiAwIDM1cnB4O1xyXG5cdCAgcGFkZGluZy1ib3R0b206IDEwcnB4O1xyXG5cdCAgaW1hZ2V7XHJcblx0XHQgIHdpZHRoOiA4MHJweDtcclxuXHRcdCAgaGVpZ2h0OiA4MHJweDtcclxuXHRcdCAgZGlzcGxheTogYmxvY2s7XHJcblx0ICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1saW5lIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXBpbGxzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAvZGVlcC8gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTUyZDNhYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL3VuaS9IQnVpbGRlclguMi44LjguMjAyMDA4MjAuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi91bmkvSEJ1aWxkZXJYLjIuOC44LjIwMjAwODIwLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi92LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTUyZDNhYjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxOTc2ODIzMDY2OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJDOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvdW5pL0hCdWlsZGVyWC4yLjguOC4yMDIwMDgyMC5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/v-tabs/v-tabs-create-component',
    {
        'components/v-tabs/v-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(59))
        })
    },
    [['components/v-tabs/v-tabs-create-component']]
]);
