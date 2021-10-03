/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lagom/assets/js/lagom-app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "templates";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/assets/js/lagom-app.js","lagom/assets/js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/components/check-all.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/check-all.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var checkAll = $('#selectAll');
  var checkboxes = $('.domids').not(':disabled');
  checkAll.on('ifChecked ifUnchecked', function (e) {
    if (e.type == 'ifChecked') {
      checkboxes.iCheck('check');
    } else {
      checkboxes.iCheck('uncheck');
    }
  });
  checkboxes.on('ifChanged', function (e) {
    if (checkboxes.filter(':checked').length > 0) {
      $('#domainSelectedCounter').addClass('badge--primary');
      $('.bottom-action-sticky').css('opacity', '1');
      $('body').addClass('is-actions');
    } else {
      $('#domainSelectedCounter').removeClass('badge--primary');
      $('.bottom-action-sticky').css('opacity', '0');
      $('body').removeClass('is-actions');
    }

    $('#domainSelectedCounter').text(checkboxes.filter(':checked').length);

    if (checkboxes.filter(':checked').length == checkboxes.length) {
      checkAll.prop('checked', 'checked');
    } else {
      checkAll.removeProp('checked');
    }

    checkAll.iCheck('update');
  });
}

/***/ }),

/***/ "./src/assets/js/components/content-slider.js":
/*!****************************************************!*\
  !*** ./src/assets/js/components/content-slider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/components/utils.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Name: Content Slider(layersUI)
 * Version: Alpha
 * License: -
 * Website: http://layersui.com/
 * --------------------------------------------------------------------------
 */


var SELECTORS = {
  container: '[data-content-slider]',
  nextSlide: '[data-next-slide]',
  prevSlide: '[data-prev-slide]',
  pagination: '[data-slider-pagination]'
};
var Default = {
  slideToClickedSlide: false,
  navStorage: 'normal'
};

var contentSlider =
/*#__PURE__*/
function () {
  function contentSlider(container, options) {
    _classCallCheck(this, contentSlider);

    this.container = container;
    this.nextSlide = this.container.find(SELECTORS.nextSlide).first();
    this.prevSlide = this.container.find(SELECTORS.prevSlide).first();
    this.pagination = this.container.find(SELECTORS.pagination).first();
    this.options = options;
    this.isInit = false;
    this.getConfig();
    this.initPLugin();
    this.bindEvents();
  }

  _createClass(contentSlider, [{
    key: "getConfig",
    value: function getConfig() {
      var dataConfig = this.container.data();

      if (dataConfig.options) {
        this.dataOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].parseDataOptions(dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, dataConfig, this.dataOptions, this.options);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "slideTo",
    value: function slideTo() {}
  }, {
    key: "slideNext",
    value: function slideNext() {}
  }, {
    key: "slidePrev",
    value: function slidePrev() {}
  }, {
    key: "destroy",
    value: function destroy() {} //Private methods

  }, {
    key: "initPLugin",
    value: function initPLugin() {
      var that = this;
      this.swiperInstance = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.container, {
        resistance: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        scrollbar: {
          hide: false
        },
        pagination: {
          el: this.pagination[0]
        },
        navigation: {
          nextEl: this.nextSlide[0],
          prevEl: this.prevSlide[0],
          disabledClass: 'is-disabled'
        },
        on: {
          init: function init() {
            that.onInit(this);
          },
          tap: function tap(event) {
            that.changeActiveSlide(this);

            if (that.config.slideToClickedSlide) {
              that.slideToClickedSlide(this, event);
            }

            that.onClick(this, event);
          },
          slideChangeStart: function slideChangeStart(event) {
            that.onSlideChangeStart(this, event);
          },
          slideChangeEnd: function slideChangeEnd(event) {
            that.onSlideChangeEnd(this, event);
          },
          transitionStart: function transitionStart(event) {
            that.onTransitionStart(this, event);
          },
          transitionEnd: function transitionEnd(event) {
            that.onTransitionEnd(this, event);
          },
          sliderMove: function sliderMove(event) {
            that.onSliderMove(this, event);
          }
        },
        containerModifierClass: 'content-slider',
        slideClass: 'content-slider-item',
        wrapperClass: 'content-slider-wrapper'
      });
    }
  }, {
    key: "changeActiveSlide",
    value: function changeActiveSlide(swiper) {
      if (!this.isInit) {
        return;
      }

      var slides = swiper.slides;

      switch (this.config.navStorage) {
        case 'normal':
          break;

        case 'hash':
          break;

        case 'localStorage':
          $(slides).removeClass('is-active');
          window.localStorage.setItem("content-slider-".concat(this.config.localStorageId), swiper.clickedIndex);
          break;
      }
    }
  }, {
    key: "slideToClickedSlide",
    value: function slideToClickedSlide(swiper, event) {
      var clickedIndex = swiper.clickedIndex,
          slides = swiper.slides;
      swiper.updateActiveIndex();

      if (!$(slides[clickedIndex - 1]).hasClass('swiper-slide-visible')) {
        swiper.slideTo(swiper.activeIndex - 1);
      }

      if (!$(slides[clickedIndex + 1]).hasClass('swiper-slide-visible')) {
        swiper.slideTo(swiper.activeIndex + 1);
      }
    } //Callbacks

  }, {
    key: "onInit",
    value: function onInit(swiper) {
      if (typeof this.config.onInit === 'function') {
        this.config.onInit();
      }

      switch (this.config.navStorage) {
        case 'normal':
          var activeSlideIndex = 0,
              slides = swiper.slides;
          $(slides).each(function (index) {
            if ($(this).hasClass('is-active')) {
              activeSlideIndex = index;
            }
          });
          swiper.slideTo(activeSlideIndex, 0);
          break;

        case 'hash':
          if (window.location.hash) {
            var slide = $(swiper.container).find('[href="' + window.location.hash + '"]'),
                slideIndex = slide.closest('.swiper-slide').index();
            slide.trigger('click');
            swiper.slideTo(slideIndex, 0);
          }

          break;

        case 'localStorage':
          var index = window.localStorage.getItem("content-slider-".concat(this.config.localStorageId));

          if (index) {
            swiper.slideTo(index, 0);
            $(swiper.slides[index]).find('a').trigger('click');
          } else {
            swiper.slideTo(0, 0);
          }

          break;
      }

      this.showSlider(swiper);
      this.isInit = true;
    }
  }, {
    key: "showSlider",
    value: function showSlider(swiper) {
      swiper.$el.css({
        visibility: 'visible'
      });
    }
  }, {
    key: "onClick",
    value: function onClick(swiper, event) {
      if (typeof this.config.onClick === 'function') {
        this.config.onClick(swiper, event);
      }
    }
  }, {
    key: "onSlideChangeStart",
    value: function onSlideChangeStart(swiper, event) {
      if (typeof this.config.onSlideChange === 'function') {
        this.config.onSlideChangeStart(swiper, event);
      }
    }
  }, {
    key: "onSlideChangeEnd",
    value: function onSlideChangeEnd(swiper, event) {
      if (typeof this.config.onSlideChangeEnd === 'function') {
        this.config.onSlideChangeEnd(swiper, event);
      }
    }
  }, {
    key: "onTransitionStart",
    value: function onTransitionStart(swiper, event) {
      if (typeof this.config.onTransitionStart === 'function') {
        this.config.onTransitionStart(swiper, event);
      }
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd(swiper, event) {
      if (typeof this.config.onTransitionEnd === 'function') {
        this.config.onTransitionEnd(swiper, event);
      }
    }
  }, {
    key: "onSliderMove",
    value: function onSliderMove(swiper, event) {
      if (typeof this.config.onSliderMove === 'function') {
        this.config.onSliderMove(swiper, event);
      }
    }
  }]);

  return contentSlider;
}();

function initDataSelectors() {
  $(SELECTORS.container).each(function () {
    new contentSlider($(this));
  });
}

function init() {
  $(SELECTORS.container).each(function () {
    new contentSlider($(this));
  });
}

/***/ }),

/***/ "./src/assets/js/components/credit-box.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/credit-box.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  $(document).on('click', '#add-credits-buttons .btn', function () {
    var price = $(this).data('price');
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('.input-group').find('#amount').val(price);
  });
  $(document).on('keyup', '#amount', function () {
    var val = $(this).val();
    $('#add-credits-buttons').find('.active').removeClass('active');
    $('#add-credits-buttons').find('[data-price="' + val + '"]').addClass('active');
  });
}

/***/ }),

/***/ "./src/assets/js/components/custom-scrollbar.js":
/*!******************************************************!*\
  !*** ./src/assets/js/components/custom-scrollbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NavCustomScrollbar =
/*#__PURE__*/
function () {
  function NavCustomScrollbar(scrollbar) {
    _classCallCheck(this, NavCustomScrollbar);

    this.scrollbar = $('[data-nav-scrollbar]');

    if (!this.scrollbar.length) {
      return;
    }

    this.scrollbarInner = $('[data-nav-scrollbar-inner]');
    this.navContent = $('[data-nav-content]');
    this.blockUpdateContentPosition = false;
    this.bindEvents();
    this.initPlugin();
    this.setScrollbarPosition();
  }

  _createClass(NavCustomScrollbar, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.scrollbar.on('ps-scroll-y', function () {
        _this.updateContentPosition();
      });
      this.navContent.on('scroll', function (event) {
        _this.updateScrollbarPosition();
      });
      $(window).on('resize', function () {
        _this.setScrollbarPosition();
      });
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this.scrollbar[0], {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });
    }
  }, {
    key: "updateContentPosition",
    value: function updateContentPosition() {
      if (!this.blockUpdateContentPosition) {
        this.navContent.scrollTop(this.scrollbar.scrollTop());
      }

      this.blockUpdateContentPosition = false;
    }
  }, {
    key: "updateScrollbarPosition",
    value: function updateScrollbarPosition() {
      this.blockUpdateContentPosition = true;
      this.scrollbar.scrollTop(this.navContent.scrollTop());
      this.ps.update();
    }
  }, {
    key: "setScrollbarPosition",
    value: function setScrollbarPosition() {
      var scrollHeight = this.navContent[0].scrollHeight;
      this.scrollbarInner.css('height', scrollHeight);
      this.ps.update();
    }
  }]);

  return NavCustomScrollbar;
}();

function init() {
  new NavCustomScrollbar();
  $('[data-panels-grid] .list-group, .panel-choose-domain .dropdown-menu, .footer-links .dropdown-menu, .categories-collapsed .dropdown-menu').each(function () {
    this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  });
}

/***/ }),

/***/ "./src/assets/js/components/dataTablesScripts.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/components/dataTablesScripts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  // datatables
  if ($('.dataTable').length) {
    //add collapse button to each row
    // $('.dataTable tbody tr').each(function(){
    //     var td = $(this).find('td:first');
    //     $('<button type="button" class="btn-table-collapse"></button>').appendTo(td);
    // });
    //prevent standard collapse click
    $(document).on('click', '.dataTable tbody tr td', function (e) {
      var i = e.target.tagName.toLowerCase(),
          r = e.target.parentNode.tagName.toLowerCase();

      if (e.target.className != "btn-table-collapse" && e.target.className != "cell-action" && e.target.className != "cell-checkbox" && "button" != i && "a" != i && "img" != i && "button" != r && "a" != r && "input" != i && "input" != r) {
        if ($(this).closest('tr').data('url') != undefined) {
          document.location.href = $(this).closest('tr').data('url');
        }
      }
    });
    $('.dataTable thead tr th .btn-table-collapse').on('click', function () {
      if ($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).closest('.dataTable').find('tr.parent td .btn-table-collapse').trigger('click');
      } else {
        $(this).addClass('expanded');
        $(this).closest('.dataTable').find('tr:not(.parent) td .btn-table-collapse').trigger('click');
      }
    });
    $('.dataTable input').on('ifChecked', function (event) {
      $(this).closest('tr').addClass('active');
    });
    $('.dataTable input').on('ifUnchecked', function (event) {
      $(this).closest('tr').removeClass('active');
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/dropdown-select.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/components/dropdown-select.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownSelect =
/*#__PURE__*/
function () {
  function DropdownSelect(dropdown) {
    _classCallCheck(this, DropdownSelect);

    this.dropdown = $(dropdown);
    this.list = this.dropdown.find('[data-dropdown-select-list]');
    this.listItems = this.list.children();
    this.searchInput = this.dropdown.find('[data-dropdown-select-search]');
    this.selectedValue = this.dropdown.find('[data-dropdown-select-value]');
    this.selectedValueView = this.dropdown.find('[data-dropdown-select-value-view]');
    this.orginalData = [];
    this.filteredData = [];
    this.activeItem = '';
    this.bindEvents();
    this.getData();
  }

  _createClass(DropdownSelect, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.searchInput.on('keyup', function (event) {
        _this.handleSearch(event);
      });
      this.dropdown.on('shown.bs.dropdown', function () {
        _this.focusSearch();
      });
      this.dropdown.on('hidden.bs.dropdown', function () {
        _this.clearSearch();
      });
      this.listItems.on('click', function (event) {
        _this.handleSelectItem(event);
      });
    }
  }, {
    key: "getSearchResult",
    value: function getSearchResult(searchValue) {
      var result = this.orginalData.filter(function (value) {
        if (value.indexOf(searchValue) > -1) {
          return true;
        }
      });
      return result;
    }
  }, {
    key: "getData",
    value: function getData() {
      var items = this.listItems;
      var values = [];
      items.each(function () {
        var value = $(this).attr('data-value');
        values.push(value);
      });
      this.orginalData = values;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(event) {
      var value = event.target.value;
      this.filteredData = this.getSearchResult(value);
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.list.html('');
      var newHTML = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.filteredData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tld = _step.value;
          var activeClass = '';

          if (this.activeItem == tld) {
            activeClass = 'active';
          }

          newHTML += "<div class=\"dropdown-menu-item ".concat(activeClass, "\" data-value=\"").concat(tld, "\"><a>").concat(tld, "</a></div>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.filteredData.length) {
        this.dropdown.removeClass('is-empty');
      } else {
        this.dropdown.addClass('is-empty');
      }

      this.list.html(newHTML);
      this.unRegisterItemsClickEvent();
      this.listItems = this.dropdown.find('[data-dropdown-select-list]').children();
      this.registerItemsClickEvent();
    }
  }, {
    key: "focusSearch",
    value: function focusSearch() {
      var _this2 = this;

      setTimeout(function () {
        _this2.searchInput.focus();
      }, 0);
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.searchInput.val('');
      this.searchInput.trigger('keyup');
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(event) {
      var item = $(event.currentTarget);
      var value = item.data('value');
      this.activeItem = value;
      this.selectedValueView.text(value);
      this.selectedValue.val(value);
      item.addClass('active');
    }
  }, {
    key: "registerItemsClickEvent",
    value: function registerItemsClickEvent() {
      var _this3 = this;

      this.listItems.on('click.searchDropdown', function (event) {
        _this3.handleSelectItem(event);
      });
    }
  }, {
    key: "unRegisterItemsClickEvent",
    value: function unRegisterItemsClickEvent() {
      this.listItems.off('click.searchDropdown');
    }
  }]);

  return DropdownSelect;
}();

function init() {
  $('[data-dropdown-select]').each(function () {
    new DropdownSelect(this);
  });
}

/***/ }),

/***/ "./src/assets/js/components/filter-grid.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/filter-grid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shufflejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shufflejs */ "./node_modules/shufflejs/dist/shuffle.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilterGrid =
/*#__PURE__*/
function () {
  function FilterGrid() {
    _classCallCheck(this, FilterGrid);

    this.cacheDOM();
    this.bindEvents();
    this.initPlugin();
  }

  _createClass(FilterGrid, [{
    key: "cacheDOM",
    value: function cacheDOM() {
      this.filtersContainer = $('[data-filter-grid]');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      $('[data-filter-nav] [data-filter]').on('click', function (event) {
        event.preventDefault();
        $(event.target).closest('.nav').find('.active').removeClass('active');
        $(event.target).parent().addClass('active');
        var filterName = $(event.target).data('filter');

        _this.filterItems(filterName);
      });
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      var _this2 = this;

      if (!this.filtersContainer.length) {
        return;
      }

      this.shuffleInstance = new shufflejs__WEBPACK_IMPORTED_MODULE_0__["default"](this.filtersContainer[0], {
        itemSelector: '.filtr-item',
        sizer: '.js-shuffle-sizer',
        isCentered: true
      });
      setTimeout(function () {
        _this2.filtersContainer.addClass('visible');
      }, 300);
    }
  }, {
    key: "filterItems",
    value: function filterItems(name) {
      if (name == 'all') {
        this.shuffleInstance.filter();
      } else {
        this.shuffleInstance.filter([name]);
      }
    }
  }]);

  return FilterGrid;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new FilterGrid();
});

/***/ }),

/***/ "./src/assets/js/components/forms.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/forms.js ***!
  \*******************************************/
/*! exports provided: virtualInput, numberInput, numberInputSecondary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualInput", function() { return virtualInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInput", function() { return numberInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInputSecondary", function() { return numberInputSecondary; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var virtualInput =
/*#__PURE__*/
function () {
  function virtualInput(container) {
    _classCallCheck(this, virtualInput);

    this.container = container;
    this.virtualInputs = this.container.find('[data-virtual-input]');
    this.selectItems = this.container.find('[data-dropdown-menu] [data-value]');

    if (this.container.find('[data-input-collapse]').length != 0) {
      this.checkboxInputs = this.virtualInputs.find('.panel-heading input');
    } else {
      this.checkboxInputs = this.virtualInputs.find('input');
    }

    this.bindEvents();
    this.initCheck();
  }

  _createClass(virtualInput, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.checkboxInputs.on('ifChecked', function (event) {
        _this.addClass(event);

        _this.onCheck(event);
      });
      this.checkboxInputs.on('ifUnchecked', function (event) {
        _this.removeClass(event);

        _this.onUncheck(event);
      });
      this.virtualInputs.on('click selectOption', function (event) {
        _this.check(event);
      });
      this.selectItems.on('click selectOption', function (event) {
        _this.handleSelectItemClick(event);
      });
      this.virtualInputs.find('[type="password"]').on('click', function (event) {
        event.stopPropagation();
      });
    }
  }, {
    key: "initCheck",
    value: function initCheck() {
      var checkedItem = this.virtualInputs.find('input:checked');
      var checkedId = checkedItem.val();

      if (checkedId) {
        var selctedItem = checkedItem.closest("[data-virtual-input]").find('[data-dropdown-menu] [data-value="' + checkedId + '"]');
        selctedItem.trigger('selectOption');
      }

      ;
    }
  }, {
    key: "removeClass",
    value: function removeClass(event) {
      var input = $(event.currentTarget);
      var virtualInput = input.closest('[data-virtual-input]');
      this.hideCollapse(virtualInput);
      virtualInput.removeClass('checked');

      if (input.attr('type') == 'checkbox') {
        return;
      } // remove class from container


      if (virtualInput.data('virtual-input-none') == undefined) {
        if (this.container.hasClass('is-selected')) {
          this.container.removeClass('is-selected');
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(event) {
      var input = $(event.currentTarget);
      var virtualInput = input.closest('[data-virtual-input]');
      this.showCollapse(virtualInput);
      virtualInput.addClass('checked');

      if (input.attr('type') == 'checkbox') {
        return;
      } // add Class to container


      if (virtualInput.data('virtual-input-none') == undefined) {
        if (!this.container.hasClass('is-selected')) {
          this.container.addClass('is-selected');
        }
      }
    }
  }, {
    key: "showCollapse",
    value: function showCollapse(virtualInput) {
      virtualInput.find('[data-input-collapse]').collapse('show');
    }
  }, {
    key: "hideCollapse",
    value: function hideCollapse(virtualInput) {
      virtualInput.find('[data-input-collapse]').collapse('hide');
    }
  }, {
    key: "check",
    value: function check(event) {
      var item = $(event.currentTarget);
      var hasDropdown = item.data('virtual-input') == 'dropdown' ? true : false;

      if (!hasDropdown) {
        if (!item.hasClass('disabled') && !$(event.target).is('a')) {
          item.find('input').first().iCheck('check');
        }

        this.onCheck(event);
      }
    }
  }, {
    key: "unCheck",
    value: function unCheck(event) {}
  }, {
    key: "updateInputValues",
    value: function updateInputValues(item, selectItem, value, properties, event) {
      var input = item.find('input');

      if (event.type == 'click') {
        $(item).find('[data-toggle="dropdown"]').first().dropdown('toggle');
        input.iCheck('check');
        input.val(value);
      }

      item.find('[data-name]').text(properties.name);
      item.find('[data-price]').text(properties.price);
      this.onCheck(event);
    }
  }, {
    key: "handleSelectItemClick",
    value: function handleSelectItemClick(event) {
      var selectItem = $(event.currentTarget);
      var item = selectItem.closest('[data-virtual-input]');
      var value = selectItem.data('value');
      var properties = $(selectItem).data('properties');
      item.find('[data-dropdown-menu] [data-value]').removeClass('active');
      selectItem.addClass('active');
      this.updateInputValues(item, selectItem, value, properties, event);
    }
  }, {
    key: "onCheck",
    value: function onCheck(event) {
      var item = $(event.currentTarget).closest('[data-virtual-input]');
      item.find('[data-on-unchecked]').addClass('hidden');
      item.find('[data-on-checked]').removeClass('hidden');
    }
  }, {
    key: "onUncheck",
    value: function onUncheck(event) {
      var item = $(event.currentTarget).closest('[data-virtual-input]');
      item.find('[data-on-unchecked]').removeClass('hidden');
      item.find('[data-on-checked]').addClass('hidden');
      item.find('[data-dropdown-menu] [data-value]').removeClass('active');
    }
  }]);

  return virtualInput;
}();
;
var numberInput =
/*#__PURE__*/
function () {
  function numberInput(container) {
    _classCallCheck(this, numberInput);

    this.container = $(container);
    this.input = this.container.find('[data-input-number-input]');
    this.incBtn = this.container.find("[data-input-number-inc]");
    this.decBtn = this.container.find("[data-input-number-dec]");
    this.updateBtn = this.container.find("[data-input-number-update]");
    this.minValue = this.input.attr('min');
    this.maxValue = this.input.attr('max');
    this.inputValue = this.input.val();
    this.price = this.container.find("[data-input-number-price]");
    this.bindEvents();
  }

  _createClass(numberInput, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.incBtn.on('click', function () {
        _this2.increment();
      });
      this.decBtn.on('click', function () {
        _this2.decrement();
      });
      this.input.on('change', function (event) {
        _this2.inputValue = event.target.value;
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange() {}
  }, {
    key: "increment",
    value: function increment() {
      var showButton = true;
      this.inputValue++;

      if (this.inputValue >= this.maxValue) {
        this.inputValue = this.maxValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var showButton = true;

      if (this.inputValue <= this.minValue) {
        showButton = false;
      }

      this.inputValue--;

      if (this.inputValue <= this.minValue) {
        this.inputValue = this.minValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "updateInput",
    value: function updateInput(showButton) {
      if (showButton === true) {
        this.updateBtn.removeClass('hidden');
        this.updateBtn.parent().addClass('item-price-changed');
        this.price.addClass('hidden');
        this.input.val(this.inputValue).parent().addClass('is-active');
      } else {
        this.input.val(this.inputValue);
      }
    }
  }]);

  return numberInput;
}();
;
var numberInputSecondary =
/*#__PURE__*/
function () {
  function numberInputSecondary(container) {
    _classCallCheck(this, numberInputSecondary);

    this.container = $(container);
    this.input = this.container.find('[data-input-number-secondary-input]');
    this.incBtn = this.container.find("[data-input-number-secondary-inc]");
    this.decBtn = this.container.find("[data-input-number-secondary-dec]");
    this.updateBtn = this.container.find("[data-input-number-secondary-update]");
    this.minValue = this.input.attr('min');
    this.maxValue = this.input.attr('max');
    this.inputValue = this.input.val();
    this.price = this.container.find("[data-input-number-secondary-price]");
    this.bindEvents();
  }

  _createClass(numberInputSecondary, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this3 = this;

      this.incBtn.on('click', function () {
        _this3.increment();
      });
      this.decBtn.on('click', function () {
        _this3.decrement();
      });
      this.input.on('change', function (event) {
        _this3.inputValue = event.target.value;
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange() {}
  }, {
    key: "increment",
    value: function increment() {
      var showButton = true;
      this.inputValue++;

      if (this.inputValue >= this.maxValue) {
        this.inputValue = this.maxValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var showButton = true;

      if (this.inputValue <= this.minValue) {
        showButton = false;
      }

      this.inputValue--;

      if (this.inputValue <= this.minValue) {
        this.inputValue = this.minValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "updateInput",
    value: function updateInput(showButton) {
      if (showButton === true) {
        this.updateBtn.removeClass('hidden');
        this.updateBtn.parent().addClass('item-price-changed');
        this.price.addClass('hidden');
        this.input.val(this.inputValue).parent().addClass('is-active');
      } else {
        this.input.val(this.inputValue);
      }
    }
  }]);

  return numberInputSecondary;
}();
;

/***/ }),

/***/ "./src/assets/js/components/language-select.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/components/language-select.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LanguageSelect =
/*#__PURE__*/
function () {
  function LanguageSelect(dropdown) {
    _classCallCheck(this, LanguageSelect);

    this.dropdown = $(dropdown);
    this.list = this.dropdown.find('[data-language-select-list]');
    this.listItems = this.list.children();
    this.searchInput = this.dropdown.find('[data-language-select-search]');
    this.selectedValue = this.dropdown.find('[data-language-select-value]');
    this.selectedValueView = this.dropdown.find('[data-language-select-value-view]');
    this.currentBackLink = this.dropdown.find('[data-language-select-backlink]');
    this.selectLang = this.dropdown.find('[data-language-select-lang]');
    this.orginalData = [];
    this.filteredData = [];
    this.activeItem = '';
    this.bindEvents();
    this.getData();
  }

  _createClass(LanguageSelect, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.searchInput.on('keyup', function (event) {
        _this.handleSearch(event);
      });
      this.dropdown.on('show.bs.dropdown', function () {
        _this.focusSearch();

        console.log('cycki');
      });
      this.dropdown.on('hidden.bs.dropdown', function () {
        _this.clearSearch();
      });
      this.listItems.on('click', function (event) {
        _this.handleSelectItem(event);
      });
    }
  }, {
    key: "getSearchResult",
    value: function getSearchResult(searchValue) {
      var result = this.orginalData.filter(function (value) {
        searchValue = searchValue.toLowerCase();
        var val = value[0].toLowerCase();

        if (val.indexOf(searchValue) > -1) {
          return true;
        }
      });
      return result;
    }
  }, {
    key: "getData",
    value: function getData() {
      var items = this.listItems;
      var values = [];
      items.each(function () {
        var value = $(this).attr('data-value');
        var language = $(this).attr('data-language');
        values.push([value, language]);
      });
      this.orginalData = values;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(event) {
      var value = event.target.value;
      this.filteredData = this.getSearchResult(value);
      console.log(this.filteredData);
      this.updateView();

      if (this.filteredData.length == 1) {
        this.handleEnterClick(event);
      }
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.list.html('');
      var newHTML = "";
      var currentBackLink = this.currentBackLink[0].value;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.filteredData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tld = _step.value;
          var activeClass = '';

          if (this.activeItem == tld) {
            activeClass = 'active';
          }

          newHTML += "<div class=\"dropdown-menu-item ".concat(activeClass, "\" data-value=\"").concat(tld[0], "\" data-language=\"").concat(tld[1], "\">\n                <a href=\"").concat(currentBackLink, "language=").concat(tld[0], "\">\n                    <span class=\"language-flag ").concat(tld[0], "\"></span>                    \n                    <span class=\"language-text\">").concat(tld[1], "</span>\n                </a>\n            </div>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.filteredData.length) {
        this.dropdown.removeClass('is-empty');
      } else {
        this.dropdown.addClass('is-empty');
      }

      this.list.html(newHTML);
      this.unRegisterItemsClickEvent();
      this.listItems = this.dropdown.find('[data-dropdown-select-list]').children();
      this.registerItemsClickEvent();
    }
  }, {
    key: "focusSearch",
    value: function focusSearch() {
      var _this2 = this;

      setTimeout(function () {
        _this2.searchInput.focus();
      }, 0);
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.searchInput.val('');
      this.searchInput.trigger('keyup');
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(event) {
      var item = $(event.currentTarget);
      var value = item.data('value');
      this.activeItem = value;
      this.selectedValueView.text(value);
      this.selectedValue.val(value);
      item.addClass('active');
    }
  }, {
    key: "registerItemsClickEvent",
    value: function registerItemsClickEvent() {
      var _this3 = this;

      this.listItems.on('click.searchDropdown', function (event) {
        _this3.handleSelectItem(event);
      });
    }
  }, {
    key: "unRegisterItemsClickEvent",
    value: function unRegisterItemsClickEvent() {
      this.listItems.off('click.searchDropdown');
    }
  }, {
    key: "handleEnterClick",
    value: function handleEnterClick(event) {
      $(this.list.children().addClass('is-enterable'));
      var selectLang = this.selectLang[0].value;
      $('<span class="language-enter">' + selectLang + '</span>').insertAfter('.is-enterable .language-text');

      if (event.keyCode === 13) {
        var link = this.list.children().find('a');
        window.location.href = link[0]['href'];
      }
    }
  }]);

  return LanguageSelect;
}();

function init() {
  $('[data-language-select]').each(function () {
    new LanguageSelect(this);
  });
}

/***/ }),

/***/ "./src/assets/js/components/login-sidebar-slider.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/components/login-sidebar-slider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);

function init() {
  if ($('.sidebar-swiper.swiper-container').length) {
    new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.sidebar-swiper.swiper-container', {
      slidesPerView: 1,
      speed: 400,
      spaceBetween: 64,
      loop: true,
      autoHeight: true,
      setWidth: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletElement: 'div'
      }
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/other.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/other.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  // navbar toggle
  $('#header .navbar-toggle').on('click', function () {
    $('body').toggleClass('menu-open');
  });
  $(document).on('click', '.menu-open .app-main', function () {
    $('body').removeClass('menu-open');
  });
  $(window).on('resize', function () {
    $('body').removeClass('menu-open');
  });
  jQuery(document).ready(function () {
    enquire.register("screen and (min-width:768px)", {
      match: function match() {
        jQuery('.lagom-layout-left .navbar-main .navbar-nav').superfish();
      },
      unmatch: function unmatch() {
        jQuery('.lagom-layout-left .navbar-main .navbar-nav').superfish('destroy');
      }
    });
  });

  if ($('#sticky-sidebar').length) {
    $('#sticky-sidebar').stickySidebar({
      topSpacing: 32,
      bottomSpacing: 32,
      innerWrapperSelector: '.sticky-sidebar-inner'
    });
  }

  $(document).on('click', '.dropdown-menu', function (e) {
    if ("a" != e.target.tagName && "A" != e.target.tagName) {
      e.stopPropagation();
    }
  });
  $(document).on('click', '.domain-extensions .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $('.addon-promo-container > .radio-inline').each(function () {
    var checkValue = $(this).find('input[type=radio]:checked').val();

    if (checkValue != "on" && checkValue != undefined) {
      $(this).closest('.addon-promo-container').addClass('is-selected');
    }
  });
  $('.addon-promo-container > .radio-inline').each(function () {
    $(this).find('input[type=radio]').on('ifChecked', function (event) {
      if ($(this).val() == "on") {
        $(this).closest('.addon-promo-container').removeClass('is-selected');
      } else {
        $(this).closest('.addon-promo-container').addClass('is-selected');
      }
    });
  });
  $(document).on('click', '.add-extra-attachement', function () {
    var nofiletext = $(this).data('nofiletext'),
        selectfiletext = $(this).data('selectfiletext'),
        removetext = $(this).data('selectfiletext');
    $("#fileUploadsContainer").append('<div class="file-input form-control"><input type="file" name="attachments[]"><span class="file-input-button btn btn-default">' + selectfiletext + '</span><span class="file-input-text text-light">' + nofiletext + '</span><button data-toggle="tooltip" title="' + removetext + '" class="btn btn-icon file-input-remove"><i class="ls ls-trash"></i></button></div>');
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(document).on('change', '.file-input input[type=file]', function () {
    var string = $(this).val();
    var result = string.substring(string.lastIndexOf("\\") + 1);

    if (result == "") {
      $(this).parent().find('.file-input-text').text('No file selected').addClass('text-light');
    } else {
      $(this).parent().find('.file-input-text').text(result).removeClass('text-light');
    }
  });
  $(document).on('click', '.file-input-remove', function () {
    $(this).closest('.file-input').remove();
  });
  $('.search-group').on('click', function () {
    $(this).find('.form-control').focus();
  });
  $('.panel-accordion').on('show.bs.collapse', function () {
    $(this).addClass('is-open');
  });
  $('.panel-accordion').on('hide.bs.collapse', function () {
    $(this).removeClass('is-open');
  });
  $('#nav-landing-page, #nav-ssl').on('show.bs.collapse', function () {
    $(this).closest('.main-subnav').addClass('is-open');
  });
  $('#nav-landing-page, #nav-ssl').on('hidden.bs.collapse', function () {
    $(this).closest('.main-subnav').removeClass('is-open');
  }); // store animation

  $('[data-store-lines-animation] path, [data-banner-lines-animation] path').each(function (index, item) {
    var path = $(item);
    setTimeout(function () {
      path.css({
        'stroke-dashoffset': 0
      });
    }, 200);
  });
}

/***/ }),

/***/ "./src/assets/js/components/panel-switch.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/panel-switch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var panelSwitch = $('.panel-switch');
  panelSwitch.on('click', function (e) {
    if (!$(this).is('a')) {
      var currCheck = $(this).find('input[type="checkbox"]');

      if (currCheck.is(':checked')) {
        panelSwitch.removeClass('checked');
        currCheck.prop('checked', false);
      } else {
        panelSwitch.addClass('checked');
        currCheck.prop('checked', true);
      }

      var that = $(this);
      setTimeout(function () {
        that.find('.loader').addClass('loading');
      }, 300);
    }
  });
}

/***/ }),

/***/ "./src/assets/js/components/panels-grid.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/panels-grid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);

function init() {
  var panelsGrid = $('[data-panels-grid]')[0];

  if (panelsGrid) {
    var msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a(panelsGrid, {
      itemSelector: '[data-panels-grid-item]',
      transitionDuration: 0
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/range-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/range-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeSlider; });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/components/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Name: RangeSlider(layersUI)
 * Version: Alpha
 * License: -
 * Website: http://layersui.com
 * --------------------------------------------------------------------------
 */


var SELECTORS = {
  container: '[data-range-container]',
  rangeSlider: '[data-range-slider]',
  rangeInput: '[data-range-input]',
  incBtn: '[data-range-inc]',
  decBtn: '[data-range-dec]',
  price: '[data-range-price]',
  selectedOption: '[data-selected-option]',
  viewValue: '[data-range-view]'
};
var Default = {
  connect: [true, false],
  behaviour: 'tap',
  snap: false,
  range: {},
  step: 1,
  startValue: 0,
  minValue: null,
  maxValue: null,
  pricePerOne: 2
};
var pipsDefault = {
  mode: 'steps',
  stepped: true
};

var RangeSlider =
/*#__PURE__*/
function () {
  function RangeSlider(container, options) {
    _classCallCheck(this, RangeSlider);

    this.container = container;
    this.rangeSlider = this.container.find(SELECTORS.rangeSlider);
    this.rangeInput = this.container.find(SELECTORS.rangeInput);
    this.decBtn = this.container.find(SELECTORS.decBtn);
    this.incBtn = this.container.find(SELECTORS.incBtn);
    this.price = this.container.find(SELECTORS.price);
    this.selectedOption = this.container.find(SELECTORS.selectedOption);
    this.viewValue = this.container.find(SELECTORS.viewValue);
    this.getConfig();
    this.getPipsConfig();
    this.initPlugin();
    this.bindEvents();
  }

  _createClass(RangeSlider, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.decBtn.on('click', function () {
        _this.slider.set(_this.slider.get() - _this.config.step);
      });
      this.incBtn.on('click', function () {
        _this.slider.set(_this.slider.get() + _this.config.step);
      });
      this.rangeInput.on('change blur', function (event) {
        _this.slider.set(event.target.value);
      });
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      this.dataConfig = this.container.data();

      if (this.dataConfig.options) {
        this.dataOptions = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDataOptions(this.dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, this.dataConfig, this.dataOptions);
    }
  }, {
    key: "getPipsConfig",
    value: function getPipsConfig() {
      this.dataPips = this.container.data('pips-options');

      if (this.dataPips) {
        this.dataPipsOptions = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDataOptions(this.dataPips);
      } else {
        this.dataPipsOptions = {};
      }

      this.pipsConfig = $.extend({}, pipsDefault, this.dataPipsOptions);
    }
  }, {
    key: "setRange",
    value: function setRange() {
      var _this2 = this;

      this.range = {};

      if (this.config.minValue != null) {
        this.range['min'] = this.config.minValue;
      }

      if (this.config.maxValue != null) {
        this.range['max'] = this.config.maxValue;
      }

      if (this.dataConfig.values) {
        this.customValues = {};
        var values = this.dataConfig.values;
        var count = 1;
        values.map(function (item, index, array) {
          if (index == 0) {
            _this2.range['min'] = count;
          } else if (index == array.length - 1) {
            _this2.range['max'] = _this2.dataConfig.values.length;
          }

          _this2.customValues[count] = {
            price: item.price,
            name: item.name,
            id: item.optionID
          };
          count++;
        });
        this.setCustomTips();
      }
    }
  }, {
    key: "setStartValue",
    value: function setStartValue() {
      if (this.rangeInput.length) {
        this.startValue = this.rangeInput.first().val();
      } else {
        this.startValue = this.config.startValue;
      }
    }
  }, {
    key: "isPageRTL",
    value: function isPageRTL() {
      return $('html').attr('dir') == 'rtl' ? true : false;
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      var _this3 = this;

      this.setStartValue();
      this.setRange();
      this.slider = nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(this.rangeSlider[0], {
        start: this.startValue,
        step: this.config.step,
        snap: this.config.snap,
        connect: this.config.connect,
        range: this.range,
        behaviour: this.config.behaviour,
        direction: this.isPageRTL() ? 'rtl' : 'ltr',
        format: {
          to: function to(value) {
            return value !== undefined && Math.round(value);
          },
          from: function from(value) {
            return value;
          }
        },
        pips: this.pipsConfig,
        'cssPrefix': 'range-slider',
        'cssClasses': {
          target: '',
          base: '-base',
          origin: '-origin',
          handle: '-handle',
          handleLower: '-handle-lower',
          handleUpper: '-handle-upper',
          horizontal: '-horizontal',
          vertical: '-vertical',
          background: '-background',
          connects: "-connects",
          connect: '-connect',
          ltr: '-ltr',
          rtl: '-rtl',
          draggable: '-draggable',
          drag: '-state-drag',
          tap: '-state-tap',
          active: 'is-active',
          tooltip: '-tooltip',
          pips: '-pips',
          pipsHorizontal: '-pips-horizontal',
          pipsVertical: '-pips-vertical',
          marker: '-marker',
          markerHorizontal: '-marker-horizontal',
          markerVertical: '-marker-vertical',
          markerNormal: '-marker-normal',
          markerLarge: '-marker-large',
          markerSub: '-marker-sub',
          value: '-value',
          valueHorizontal: '-value-horizontal',
          valueVertical: '-value-vertical',
          valueNormal: '-value-normal',
          valueLarge: '-value-large',
          valueSub: '-value-sub'
        }
      });
      this.sliderPipsContainer = $(this.rangeSlider[0].querySelector('.range-slider-pips'));
      this.sliderPips = this.sliderPipsContainer.find('[data-value]');
      this.sliderPips.on('click', function (event) {
        var pip = $(event.currentTarget);
        var pipValue = pip.data('value');

        _this3.slider.set(pipValue);
      });
      this.handleSliderEvents();
    }
  }, {
    key: "handleSliderEvents",
    value: function handleSliderEvents() {
      var _this4 = this;

      this.slider.on('update', function (values, handle) {
        _this4.onUpdate(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);

        _this4.changeActivePip(values);

        if (_this4.customValues) {
          _this4.changeActiveSlideID(_this4.customValues[values].id);
        }
      });
      this.slider.on('slide', function (values, handle) {
        _this4.onSlide(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
      this.slider.on('change', function (values, handle) {
        _this4.onChange(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
      this.slider.on('set', function (values, handle) {
        _this4.onSet(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
    }
  }, {
    key: "changeActivePip",
    value: function changeActivePip(values) {
      var value = values[0];
      var pip = this.sliderPipsContainer.find('[data-value="' + value + '"]');
      this.sliderPipsContainer.find('.is-active').removeClass('is-active');
      pip.addClass('is-active');
    }
  }, {
    key: "setCustomTips",
    value: function setCustomTips() {
      var _this5 = this;

      this.pipsConfig.format = {
        to: function to(value) {
          return value !== undefined && _this5.customValues[value].name;
        },
        from: Number
      };
    }
  }, {
    key: "changeActiveSlideID",
    value: function changeActiveSlideID(id) {
      this.selectedOption.val(id);
    }
  }, {
    key: "onSlide",
    value: function onSlide(values, handle) {
      if (this.customValues) {
        this.changeActiveSlideID(this.customValues[values].id);
      } else {
        this.rangeInput.val(values[0].toFixed(0));
      }

      if (typeof this.config.onSlide === 'function') {
        this.config.onSlide(values, handle);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(values, handle) {
      if (typeof this.config.onChange === 'function') {
        this.config.onChange(values, handle);
      }
    }
  }, {
    key: "onSet",
    value: function onSet(values, handle) {
      this.rangeInput.val(values[0]).trigger('keyup');

      if (this.customValues) {
        this.selectedOption.trigger('keyup').trigger('change');
      }

      if (typeof this.config.onSet === 'function') {
        this.config.onSet(values, handle);
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(values, handle) {
      if (typeof this.config.onUpdate === 'function') {
        this.config.onUpdate(values, handle);
      }
    }
  }, {
    key: "setPrice",
    value: function setPrice(values, handle) {
      if (this.customValues) {
        this.price.text(this.customValues[values].price);
      } else {
        this.price.text((parseFloat(this.config.pricePerOne) * parseFloat(this.rangeInput.val())).toFixed(2));
      }
    }
  }, {
    key: "setViewValue",
    value: function setViewValue(values, handle) {
      if (this.customValues) {
        this.viewValue.text(this.customValues[values].name);
      } else {
        this.viewValue.text(this.rangeInput.val());
      }
    }
  }]);

  return RangeSlider;
}();



/***/ }),

/***/ "./src/assets/js/components/sliders/base-slider.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/components/sliders/base-slider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Slider =
/*#__PURE__*/
function () {
  function Slider(slider) {
    _classCallCheck(this, Slider);

    this.slider = $(slider);
    this.sliderConfig = {};
    this.cacheDOM();
  }

  _createClass(Slider, [{
    key: "cacheDOM",
    value: function cacheDOM() {
      this.container = this.slider.find("[data-slider-container]");
      this.wrapper = this.slider.find("[data-slider-wrapper]");
      this.pagination = this.slider.find("[data-slider-pagination]");
      this.nextSlide = this.slider.find("[data-next-slide]");
      this.prevSlide = this.slider.find("[data-prev-slide]");
    }
  }, {
    key: "setSliderConfig",
    value: function setSliderConfig(config) {
      this.sliderConfig = Object.assign({
        centeredSlides: false,
        loop: false,
        slidesPerView: 3,
        spaceBetween: 0,
        scrollbar: {
          hide: false
        },
        pagination: {
          el: this.pagination[0],
          type: "bullets",
          modifierClass: "content-slider-pagination-",
          bulletClass: "content-slider-pagination-bullet",
          bulletActiveClass: "is-active",
          clickable: true
        },
        navigation: {
          nextEl: this.nextSlide[0],
          prevEl: this.prevSlide[0]
        },
        a11y: {
          enabled: false
        },
        watchSlidesVisibility: false,
        containerModifierClass: "content-slider-",
        slideClass: "content-slider-item",
        slidePrevClass: "content-slider-item-prev",
        slideNextClass: "content-slider-item-next",
        slideVisibleClass: "content-slider-item-visible",
        slideActiveClass: "content-slider-item-active",
        wrapperClass: "content-slider-wrapper"
      }, config);
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.swiperInstance = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.container[0], this.sliderConfig);
    }
  }, {
    key: "destroySlider",
    value: function destroySlider() {
      this.swiperInstance.destroy(true, true);
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./src/assets/js/components/sliders/index.js":
/*!***************************************************!*\
  !*** ./src/assets/js/components/sliders/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonials.js */ "./src/assets/js/components/sliders/testimonials.js");
/* harmony import */ var _promo_sliders_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo-sliders/index.js */ "./src/assets/js/components/sliders/promo-sliders/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    _testimonials_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    _promo_sliders_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  }
});

/***/ }),

/***/ "./src/assets/js/components/sliders/promo-sliders/animations.js":
/*!**********************************************************************!*\
  !*** ./src/assets/js/components/sliders/promo-sliders/animations.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");

var slideLeft = {
  refs: {},
  beforeInit: function beforeInit(element, config) {
    this.refs.element = element;
    this.refs["content"] = element.find("[data-animation-content]");
    this.refs["icons"] = element.find("[data-animation-icons]").children();
  },
  showSlide: function showSlide(element, config) {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [-56, 0],
      opacity: [0, 1],
      duration: 320,
      delay: 800,
      easing: "cubicBezier(0,0,0,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = 480 + this.refs.icons.length * 80;

    for (var _i = 0, _Array$from = Array.from(this.refs.icons); _i < _Array$from.length; _i++) {
      var icon = _Array$from[_i];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        translateX: [-52, 0],
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(0,0,0,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  },
  hideSlide: function hideSlide() {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [0, 56],
      opacity: [1, 0],
      duration: 320,
      delay: 240,
      easing: "cubicBezier(1,0,1,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = this.refs.icons.length * 80;

    for (var _i2 = 0, _Array$from2 = Array.from(this.refs.icons); _i2 < _Array$from2.length; _i2++) {
      var icon = _Array$from2[_i2];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        translateX: [0, 52],
        translateY: [0, 30],
        opacity: [1, 0],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(1,0,1,1)"
      }).finished;
      animations.push(iconAnimation);
      iconDelay -= 80;
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  }
};
var fadeIn = {
  refs: {},
  beforeInit: function beforeInit(element, config) {
    this.refs.element = element;
    this.refs["content"] = element.find("[data-animation-content]");
    this.refs["icons"] = element.find("[data-animation-icons]").children();
  },
  showSlide: function showSlide(element, config) {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [-56, 0],
      opacity: [0, 1],
      duration: 320,
      delay: 800,
      easing: "cubicBezier(0,0,0,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = 480 + this.refs.icons.length * 80;

    for (var _i3 = 0, _Array$from3 = Array.from(this.refs.icons); _i3 < _Array$from3.length; _i3++) {
      var icon = _Array$from3[_i3];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        opacity: [0, 1],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(0,0,0,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  },
  hideSlide: function hideSlide() {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [0, 56],
      opacity: [1, 0],
      duration: 320,
      delay: 240,
      easing: "cubicBezier(1,0,1,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = this.refs.icons.length * 80;

    for (var _i4 = 0, _Array$from4 = Array.from(this.refs.icons); _i4 < _Array$from4.length; _i4++) {
      var icon = _Array$from4[_i4];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        opacity: [1, 0],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(1,0,1,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  slideLeft: slideLeft,
  fadeIn: fadeIn
});

/***/ }),

/***/ "./src/assets/js/components/sliders/promo-sliders/index.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/components/sliders/promo-sliders/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/features/array/from */ "./node_modules/core-js/features/array/from.js");
/* harmony import */ var core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/features/symbol/iterator */ "./node_modules/core-js/features/symbol/iterator.js");
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_features_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/features/promise */ "./node_modules/core-js/features/promise/index.js");
/* harmony import */ var core_js_features_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/features/object/assign */ "./node_modules/core-js/features/object/assign.js");
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils.js */ "./src/assets/js/components/utils.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animations.js */ "./src/assets/js/components/sliders/promo-sliders/animations.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var SELECTORS = {
  slider: '[data-promo-slider]',
  wrapper: '[data-promo-slider-wrapper]',
  pagination: '[data-promo-slider-pagination]',
  paginationItem: '[data-promo-slider-pagination-item]',
  close: '[data-promo-slide-close]',
  background: '[data-promo-slider-background]'
};
var Default = {
  defaultAnimationType: 'slideLeft'
};

var PromoSlider =
/*#__PURE__*/
function () {
  function PromoSlider(slider) {
    _classCallCheck(this, PromoSlider);

    this.animations = [];
    this.activeSlideIndex = 0;
    this.preventSlideChange = false;
    this.queneAnimations = [];
    this.cacheDOM(slider);
    this.getConfig();
    this.bindEvents();
    this.initSlider();
  }

  _createClass(PromoSlider, [{
    key: "getConfig",
    value: function getConfig() {
      var dataConfig = this.refs.slider.data();

      if (dataConfig.options) {
        this.dataOptions = util.parseDataOptions(dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, dataConfig, this.dataOptions, this.options);
    }
  }, {
    key: "cacheDOM",
    value: function cacheDOM(slider) {
      this.refs = {};
      this.refs.slider = $(slider);
      this.refs.wrapper = this.refs.slider.find(SELECTORS.wrapper);
      this.refs.slides = this.refs.wrapper.children();
      this.refs.pagination = this.refs.slider.find(SELECTORS.pagination);
      this.refs.paginationItems = this.refs.pagination.find(SELECTORS.paginationItem);
      this.refs.close = this.refs.slider.find(SELECTORS.close);
      this.refs.background = this.refs.slider.find(SELECTORS.background).children();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.refs.paginationItems.on('click', function (event) {
        return _this.handlePaginationClick(event);
      });
      this.refs.close.on('click', function () {
        return _this.hideSlider();
      });
      $(window).on('resize', function () {
        setTimeout(function () {
          _this.updateHeight();
        }, 200);
      });
      this.refs.slider.on({
        mouseenter: function mouseenter() {
          return _this.stopAutoplay();
        },
        mouseleave: function mouseleave() {
          return _this.startAutoplay();
        }
      });
      $(document).on('visibilitychange', function (event) {
        if (document.hidden) {
          _this.stopAutoplay();
        } else {
          _this.startAutoplay();
        }
      }); // let that = this
      // $(window).blur(function() {   
      //     that.stopAutoplay();
      //     $('body').addClass('stop');
      // });    
      // $(window).focus(function(){
      //     that.startAutoplay();
      //     $('body').removeClass('stop');
      // });
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.setAnimations();

      if (this.animations.length) {
        var activeSlide = this.refs.paginationItems.filter('.active');
        this.updateHeight();

        if (activeSlide.length) {
          var activeSlideIndex = this.refs.paginationItems.index(activeSlide);
          this.goToSlide(activeSlideIndex);
        } else {
          this.goToSlide(0, true);
        }
      }

      if (!this.refs.slider.is(':hover') && !document.hidden) {
        this.startAutoplay();
      }
    }
  }, {
    key: "hideSlider",
    value: function hideSlider() {
      this.refs.slider.addClass('hidden');
    }
  }, {
    key: "handlePaginationClick",
    value: function handlePaginationClick(event) {
      var item = $(event.currentTarget);
      var itemIndex = this.refs.paginationItems.index(item);

      if (this.preventSlideChange) {
        this.addAnimationToQuene(itemIndex);
        return;
      }

      this.refs.pagination.find('.active').removeClass('active');
      item.addClass('active');
      this.goToSlide(itemIndex);
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      if (this.activeSlideIndex - 1 < 0) {
        this.goToSlide(this.refs.slides.length - 1);
      } else {
        this.goToSlide(this.activeSlideIndex - 1);
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      if (this.activeSlideIndex >= this.refs.slides.length - 1) {
        this.goToSlide(0);
      } else {
        this.goToSlide(this.activeSlideIndex + 1);
      }
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(index) {
      var _this2 = this;

      var firstSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.activeSlideIndex == index && !firstSlide) {
        this.preventSlideChange = false;
        return;
      }

      var oldIndex = this.activeSlideIndex;
      this.preventSlideChange = true;

      if (firstSlide) {
        this.activeSlideIndex = index;
        $(this.refs.slides[this.activeSlideIndex]).addClass('active');
        this.animations[this.activeSlideIndex].showSlide().then(function () {
          if (_this2.queneAnimations.length) {
            var _index = _this2.queneAnimations.pop();

            _this2.goToSlide(_index);
          } else {
            _this2.preventSlideChange = false;
          }
        });
        this.updatePaginationStatus(0, 0);
      } else {
        this.updatePaginationStatus(index, oldIndex);
        this.activeSlideIndex = index;
        this.animations[oldIndex].hideSlide().then(function () {});
        $(this.refs.slides[oldIndex]).removeClass('active');
        $(this.refs.slides[this.activeSlideIndex]).addClass('active');
        this.animations[index].showSlide().then(function () {
          if (_this2.queneAnimations.length) {
            var _index2 = _this2.queneAnimations.pop();

            _this2.goToSlide(_index2);
          } else {
            _this2.preventSlideChange = false;
          }
        });
      }

      this.updateHeight();
      this.setBackground();
    }
  }, {
    key: "setAnimations",
    value: function setAnimations() {
      for (var _i = 0, _Array$from = Array.from(this.refs.slides); _i < _Array$from.length; _i++) {
        var slide = _Array$from[_i];
        var animationType = $(slide).data('animation-type');

        if (animationType) {
          var animation = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_animations_js__WEBPACK_IMPORTED_MODULE_6__["default"][animationType]);
          animation.beforeInit($(slide));
          this.animations.push(animation);
        } else {
          var _animation = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_animations_js__WEBPACK_IMPORTED_MODULE_6__["default"][this.config.defaultAnimationType]);

          _animation.beforeInit($(slide));

          this.animations.push(_animation);
        }
      }
    }
  }, {
    key: "updatePaginationStatus",
    value: function updatePaginationStatus(index, oldIndex) {
      this.refs.paginationItems.removeClass('active');
      this.refs.paginationItems.eq(index).addClass('active');
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var that = this;

      if (this.autoPlay) {
        return;
      }

      this.autoPlay = setInterval(function () {
        if (!that.queneAnimations.length) {
          that.nextSlide();
        }
      }, 5000);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      clearInterval(this.autoPlay);
      this.autoPlay = false;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var innerHeight = $(this.refs.slides[this.activeSlideIndex]).innerHeight();
      this.refs.wrapper.css('height', innerHeight);
    }
  }, {
    key: "setBackground",
    value: function setBackground(index) {
      this.refs.background.removeClass('active');
      this.refs.background.eq(this.activeSlideIndex).addClass('active');
    }
  }, {
    key: "addAnimationToQuene",
    value: function addAnimationToQuene(index) {
      if ((this.queneAnimations.length && this.queneAnimations[0]) !== index) {
        this.queneAnimations.unshift(index);
      }
    }
  }]);

  return PromoSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    $("[data-promo-slider]").each(function (index, item) {
      new PromoSlider(item);
    });
  }
});

/***/ }),

/***/ "./src/assets/js/components/sliders/testimonials.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/components/sliders/testimonials.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-slider */ "./src/assets/js/components/sliders/base-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TestimoniaslSlider =
/*#__PURE__*/
function (_BaseSlider) {
  _inherits(TestimoniaslSlider, _BaseSlider);

  function TestimoniaslSlider(slider) {
    var _this;

    _classCallCheck(this, TestimoniaslSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestimoniaslSlider).call(this, slider));

    _this.setSliderConfig(_this.getSliderConfig());

    _this.initSlider();

    return _this;
  }

  _createClass(TestimoniaslSlider, [{
    key: "getSliderConfig",
    value: function getSliderConfig() {
      return {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loop: true,
        breakpoints: {
          459: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true
          }
        }
      };
    }
  }]);

  return TestimoniaslSlider;
}(_base_slider__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    $("[data-testimonial-slider]").each(function (index, item) {
      new TestimoniaslSlider(item);
    });
  }
});

/***/ }),

/***/ "./src/assets/js/components/theme-switcher.js":
/*!****************************************************!*\
  !*** ./src/assets/js/components/theme-switcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  function toggleOverlay() {
    $('.order-summary-mob .summary-container >.content').slideToggle();
    $('.overlay').fadeToggle('fast');
  }

  var activeStyle = $('.theme-switcher').data('active-style');
  var activeLayout = $('.theme-switcher').data('active-layout');
  var activePage = $('.theme-switcher').data('active-page');
  var url = $('[data-set-theme]').data('original-url');

  function toggleThemeSwitcher() {
    $('body').toggleClass('theme-switcher-open');
    var browser = parseInt(window.innerHeight);
    var body = parseInt($('body').height());
    var scroll = parseInt(getScrollbarWidth());

    if (body > browser && $('body').hasClass('theme-switcher-open')) {
      $('body').prop('style', 'padding-right: ' + scroll + 'px');
    } else {
      $('body').removeProp('style');
    }

    resetThemeSwitcher();
  }

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth; // force scrollbars

    outer.style.overflow = "scroll"; // add innerdiv

    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth; // remove divs

    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }

  function resetThemeSwitcher() {
    $('[data-set-theme]').attr('href', url);
    $('.theme-switcher').find('.active').removeClass('active');
    $('.theme-switcher').find('[data-style="' + activeStyle + '"]').addClass('active');
    $('.theme-switcher').find('[data-layout="' + activeLayout + '"]').addClass('active');
    $('.theme-switcher').find('[data-page="' + activePage + '"]').addClass('active');
    $('.theme-switcher').data('choosen-style', '');
    $('.theme-switcher').data('choosen-layout', '');
    $('.theme-switcher').data('choosen-page', '');
  }

  $(document).on('click', '.order-summary-mob .summary-container .btn-rounded', function (e) {
    e.preventDefault();
    toggleOverlay();
  });
  $('.overlay').on('click', function (e) {
    toggleOverlay();

    if ($('body').hasClass('theme-switcher-open')) {
      toggleThemeSwitcher();
    }
  });
  $('.theme-switcher-button').on('click', function () {
    toggleThemeSwitcher();
    toggleOverlay();
  });
  $('.theme-switcher-box').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.row').find('.active').removeClass('active');
    $(this).addClass('active');
    var newStyle = $(this).data('style');
    var newLayout = $(this).data('layout');
    var newPage = $(this).data('page');

    if (newStyle != undefined) {
      var setStyle = newStyle;
      $('.theme-switcher').data('choosen-style', setStyle);
    }

    if (newLayout != undefined) {
      var setLayout = newLayout;
      $('.theme-switcher').data('choosen-layout', setLayout);
    }

    if (newPage != undefined) {
      var setPage = newPage;
      $('.theme-switcher').data('choosen-page', setPage);
    }

    if ($('.theme-switcher').data('choosen-layout') != "") {
      var choosenLayout = $('.theme-switcher').data('choosen-layout');
    } else {
      var choosenLayout = activeLayout;
    }

    if ($('.theme-switcher').data('choosen-style') != "") {
      var choosenStyle = $('.theme-switcher').data('choosen-style');
    } else {
      var choosenStyle = activeStyle;
    }

    if ($('.theme-switcher').data('choosen-page') != "") {
      var choosenPage = $('.theme-switcher').data('choosen-page');
    } else {
      var choosenPage = activePage;
    }

    var findsign = url.indexOf("?");

    if (findsign != -1) {
      var newUrl = url + '&rsstyle=' + choosenStyle + '&rslayout=' + choosenLayout + '&rspage=' + choosenPage;
    } else {
      var newUrl = url + '?rsstyle=' + choosenStyle + '&rslayout=' + choosenLayout + '&rspage=' + choosenPage;
    }

    $('[data-set-theme]').attr('href', newUrl);
  });
  $('[data-style-reset]').on('click', function () {
    toggleThemeSwitcher();
    toggleOverlay();
  });
  $(window).on('resize', function () {
    $('.order-summary-mob .summary-container >.content').slideUp();
    $('.overlay').fadeOut('fast');
    $('body').removeClass('theme-switcher-open');
    resetThemeSwitcher();
  });
}

/***/ }),

/***/ "./src/assets/js/components/tiles-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/tiles-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);

function init() {
  if ($('.tiles.swiper-container').length) {
    var mySwiper = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.tiles.swiper-container', {
      speed: 400,
      init: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
    enquire.register("screen and (max-width:767px)", {
      match: function match() {
        mySwiper.init();
      },
      unmatch: function unmatch() {
        mySwiper.destroy(false);
      }
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/tld-filter.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/tld-filter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var filter = $('.custom-multiselect').selectize({
    copyClassesToDropdown: false,
    plugins: ['remove_button'],
    render: {
      item: function item(data, escape) {
        return '<div>' + escape(data.text) + '</div>';
      }
    },
    onItemAdd: function onItemAdd(value, $item) {
      var data = this.options[value];
      var value = data.value;
      $('.message.no-tlds').hide();
      $('.tld-pricing').show();
      $('.tld-pricing .tld-row').each(function () {
        var row = $(this);
        var str1 = $(this).data('category');
        var str2 = value;

        if (str1.indexOf(str2) != -1) {
          $(this).show();
        }
      });
    },
    onDelete: function onDelete(value, $item) {
      var data = this.options[value];
      var value = data.value;
      var selectize = filter[0].selectize;
      var selected_objects = $.map(selectize.items, function (value) {
        if (value != data.value) {
          return selectize.options[value];
        }
      });
      var totalLen = selected_objects.length;
      $('.tld-pricing .tld-row').hide();
      $.each(selected_objects, function (key, value) {
        $('.tld-row[data-category*="' + value.value + '"]').show();
      });

      if (totalLen == 0) {
        $('.tld-pricing').hide();
        $('.message.no-tlds').show();
      } else {
        $('.message.no-tlds').hide();
        $('.tld-pricing').show();
      }
    }
  });

  if ($('.tld-filters').length) {
    var selectize = filter[0].selectize;
    var selected_objects = $.map(selectize.items, function (value) {
      return selectize.options[value];
    });
    $('.message.no-tlds').hide();
    $('.tld-pricing .tld-row').hide();
    $.each(selected_objects, function (key, value) {
      $('.tld-row[data-category*="' + value.value + '"]').show();
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/utils.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/utils.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Util = function () {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000;
  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  }; // shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (typeof el.style[name] !== 'undefined') {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function parseOption(item) {
    if ('true' === item) {
      return true;
    } else if ('false' === item) {
      return false;
    } else if (!isNaN(item * 1)) {
      return parseFloat(item);
    } else {
      return item;
    }
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
          }
        }
      }
    },
    parseDataOptions: function parseDataOptions(dataOptions) {
      var options = [];
      var string = dataOptions.split(';');
      string.forEach(function (item, index) {
        var option = item.split(':');
        option = option.map(function (item) {
          return item.trim();
        });

        if (option[0]) {
          options[option[0]] = parseOption(option[1]);
        }
      });
      return options;
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./src/assets/js/lagom-app.js":
/*!************************************!*\
  !*** ./src/assets/js/lagom-app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forms */ "./src/assets/js/components/forms.js");
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range-slider */ "./src/assets/js/components/range-slider.js");
/* harmony import */ var _components_panels_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panels-grid */ "./src/assets/js/components/panels-grid.js");
/* harmony import */ var _components_check_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/check-all */ "./src/assets/js/components/check-all.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliders */ "./src/assets/js/components/sliders/index.js");
/* harmony import */ var _components_panel_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-switch */ "./src/assets/js/components/panel-switch.js");
/* harmony import */ var _components_credit_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/credit-box */ "./src/assets/js/components/credit-box.js");
/* harmony import */ var _components_tiles_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tiles-slider */ "./src/assets/js/components/tiles-slider.js");
/* harmony import */ var _components_login_sidebar_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-sidebar-slider */ "./src/assets/js/components/login-sidebar-slider.js");
/* harmony import */ var _components_custom_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/custom-scrollbar */ "./src/assets/js/components/custom-scrollbar.js");
/* harmony import */ var _components_tld_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tld-filter */ "./src/assets/js/components/tld-filter.js");
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/theme-switcher */ "./src/assets/js/components/theme-switcher.js");
/* harmony import */ var _components_dataTablesScripts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dataTablesScripts */ "./src/assets/js/components/dataTablesScripts.js");
/* harmony import */ var _components_dropdown_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dropdown-select */ "./src/assets/js/components/dropdown-select.js");
/* harmony import */ var _components_language_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/language-select */ "./src/assets/js/components/language-select.js");
/* harmony import */ var _components_content_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content-slider */ "./src/assets/js/components/content-slider.js");
/* harmony import */ var _components_filter_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/filter-grid */ "./src/assets/js/components/filter-grid.js");
/* harmony import */ var _components_other__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/other */ "./src/assets/js/components/other.js");


















$(document).ready(function () {
  Object(_components_panels_grid__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_check_all__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_panel_switch__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_components_credit_box__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_components_tiles_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_components_login_sidebar_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_components_theme_switcher__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_components_dataTablesScripts__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_components_other__WEBPACK_IMPORTED_MODULE_17__["default"])();
  Object(_components_tld_filter__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_components_custom_scrollbar__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_components_dropdown_select__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_components_language_select__WEBPACK_IMPORTED_MODULE_14__["default"])();
  Object(_components_content_slider__WEBPACK_IMPORTED_MODULE_15__["default"])();
  Object(_components_filter_grid__WEBPACK_IMPORTED_MODULE_16__["default"])();
  _components_sliders__WEBPACK_IMPORTED_MODULE_4__["default"].init();
  var checkboxes = $('body').find('input.icheck-control:not(.icheck-input):not(.switch__checkbox), .addon-selector');
  var radioTabs = $('[data-radio-tab]');
  checkboxes.iCheck({
    checkboxClass: 'checkbox-styled',
    radioClass: 'radio-styled',
    increaseArea: '40%'
  });
  $('body').on('click', '[data-radio-tab]', function () {
    $(this).find('input').iCheck('check');
  });
  $('body').on('ifChecked', '[data-radio-tab] input', function () {
    $(this).closest('[data-radio-tab]').tab('show');
  });
  $('.custom-select').selectize({
    copyClassesToDropdown: false
  });
  $('[data-inputs-container]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["virtualInput"]($(this));
  });
  $('[data-input-number]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["numberInput"]($(this));
  });
  $('[data-input-number-secondary]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["numberInputSecondary"]($(this));
  });
  $('[data-range-container]').each(function () {
    new _components_range_slider__WEBPACK_IMPORTED_MODULE_1__["default"]($(this));
  });
  $('.lagom-layout-left-wide .navbar-main .dropdown-toggle').on('click', function (e) {
    if (!$(this).parent().hasClass('language')) {
      e.preventDefault();

      if ($(this).parent().hasClass('open')) {
        var that = $(this).parent();
        $(this).siblings('.dropdown-menu').slideUp(400).promise().done(function () {
          that.removeClass('open');
        });
      } else {
        var that = $(this).closest('.navbar-main').find('.open');
        that.find('.dropdown-menu').slideUp(400).promise().done(function () {
          that.removeClass('open');
        });
        $(this).parent().addClass('open');
        $(this).siblings('.dropdown-menu').slideDown(400);
      }
    }
  });
});

window.reloadConfigOptions = function (selector) {
  $(selector).find('[data-inputs-container]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["virtualInput"]($(this));
  });
  $(selector).find('[data-range-container]').each(function () {
    new _components_range_slider__WEBPACK_IMPORTED_MODULE_1__["default"]($(this));
  });
};

$('.page-viewinvoice .invoice').wrap('<div class="table-scrollbar"></div>');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoZWNrLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29udGVudC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWRpdC1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2N1c3RvbS1zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGFUYWJsZXNTY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9kcm9wZG93bi1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2ZpbHRlci1ncmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbGFuZ3VhZ2Utc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi1zaWRlYmFyLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3RoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhbmVsLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFuZWxzLWdyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JhbmdlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9iYXNlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9wcm9tby1zbGlkZXJzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlcnMvcHJvbW8tc2xpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy90ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RoZW1lLXN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aWxlcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RsZC1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbGFnb20tYXBwLmpzIl0sIm5hbWVzIjpbImluaXQiLCJjaGVja0FsbCIsIiQiLCJjaGVja2JveGVzIiwibm90Iiwib24iLCJlIiwidHlwZSIsImlDaGVjayIsImZpbHRlciIsImxlbmd0aCIsImFkZENsYXNzIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0IiwicHJvcCIsInJlbW92ZVByb3AiLCJTRUxFQ1RPUlMiLCJjb250YWluZXIiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJwYWdpbmF0aW9uIiwiRGVmYXVsdCIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJuYXZTdG9yYWdlIiwiY29udGVudFNsaWRlciIsIm9wdGlvbnMiLCJmaW5kIiwiZmlyc3QiLCJpc0luaXQiLCJnZXRDb25maWciLCJpbml0UEx1Z2luIiwiYmluZEV2ZW50cyIsImRhdGFDb25maWciLCJkYXRhIiwiZGF0YU9wdGlvbnMiLCJ1dGlsIiwicGFyc2VEYXRhT3B0aW9ucyIsImNvbmZpZyIsImV4dGVuZCIsInRoYXQiLCJzd2lwZXJJbnN0YW5jZSIsIlN3aXBlciIsInJlc2lzdGFuY2UiLCJyZXNpc3RhbmNlUmF0aW8iLCJzbGlkZXNQZXJWaWV3Iiwid2F0Y2hTbGlkZXNWaXNpYmlsaXR5Iiwic2Nyb2xsYmFyIiwiaGlkZSIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImRpc2FibGVkQ2xhc3MiLCJvbkluaXQiLCJ0YXAiLCJldmVudCIsImNoYW5nZUFjdGl2ZVNsaWRlIiwib25DbGljayIsInNsaWRlQ2hhbmdlU3RhcnQiLCJvblNsaWRlQ2hhbmdlU3RhcnQiLCJzbGlkZUNoYW5nZUVuZCIsIm9uU2xpZGVDaGFuZ2VFbmQiLCJ0cmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25TdGFydCIsInRyYW5zaXRpb25FbmQiLCJvblRyYW5zaXRpb25FbmQiLCJzbGlkZXJNb3ZlIiwib25TbGlkZXJNb3ZlIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJzd2lwZXIiLCJzbGlkZXMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYWxTdG9yYWdlSWQiLCJjbGlja2VkSW5kZXgiLCJ1cGRhdGVBY3RpdmVJbmRleCIsImhhc0NsYXNzIiwic2xpZGVUbyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlU2xpZGVJbmRleCIsImVhY2giLCJpbmRleCIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWRlIiwic2xpZGVJbmRleCIsImNsb3Nlc3QiLCJ0cmlnZ2VyIiwiZ2V0SXRlbSIsInNob3dTbGlkZXIiLCIkZWwiLCJ2aXNpYmlsaXR5Iiwib25TbGlkZUNoYW5nZSIsImluaXREYXRhU2VsZWN0b3JzIiwiZG9jdW1lbnQiLCJwcmljZSIsInBhcmVudCIsInNpYmxpbmdzIiwidmFsIiwiTmF2Q3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsYmFySW5uZXIiLCJuYXZDb250ZW50IiwiYmxvY2tVcGRhdGVDb250ZW50UG9zaXRpb24iLCJpbml0UGx1Z2luIiwic2V0U2Nyb2xsYmFyUG9zaXRpb24iLCJ1cGRhdGVDb250ZW50UG9zaXRpb24iLCJ1cGRhdGVTY3JvbGxiYXJQb3NpdGlvbiIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwic2Nyb2xsVG9wIiwidXBkYXRlIiwic2Nyb2xsSGVpZ2h0IiwiaSIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInIiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiaHJlZiIsIkRyb3Bkb3duU2VsZWN0IiwiZHJvcGRvd24iLCJsaXN0IiwibGlzdEl0ZW1zIiwiY2hpbGRyZW4iLCJzZWFyY2hJbnB1dCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZFZhbHVlVmlldyIsIm9yZ2luYWxEYXRhIiwiZmlsdGVyZWREYXRhIiwiYWN0aXZlSXRlbSIsImdldERhdGEiLCJoYW5kbGVTZWFyY2giLCJmb2N1c1NlYXJjaCIsImNsZWFyU2VhcmNoIiwiaGFuZGxlU2VsZWN0SXRlbSIsInNlYXJjaFZhbHVlIiwicmVzdWx0IiwidmFsdWUiLCJpbmRleE9mIiwiaXRlbXMiLCJ2YWx1ZXMiLCJhdHRyIiwicHVzaCIsImdldFNlYXJjaFJlc3VsdCIsInVwZGF0ZVZpZXciLCJodG1sIiwibmV3SFRNTCIsInRsZCIsImFjdGl2ZUNsYXNzIiwidW5SZWdpc3Rlckl0ZW1zQ2xpY2tFdmVudCIsInJlZ2lzdGVySXRlbXNDbGlja0V2ZW50Iiwic2V0VGltZW91dCIsImZvY3VzIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJvZmYiLCJGaWx0ZXJHcmlkIiwiY2FjaGVET00iLCJmaWx0ZXJzQ29udGFpbmVyIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJOYW1lIiwiZmlsdGVySXRlbXMiLCJzaHVmZmxlSW5zdGFuY2UiLCJTaHVmZmxlIiwiaXRlbVNlbGVjdG9yIiwic2l6ZXIiLCJpc0NlbnRlcmVkIiwibmFtZSIsInZpcnR1YWxJbnB1dCIsInZpcnR1YWxJbnB1dHMiLCJzZWxlY3RJdGVtcyIsImNoZWNrYm94SW5wdXRzIiwiaW5pdENoZWNrIiwib25DaGVjayIsIm9uVW5jaGVjayIsImNoZWNrIiwiaGFuZGxlU2VsZWN0SXRlbUNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hlY2tlZEl0ZW0iLCJjaGVja2VkSWQiLCJzZWxjdGVkSXRlbSIsImlucHV0IiwiaGlkZUNvbGxhcHNlIiwic2hvd0NvbGxhcHNlIiwiY29sbGFwc2UiLCJoYXNEcm9wZG93biIsImlzIiwic2VsZWN0SXRlbSIsInByb3BlcnRpZXMiLCJ1cGRhdGVJbnB1dFZhbHVlcyIsIm51bWJlcklucHV0IiwiaW5jQnRuIiwiZGVjQnRuIiwidXBkYXRlQnRuIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlucHV0VmFsdWUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJzaG93QnV0dG9uIiwidXBkYXRlSW5wdXQiLCJudW1iZXJJbnB1dFNlY29uZGFyeSIsIkxhbmd1YWdlU2VsZWN0IiwiY3VycmVudEJhY2tMaW5rIiwic2VsZWN0TGFuZyIsImNvbnNvbGUiLCJsb2ciLCJsYW5ndWFnZSIsImhhbmRsZUVudGVyQ2xpY2siLCJpbnNlcnRBZnRlciIsImtleUNvZGUiLCJsaW5rIiwic3BlZWQiLCJzcGFjZUJldHdlZW4iLCJsb29wIiwiYXV0b0hlaWdodCIsInNldFdpZHRoIiwiY2xpY2thYmxlIiwiYnVsbGV0RWxlbWVudCIsInRvZ2dsZUNsYXNzIiwialF1ZXJ5IiwicmVhZHkiLCJlbnF1aXJlIiwicmVnaXN0ZXIiLCJtYXRjaCIsInN1cGVyZmlzaCIsInVubWF0Y2giLCJzdGlja3lTaWRlYmFyIiwidG9wU3BhY2luZyIsImJvdHRvbVNwYWNpbmciLCJpbm5lcldyYXBwZXJTZWxlY3RvciIsImNoZWNrVmFsdWUiLCJub2ZpbGV0ZXh0Iiwic2VsZWN0ZmlsZXRleHQiLCJyZW1vdmV0ZXh0IiwiYXBwZW5kIiwidG9vbHRpcCIsInN0cmluZyIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwicmVtb3ZlIiwicGF0aCIsInBhbmVsU3dpdGNoIiwiY3VyckNoZWNrIiwicGFuZWxzR3JpZCIsIm1zbnJ5IiwiTWFzb25yeSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInJhbmdlU2xpZGVyIiwicmFuZ2VJbnB1dCIsInNlbGVjdGVkT3B0aW9uIiwidmlld1ZhbHVlIiwiY29ubmVjdCIsImJlaGF2aW91ciIsInNuYXAiLCJyYW5nZSIsInN0ZXAiLCJzdGFydFZhbHVlIiwicHJpY2VQZXJPbmUiLCJwaXBzRGVmYXVsdCIsIm1vZGUiLCJzdGVwcGVkIiwiUmFuZ2VTbGlkZXIiLCJnZXRQaXBzQ29uZmlnIiwic2xpZGVyIiwic2V0IiwiZ2V0IiwidXRpbHMiLCJkYXRhUGlwcyIsImRhdGFQaXBzT3B0aW9ucyIsInBpcHNDb25maWciLCJjdXN0b21WYWx1ZXMiLCJjb3VudCIsIm1hcCIsImFycmF5IiwiaWQiLCJvcHRpb25JRCIsInNldEN1c3RvbVRpcHMiLCJzZXRTdGFydFZhbHVlIiwic2V0UmFuZ2UiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwic3RhcnQiLCJkaXJlY3Rpb24iLCJpc1BhZ2VSVEwiLCJmb3JtYXQiLCJ0byIsIk1hdGgiLCJyb3VuZCIsImZyb20iLCJwaXBzIiwiYmFzZSIsIm9yaWdpbiIsImhhbmRsZSIsImhhbmRsZUxvd2VyIiwiaGFuZGxlVXBwZXIiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJiYWNrZ3JvdW5kIiwiY29ubmVjdHMiLCJsdHIiLCJydGwiLCJkcmFnZ2FibGUiLCJkcmFnIiwiYWN0aXZlIiwicGlwc0hvcml6b250YWwiLCJwaXBzVmVydGljYWwiLCJtYXJrZXIiLCJtYXJrZXJIb3Jpem9udGFsIiwibWFya2VyVmVydGljYWwiLCJtYXJrZXJOb3JtYWwiLCJtYXJrZXJMYXJnZSIsIm1hcmtlclN1YiIsInZhbHVlSG9yaXpvbnRhbCIsInZhbHVlVmVydGljYWwiLCJ2YWx1ZU5vcm1hbCIsInZhbHVlTGFyZ2UiLCJ2YWx1ZVN1YiIsInNsaWRlclBpcHNDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVyUGlwcyIsInBpcCIsInBpcFZhbHVlIiwiaGFuZGxlU2xpZGVyRXZlbnRzIiwib25VcGRhdGUiLCJzZXRQcmljZSIsInNldFZpZXdWYWx1ZSIsImNoYW5nZUFjdGl2ZVBpcCIsImNoYW5nZUFjdGl2ZVNsaWRlSUQiLCJvblNsaWRlIiwib25DaGFuZ2UiLCJvblNldCIsIk51bWJlciIsInRvRml4ZWQiLCJwYXJzZUZsb2F0IiwiU2xpZGVyIiwic2xpZGVyQ29uZmlnIiwid3JhcHBlciIsIk9iamVjdCIsImFzc2lnbiIsImNlbnRlcmVkU2xpZGVzIiwibW9kaWZpZXJDbGFzcyIsImJ1bGxldENsYXNzIiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJhMTF5IiwiZW5hYmxlZCIsInNsaWRlUHJldkNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZVZpc2libGVDbGFzcyIsInNsaWRlQWN0aXZlQ2xhc3MiLCJkZXN0cm95IiwidGVzdGltb25pYWxzIiwicHJvbW9TbGlkZXIiLCJzbGlkZUxlZnQiLCJyZWZzIiwiYmVmb3JlSW5pdCIsImVsZW1lbnQiLCJzaG93U2xpZGUiLCJhbmltYXRpb25zIiwiY29udGVudEFuaW1hdGlvbiIsImFuaW1lIiwidGFyZ2V0cyIsImNvbnRlbnQiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNpbmciLCJmaW5pc2hlZCIsImljb25EZWxheSIsImljb25zIiwiQXJyYXkiLCJpY29uIiwiaWNvbkFuaW1hdGlvbiIsInRyYW5zbGF0ZVkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFsbCIsInRoZW4iLCJoaWRlU2xpZGUiLCJmYWRlSW4iLCJwYWdpbmF0aW9uSXRlbSIsImNsb3NlIiwiZGVmYXVsdEFuaW1hdGlvblR5cGUiLCJQcm9tb1NsaWRlciIsInByZXZlbnRTbGlkZUNoYW5nZSIsInF1ZW5lQW5pbWF0aW9ucyIsImluaXRTbGlkZXIiLCJwYWdpbmF0aW9uSXRlbXMiLCJoYW5kbGVQYWdpbmF0aW9uQ2xpY2siLCJoaWRlU2xpZGVyIiwidXBkYXRlSGVpZ2h0IiwibW91c2VlbnRlciIsInN0b3BBdXRvcGxheSIsIm1vdXNlbGVhdmUiLCJzdGFydEF1dG9wbGF5IiwiaGlkZGVuIiwic2V0QW5pbWF0aW9ucyIsImFjdGl2ZVNsaWRlIiwiZ29Ub1NsaWRlIiwiaXRlbUluZGV4IiwiYWRkQW5pbWF0aW9uVG9RdWVuZSIsImZpcnN0U2xpZGUiLCJvbGRJbmRleCIsInBvcCIsInVwZGF0ZVBhZ2luYXRpb25TdGF0dXMiLCJzZXRCYWNrZ3JvdW5kIiwiYW5pbWF0aW9uVHlwZSIsImFuaW1hdGlvbiIsImNsb25lRGVlcCIsImVxIiwiYXV0b1BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbm5lckhlaWdodCIsInVuc2hpZnQiLCJUZXN0aW1vbmlhc2xTbGlkZXIiLCJzZXRTbGlkZXJDb25maWciLCJnZXRTbGlkZXJDb25maWciLCJzbGlkZXNQZXJHcm91cCIsImJyZWFrcG9pbnRzIiwiQmFzZVNsaWRlciIsInRvZ2dsZU92ZXJsYXkiLCJzbGlkZVRvZ2dsZSIsImZhZGVUb2dnbGUiLCJhY3RpdmVTdHlsZSIsImFjdGl2ZUxheW91dCIsImFjdGl2ZVBhZ2UiLCJ1cmwiLCJ0b2dnbGVUaGVtZVN3aXRjaGVyIiwiYnJvd3NlciIsInBhcnNlSW50IiwiYm9keSIsImhlaWdodCIsInNjcm9sbCIsImdldFNjcm9sbGJhcldpZHRoIiwicmVzZXRUaGVtZVN3aXRjaGVyIiwib3V0ZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsImFwcGVuZENoaWxkIiwid2lkdGhOb1Njcm9sbCIsIm9mZnNldFdpZHRoIiwib3ZlcmZsb3ciLCJpbm5lciIsIndpZHRoV2l0aFNjcm9sbCIsInJlbW92ZUNoaWxkIiwibmV3U3R5bGUiLCJuZXdMYXlvdXQiLCJuZXdQYWdlIiwic2V0U3R5bGUiLCJzZXRMYXlvdXQiLCJzZXRQYWdlIiwiY2hvb3NlbkxheW91dCIsImNob29zZW5TdHlsZSIsImNob29zZW5QYWdlIiwiZmluZHNpZ24iLCJuZXdVcmwiLCJzbGlkZVVwIiwiZmFkZU91dCIsIm15U3dpcGVyIiwic2VsZWN0aXplIiwiY29weUNsYXNzZXNUb0Ryb3Bkb3duIiwicGx1Z2lucyIsInJlbmRlciIsImVzY2FwZSIsIm9uSXRlbUFkZCIsIiRpdGVtIiwic2hvdyIsInJvdyIsInN0cjEiLCJzdHIyIiwib25EZWxldGUiLCJzZWxlY3RlZF9vYmplY3RzIiwidG90YWxMZW4iLCJrZXkiLCJVdGlsIiwidHJhbnNpdGlvbiIsIk1BWF9VSUQiLCJUcmFuc2l0aW9uRW5kRXZlbnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidG9UeXBlIiwib2JqIiwidG9TdHJpbmciLCJjYWxsIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZW5kIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsImFwcGx5IiwiYXJndW1lbnRzIiwidHJhbnNpdGlvbkVuZFRlc3QiLCJRVW5pdCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImNhbGxlZCIsIm9uZSIsIlRSQU5TSVRJT05fRU5EIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCIsImZuIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJzcGVjaWFsIiwicGFyc2VPcHRpb24iLCJpc05hTiIsImdldFVJRCIsInByZWZpeCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsInNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiJHNlbGVjdG9yIiwiZXJyb3IiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJCb29sZWFuIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJmb3JFYWNoIiwib3B0aW9uIiwidHJpbSIsImluaXRQYW5lbHNHcmlkIiwiaW5pdENoZWNrQWxsIiwiaW5pdFBhbmVsU3dpdGNoIiwiaW5pdENyZWRpdEJveCIsImluaXRUaWxlc1NsaWRlciIsImluaXRMb2dpblNpZGViYXJTbGlkZXIiLCJpbml0VGhlbWVTd2l0Y2hlciIsImluaXREYXRhVGFibGVTY3JpcHRzIiwiaW5pdE90aGVyU2NyaXB0cyIsImluaXRUTERmaWxlciIsImluaXRDdXN0b21TY3JvbGxiYXIiLCJpbml0RHJvcGRvd25TZWxlY3QiLCJpbml0TGFuZ3VhZ2VTZWxlY3QiLCJpbml0Q29udGVudFNsaWRlciIsImluaXRGaWx0ZXJHcmlkIiwic2xpZGVycyIsInJhZGlvVGFicyIsImNoZWNrYm94Q2xhc3MiLCJyYWRpb0NsYXNzIiwiaW5jcmVhc2VBcmVhIiwidGFiIiwicHJvbWlzZSIsImRvbmUiLCJzbGlkZURvd24iLCJyZWxvYWRDb25maWdPcHRpb25zIiwid3JhcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImxhZ29tL2Fzc2V0cy9qcy9sYWdvbS1hcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcInRlbXBsYXRlc1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hc3NldHMvanMvbGFnb20tYXBwLmpzXCIsXCJsYWdvbS9hc3NldHMvanMvdmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBjaGVja0FsbCA9ICQoJyNzZWxlY3RBbGwnKTtcclxuICAgIGxldCBjaGVja2JveGVzID0gJCgnLmRvbWlkcycpLm5vdCgnOmRpc2FibGVkJyk7XHJcbiAgICBjaGVja0FsbC5vbignaWZDaGVja2VkIGlmVW5jaGVja2VkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLnR5cGUgPT0gJ2lmQ2hlY2tlZCcpIHtcclxuICAgICAgICAgICAgY2hlY2tib3hlcy5pQ2hlY2soJ2NoZWNrJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tib3hlcy5pQ2hlY2soJ3VuY2hlY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNoZWNrYm94ZXMub24oJ2lmQ2hhbmdlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoY2hlY2tib3hlcy5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkKCcjZG9tYWluU2VsZWN0ZWRDb3VudGVyJykuYWRkQ2xhc3MoJ2JhZGdlLS1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgICQoJy5ib3R0b20tYWN0aW9uLXN0aWNreScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtYWN0aW9ucycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNkb21haW5TZWxlY3RlZENvdW50ZXInKS5yZW1vdmVDbGFzcygnYmFkZ2UtLXByaW1hcnknKTtcclxuICAgICAgICAgICAgJCgnLmJvdHRvbS1hY3Rpb24tc3RpY2t5JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy1hY3Rpb25zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNkb21haW5TZWxlY3RlZENvdW50ZXInKS50ZXh0KGNoZWNrYm94ZXMuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKGNoZWNrYm94ZXMuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PSBjaGVja2JveGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGVja0FsbC5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGVja0FsbC5yZW1vdmVQcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrQWxsLmlDaGVjaygndXBkYXRlJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE5hbWU6IENvbnRlbnQgU2xpZGVyKGxheWVyc1VJKVxyXG4gKiBWZXJzaW9uOiBBbHBoYVxyXG4gKiBMaWNlbnNlOiAtXHJcbiAqIFdlYnNpdGU6IGh0dHA6Ly9sYXllcnN1aS5jb20vXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWxzLmpzJztcclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvZGlzdC9qcy9zd2lwZXIuanMnO1xyXG5cclxuY29uc3QgU0VMRUNUT1JTID0ge1xyXG4gICAgY29udGFpbmVyOiAnW2RhdGEtY29udGVudC1zbGlkZXJdJyxcclxuICAgIG5leHRTbGlkZTogJ1tkYXRhLW5leHQtc2xpZGVdJyxcclxuICAgIHByZXZTbGlkZTogJ1tkYXRhLXByZXYtc2xpZGVdJyxcclxuICAgIHBhZ2luYXRpb246ICdbZGF0YS1zbGlkZXItcGFnaW5hdGlvbl0nXHJcbn07XHJcblxyXG5jb25zdCBEZWZhdWx0ID0ge1xyXG5cclxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxyXG4gICAgbmF2U3RvcmFnZTogJ25vcm1hbCcsXHJcbn07XHJcblxyXG5jbGFzcyBjb250ZW50U2xpZGVye1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLm5leHRTbGlkZSA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLm5leHRTbGlkZSkuZmlyc3QoKTtcclxuICAgICAgICB0aGlzLnByZXZTbGlkZSA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLnByZXZTbGlkZSkuZmlyc3QoKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5wYWdpbmF0aW9uKS5maXJzdCgpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBMdWdpbigpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuICAgIGdldENvbmZpZygpe1xyXG5cclxuICAgICAgICB2YXIgZGF0YUNvbmZpZyAgPSB0aGlzLmNvbnRhaW5lci5kYXRhKCk7XHJcbiAgICAgICAgaWYoZGF0YUNvbmZpZy5vcHRpb25zKXtcclxuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHV0aWwucGFyc2VEYXRhT3B0aW9ucyhkYXRhQ29uZmlnLm9wdGlvbnMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFPcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGRhdGFDb25maWcsIHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG4gICAgYmluZEV2ZW50cygpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZVRvKCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2xpZGVOZXh0KCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2xpZGVQcmV2KCl7XHJcblxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1ByaXZhdGUgbWV0aG9kc1xyXG4gICAgaW5pdFBMdWdpbigpe1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnN3aXBlckluc3RhbmNlID0gbmV3IFN3aXBlcih0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICByZXNpc3RhbmNlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNpc3RhbmNlUmF0aW86IDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxiYXI6e1xyXG4gICAgICAgICAgICAgICAgaGlkZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZWw6IHRoaXMucGFnaW5hdGlvblswXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6IHRoaXMubmV4dFNsaWRlWzBdLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiB0aGlzLnByZXZTbGlkZVswXSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkQ2xhc3M6ICdpcy1kaXNhYmxlZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb246e1xyXG4gICAgICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uSW5pdCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0YXA6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNoYW5nZUFjdGl2ZVNsaWRlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoYXQuY29uZmlnLnNsaWRlVG9DbGlja2VkU2xpZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNsaWRlVG9DbGlja2VkU2xpZGUodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uQ2xpY2sodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uU2xpZGVDaGFuZ2VTdGFydCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVDaGFuZ2VFbmQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uU2xpZGVDaGFuZ2VFbmQodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25TdGFydChldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vblRyYW5zaXRpb25TdGFydCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQub25UcmFuc2l0aW9uRW5kKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJNb3ZlOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vblNsaWRlck1vdmUodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnY29udGVudC1zbGlkZXInLFxyXG4gICAgICAgICAgICBzbGlkZUNsYXNzOiAnY29udGVudC1zbGlkZXItaXRlbScsXHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzczogJ2NvbnRlbnQtc2xpZGVyLXdyYXBwZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VBY3RpdmVTbGlkZShzd2lwZXIpe1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSW5pdCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLmNvbmZpZy5uYXZTdG9yYWdlKXtcclxuICAgICAgICAgICAgY2FzZSAnbm9ybWFsJzpcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaGFzaCc6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcclxuICAgICAgICAgICAgICAgICQoc2xpZGVzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNvbnRlbnQtc2xpZGVyLSR7dGhpcy5jb25maWcubG9jYWxTdG9yYWdlSWR9YCwgc3dpcGVyLmNsaWNrZWRJbmRleCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlKHN3aXBlciwgZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQgY2xpY2tlZEluZGV4ID0gc3dpcGVyLmNsaWNrZWRJbmRleCxcclxuICAgICAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcclxuICAgICAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XHJcblxyXG4gICAgICAgICAgICBpZighJChzbGlkZXNbY2xpY2tlZEluZGV4LTFdKS5oYXNDbGFzcygnc3dpcGVyLXNsaWRlLXZpc2libGUnKSl7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighJChzbGlkZXNbY2xpY2tlZEluZGV4KzFdKS5oYXNDbGFzcygnc3dpcGVyLXNsaWRlLXZpc2libGUnKSl7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0NhbGxiYWNrc1xyXG4gICAgb25Jbml0KHN3aXBlcil7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vbkluaXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcub25Jbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCh0aGlzLmNvbmZpZy5uYXZTdG9yYWdlKXtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ25vcm1hbCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlU2xpZGVJbmRleCA9IDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICQoc2xpZGVzKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZVNsaWRlSW5kZXgsIDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICBjYXNlICdoYXNoJzpcclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2xpZGUgPSAkKHN3aXBlci5jb250YWluZXIpLmZpbmQoJ1tocmVmPVwiJysgd2luZG93LmxvY2F0aW9uLmhhc2grJ1wiXScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGUuY2xvc2VzdCgnLnN3aXBlci1zbGlkZScpLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZUluZGV4LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgY29udGVudC1zbGlkZXItJHt0aGlzLmNvbmZpZy5sb2NhbFN0b3JhZ2VJZH1gKTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChzd2lwZXIuc2xpZGVzW2luZGV4XSkuZmluZCgnYScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbygwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dTbGlkZXIoc3dpcGVyKTtcclxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzaG93U2xpZGVyKHN3aXBlcil7XHJcbiAgICAgICAgc3dpcGVyLiRlbC5jc3Moe1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2soc3dpcGVyLCBldmVudCl7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uQ2xpY2soc3dpcGVyLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVDaGFuZ2VTdGFydChzd2lwZXIsIGV2ZW50KXtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uU2xpZGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcub25TbGlkZUNoYW5nZVN0YXJ0KHN3aXBlciwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNsaWRlQ2hhbmdlRW5kKHN3aXBlciwgZXZlbnQpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25TbGlkZUNoYW5nZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblNsaWRlQ2hhbmdlRW5kKHN3aXBlciwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVHJhbnNpdGlvblN0YXJ0KHN3aXBlciwgZXZlbnQpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25UcmFuc2l0aW9uU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcub25UcmFuc2l0aW9uU3RhcnQoc3dpcGVyLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25UcmFuc2l0aW9uRW5kKHN3aXBlciwgZXZlbnQpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25UcmFuc2l0aW9uRW5kID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uVHJhbnNpdGlvbkVuZChzd2lwZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNsaWRlck1vdmUoc3dpcGVyLCBldmVudCl7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vblNsaWRlck1vdmUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcub25TbGlkZXJNb3ZlKHN3aXBlciwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YVNlbGVjdG9ycygpe1xyXG4gICAgJChTRUxFQ1RPUlMuY29udGFpbmVyKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbmV3IGNvbnRlbnRTbGlkZXIoJCh0aGlzKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoU0VMRUNUT1JTLmNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIG5ldyBjb250ZW50U2xpZGVyKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZC1jcmVkaXRzLWJ1dHRvbnMgLmJ0bicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBwcmljZSA9ICQodGhpcykuZGF0YSgncHJpY2UnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmlucHV0LWdyb3VwJykuZmluZCgnI2Ftb3VudCcpLnZhbChwcmljZSk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjYW1vdW50JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJCgnI2FkZC1jcmVkaXRzLWJ1dHRvbnMnKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJyNhZGQtY3JlZGl0cy1idXR0b25zJykuZmluZCgnW2RhdGEtcHJpY2U9XCInICsgdmFsICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG59IiwiaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xyXG5cclxuY2xhc3MgTmF2Q3VzdG9tU2Nyb2xsYmFye1xyXG4gICAgY29uc3RydWN0b3Ioc2Nyb2xsYmFyKXtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSAkKCdbZGF0YS1uYXYtc2Nyb2xsYmFyXScpO1xyXG4gICAgICAgIGlmKCF0aGlzLnNjcm9sbGJhci5sZW5ndGgpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFySW5uZXIgPSAkKCdbZGF0YS1uYXYtc2Nyb2xsYmFyLWlubmVyXScpO1xyXG4gICAgICAgIHRoaXMubmF2Q29udGVudCA9ICQoJ1tkYXRhLW5hdi1jb250ZW50XScpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tVcGRhdGVDb250ZW50UG9zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UGx1Z2luKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQb3NpdGlvbigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYmluZEV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLm9uKCdwcy1zY3JvbGwteScsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZDb250ZW50Lm9uKCdzY3JvbGwnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2Nyb2xsYmFyUG9zaXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGxiYXJQb3NpdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdFBsdWdpbigpe1xyXG4gICAgICAgIHRoaXMucHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLnNjcm9sbGJhclswXSwge1xyXG4gICAgICAgICAgICB3aGVlbFNwZWVkOiAyLFxyXG4gICAgICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgbWluU2Nyb2xsYmFyTGVuZ3RoOiAyMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRlbnRQb3NpdGlvbigpe1xyXG5cclxuICAgICAgICBpZighdGhpcy5ibG9ja1VwZGF0ZUNvbnRlbnRQb3NpdGlvbil7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Q29udGVudC5zY3JvbGxUb3AodGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJsb2NrVXBkYXRlQ29udGVudFBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTY3JvbGxiYXJQb3NpdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYmxvY2tVcGRhdGVDb250ZW50UG9zaXRpb24gPSB0cnVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuc2Nyb2xsVG9wKHRoaXMubmF2Q29udGVudC5zY3JvbGxUb3AoKSk7XHJcbiAgICAgICAgdGhpcy5wcy51cGRhdGUoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNldFNjcm9sbGJhclBvc2l0aW9uKCl7XHJcbiAgICAgICAgbGV0IHNjcm9sbEhlaWdodCA9ICB0aGlzLm5hdkNvbnRlbnRbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFySW5uZXIuY3NzKCdoZWlnaHQnLCBzY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucHMudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgbmV3IE5hdkN1c3RvbVNjcm9sbGJhcigpO1xyXG5cclxuICAgICQoJ1tkYXRhLXBhbmVscy1ncmlkXSAubGlzdC1ncm91cCwgLnBhbmVsLWNob29zZS1kb21haW4gLmRyb3Bkb3duLW1lbnUsIC5mb290ZXItbGlua3MgLmRyb3Bkb3duLW1lbnUsIC5jYXRlZ29yaWVzLWNvbGxhcHNlZCAuZHJvcGRvd24tbWVudScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcywge1xyXG4gICAgICAgICAgICB3aGVlbFNwZWVkOiAyLFxyXG4gICAgICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5TY3JvbGxiYXJMZW5ndGg6IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHQvLyBkYXRhdGFibGVzXHJcbiAgICBpZiAoJCgnLmRhdGFUYWJsZScpLmxlbmd0aCkge1xyXG4gICAgICAgIC8vYWRkIGNvbGxhcHNlIGJ1dHRvbiB0byBlYWNoIHJvd1xyXG4gICAgICAgIC8vICQoJy5kYXRhVGFibGUgdGJvZHkgdHInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHZhciB0ZCA9ICQodGhpcykuZmluZCgndGQ6Zmlyc3QnKTtcclxuICAgICAgICAvLyAgICAgJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdGFibGUtY29sbGFwc2VcIj48L2J1dHRvbj4nKS5hcHBlbmRUbyh0ZCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9wcmV2ZW50IHN0YW5kYXJkIGNvbGxhcHNlIGNsaWNrXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kYXRhVGFibGUgdGJvZHkgdHIgdGQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgciA9IGUudGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTmFtZSAhPSBcImJ0bi10YWJsZS1jb2xsYXBzZVwiICYmIGUudGFyZ2V0LmNsYXNzTmFtZSAhPSBcImNlbGwtYWN0aW9uXCIgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9IFwiY2VsbC1jaGVja2JveFwiICYmIFwiYnV0dG9uXCIgIT0gaSAmJiBcImFcIiAhPSBpICYmIFwiaW1nXCIgIT0gaSAmJiBcImJ1dHRvblwiICE9IHIgJiYgXCJhXCIgIT0gciAmJiBcImlucHV0XCIgIT0gaSAmJiBcImlucHV0XCIgIT0gcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdCgndHInKS5kYXRhKCd1cmwnKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmRhdGEoJ3VybCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmRhdGFUYWJsZSB0aGVhZCB0ciB0aCAuYnRuLXRhYmxlLWNvbGxhcHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZGF0YVRhYmxlJykuZmluZCgndHIucGFyZW50IHRkIC5idG4tdGFibGUtY29sbGFwc2UnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRhdGFUYWJsZScpLmZpbmQoJ3RyOm5vdCgucGFyZW50KSB0ZCAuYnRuLXRhYmxlLWNvbGxhcHNlJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5kYXRhVGFibGUgaW5wdXQnKS5vbignaWZDaGVja2VkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuZGF0YVRhYmxlIGlucHV0Jykub24oJ2lmVW5jaGVja2VkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImNsYXNzIERyb3Bkb3duU2VsZWN0e1xyXG4gICAgY29uc3RydWN0b3IoZHJvcGRvd24pIHtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duID0gJChkcm9wZG93bik7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1kcm9wZG93bi1zZWxlY3QtbGlzdF0nKTtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcyAgPSAgdGhpcy5saXN0LmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9IHRoaXMuZHJvcGRvd24uZmluZCgnW2RhdGEtZHJvcGRvd24tc2VsZWN0LXNlYXJjaF0nKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdC12YWx1ZV0nKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVWaWV3ID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1kcm9wZG93bi1zZWxlY3QtdmFsdWUtdmlld10nKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5vcmdpbmFsRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gJyc7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBiaW5kRXZlbnRzKCl7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQub24oJ2tleXVwJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaChldmVudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRyb3Bkb3duLm9uKCdzaG93bi5icy5kcm9wZG93bicsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmRyb3Bkb3duLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VhcmNoKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMub24oJ2NsaWNrJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEl0ZW0oZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRTZWFyY2hSZXN1bHQoc2VhcmNoVmFsdWUpe1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5vcmdpbmFsRGF0YS5maWx0ZXIoKHZhbHVlKT0+e1xyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPiAtMSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldERhdGEoKXtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5saXN0SXRlbXM7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmdpbmFsRGF0YSA9IHZhbHVlcztcclxuICAgIH1cclxuICAgIGhhbmRsZVNlYXJjaChldmVudCl7XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSAgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0aGlzLmdldFNlYXJjaFJlc3VsdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlVmlldygpe1xyXG4gICAgICAgIHRoaXMubGlzdC5odG1sKCcnKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0hUTUwgPSBgYDtcclxuXHJcbiAgICAgICAgZm9yKGxldCB0bGQgb2YgdGhpcy5maWx0ZXJlZERhdGEpe1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSAnJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PSB0bGQpe1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3MgPSAnYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdIVE1MICs9IGA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudS1pdGVtICR7YWN0aXZlQ2xhc3N9XCIgZGF0YS12YWx1ZT1cIiR7dGxkfVwiPjxhPiR7dGxkfTwvYT48L2Rpdj5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRDbGFzcygnaXMtZW1wdHknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0Lmh0bWwobmV3SFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdC1saXN0XScpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlckl0ZW1zQ2xpY2tFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNTZWFyY2goKXtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSwwKTtcclxuXHJcbiAgICB9XHJcbiAgICBjbGVhclNlYXJjaCgpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsKCcnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnRyaWdnZXIoJ2tleXVwJyk7XHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbShldmVudCl7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICBpdGVtLmRhdGEoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlVmlldy50ZXh0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUudmFsKHZhbHVlKTtcclxuICAgICAgICBpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMub24oJ2NsaWNrLnNlYXJjaERyb3Bkb3duJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEl0ZW0oZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1blJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMub2ZmKCdjbGljay5zZWFyY2hEcm9wZG93bicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICBpbml0KCl7XHJcbiAgICAkKCdbZGF0YS1kcm9wZG93bi1zZWxlY3RdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBuZXcgRHJvcGRvd25TZWxlY3QodGhpcyk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCBTaHVmZmxlIGZyb20gJ3NodWZmbGVqcyc7XG5cbmNsYXNzIEZpbHRlckdyaWQge1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgdGhpcy5jYWNoZURPTSgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0UGx1Z2luKCk7XG5cbiAgICB9XG4gICAgY2FjaGVET00oKXtcbiAgICAgICAgdGhpcy5maWx0ZXJzQ29udGFpbmVyID0gJCgnW2RhdGEtZmlsdGVyLWdyaWRdJyk7XG4gICAgfVxuICAgIGJpbmRFdmVudHMoKXtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItbmF2XSBbZGF0YS1maWx0ZXJdJykub24oJ2NsaWNrJywgKGV2ZW50KT0+e1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5uYXYnKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGZpbHRlck5hbWUgPSAkKGV2ZW50LnRhcmdldCkuZGF0YSgnZmlsdGVyJyk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlck5hbWUpXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgaW5pdFBsdWdpbigpIHtcblxuICAgICAgICBpZighdGhpcy5maWx0ZXJzQ29udGFpbmVyLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNodWZmbGVJbnN0YW5jZSA9IG5ldyBTaHVmZmxlKHRoaXMuZmlsdGVyc0NvbnRhaW5lclswXSwge1xuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmZpbHRyLWl0ZW0nLFxuICAgICAgICAgICAgc2l6ZXI6ICcuanMtc2h1ZmZsZS1zaXplcicsXG4gICAgICAgICAgICBpc0NlbnRlcmVkOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcblxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzQ29udGFpbmVyLmFkZENsYXNzKCd2aXNpYmxlJylcblxuICAgICAgICB9LDMwMCk7XG4gICAgfVxuICAgIGZpbHRlckl0ZW1zKG5hbWUpe1xuXG4gICAgICAgIGlmKG5hbWUgPT0gJ2FsbCcpe1xuXG4gICAgICAgICAgICB0aGlzLnNodWZmbGVJbnN0YW5jZS5maWx0ZXIoKTtcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNodWZmbGVJbnN0YW5jZS5maWx0ZXIoW25hbWVdKTtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgbmV3IEZpbHRlckdyaWQoKTtcbn0iLCJcclxuZXhwb3J0IGNsYXNzIHZpcnR1YWxJbnB1dHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLnZpcnR1YWxJbnB1dHMgPSAgdGhpcy5jb250YWluZXIuZmluZCgnW2RhdGEtdmlydHVhbC1pbnB1dF0nKTtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1zID0gIHRoaXMuY29udGFpbmVyLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLW1lbnVdIFtkYXRhLXZhbHVlXScpO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbnRhaW5lci5maW5kKCdbZGF0YS1pbnB1dC1jb2xsYXBzZV0nKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIFx0dGhpcy5jaGVja2JveElucHV0cyAgPSB0aGlzLnZpcnR1YWxJbnB1dHMuZmluZCgnLnBhbmVsLWhlYWRpbmcgaW5wdXQnKTtcclxuXHRcdH0gZWxzZSB7XHRcclxuICAgICAgICBcdHRoaXMuY2hlY2tib3hJbnB1dHMgID0gdGhpcy52aXJ0dWFsSW5wdXRzLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0Q2hlY2soKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHJcblx0XHR0aGlzLmNoZWNrYm94SW5wdXRzLm9uKCdpZkNoZWNrZWQnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2soZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5jaGVja2JveElucHV0cy5vbignaWZVbmNoZWNrZWQnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uVW5jaGVjayhldmVudCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnZpcnR1YWxJbnB1dHMub24oJ2NsaWNrIHNlbGVjdE9wdGlvbicsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5jaGVjayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbXMub24oJ2NsaWNrIHNlbGVjdE9wdGlvbicsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RJdGVtQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlydHVhbElucHV0cy5maW5kKCdbdHlwZT1cInBhc3N3b3JkXCJdJykub24oJ2NsaWNrJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdENoZWNrKCl7XHJcbiAgICAgICAgbGV0IGNoZWNrZWRJdGVtID0gdGhpcy52aXJ0dWFsSW5wdXRzLmZpbmQoJ2lucHV0OmNoZWNrZWQnKTtcclxuIFxyXG4gICAgICAgIGxldCBjaGVja2VkSWQgPSBjaGVja2VkSXRlbS52YWwoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoY2hlY2tlZElkKXtcclxuICAgICAgICAgICAgbGV0IHNlbGN0ZWRJdGVtID0gY2hlY2tlZEl0ZW0uY2xvc2VzdChcIltkYXRhLXZpcnR1YWwtaW5wdXRdXCIpLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLW1lbnVdIFtkYXRhLXZhbHVlPVwiJytjaGVja2VkSWQrJ1wiXScpO1xyXG4gICAgICAgICAgICBzZWxjdGVkSXRlbS50cmlnZ2VyKCdzZWxlY3RPcHRpb24nKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZW1vdmVDbGFzcyhldmVudCkgeyAgICAgIFxyXG4gICAgICAgIGxldCBpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7ICAgIFxyXG4gICAgICAgIGxldCB2aXJ0dWFsSW5wdXQgPSBpbnB1dC5jbG9zZXN0KCdbZGF0YS12aXJ0dWFsLWlucHV0XScpXHJcbiAgICAgICAgdGhpcy5oaWRlQ29sbGFwc2UodmlydHVhbElucHV0KVxyXG4gICAgICAgIHZpcnR1YWxJbnB1dC5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG5cclxuXHJcbiAgICAgICAgaWYoaW5wdXQuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIGNsYXNzIGZyb20gY29udGFpbmVyXHJcbiAgICAgICAgaWYodmlydHVhbElucHV0LmRhdGEoJ3ZpcnR1YWwtaW5wdXQtbm9uZScpID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGFpbmVyLmhhc0NsYXNzKCdpcy1zZWxlY3RlZCcpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQ2xhc3MoZXZlbnQpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB2aXJ0dWFsSW5wdXQgPSBpbnB1dC5jbG9zZXN0KCdbZGF0YS12aXJ0dWFsLWlucHV0XScpO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbGxhcHNlKHZpcnR1YWxJbnB1dClcclxuXHJcblx0XHR2aXJ0dWFsSW5wdXQuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYoaW5wdXQuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpe1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWRkIENsYXNzIHRvIGNvbnRhaW5lclxyXG4gICAgICAgIGlmKHZpcnR1YWxJbnB1dC5kYXRhKCd2aXJ0dWFsLWlucHV0LW5vbmUnKSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5jb250YWluZXIuaGFzQ2xhc3MoJ2lzLXNlbGVjdGVkJykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbiAgICBzaG93Q29sbGFwc2UodmlydHVhbElucHV0KXtcclxuICAgICAgICB2aXJ0dWFsSW5wdXQuZmluZCgnW2RhdGEtaW5wdXQtY29sbGFwc2VdJykuY29sbGFwc2UoJ3Nob3cnKTtcclxuICAgIH1cclxuICAgIGhpZGVDb2xsYXBzZSh2aXJ0dWFsSW5wdXQpe1xyXG4gICAgICAgIHZpcnR1YWxJbnB1dC5maW5kKCdbZGF0YS1pbnB1dC1jb2xsYXBzZV0nKS5jb2xsYXBzZSgnaGlkZScpO1xyXG4gICAgfVxyXG4gICAgY2hlY2soZXZlbnQpIHtcclxuICAgICAgICBsZXQgaXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGhhc0Ryb3Bkb3duICA9IGl0ZW0uZGF0YSgndmlydHVhbC1pbnB1dCcpID09ICdkcm9wZG93bicgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKCFoYXNEcm9wZG93bil7XHJcbiAgICAgICAgICAgIGlmKCFpdGVtLmhhc0NsYXNzKCdkaXNhYmxlZCcpICYmICEkKGV2ZW50LnRhcmdldCkuaXMoJ2EnKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5maW5kKCdpbnB1dCcpLmZpcnN0KCkuaUNoZWNrKCdjaGVjaycpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgdW5DaGVjayhldmVudCl7XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlSW5wdXRWYWx1ZXMoaXRlbSwgc2VsZWN0SXRlbSwgdmFsdWUsIHByb3BlcnRpZXMsIGV2ZW50KXtcclxuICAgIFxyXG4gICAgICAgIGxldCBpbnB1dCA9IGl0ZW0uZmluZCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudHlwZSA9PSAnY2xpY2snKXtcclxuICAgICAgICAgICAgJChpdGVtKS5maW5kKCdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScpLmZpcnN0KCkuZHJvcGRvd24oJ3RvZ2dsZScpO1xyXG4gICAgICAgICAgICBpbnB1dC5pQ2hlY2soJ2NoZWNrJyk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW0uZmluZCgnW2RhdGEtbmFtZV0nKS50ZXh0KHByb3BlcnRpZXMubmFtZSk7XHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1wcmljZV0nKS50ZXh0KHByb3BlcnRpZXMucHJpY2UpO1xyXG4gICAgICAgIHRoaXMub25DaGVjayhldmVudCk7XHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbUNsaWNrKGV2ZW50KXtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdEl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBpdGVtID0gc2VsZWN0SXRlbS5jbG9zZXN0KCdbZGF0YS12aXJ0dWFsLWlucHV0XScpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHNlbGVjdEl0ZW0uZGF0YSgndmFsdWUnKTtcclxuICAgICAgICBsZXQgcHJvcGVydGllcyA9ICQoc2VsZWN0SXRlbSkuZGF0YSgncHJvcGVydGllcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW0uZmluZCgnW2RhdGEtZHJvcGRvd24tbWVudV0gW2RhdGEtdmFsdWVdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHNlbGVjdEl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZXMoaXRlbSwgc2VsZWN0SXRlbSwgdmFsdWUsIHByb3BlcnRpZXMsIGV2ZW50KTtcclxuXHJcbiAgICB9XHJcbiAgICBvbkNoZWNrKGV2ZW50KXtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnW2RhdGEtdmlydHVhbC1pbnB1dF0nKTtcclxuXHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1vbi11bmNoZWNrZWRdJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIGl0ZW0uZmluZCgnW2RhdGEtb24tY2hlY2tlZF0nKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcblxyXG4gICAgfVxyXG4gICAgb25VbmNoZWNrKGV2ZW50KXtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLXZpcnR1YWwtaW5wdXRdJyk7XHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1vbi11bmNoZWNrZWRdJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIGl0ZW0uZmluZCgnW2RhdGEtb24tY2hlY2tlZF0nKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1kcm9wZG93bi1tZW51XSBbZGF0YS12YWx1ZV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcbmV4cG9ydCBjbGFzcyBudW1iZXJJbnB1dHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcil7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdbZGF0YS1pbnB1dC1udW1iZXItaW5wdXRdJyk7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4gPSAgdGhpcy5jb250YWluZXIuZmluZChcIltkYXRhLWlucHV0LW51bWJlci1pbmNdXCIpO1xyXG4gICAgICAgIHRoaXMuZGVjQnRuID0gIHRoaXMuY29udGFpbmVyLmZpbmQoXCJbZGF0YS1pbnB1dC1udW1iZXItZGVjXVwiKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0biA9IHRoaXMuY29udGFpbmVyLmZpbmQoXCJbZGF0YS1pbnB1dC1udW1iZXItdXBkYXRlXVwiKTtcclxuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5pbnB1dC5hdHRyKCdtaW4nKTtcclxuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5pbnB1dC5hdHRyKCdtYXgnKTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAgdGhpcy5pbnB1dC52YWwoKTtcclxuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5jb250YWluZXIuZmluZChcIltkYXRhLWlucHV0LW51bWJlci1wcmljZV1cIik7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBiaW5kRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4ub24oJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGVjQnRuLm9uKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdjaGFuZ2UnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UoKXtcclxuXHJcbiAgICB9XHJcbiAgICBpbmNyZW1lbnQoKXtcclxuICAgICAgICBsZXQgc2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlID49IHRoaXMubWF4VmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dChzaG93QnV0dG9uKTtcclxuICAgIH1cclxuICAgIGRlY3JlbWVudCgpe1xyXG4gICAgICAgIGxldCBzaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmlucHV0VmFsdWUgPD0gdGhpcy5taW5WYWx1ZSl7XHJcbiAgICAgICAgICAgIHNob3dCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLS07XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlIDw9IHRoaXMubWluVmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1pblZhbHVlOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoc2hvd0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJbnB1dChzaG93QnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHNob3dCdXR0b24gPT09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ0bi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuLnBhcmVudCgpLmFkZENsYXNzKCdpdGVtLXByaWNlLWNoYW5nZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsKHRoaXMuaW5wdXRWYWx1ZSkucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgbnVtYmVySW5wdXRTZWNvbmRhcnl7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChjb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5jb250YWluZXIuZmluZCgnW2RhdGEtaW5wdXQtbnVtYmVyLXNlY29uZGFyeS1pbnB1dF0nKTtcclxuICAgICAgICB0aGlzLmluY0J0biA9ICB0aGlzLmNvbnRhaW5lci5maW5kKFwiW2RhdGEtaW5wdXQtbnVtYmVyLXNlY29uZGFyeS1pbmNdXCIpO1xyXG4gICAgICAgIHRoaXMuZGVjQnRuID0gIHRoaXMuY29udGFpbmVyLmZpbmQoXCJbZGF0YS1pbnB1dC1udW1iZXItc2Vjb25kYXJ5LWRlY11cIik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG4gPSB0aGlzLmNvbnRhaW5lci5maW5kKFwiW2RhdGEtaW5wdXQtbnVtYmVyLXNlY29uZGFyeS11cGRhdGVdXCIpO1xyXG4gICAgICAgIHRoaXMubWluVmFsdWUgPSB0aGlzLmlucHV0LmF0dHIoJ21pbicpO1xyXG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSB0aGlzLmlucHV0LmF0dHIoJ21heCcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICB0aGlzLmlucHV0LnZhbCgpO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLmNvbnRhaW5lci5maW5kKFwiW2RhdGEtaW5wdXQtbnVtYmVyLXNlY29uZGFyeS1wcmljZV1cIik7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBiaW5kRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4ub24oJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGVjQnRuLm9uKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdjaGFuZ2UnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UoKXtcclxuXHJcbiAgICB9XHJcbiAgICBpbmNyZW1lbnQoKXtcclxuICAgICAgICBsZXQgc2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlID49IHRoaXMubWF4VmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dChzaG93QnV0dG9uKTtcclxuICAgIH1cclxuICAgIGRlY3JlbWVudCgpe1xyXG4gICAgICAgIGxldCBzaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmlucHV0VmFsdWUgPD0gdGhpcy5taW5WYWx1ZSl7XHJcbiAgICAgICAgICAgIHNob3dCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLS07XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlIDw9IHRoaXMubWluVmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1pblZhbHVlOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoc2hvd0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJbnB1dChzaG93QnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHNob3dCdXR0b24gPT09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ0bi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuLnBhcmVudCgpLmFkZENsYXNzKCdpdGVtLXByaWNlLWNoYW5nZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsKHRoaXMuaW5wdXRWYWx1ZSkucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuIiwiY2xhc3MgTGFuZ3VhZ2VTZWxlY3R7XHJcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bikge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSAkKGRyb3Bkb3duKTtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWxhbmd1YWdlLXNlbGVjdC1saXN0XScpO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zICA9ICB0aGlzLmxpc3QuY2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3Qtc2VhcmNoXScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZHJvcGRvd24uZmluZCgnW2RhdGEtbGFuZ3VhZ2Utc2VsZWN0LXZhbHVlXScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZVZpZXcgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWxhbmd1YWdlLXNlbGVjdC12YWx1ZS12aWV3XScpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEJhY2tMaW5rID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3QtYmFja2xpbmtdJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMYW5nID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1sYW5ndWFnZS1zZWxlY3QtbGFuZ10nKTtcclxuICAgICAgICB0aGlzLm9yZ2luYWxEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAnJztcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoKXtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uKCdrZXl1cCcsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2goZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5kcm9wZG93bi5vbignc2hvdy5icy5kcm9wZG93bicsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2N5Y2tpJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5kcm9wZG93bi5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5jbGVhclNlYXJjaCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLm9uKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RJdGVtKGV2ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0U2VhcmNoUmVzdWx0KHNlYXJjaFZhbHVlKXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5vcmdpbmFsRGF0YS5maWx0ZXIoKHZhbHVlKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWUgPSBzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdmFsdWVbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYodmFsLmluZGV4T2Yoc2VhcmNoVmFsdWUpID4gLTEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldERhdGEoKXtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5saXN0SXRlbXM7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhbmd1YWdlJyk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKFt2YWx1ZSwgbGFuZ3VhZ2VdKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub3JnaW5hbERhdGEgPSB2YWx1ZXM7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWFyY2goZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gdGhpcy5nZXRTZWFyY2hSZXN1bHQodmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWREYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVWaWV3KCl7XHJcbiAgICAgICAgdGhpcy5saXN0Lmh0bWwoJycpO1xyXG5cclxuICAgICAgICBsZXQgbmV3SFRNTCA9IGBgO1xyXG4gICAgICAgIGxldCBjdXJyZW50QmFja0xpbmsgPSB0aGlzLmN1cnJlbnRCYWNrTGlua1swXS52YWx1ZTtcclxuICAgICAgICBmb3IobGV0IHRsZCBvZiB0aGlzLmZpbHRlcmVkRGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09IHRsZCl7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51LWl0ZW0gJHthY3RpdmVDbGFzc31cIiBkYXRhLXZhbHVlPVwiJHt0bGRbMF19XCIgZGF0YS1sYW5ndWFnZT1cIiR7dGxkWzFdfVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y3VycmVudEJhY2tMaW5rfWxhbmd1YWdlPSR7dGxkWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFuZ3VhZ2UtZmxhZyAke3RsZFswXX1cIj48L3NwYW4+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhbmd1YWdlLXRleHRcIj4ke3RsZFsxXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmlsdGVyZWREYXRhLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5JylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5hZGRDbGFzcygnaXMtZW1wdHknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0Lmh0bWwobmV3SFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51blJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdC1saXN0XScpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlckl0ZW1zQ2xpY2tFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgZm9jdXNTZWFyY2goKXtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSwwKTtcclxuXHJcbiAgICB9XHJcbiAgICBjbGVhclNlYXJjaCgpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsKCcnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnRyaWdnZXIoJ2tleXVwJyk7XHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbShldmVudCl7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICBpdGVtLmRhdGEoJ3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlVmlldy50ZXh0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUudmFsKHZhbHVlKTtcclxuICAgICAgICBpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMub24oJ2NsaWNrLnNlYXJjaERyb3Bkb3duJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEl0ZW0oZXZlbnQpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1blJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMub2ZmKCdjbGljay5zZWFyY2hEcm9wZG93bicpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRW50ZXJDbGljayhldmVudCl7XHJcbiAgICAgICAgJCh0aGlzLmxpc3QuY2hpbGRyZW4oKS5hZGRDbGFzcygnaXMtZW50ZXJhYmxlJykpXHJcbiAgICAgICAgbGV0IHNlbGVjdExhbmcgPSB0aGlzLnNlbGVjdExhbmdbMF0udmFsdWU7XHJcbiAgICAgICAgJCgnPHNwYW4gY2xhc3M9XCJsYW5ndWFnZS1lbnRlclwiPicrc2VsZWN0TGFuZysnPC9zcGFuPicpLmluc2VydEFmdGVyKCcuaXMtZW50ZXJhYmxlIC5sYW5ndWFnZS10ZXh0JylcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgdmFyIGxpbmsgPSB0aGlzLmxpc3QuY2hpbGRyZW4oKS5maW5kKCdhJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1saW5rWzBdWydocmVmJ11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIGluaXQoKXtcclxuICAgICQoJ1tkYXRhLWxhbmd1YWdlLXNlbGVjdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5ldyBMYW5ndWFnZVNlbGVjdCh0aGlzKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvZGlzdC9qcy9zd2lwZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCQoJy5zaWRlYmFyLXN3aXBlci5zd2lwZXItY29udGFpbmVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV3IFN3aXBlcignLnNpZGViYXItc3dpcGVyLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNjQsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNldFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgICAgICAgICAgICBidWxsZXRFbGVtZW50OiAnZGl2J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIG5hdmJhciB0b2dnbGVcclxuICAgICQoJyNoZWFkZXIgLm5hdmJhci10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lbnUtb3BlbiAuYXBwLW1haW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21lbnUtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweClcIiwge1xyXG4gICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24oKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxhZ29tLWxheW91dC1sZWZ0IC5uYXZiYXItbWFpbiAubmF2YmFyLW5hdicpLnN1cGVyZmlzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmxhZ29tLWxheW91dC1sZWZ0IC5uYXZiYXItbWFpbiAubmF2YmFyLW5hdicpLnN1cGVyZmlzaCgnZGVzdHJveScpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cdH0pO1xyXG5cclxuICAgIGlmICgkKCcjc3RpY2t5LXNpZGViYXInKS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjc3RpY2t5LXNpZGViYXInKS5zdGlja3lTaWRlYmFyKHtcclxuICAgICAgICAgICAgdG9wU3BhY2luZzogMzIsXHJcbiAgICAgICAgICAgIGJvdHRvbVNwYWNpbmc6IDMyLFxyXG4gICAgICAgICAgICBpbm5lcldyYXBwZXJTZWxlY3RvcjogJy5zdGlja3ktc2lkZWJhci1pbm5lcidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChcImFcIiAhPSBlLnRhcmdldC50YWdOYW1lICYmIFwiQVwiICE9IGUudGFyZ2V0LnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZG9tYWluLWV4dGVuc2lvbnMgLmRyb3Bkb3duLW1lbnUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5hZGRvbi1wcm9tby1jb250YWluZXIgPiAucmFkaW8taW5saW5lJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY2hlY2tWYWx1ZSA9ICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpLnZhbCgpO1xyXG4gICAgICAgIGlmIChjaGVja1ZhbHVlICE9IFwib25cIiAmJiBjaGVja1ZhbHVlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmFkZG9uLXByb21vLWNvbnRhaW5lcicpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5hZGRvbi1wcm9tby1jb250YWluZXIgPiAucmFkaW8taW5saW5lJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9cmFkaW9dJykub24oJ2lmQ2hlY2tlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IFwib25cIil7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5hZGRvbi1wcm9tby1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuYWRkb24tcHJvbW8tY29udGFpbmVyJykuYWRkQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLWV4dHJhLWF0dGFjaGVtZW50JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG5vZmlsZXRleHQgPSAkKHRoaXMpLmRhdGEoJ25vZmlsZXRleHQnKSxcclxuICAgICAgICAgICAgc2VsZWN0ZmlsZXRleHQgPSAkKHRoaXMpLmRhdGEoJ3NlbGVjdGZpbGV0ZXh0JyksXHJcbiAgICAgICAgICAgIHJlbW92ZXRleHQgPSAkKHRoaXMpLmRhdGEoJ3NlbGVjdGZpbGV0ZXh0Jyk7XHJcblxyXG4gICAgICAgICQoXCIjZmlsZVVwbG9hZHNDb250YWluZXJcIikuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZmlsZS1pbnB1dCBmb3JtLWNvbnRyb2xcIj48aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiYXR0YWNobWVudHNbXVwiPjxzcGFuIGNsYXNzPVwiZmlsZS1pbnB1dC1idXR0b24gYnRuIGJ0bi1kZWZhdWx0XCI+JytzZWxlY3RmaWxldGV4dCsnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZmlsZS1pbnB1dC10ZXh0IHRleHQtbGlnaHRcIj4nK25vZmlsZXRleHQrJzwvc3Bhbj48YnV0dG9uIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiJytyZW1vdmV0ZXh0KydcIiBjbGFzcz1cImJ0biBidG4taWNvbiBmaWxlLWlucHV0LXJlbW92ZVwiPjxpIGNsYXNzPVwibHMgbHMtdHJhc2hcIj48L2k+PC9idXR0b24+PC9kaXY+Jyk7XHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuICAgIH0pO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuZmlsZS1pbnB1dCBpbnB1dFt0eXBlPWZpbGVdJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHN0cmluZy5zdWJzdHJpbmcoc3RyaW5nLmxhc3RJbmRleE9mKFwiXFxcXFwiKSArIDEpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5maWxlLWlucHV0LXRleHQnKS50ZXh0KCdObyBmaWxlIHNlbGVjdGVkJykuYWRkQ2xhc3MoJ3RleHQtbGlnaHQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5maWxlLWlucHV0LXRleHQnKS50ZXh0KHJlc3VsdCkucmVtb3ZlQ2xhc3MoJ3RleHQtbGlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmlsZS1pbnB1dC1yZW1vdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5maWxlLWlucHV0JykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLnNlYXJjaC1ncm91cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmZvcm0tY29udHJvbCcpLmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucGFuZWwtYWNjb3JkaW9uJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wYW5lbC1hY2NvcmRpb24nKS5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgJCgnI25hdi1sYW5kaW5nLXBhZ2UsICNuYXYtc3NsJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1haW4tc3VibmF2JykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgIH0pXHJcbiAgICAkKCcjbmF2LWxhbmRpbmctcGFnZSwgI25hdi1zc2wnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tYWluLXN1Ym5hdicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHN0b3JlIGFuaW1hdGlvblxyXG4gICAgJCgnW2RhdGEtc3RvcmUtbGluZXMtYW5pbWF0aW9uXSBwYXRoLCBbZGF0YS1iYW5uZXItbGluZXMtYW5pbWF0aW9uXSBwYXRoJykuZWFjaCgoaW5kZXgsIGl0ZW0pPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAkKGl0ZW0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG5cclxuICAgICAgICAgICAgcGF0aC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogMCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSwyMDApXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgdmFyIHBhbmVsU3dpdGNoID0gJCgnLnBhbmVsLXN3aXRjaCcpO1xyXG4gICAgXHJcbiAgICBwYW5lbFN3aXRjaC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCEkKHRoaXMpLmlzKCdhJykpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJDaGVjayA9ICQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyQ2hlY2suaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsU3dpdGNoLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyQ2hlY2sucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhbmVsU3dpdGNoLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyQ2hlY2sucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyAgXHJcbiAgICAgICAgICAgICAgICB0aGF0LmZpbmQoJy5sb2FkZXInKS5hZGRDbGFzcygnbG9hZGluZycpOyBcclxuICAgICAgICAgICAgfSwgMzAwKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IE1hc29ucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICBsZXQgcGFuZWxzR3JpZCA9ICQoJ1tkYXRhLXBhbmVscy1ncmlkXScpWzBdO1xyXG5cclxuICAgIGlmKHBhbmVsc0dyaWQpe1xyXG4gICAgICAgIHZhciBtc25yeSA9IG5ldyBNYXNvbnJ5KHBhbmVsc0dyaWQsIHtcclxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnW2RhdGEtcGFuZWxzLWdyaWQtaXRlbV0nLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTmFtZTogUmFuZ2VTbGlkZXIobGF5ZXJzVUkpXHJcbiAqIFZlcnNpb246IEFscGhhXHJcbiAqIExpY2Vuc2U6IC1cclxuICogV2Vic2l0ZTogaHR0cDovL2xheWVyc3VpLmNvbVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcclxuY29uc3QgU0VMRUNUT1JTID0ge1xyXG4gICAgY29udGFpbmVyOiAnW2RhdGEtcmFuZ2UtY29udGFpbmVyXScsXHJcbiAgICByYW5nZVNsaWRlcjogJ1tkYXRhLXJhbmdlLXNsaWRlcl0nLFxyXG4gICAgcmFuZ2VJbnB1dDogJ1tkYXRhLXJhbmdlLWlucHV0XScsXHJcbiAgICBpbmNCdG46ICdbZGF0YS1yYW5nZS1pbmNdJyxcclxuICAgIGRlY0J0bjogJ1tkYXRhLXJhbmdlLWRlY10nLFxyXG4gICAgcHJpY2U6ICdbZGF0YS1yYW5nZS1wcmljZV0nLFxyXG4gICAgc2VsZWN0ZWRPcHRpb246ICdbZGF0YS1zZWxlY3RlZC1vcHRpb25dJyxcclxuICAgIHZpZXdWYWx1ZTogJ1tkYXRhLXJhbmdlLXZpZXddJyxcclxufTtcclxuY29uc3QgRGVmYXVsdCA9IHtcclxuICAgIGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXHJcbiAgICBiZWhhdmlvdXI6ICd0YXAnLFxyXG4gICAgc25hcDogZmFsc2UsXHJcbiAgICByYW5nZToge30sXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgc3RhcnRWYWx1ZTogMCxcclxuICAgIG1pblZhbHVlOiBudWxsLFxyXG4gICAgbWF4VmFsdWU6IG51bGwsXHJcbiAgICBwcmljZVBlck9uZTogMixcclxufTtcclxuXHJcbmNvbnN0IHBpcHNEZWZhdWx0ID0ge1xyXG4gICAgbW9kZTogJ3N0ZXBzJyxcclxuICAgIHN0ZXBwZWQ6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZVNsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5yYW5nZVNsaWRlciA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLnJhbmdlU2xpZGVyKTtcclxuICAgICAgICB0aGlzLnJhbmdlSW5wdXQgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5yYW5nZUlucHV0KTtcclxuICAgICAgICB0aGlzLmRlY0J0biA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLmRlY0J0bik7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4gPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5pbmNCdG4pO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5wcmljZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLnNlbGVjdGVkT3B0aW9uKTtcclxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IHRoaXMuY29udGFpbmVyLmZpbmQoU0VMRUNUT1JTLnZpZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQaXBzQ29uZmlnKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UGx1Z2luKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRlY0J0bi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNldCh0aGlzLnNsaWRlci5nZXQoKSAtIHRoaXMuY29uZmlnLnN0ZXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmluY0J0bi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNldCh0aGlzLnNsaWRlci5nZXQoKSArIHRoaXMuY29uZmlnLnN0ZXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZUlucHV0Lm9uKCdjaGFuZ2UgYmx1cicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zZXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb25maWcoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YUNvbmZpZyA9IHRoaXMuY29udGFpbmVyLmRhdGEoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhQ29uZmlnLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHV0aWxzLnBhcnNlRGF0YU9wdGlvbnModGhpcy5kYXRhQ29uZmlnLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgdGhpcy5kYXRhQ29uZmlnLCB0aGlzLmRhdGFPcHRpb25zKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQaXBzQ29uZmlnKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFQaXBzID0gdGhpcy5jb250YWluZXIuZGF0YSgncGlwcy1vcHRpb25zJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGFQaXBzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFQaXBzT3B0aW9ucyA9IHV0aWxzLnBhcnNlRGF0YU9wdGlvbnModGhpcy5kYXRhUGlwcyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGFQaXBzT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5waXBzQ29uZmlnID0gJC5leHRlbmQoe30sIHBpcHNEZWZhdWx0LCB0aGlzLmRhdGFQaXBzT3B0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZXRSYW5nZSgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJhbmdlID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLm1pblZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5nZVsnbWluJ10gPSB0aGlzLmNvbmZpZy5taW5WYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXhWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZ2VbJ21heCddID0gdGhpcy5jb25maWcubWF4VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhQ29uZmlnLnZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVZhbHVlcyA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5kYXRhQ29uZmlnLnZhbHVlcztcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMTtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlcy5tYXAoKGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VbJ21pbiddID0gY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSBhcnJheS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VbJ21heCddID0gdGhpcy5kYXRhQ29uZmlnLnZhbHVlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tVmFsdWVzW2NvdW50XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ub3B0aW9uSURcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRDdXN0b21UaXBzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0U3RhcnRWYWx1ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmFuZ2VJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5yYW5nZUlucHV0LmZpcnN0KCkudmFsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5jb25maWcuc3RhcnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaXNQYWdlUlRMKCkge1xyXG4gICAgICAgIHJldHVybiAkKCdodG1sJykuYXR0cignZGlyJykgPT0gJ3J0bCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpbml0UGx1Z2luKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXJ0VmFsdWUoKTtcclxuICAgICAgICB0aGlzLnNldFJhbmdlKCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNsaWRlciA9IG5vVWlTbGlkZXIuY3JlYXRlKHRoaXMucmFuZ2VTbGlkZXJbMF0sIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnRWYWx1ZSxcclxuICAgICAgICAgICAgc3RlcDogdGhpcy5jb25maWcuc3RlcCxcclxuICAgICAgICAgICAgc25hcDogdGhpcy5jb25maWcuc25hcCxcclxuICAgICAgICAgICAgY29ubmVjdDogdGhpcy5jb25maWcuY29ubmVjdCxcclxuICAgICAgICAgICAgcmFuZ2U6IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgICAgIGJlaGF2aW91cjogdGhpcy5jb25maWcuYmVoYXZpb3VyLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuaXNQYWdlUlRMKCkgPyAncnRsJyA6ICdsdHInLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgICAgICAgIHRvOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZyb206IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwaXBzOiB0aGlzLnBpcHNDb25maWcsXHJcbiAgICAgICAgICAgICdjc3NQcmVmaXgnOiAncmFuZ2Utc2xpZGVyJyxcclxuICAgICAgICAgICAgJ2Nzc0NsYXNzZXMnOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgYmFzZTogJy1iYXNlJyxcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogJy1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnLWhhbmRsZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVMb3dlcjogJy1oYW5kbGUtbG93ZXInLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlVXBwZXI6ICctaGFuZGxlLXVwcGVyJyxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICctaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJy12ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnLWJhY2tncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdHM6IFwiLWNvbm5lY3RzXCIsXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0OiAnLWNvbm5lY3QnLFxyXG4gICAgICAgICAgICAgICAgbHRyOiAnLWx0cicsXHJcbiAgICAgICAgICAgICAgICBydGw6ICctcnRsJyxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogJy1kcmFnZ2FibGUnLFxyXG4gICAgICAgICAgICAgICAgZHJhZzogJy1zdGF0ZS1kcmFnJyxcclxuICAgICAgICAgICAgICAgIHRhcDogJy1zdGF0ZS10YXAnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAnaXMtYWN0aXZlJyxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICctdG9vbHRpcCcsXHJcbiAgICAgICAgICAgICAgICBwaXBzOiAnLXBpcHMnLFxyXG4gICAgICAgICAgICAgICAgcGlwc0hvcml6b250YWw6ICctcGlwcy1ob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgICAgIHBpcHNWZXJ0aWNhbDogJy1waXBzLXZlcnRpY2FsJyxcclxuICAgICAgICAgICAgICAgIG1hcmtlcjogJy1tYXJrZXInLFxyXG4gICAgICAgICAgICAgICAgbWFya2VySG9yaXpvbnRhbDogJy1tYXJrZXItaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJWZXJ0aWNhbDogJy1tYXJrZXItdmVydGljYWwnLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyTm9ybWFsOiAnLW1hcmtlci1ub3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyTGFyZ2U6ICctbWFya2VyLWxhcmdlJyxcclxuICAgICAgICAgICAgICAgIG1hcmtlclN1YjogJy1tYXJrZXItc3ViJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnLXZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlSG9yaXpvbnRhbDogJy12YWx1ZS1ob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlVmVydGljYWw6ICctdmFsdWUtdmVydGljYWwnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVOb3JtYWw6ICctdmFsdWUtbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlTGFyZ2U6ICctdmFsdWUtbGFyZ2UnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVTdWI6ICctdmFsdWUtc3ViJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlclBpcHNDb250YWluZXIgPSAkKHRoaXMucmFuZ2VTbGlkZXJbMF0ucXVlcnlTZWxlY3RvcignLnJhbmdlLXNsaWRlci1waXBzJykpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUGlwcyA9ICB0aGlzLnNsaWRlclBpcHNDb250YWluZXIuZmluZCgnW2RhdGEtdmFsdWVdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyUGlwcy5vbignY2xpY2snLCAoZXZlbnQpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgcGlwID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IHBpcFZhbHVlID0gcGlwLmRhdGEoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zZXQocGlwVmFsdWUpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2xpZGVyRXZlbnRzKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaWNlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBpcCh2YWx1ZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVNsaWRlSUQodGhpcy5jdXN0b21WYWx1ZXNbdmFsdWVzXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXIub24oJ3NsaWRlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25TbGlkZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpY2UodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCAodmFsdWVzLCBoYW5kbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpY2UodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLm9uKCdzZXQnLCAodmFsdWVzLCBoYW5kbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblNldCh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpY2UodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpZXdWYWx1ZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgY2hhbmdlQWN0aXZlUGlwKHZhbHVlcykge1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF07XHJcbiAgICAgICAgbGV0IHBpcCA9IHRoaXMuc2xpZGVyUGlwc0NvbnRhaW5lci5maW5kKCdbZGF0YS12YWx1ZT1cIicgKyB2YWx1ZSArICdcIl0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlclBpcHNDb250YWluZXIuZmluZCgnLmlzLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBwaXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuICAgIHNldEN1c3RvbVRpcHMoKXtcclxuXHJcbiAgICAgICAgdGhpcy5waXBzQ29uZmlnLmZvcm1hdCA9IHtcclxuXHJcbiAgICAgICAgICAgIHRvOiAodmFsdWUpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jdXN0b21WYWx1ZXNbdmFsdWVdLm5hbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZyb206IE51bWJlclxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hhbmdlQWN0aXZlU2xpZGVJRChpZCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbi52YWwoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGUodmFsdWVzLCBoYW5kbGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlU2xpZGVJRCh0aGlzLmN1c3RvbVZhbHVlc1t2YWx1ZXNdLmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMucmFuZ2VJbnB1dC52YWwodmFsdWVzWzBdLnRvRml4ZWQoMCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vblNsaWRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uU2xpZGUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZSh2YWx1ZXMsIGhhbmRsZSkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uQ2hhbmdlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNldCh2YWx1ZXMsIGhhbmRsZSkge1xyXG5cclxuICAgICAgICB0aGlzLnJhbmdlSW5wdXQudmFsKHZhbHVlc1swXSkudHJpZ2dlcigna2V5dXAnKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXN0b21WYWx1ZXMpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uLnRyaWdnZXIoJ2tleXVwJykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uU2V0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uU2V0KHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25VcGRhdGUodmFsdWVzLCBoYW5kbGUpIHtcclxuXHJcbiAgICBcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uVXBkYXRlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2V0UHJpY2UodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLnRleHQodGhpcy5jdXN0b21WYWx1ZXNbdmFsdWVzXS5wcmljZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLnRleHQoKHBhcnNlRmxvYXQodGhpcy5jb25maWcucHJpY2VQZXJPbmUpICogcGFyc2VGbG9hdCh0aGlzLnJhbmdlSW5wdXQudmFsKCkpKS50b0ZpeGVkKDIpKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Vmlld1ZhbHVlKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld1ZhbHVlLnRleHQodGhpcy5jdXN0b21WYWx1ZXNbdmFsdWVzXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52aWV3VmFsdWUudGV4dCh0aGlzLnJhbmdlSW5wdXQudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHNsaWRlcikge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoc2xpZGVyKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5jYWNoZURPTSgpO1xuICAgIH1cbiAgICBjYWNoZURPTSgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLnNsaWRlci5maW5kKFwiW2RhdGEtc2xpZGVyLWNvbnRhaW5lcl1cIik7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuc2xpZGVyLmZpbmQoXCJbZGF0YS1zbGlkZXItd3JhcHBlcl1cIik7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHRoaXMuc2xpZGVyLmZpbmQoXCJbZGF0YS1zbGlkZXItcGFnaW5hdGlvbl1cIik7XG5cbiAgICAgICAgdGhpcy5uZXh0U2xpZGUgPSB0aGlzLnNsaWRlci5maW5kKFwiW2RhdGEtbmV4dC1zbGlkZV1cIik7XG4gICAgICAgIHRoaXMucHJldlNsaWRlID0gdGhpcy5zbGlkZXIuZmluZChcIltkYXRhLXByZXYtc2xpZGVdXCIpO1xuICAgIH1cbiAgICBzZXRTbGlkZXJDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyQ29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiB0aGlzLnBhZ2luYXRpb25bMF0sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnVsbGV0c1wiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllckNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLXBhZ2luYXRpb24tXCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldENsYXNzOiBcImNvbnRlbnQtc2xpZGVyLXBhZ2luYXRpb24tYnVsbGV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiBcImlzLWFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiB0aGlzLm5leHRTbGlkZVswXSxcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsOiB0aGlzLnByZXZTbGlkZVswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYTExeToge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJNb2RpZmllckNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLVwiLFxuICAgICAgICAgICAgICAgIHNsaWRlQ2xhc3M6IFwiY29udGVudC1zbGlkZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgIHNsaWRlUHJldkNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLWl0ZW0tcHJldlwiLFxuICAgICAgICAgICAgICAgIHNsaWRlTmV4dENsYXNzOiBcImNvbnRlbnQtc2xpZGVyLWl0ZW0tbmV4dFwiLFxuICAgICAgICAgICAgICAgIHNsaWRlVmlzaWJsZUNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLWl0ZW0tdmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgIHNsaWRlQWN0aXZlQ2xhc3M6IFwiY29udGVudC1zbGlkZXItaXRlbS1hY3RpdmVcIixcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3M6IFwiY29udGVudC1zbGlkZXItd3JhcHBlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnXG4gICAgICAgICk7XG4gICAgfVxuICAgIGluaXRTbGlkZXIoKSB7XG4gICAgICAgIHRoaXMuc3dpcGVySW5zdGFuY2UgPSBuZXcgU3dpcGVyKHRoaXMuY29udGFpbmVyWzBdLCB0aGlzLnNsaWRlckNvbmZpZylcbiAgICB9XG4gICAgZGVzdHJveVNsaWRlcigpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZS5kZXN0cm95KHRydWUsIHRydWUpXG4gICAgfVxufVxuIiwiaW1wb3J0IHRlc3RpbW9uaWFscyBmcm9tIFwiLi90ZXN0aW1vbmlhbHMuanNcIjtcbmltcG9ydCBwcm9tb1NsaWRlciBmcm9tIFwiLi9wcm9tby1zbGlkZXJzL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0KCkge1xuICAgICAgICB0ZXN0aW1vbmlhbHMuaW5pdCgpXG4gICAgICAgIHByb21vU2xpZGVyLmluaXQoKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcbmNvbnN0IHNsaWRlTGVmdCA9IHtcbiAgICByZWZzOiB7fSxcbiAgICBiZWZvcmVJbml0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnJlZnMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVmc1tcImNvbnRlbnRcIl0gPSBlbGVtZW50LmZpbmQoXCJbZGF0YS1hbmltYXRpb24tY29udGVudF1cIik7XG4gICAgICAgIHRoaXMucmVmc1tcImljb25zXCJdID0gZWxlbWVudC5maW5kKFwiW2RhdGEtYW5pbWF0aW9uLWljb25zXVwiKS5jaGlsZHJlbigpO1xuICAgIH0sXG4gICAgc2hvd1NsaWRlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnJlZnMuY29udGVudFswXSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFstNTYsIDBdLFxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxuICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgIGRlbGF5OiA4MDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNCZXppZXIoMCwwLDAsMSlcIlxuICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGNvbnRlbnRBbmltYXRpb24pO1xuICAgICAgICBsZXQgaWNvbkRlbGF5ID0gNDgwICsgdGhpcy5yZWZzLmljb25zLmxlbmd0aCAqIDgwO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIEFycmF5LmZyb20odGhpcy5yZWZzLmljb25zKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpY29uLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFstNTIsIDBdLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFstMzAsIDBdLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzIwLFxuICAgICAgICAgICAgICAgIGRlbGF5OiBpY29uRGVsYXksXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDAsMCwwLDEpXCJcbiAgICAgICAgICAgIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgaWNvbkRlbGF5IC09IDgwO1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGljb25BbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGFuaW1hdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGVTbGlkZSgpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5yZWZzLmNvbnRlbnRbMF0sXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbMCwgNTZdLFxuICAgICAgICAgICAgb3BhY2l0eTogWzEsIDBdLFxuICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgIGRlbGF5OiAyNDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNCZXppZXIoMSwwLDEsMSlcIlxuICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGNvbnRlbnRBbmltYXRpb24pO1xuICAgICAgICBsZXQgaWNvbkRlbGF5ID0gdGhpcy5yZWZzLmljb25zLmxlbmd0aCAqIDgwO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIEFycmF5LmZyb20odGhpcy5yZWZzLmljb25zKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpY29uLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFswLCA1Ml0sXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogWzAsIDMwXSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMF0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgICAgICBkZWxheTogaWNvbkRlbGF5LFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJjdWJpY0JlemllcigxLDAsMSwxKVwiXG4gICAgICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChpY29uQW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGljb25EZWxheSAtPSA4MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGZhZGVJbiA9IHtcbiAgICByZWZzOiB7fSxcbiAgICBiZWZvcmVJbml0KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnJlZnMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVmc1tcImNvbnRlbnRcIl0gPSBlbGVtZW50LmZpbmQoXCJbZGF0YS1hbmltYXRpb24tY29udGVudF1cIik7XG4gICAgICAgIHRoaXMucmVmc1tcImljb25zXCJdID0gZWxlbWVudC5maW5kKFwiW2RhdGEtYW5pbWF0aW9uLWljb25zXVwiKS5jaGlsZHJlbigpO1xuICAgIH0sXG4gICAgc2hvd1NsaWRlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnJlZnMuY29udGVudFswXSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IFstNTYsIDBdLFxuICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxuICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgIGRlbGF5OiA4MDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNCZXppZXIoMCwwLDAsMSlcIlxuICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGNvbnRlbnRBbmltYXRpb24pO1xuICAgICAgICBsZXQgaWNvbkRlbGF5ID0gNDgwICsgdGhpcy5yZWZzLmljb25zLmxlbmd0aCAqIDgwO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIEFycmF5LmZyb20odGhpcy5yZWZzLmljb25zKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpY29uLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzIwLFxuICAgICAgICAgICAgICAgIGRlbGF5OiBpY29uRGVsYXksXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDAsMCwwLDEpXCJcbiAgICAgICAgICAgIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgaWNvbkRlbGF5IC09IDgwO1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGljb25BbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGFuaW1hdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGVTbGlkZSgpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5yZWZzLmNvbnRlbnRbMF0sXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbMCwgNTZdLFxuICAgICAgICAgICAgb3BhY2l0eTogWzEsIDBdLFxuICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgIGRlbGF5OiAyNDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNCZXppZXIoMSwwLDEsMSlcIlxuICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGNvbnRlbnRBbmltYXRpb24pO1xuICAgICAgICBsZXQgaWNvbkRlbGF5ID0gdGhpcy5yZWZzLmljb25zLmxlbmd0aCAqIDgwO1xuICAgICAgICBmb3IgKGxldCBpY29uIG9mIEFycmF5LmZyb20odGhpcy5yZWZzLmljb25zKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBpY29uLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAwXSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzIwLFxuICAgICAgICAgICAgICAgIGRlbGF5OiBpY29uRGVsYXksXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDEsMCwxLDEpXCJcbiAgICAgICAgICAgIH0pLmZpbmlzaGVkO1xuICAgICAgICAgICAgaWNvbkRlbGF5IC09IDgwO1xuICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGljb25BbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGFuaW1hdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHNsaWRlTGVmdCxcbiAgICBmYWRlSW5cbn07IiwiaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL2FycmF5L2Zyb20nO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvc3ltYm9sL2l0ZXJhdG9yJztcclxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvb2JqZWN0L2Fzc2lnbic7XHJcbmltcG9ydCB1dGlscyBmcm9tICcuLy4uLy4uL3V0aWxzLmpzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcclxuaW1wb3J0IGFuaW1hdGlvbnMgZnJvbSAnLi9hbmltYXRpb25zLmpzJ1xyXG5jb25zdCBTRUxFQ1RPUlMgPSB7XHJcbiAgICBzbGlkZXI6ICdbZGF0YS1wcm9tby1zbGlkZXJdJyxcclxuICAgIHdyYXBwZXI6ICdbZGF0YS1wcm9tby1zbGlkZXItd3JhcHBlcl0nLFxyXG4gICAgcGFnaW5hdGlvbjogJ1tkYXRhLXByb21vLXNsaWRlci1wYWdpbmF0aW9uXScsXHJcbiAgICBwYWdpbmF0aW9uSXRlbTogJ1tkYXRhLXByb21vLXNsaWRlci1wYWdpbmF0aW9uLWl0ZW1dJyxcclxuICAgIGNsb3NlOiAnW2RhdGEtcHJvbW8tc2xpZGUtY2xvc2VdJyxcclxuICAgIGJhY2tncm91bmQ6ICdbZGF0YS1wcm9tby1zbGlkZXItYmFja2dyb3VuZF0nXHJcbn07XHJcblxyXG5jb25zdCBEZWZhdWx0ID0ge1xyXG4gICAgZGVmYXVsdEFuaW1hdGlvblR5cGU6ICdzbGlkZUxlZnQnXHJcbn1cclxuY2xhc3MgUHJvbW9TbGlkZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcihzbGlkZXIpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5xdWVuZUFuaW1hdGlvbnMgPSBbXVxyXG5cclxuICAgICAgICB0aGlzLmNhY2hlRE9NKHNsaWRlcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb25maWcoKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXRTbGlkZXIoKTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgZ2V0Q29uZmlnKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhQ29uZmlnID0gdGhpcy5yZWZzLnNsaWRlci5kYXRhKCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhQ29uZmlnLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHV0aWwucGFyc2VEYXRhT3B0aW9ucyhkYXRhQ29uZmlnLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGRhdGFDb25maWcsIHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBjYWNoZURPTShzbGlkZXIpIHtcclxuICAgICAgICB0aGlzLnJlZnMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZnMuc2xpZGVyID0gJChzbGlkZXIpO1xyXG4gICAgICAgIHRoaXMucmVmcy53cmFwcGVyID0gdGhpcy5yZWZzLnNsaWRlci5maW5kKFNFTEVDVE9SUy53cmFwcGVyKTtcclxuICAgICAgICB0aGlzLnJlZnMuc2xpZGVzID0gdGhpcy5yZWZzLndyYXBwZXIuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb24gPSB0aGlzLnJlZnMuc2xpZGVyLmZpbmQoU0VMRUNUT1JTLnBhZ2luYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmVmcy5wYWdpbmF0aW9uSXRlbXMgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5maW5kKFNFTEVDVE9SUy5wYWdpbmF0aW9uSXRlbSlcclxuXHJcbiAgICAgICAgdGhpcy5yZWZzLmNsb3NlID0gdGhpcy5yZWZzLnNsaWRlci5maW5kKFNFTEVDVE9SUy5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5yZWZzLmJhY2tncm91bmQgPSB0aGlzLnJlZnMuc2xpZGVyLmZpbmQoU0VMRUNUT1JTLmJhY2tncm91bmQpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgfVxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLm9uKCdjbGljaycsICAoZXZlbnQpPT4gdGhpcy5oYW5kbGVQYWdpbmF0aW9uQ2xpY2soZXZlbnQpKTtcclxuICAgICAgICB0aGlzLnJlZnMuY2xvc2Uub24oJ2NsaWNrJywgKCk9PiB0aGlzLmhpZGVTbGlkZXIoKSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgKCk9PntcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgfSwgMjAwKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlZnMuc2xpZGVyLm9uKHtcclxuICAgICAgICAgICAgbW91c2VlbnRlcjogKCk9PiB0aGlzLnN0b3BBdXRvcGxheSgpLFxyXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiAoKT0+IHRoaXMuc3RhcnRBdXRvcGxheSgpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbigndmlzaWJpbGl0eWNoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5oaWRkZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIC8vICQod2luZG93KS5ibHVyKGZ1bmN0aW9uKCkgeyAgIFxyXG4gICAgICAgIC8vICAgICB0aGF0LnN0b3BBdXRvcGxheSgpO1xyXG4gICAgICAgIC8vICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3N0b3AnKTtcclxuICAgICAgICAvLyB9KTsgICAgXHJcbiAgICAgICAgLy8gJCh3aW5kb3cpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHRoYXQuc3RhcnRBdXRvcGxheSgpO1xyXG4gICAgICAgIC8vICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3N0b3AnKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIGluaXRTbGlkZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb25zKClcclxuICAgICAgICBpZih0aGlzLmFuaW1hdGlvbnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmZpbHRlcignLmFjdGl2ZScpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KClcclxuICAgICAgICAgICAgaWYoYWN0aXZlU2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlSW5kZXggPSB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmluZGV4KGFjdGl2ZVNsaWRlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUoYWN0aXZlU2xpZGVJbmRleClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSgwLCB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnJlZnMuc2xpZGVyLmlzKCc6aG92ZXInKSAmJiAhZG9jdW1lbnQuaGlkZGVuKXtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9wbGF5KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoaWRlU2xpZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVmcy5zbGlkZXIuYWRkQ2xhc3MoJ2hpZGRlbicpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVQYWdpbmF0aW9uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmluZGV4KGl0ZW0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uVG9RdWVuZShpdGVtSW5kZXgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbi5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuZ29Ub1NsaWRlKGl0ZW1JbmRleCk7XHJcbiAgICB9XHJcbiAgICBwcmV2U2xpZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2xpZGVJbmRleCAtIDEgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub1NsaWRlKHRoaXMucmVmcy5zbGlkZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUodGhpcy5hY3RpdmVTbGlkZUluZGV4IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV4dFNsaWRlKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTbGlkZUluZGV4ID49IHRoaXMucmVmcy5zbGlkZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSh0aGlzLmFjdGl2ZVNsaWRlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZ29Ub1NsaWRlKGluZGV4LCBmaXJzdFNsaWRlID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2xpZGVJbmRleCA9PSBpbmRleCAmJiAhZmlyc3RTbGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9sZEluZGV4ID0gdGhpcy5hY3RpdmVTbGlkZUluZGV4O1xyXG4gICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gdHJ1ZVxyXG4gICAgICAgIGlmIChmaXJzdFNsaWRlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgJCh0aGlzLnJlZnMuc2xpZGVzW3RoaXMuYWN0aXZlU2xpZGVJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW3RoaXMuYWN0aXZlU2xpZGVJbmRleF0uc2hvd1NsaWRlKCkudGhlbigoKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucXVlbmVBbmltYXRpb25zLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5xdWVuZUFuaW1hdGlvbnMucG9wKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9TbGlkZShpbmRleClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uU3RhdHVzKDAsIDApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uU3RhdHVzKGluZGV4LCBvbGRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2xpZGVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbb2xkSW5kZXhdLmhpZGVTbGlkZSgpLnRoZW4oKCk9Pnt9KVxyXG4gICAgICAgICAgICAkKHRoaXMucmVmcy5zbGlkZXNbb2xkSW5kZXhdKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcy5yZWZzLnNsaWRlc1t0aGlzLmFjdGl2ZVNsaWRlSW5kZXhdKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW2luZGV4XS5zaG93U2xpZGUoKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1ZW5lQW5pbWF0aW9ucy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucXVlbmVBbmltYXRpb25zLnBvcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXHJcbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKClcclxuICAgIH1cclxuICAgIHNldEFuaW1hdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgc2xpZGUgb2YgQXJyYXkuZnJvbSh0aGlzLnJlZnMuc2xpZGVzKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvblR5cGUgPSAkKHNsaWRlKS5kYXRhKCdhbmltYXRpb24tdHlwZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gY2xvbmVEZWVwKGFuaW1hdGlvbnNbYW5pbWF0aW9uVHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmJlZm9yZUluaXQoJChzbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9IGNsb25lRGVlcChhbmltYXRpb25zW3RoaXMuY29uZmlnLmRlZmF1bHRBbmltYXRpb25UeXBlXSk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uYmVmb3JlSW5pdCgkKHNsaWRlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVBhZ2luYXRpb25TdGF0dXMoaW5kZXgsIG9sZEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb25JdGVtcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb25JdGVtcy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRBdXRvcGxheSgpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgICBpZih0aGlzLmF1dG9QbGF5KXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0b1BsYXkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZighdGhhdC5xdWVuZUFuaW1hdGlvbnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHRoYXQubmV4dFNsaWRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcbiAgICBzdG9wQXV0b3BsYXkoKXtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXkpO1xyXG4gICAgICAgIHRoaXMuYXV0b1BsYXkgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgdXBkYXRlSGVpZ2h0KCl7XHJcbiAgICAgICAgY29uc3QgaW5uZXJIZWlnaHQgPSAkKHRoaXMucmVmcy5zbGlkZXNbdGhpcy5hY3RpdmVTbGlkZUluZGV4XSkuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jc3MoJ2hlaWdodCcsIGlubmVySGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHNldEJhY2tncm91bmQoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5iYWNrZ3JvdW5kLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgIHRoaXMucmVmcy5iYWNrZ3JvdW5kLmVxKHRoaXMuYWN0aXZlU2xpZGVJbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICBhZGRBbmltYXRpb25Ub1F1ZW5lKGluZGV4KXtcclxuICAgICAgICBpZiAoKHRoaXMucXVlbmVBbmltYXRpb25zLmxlbmd0aCAmJiB0aGlzLnF1ZW5lQW5pbWF0aW9uc1swXSkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlbmVBbmltYXRpb25zLnVuc2hpZnQoaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgICQoXCJbZGF0YS1wcm9tby1zbGlkZXJdXCIpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBQcm9tb1NsaWRlcihpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IEJhc2VTbGlkZXIgZnJvbSBcIi4vYmFzZS1zbGlkZXJcIjtcclxuXHJcbmNsYXNzIFRlc3RpbW9uaWFzbFNsaWRlciBleHRlbmRzIEJhc2VTbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2xpZGVyKSB7XHJcbiAgICAgICAgc3VwZXIoc2xpZGVyKTtcclxuICAgICAgICB0aGlzLnNldFNsaWRlckNvbmZpZyh0aGlzLmdldFNsaWRlckNvbmZpZygpKTtcclxuICAgICAgICB0aGlzLmluaXRTbGlkZXIoKVxyXG4gICAgfVxyXG4gICAgZ2V0U2xpZGVyQ29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICA0NTk6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAkKFwiW2RhdGEtdGVzdGltb25pYWwtc2xpZGVyXVwiKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgVGVzdGltb25pYXNsU2xpZGVyKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KCkge1xyXG4gICAgICAgICQoJy5vcmRlci1zdW1tYXJ5LW1vYiAuc3VtbWFyeS1jb250YWluZXIgPi5jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKCcub3ZlcmxheScpLmZhZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgIH1cclxuICAgIHZhciBhY3RpdmVTdHlsZSA9ICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2FjdGl2ZS1zdHlsZScpO1xyXG4gICAgdmFyIGFjdGl2ZUxheW91dCA9ICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2FjdGl2ZS1sYXlvdXQnKTtcclxuICAgIHZhciBhY3RpdmVQYWdlID0gJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnYWN0aXZlLXBhZ2UnKTtcclxuICAgIHZhciB1cmwgPSAkKCdbZGF0YS1zZXQtdGhlbWVdJykuZGF0YSgnb3JpZ2luYWwtdXJsJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGhlbWVTd2l0Y2hlcigpIHtcclxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3RoZW1lLXN3aXRjaGVyLW9wZW4nKTtcclxuICAgICAgICB2YXIgYnJvd3NlciA9IHBhcnNlSW50KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBwYXJzZUludCgkKCdib2R5JykuaGVpZ2h0KCkpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBwYXJzZUludChnZXRTY3JvbGxiYXJXaWR0aCgpKTtcclxuXHJcbiAgICAgICAgaWYgKGJvZHkgPiBicm93c2VyICYmICQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtc3dpdGNoZXItb3BlbicpKXtcclxuICAgICAgICAgICAgJCgnYm9keScpLnByb3AoJ3N0eWxlJywncGFkZGluZy1yaWdodDogJytzY3JvbGwrJ3B4Jyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlUHJvcCgnc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRUaGVtZVN3aXRjaGVyKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xyXG4gICAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgaW5uZXJkaXZcclxuICAgICAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlbW92ZSBkaXZzXHJcbiAgICAgICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaGVtZVN3aXRjaGVyKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXNldC10aGVtZV0nKS5hdHRyKCdocmVmJywgdXJsKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmZpbmQoJ1tkYXRhLXN0eWxlPVwiJyArIGFjdGl2ZVN0eWxlICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCdbZGF0YS1sYXlvdXQ9XCInICsgYWN0aXZlTGF5b3V0ICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCdbZGF0YS1wYWdlPVwiJyArIGFjdGl2ZVBhZ2UgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tc3R5bGUnLCAnJyk7XHJcbiAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1sYXlvdXQnLCAnJyk7XHJcbiAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1wYWdlJywgJycpO1xyXG4gICAgfVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcmRlci1zdW1tYXJ5LW1vYiAuc3VtbWFyeS1jb250YWluZXIgLmJ0bi1yb3VuZGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVPdmVybGF5KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoKTtcclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCd0aGVtZS1zd2l0Y2hlci1vcGVuJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcudGhlbWUtc3dpdGNoZXItYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9nZ2xlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnRoZW1lLXN3aXRjaGVyLWJveCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucm93JykuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB2YXIgbmV3U3R5bGUgPSAkKHRoaXMpLmRhdGEoJ3N0eWxlJyk7XHJcbiAgICAgICAgdmFyIG5ld0xheW91dCA9ICQodGhpcykuZGF0YSgnbGF5b3V0Jyk7XHJcbiAgICAgICAgdmFyIG5ld1BhZ2UgPSAkKHRoaXMpLmRhdGEoJ3BhZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0eWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgc2V0U3R5bGUgPSBuZXdTdHlsZTtcclxuICAgICAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1zdHlsZScsIHNldFN0eWxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdMYXlvdXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRMYXlvdXQgPSBuZXdMYXlvdXQ7XHJcbiAgICAgICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tbGF5b3V0Jywgc2V0TGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1BhZ2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRQYWdlID0gbmV3UGFnZTtcclxuICAgICAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1wYWdlJywgc2V0UGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1sYXlvdXQnKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdmFyIGNob29zZW5MYXlvdXQgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLWxheW91dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB2YXIgY2hvb3NlbkxheW91dCA9IGFjdGl2ZUxheW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXN0eWxlJykgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHZhciBjaG9vc2VuU3R5bGUgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXN0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjaG9vc2VuU3R5bGUgPSBhY3RpdmVTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tcGFnZScpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB2YXIgY2hvb3NlblBhZ2UgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXBhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIGNob29zZW5QYWdlID0gYWN0aXZlUGFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaW5kc2lnbiA9IHVybC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICBpZiAoZmluZHNpZ24gIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybCArICcmcnNzdHlsZT0nICsgY2hvb3NlblN0eWxlICsgJyZyc2xheW91dD0nICsgY2hvb3NlbkxheW91dCArICcmcnNwYWdlPScgKyBjaG9vc2VuUGFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3VXJsID0gdXJsICsgJz9yc3N0eWxlPScgKyBjaG9vc2VuU3R5bGUgKyAnJnJzbGF5b3V0PScgKyBjaG9vc2VuTGF5b3V0ICsgJyZyc3BhZ2U9JyArIGNob29zZW5QYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCdbZGF0YS1zZXQtdGhlbWVdJykuYXR0cignaHJlZicsIG5ld1VybCk7XHJcbiAgICB9KTtcclxuICAgICQoJ1tkYXRhLXN0eWxlLXJlc2V0XScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZVRoZW1lU3dpdGNoZXIoKTtcclxuICAgICAgICB0b2dnbGVPdmVybGF5KCk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm9yZGVyLXN1bW1hcnktbW9iIC5zdW1tYXJ5LWNvbnRhaW5lciA+LmNvbnRlbnQnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS1zd2l0Y2hlci1vcGVuJyk7XHJcbiAgICAgICAgcmVzZXRUaGVtZVN3aXRjaGVyKClcclxuICAgIH0pO1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgaWYgKCQoJy50aWxlcy5zd2lwZXItY29udGFpbmVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcignLnRpbGVzLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICAgIGluaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbnF1aXJlLnJlZ2lzdGVyKFwic2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KVwiLCB7XHJcbiAgICAgICAgICAgIG1hdGNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG15U3dpcGVyLmluaXQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBteVN3aXBlci5kZXN0cm95KGZhbHNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgdmFyIGZpbHRlciA9ICQoJy5jdXN0b20tbXVsdGlzZWxlY3QnKS5zZWxlY3RpemUoe1xyXG4gICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXHJcbiAgICAgICAgcGx1Z2luczogWydyZW1vdmVfYnV0dG9uJ10sXHJcbiAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIGl0ZW06IGZ1bmN0aW9uKGRhdGEsIGVzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2PicgKyBlc2NhcGUoZGF0YS50ZXh0KSArICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkl0ZW1BZGQ6IGZ1bmN0aW9uKHZhbHVlLCAkaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMub3B0aW9uc1t2YWx1ZV07XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICQoJy5tZXNzYWdlLm5vLXRsZHMnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy50bGQtcHJpY2luZycpLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLnRsZC1wcmljaW5nIC50bGQtcm93JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciByb3cgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cjEgPSAkKHRoaXMpLmRhdGEoJ2NhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyMiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cjEuaW5kZXhPZihzdHIyKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25EZWxldGU6IGZ1bmN0aW9uKHZhbHVlLCAkaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMub3B0aW9uc1t2YWx1ZV07XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RpemUgPSBmaWx0ZXJbMF0uc2VsZWN0aXplO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfb2JqZWN0cyA9ICQubWFwKHNlbGVjdGl6ZS5pdGVtcywgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBkYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGl6ZS5vcHRpb25zW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB0b3RhbExlbiA9IHNlbGVjdGVkX29iamVjdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAkKCcudGxkLXByaWNpbmcgLnRsZC1yb3cnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQuZWFjaChzZWxlY3RlZF9vYmplY3RzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGxkLXJvd1tkYXRhLWNhdGVnb3J5Kj1cIicgKyB2YWx1ZS52YWx1ZSArICdcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmICh0b3RhbExlbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcudGxkLXByaWNpbmcnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVzc2FnZS5uby10bGRzJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2Uubm8tdGxkcycpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoJy50bGQtcHJpY2luZycpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICgkKCcudGxkLWZpbHRlcnMnKS5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgc2VsZWN0aXplID0gZmlsdGVyWzBdLnNlbGVjdGl6ZTtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRfb2JqZWN0cyA9ICQubWFwKHNlbGVjdGl6ZS5pdGVtcywgZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGl6ZS5vcHRpb25zW3ZhbHVlXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubWVzc2FnZS5uby10bGRzJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy50bGQtcHJpY2luZyAudGxkLXJvdycpLmhpZGUoKTtcclxuICAgICAgICAkLmVhY2goc2VsZWN0ZWRfb2JqZWN0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAkKCcudGxkLXJvd1tkYXRhLWNhdGVnb3J5Kj1cIicgKyB2YWx1ZS52YWx1ZSArICdcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEpOiB1dGlsLmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgVXRpbCA9ICgoKSA9PiB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cclxuXHJcbiAgICBsZXQgdHJhbnNpdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xyXG5cclxuICAgIGNvbnN0IFRyYW5zaXRpb25FbmRFdmVudCA9IHtcclxuICAgICAgICBXZWJraXRUcmFuc2l0aW9uIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxyXG4gICAgICAgIE1velRyYW5zaXRpb24gICAgOiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgdHJhbnNpdGlvbiAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcclxuICAgIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcclxuICAgICAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGJpbmRUeXBlOiB0cmFuc2l0aW9uLmVuZCxcclxuICAgICAgICAgICAgZGVsZWdhdGVUeXBlOiB0cmFuc2l0aW9uLmVuZCxcclxuICAgICAgICAgICAgaGFuZGxlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcclxuICAgICAgICBpZiAod2luZG93LlFVbml0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gVHJhbnNpdGlvbkVuZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWwuc3R5bGVbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xyXG4gICAgICAgIGxldCBjYWxsZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbGxlZCA9IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XHJcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25FbmRUZXN0KClcclxuXHJcbiAgICAgICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxyXG5cclxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSkge1xyXG4gICAgICAgICAgICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZU9wdGlvbihpdGVtKXtcclxuICAgICAgICBpZiAoJ3RydWUnID09PSBpdGVtKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCdmYWxzZScgPT09IGl0ZW0pe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWlzTmFOKGl0ZW0gKiAxKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogUHVibGljIFV0aWwgQXBpXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3QgVXRpbCA9IHtcclxuXHJcbiAgICAgICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxyXG5cclxuICAgICAgICBnZXRVSUQocHJlZml4KSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcclxuICAgICAgICAgICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcclxuICAgICAgICAgICAgcmV0dXJuIHByZWZpeFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdG9yID0gJChkb2N1bWVudCkuZmluZChzZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2VsZWN0b3IubGVuZ3RoID4gMCA/IHNlbGVjdG9yIDogbnVsbFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlZmxvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKHRyYW5zaXRpb24uZW5kKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc0VsZW1lbnQob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJzZURhdGFPcHRpb25zKGRhdGFPcHRpb25zKXtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0cmluZyA9IGRhdGFPcHRpb25zLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgICAgICBzdHJpbmcuZm9yRWFjaChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gID0gaXRlbS5zcGxpdCgnOicpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbi5tYXAoZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvblswXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25bMF1dID0gcGFyc2VPcHRpb24ob3B0aW9uWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxyXG5cclxuICAgIHJldHVybiBVdGlsXHJcblxyXG59KSgkKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbCIsImltcG9ydCB7XHJcbiAgdmlydHVhbElucHV0LFxyXG4gIG51bWJlcklucHV0LFxyXG4gIG51bWJlcklucHV0U2Vjb25kYXJ5XHJcbn0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1zJztcclxuaW1wb3J0IHJhbmdlU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy9yYW5nZS1zbGlkZXInO1xyXG5cclxuXHJcbmltcG9ydCBpbml0UGFuZWxzR3JpZCBmcm9tICcuL2NvbXBvbmVudHMvcGFuZWxzLWdyaWQnO1xyXG5pbXBvcnQgaW5pdENoZWNrQWxsIGZyb20gJy4vY29tcG9uZW50cy9jaGVjay1hbGwnO1xyXG5pbXBvcnQgc2xpZGVycyBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVycyc7XHJcbmltcG9ydCBpbml0UGFuZWxTd2l0Y2ggZnJvbSAnLi9jb21wb25lbnRzL3BhbmVsLXN3aXRjaCc7XHJcbmltcG9ydCBpbml0Q3JlZGl0Qm94IGZyb20gJy4vY29tcG9uZW50cy9jcmVkaXQtYm94JztcclxuaW1wb3J0IGluaXRUaWxlc1NsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvdGlsZXMtc2xpZGVyJztcclxuaW1wb3J0IGluaXRMb2dpblNpZGViYXJTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luLXNpZGViYXItc2xpZGVyJztcclxuaW1wb3J0IGluaXRDdXN0b21TY3JvbGxiYXIgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbS1zY3JvbGxiYXInO1xyXG5pbXBvcnQgaW5pdFRMRGZpbGVyIGZyb20gJy4vY29tcG9uZW50cy90bGQtZmlsdGVyJztcclxuaW1wb3J0IGluaXRUaGVtZVN3aXRjaGVyIGZyb20gJy4vY29tcG9uZW50cy90aGVtZS1zd2l0Y2hlcic7XHJcbmltcG9ydCBpbml0RGF0YVRhYmxlU2NyaXB0cyBmcm9tICcuL2NvbXBvbmVudHMvZGF0YVRhYmxlc1NjcmlwdHMnO1xyXG5pbXBvcnQgaW5pdERyb3Bkb3duU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi1zZWxlY3QnO1xyXG5pbXBvcnQgaW5pdExhbmd1YWdlU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9sYW5ndWFnZS1zZWxlY3QnO1xyXG5pbXBvcnQgaW5pdENvbnRlbnRTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQtc2xpZGVyJztcclxuaW1wb3J0IGluaXRGaWx0ZXJHcmlkIGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXItZ3JpZCc7XHJcbmltcG9ydCBpbml0T3RoZXJTY3JpcHRzIGZyb20gJy4vY29tcG9uZW50cy9vdGhlcic7XHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGluaXRQYW5lbHNHcmlkKCk7XHJcbiAgaW5pdENoZWNrQWxsKCk7XHJcbiAgaW5pdFBhbmVsU3dpdGNoKCk7XHJcbiAgaW5pdENyZWRpdEJveCgpO1xyXG4gIGluaXRUaWxlc1NsaWRlcigpO1xyXG4gIGluaXRMb2dpblNpZGViYXJTbGlkZXIoKTtcclxuICBpbml0VGhlbWVTd2l0Y2hlcigpO1xyXG4gIGluaXREYXRhVGFibGVTY3JpcHRzKCk7XHJcbiAgaW5pdE90aGVyU2NyaXB0cygpO1xyXG4gIGluaXRUTERmaWxlcigpO1xyXG4gIGluaXRDdXN0b21TY3JvbGxiYXIoKTtcclxuICBpbml0RHJvcGRvd25TZWxlY3QoKTtcclxuICBpbml0TGFuZ3VhZ2VTZWxlY3QoKTtcclxuICBpbml0Q29udGVudFNsaWRlcigpO1xyXG4gIGluaXRGaWx0ZXJHcmlkKClcclxuICBzbGlkZXJzLmluaXQoKVxyXG4gIGNvbnN0IGNoZWNrYm94ZXMgPSAkKCdib2R5JykuZmluZCgnaW5wdXQuaWNoZWNrLWNvbnRyb2w6bm90KC5pY2hlY2staW5wdXQpOm5vdCguc3dpdGNoX19jaGVja2JveCksIC5hZGRvbi1zZWxlY3RvcicpO1xyXG4gIGNvbnN0IHJhZGlvVGFicyA9ICQoJ1tkYXRhLXJhZGlvLXRhYl0nKTtcclxuXHJcbiAgY2hlY2tib3hlcy5pQ2hlY2soe1xyXG4gICAgICBjaGVja2JveENsYXNzOiAnY2hlY2tib3gtc3R5bGVkJyxcclxuICAgICAgcmFkaW9DbGFzczogJ3JhZGlvLXN0eWxlZCcsXHJcbiAgICAgIGluY3JlYXNlQXJlYTogJzQwJSdcclxuICB9KTtcclxuXHJcbiAgXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJ1tkYXRhLXJhZGlvLXRhYl0nLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuaUNoZWNrKCdjaGVjaycpO1xyXG4gIH0pO1xyXG4gICQoJ2JvZHknKS5vbignaWZDaGVja2VkJywnW2RhdGEtcmFkaW8tdGFiXSBpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnW2RhdGEtcmFkaW8tdGFiXScpLnRhYignc2hvdycpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY3VzdG9tLXNlbGVjdCcpLnNlbGVjdGl6ZSh7XHJcbiAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gICQoJ1tkYXRhLWlucHV0cy1jb250YWluZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgbmV3IHZpcnR1YWxJbnB1dCgkKHRoaXMpKTtcclxuICB9KTtcclxuXHJcbiAgJCgnW2RhdGEtaW5wdXQtbnVtYmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyBudW1iZXJJbnB1dCgkKHRoaXMpKTtcclxuICB9KTtcclxuXHJcbiAgJCgnW2RhdGEtaW5wdXQtbnVtYmVyLXNlY29uZGFyeV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgbnVtYmVySW5wdXRTZWNvbmRhcnkoJCh0aGlzKSk7XHJcbiAgfSk7XHJcbiAgJCgnW2RhdGEtcmFuZ2UtY29udGFpbmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyByYW5nZVNsaWRlcigkKHRoaXMpKTtcclxuICB9KTtcclxuICBcclxuICBcclxuICAkKCcubGFnb20tbGF5b3V0LWxlZnQtd2lkZSAubmF2YmFyLW1haW4gLmRyb3Bkb3duLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoISQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2xhbmd1YWdlJykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLnBhcmVudCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wZG93bi1tZW51Jykuc2xpZGVVcCg0MDApLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoYXQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdGhhdCA9ICQodGhpcykuY2xvc2VzdCgnLm5hdmJhci1tYWluJykuZmluZCgnLm9wZW4nKTtcclxuICAgICAgICB0aGF0LmZpbmQoJy5kcm9wZG93bi1tZW51Jykuc2xpZGVVcCg0MDApLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoYXQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZURvd24oNDAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG53aW5kb3cucmVsb2FkQ29uZmlnT3B0aW9ucyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAkKHNlbGVjdG9yKS5maW5kKCdbZGF0YS1pbnB1dHMtY29udGFpbmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyB2aXJ0dWFsSW5wdXQoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG4gICQoc2VsZWN0b3IpLmZpbmQoJ1tkYXRhLXJhbmdlLWNvbnRhaW5lcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgcmFuZ2VTbGlkZXIoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuJCgnLnBhZ2Utdmlld2ludm9pY2UgLmludm9pY2UnKS53cmFwKCc8ZGl2IGNsYXNzPVwidGFibGUtc2Nyb2xsYmFyXCI+PC9kaXY+Jyk7Il0sInNvdXJjZVJvb3QiOiIifQ==