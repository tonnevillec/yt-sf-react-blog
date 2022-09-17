(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/jquery.instantSearch.js":
/*!*******************************************!*\
  !*** ./assets/js/jquery.instantSearch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * jQuery plugin for an instant searching.
 *
 * @author Oleg Voronkovich <oleg-voronkovich@yandex.ru>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
(function ($) {
  'use strict';

  String.prototype.render = function (parameters) {
    return this.replace(/({{ (\w+) }})/g, function (match, pattern, name) {
      return parameters[name];
    });
  }; // INSTANTS SEARCH PUBLIC CLASS DEFINITION
  // =======================================


  var InstantSearch = function InstantSearch(element, options) {
    this.$input = $(element);
    this.$form = this.$input.closest('form');
    this.$preview = $('<ul class="search-preview list-group">').appendTo(this.$form);
    this.options = $.extend({}, InstantSearch.DEFAULTS, this.$input.data(), options);
    this.$input.keyup(this.debounce());
  };

  InstantSearch.DEFAULTS = {
    minQueryLength: 2,
    limit: 10,
    delay: 500,
    noResultsMessage: 'No results found',
    itemTemplate: '\
                <article class="post">\
                    <h2><a href="{{ url }}">{{ title }}</a></h2>\
                    <p class="post-metadata">\
                       <span class="metadata"><i class="fa fa-calendar"></i> {{ date }}</span>\
                       <span class="metadata"><i class="fa fa-user"></i> {{ author }}</span>\
                    </p>\
                    <p>{{ summary }}</p>\
                </article>'
  };

  InstantSearch.prototype.debounce = function () {
    var delay = this.options.delay;
    var search = this.search;
    var timer = null;
    var self = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        search.apply(self);
      }, delay);
    };
  };

  InstantSearch.prototype.search = function () {
    var query = $.trim(this.$input.val()).replace(/\s{2,}/g, ' ');

    if (query.length < this.options.minQueryLength) {
      this.$preview.empty();
      return;
    }

    var self = this;
    var data = this.$form.serializeArray();
    data['l'] = this.limit;
    $.getJSON(this.$form.attr('action'), data, function (items) {
      self.show(items);
    });
  };

  InstantSearch.prototype.show = function (items) {
    var $preview = this.$preview;
    var itemTemplate = this.options.itemTemplate;

    if (0 === items.length) {
      $preview.html(this.options.noResultsMessage);
    } else {
      $preview.empty();
      $.each(items, function (index, item) {
        $preview.append(itemTemplate.render(item));
      });
    }
  }; // INSTANTS SEARCH PLUGIN DEFINITION
  // =================================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var instance = $this.data('instantSearch');
      var options = _typeof(option) === 'object' && option;
      if (!instance) $this.data('instantSearch', instance = new InstantSearch(this, options));
      if (option === 'search') instance.search();
    });
  }

  $.fn.instantSearch = Plugin;
  $.fn.instantSearch.Constructor = InstantSearch;
})(__webpack_provided_window_dot_jQuery);

/***/ }),

/***/ "./assets/search.js":
/*!**************************!*\
  !*** ./assets/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery.instantSearch.js */ "./assets/js/jquery.instantSearch.js");
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function () {
  $('.search-field').instantSearch({
    delay: 100
  }).keyup();
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es-x/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return MSIE ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  } : scheduler;
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
module.exports = {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setInterval = (__webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setInterval);

// ie9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setTimeout = (__webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js").setTimeout);

// ie9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-dd2802","vendors-node_modules_core-js_internals_validate-arguments-length_js-node_modules_core-js_modu-42008f"], () => (__webpack_exec__("./assets/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxzRUFBc0U7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxpQkFBaUIseUhBQWlEOztBQUVsRTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0U7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JEO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvanF1ZXJ5Lmluc3RhbnRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBqUXVlcnkgcGx1Z2luIGZvciBhbiBpbnN0YW50IHNlYXJjaGluZy5cbiAqXG4gKiBAYXV0aG9yIE9sZWcgVm9yb25rb3ZpY2ggPG9sZWctdm9yb25rb3ZpY2hAeWFuZGV4LnJ1PlxuICogQGF1dGhvciBZb25lbCBDZXJ1dG8gPHlvbmVsY2VydXRvQGdtYWlsLmNvbT5cbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oe3sgKFxcdyspIH19KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHBhdHRlcm4sIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzW25hbWVdO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBJTlNUQU5UUyBTRUFSQ0ggUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBJbnN0YW50U2VhcmNoID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kaW5wdXQgPSAkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRmb3JtID0gdGhpcy4kaW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICB0aGlzLiRwcmV2aWV3ID0gJCgnPHVsIGNsYXNzPVwic2VhcmNoLXByZXZpZXcgbGlzdC1ncm91cFwiPicpLmFwcGVuZFRvKHRoaXMuJGZvcm0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgSW5zdGFudFNlYXJjaC5ERUZBVUxUUywgdGhpcy4kaW5wdXQuZGF0YSgpLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLiRpbnB1dC5rZXl1cCh0aGlzLmRlYm91bmNlKCkpO1xuICAgIH07XG5cbiAgICBJbnN0YW50U2VhcmNoLkRFRkFVTFRTID0ge1xuICAgICAgICBtaW5RdWVyeUxlbmd0aDogMixcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICBub1Jlc3VsdHNNZXNzYWdlOiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gICAgICAgIGl0ZW1UZW1wbGF0ZTogJ1xcXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwb3N0XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxhIGhyZWY9XCJ7eyB1cmwgfX1cIj57eyB0aXRsZSB9fTwvYT48L2gyPlxcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9zdC1tZXRhZGF0YVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YWRhdGFcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiB7eyBkYXRlIH19PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YWRhdGFcIj48aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+IHt7IGF1dGhvciB9fTwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICA8L3A+XFxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgc3VtbWFyeSB9fTwvcD5cXFxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT4nXG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLmRlYm91bmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGVsYXk7XG4gICAgICAgIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2guYXBwbHkoc2VsZik7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJC50cmltKHRoaXMuJGlucHV0LnZhbCgpKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPCB0aGlzLm9wdGlvbnMubWluUXVlcnlMZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuJHByZXZpZXcuZW1wdHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLiRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIGRhdGFbJ2wnXSA9IHRoaXMubGltaXQ7XG5cbiAgICAgICAgJC5nZXRKU09OKHRoaXMuJGZvcm0uYXR0cignYWN0aW9uJyksIGRhdGEsIGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgc2VsZi5zaG93KGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdmFyICRwcmV2aWV3ID0gdGhpcy4kcHJldmlldztcbiAgICAgICAgdmFyIGl0ZW1UZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5pdGVtVGVtcGxhdGU7XG5cbiAgICAgICAgaWYgKDAgPT09IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZpZXcuaHRtbCh0aGlzLm9wdGlvbnMubm9SZXN1bHRzTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcHJldmlldy5lbXB0eSgpO1xuICAgICAgICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAkcHJldmlldy5hcHBlbmQoaXRlbVRlbXBsYXRlLnJlbmRlcihpdGVtKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBJTlNUQU5UUyBTRUFSQ0ggUExVR0lOIERFRklOSVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gJHRoaXMuZGF0YSgnaW5zdGFudFNlYXJjaCcpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UpICR0aGlzLmRhdGEoJ2luc3RhbnRTZWFyY2gnLCAoaW5zdGFuY2UgPSBuZXcgSW5zdGFudFNlYXJjaCh0aGlzLCBvcHRpb25zKSkpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uID09PSAnc2VhcmNoJykgaW5zdGFuY2Uuc2VhcmNoKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgJC5mbi5pbnN0YW50U2VhcmNoID0gUGx1Z2luO1xuICAgICQuZm4uaW5zdGFudFNlYXJjaC5Db25zdHJ1Y3RvciA9IEluc3RhbnRTZWFyY2g7XG5cbn0pKHdpbmRvdy5qUXVlcnkpO1xuIiwiaW1wb3J0ICcuL2pzL2pxdWVyeS5pbnN0YW50U2VhcmNoLmpzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuc2VhcmNoLWZpZWxkJylcbiAgICAgICAgLmluc3RhbnRTZWFyY2goe1xuICAgICAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgfSlcbiAgICAgICAgLmtleXVwKCk7XG59KTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiAyO1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgYXJncyk7XG4gICAgfSA6IGZuLCB0aW1lb3V0KTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59O1xuIiwidmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpXG4gICAgICB8fCBub25bTUVUSE9EX05BTUVdKCkgIT09IG5vblxuICAgICAgfHwgKFBST1BFUl9GVU5DVElPTl9OQU1FICYmIHdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXS5uYW1lICE9PSBNRVRIT0RfTkFNRSk7XG4gIH0pO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgbHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyJyArXG4gICdcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCgndHJpbScpIH0sIHtcbiAgdHJpbTogZnVuY3Rpb24gdHJpbSgpIHtcbiAgICByZXR1cm4gJHRyaW0odGhpcyk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEludGVydmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jykuc2V0SW50ZXJ2YWw7XG5cbi8vIGllOS0gc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0VGltZW91dCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpLnNldFRpbWVvdXQ7XG5cbi8vIGllOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIvLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwibmFtZXMiOlsiJCIsIlN0cmluZyIsInByb3RvdHlwZSIsInJlbmRlciIsInBhcmFtZXRlcnMiLCJyZXBsYWNlIiwibWF0Y2giLCJwYXR0ZXJuIiwibmFtZSIsIkluc3RhbnRTZWFyY2giLCJlbGVtZW50Iiwib3B0aW9ucyIsIiRpbnB1dCIsIiRmb3JtIiwiY2xvc2VzdCIsIiRwcmV2aWV3IiwiYXBwZW5kVG8iLCJleHRlbmQiLCJERUZBVUxUUyIsImRhdGEiLCJrZXl1cCIsImRlYm91bmNlIiwibWluUXVlcnlMZW5ndGgiLCJsaW1pdCIsImRlbGF5Iiwibm9SZXN1bHRzTWVzc2FnZSIsIml0ZW1UZW1wbGF0ZSIsInNlYXJjaCIsInRpbWVyIiwic2VsZiIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsInF1ZXJ5IiwidHJpbSIsInZhbCIsImxlbmd0aCIsImVtcHR5Iiwic2VyaWFsaXplQXJyYXkiLCJnZXRKU09OIiwiYXR0ciIsIml0ZW1zIiwic2hvdyIsImh0bWwiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiYXBwZW5kIiwiUGx1Z2luIiwib3B0aW9uIiwiJHRoaXMiLCJpbnN0YW5jZSIsImZuIiwiaW5zdGFudFNlYXJjaCIsIkNvbnN0cnVjdG9yIiwid2luZG93IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==