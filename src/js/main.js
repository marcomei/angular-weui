/**
 * @name weui.js
 * @description weui Angular集成
 * @author xcold
 * @date 2016/4/4
 */
'use strict';

(function(window, document) {
	window.weui = window.weui || {};
	window.weui.version = '0.0.1';
	window.weuiModule = angular.module('weui');

})(window, document);

var extend = angular.extend,
	forEach = angular.forEach,
	isDefined = angular.isDefined,
	isNumber = angular.isNumber,
	isString = angular.isString,
	jqLite = angular.element,
	noop = angular.noop;