(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('framer-motion'), require('react-append-to-body'), require('react-measure'), require('styled-components'), require('react-shadow/styled-components'), require('modern-normalize'), require('react-scrolllock'), require('react-feather/dist/icons/x'), require('react-fixed-bottom'), require('lodash.debounce')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'framer-motion', 'react-append-to-body', 'react-measure', 'styled-components', 'react-shadow/styled-components', 'modern-normalize', 'react-scrolllock', 'react-feather/dist/icons/x', 'react-fixed-bottom', 'lodash.debounce'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.reactDynamicSheet = {}, global.React, global.PropTypes, global.framerMotion, global.reactAppendToBody, global.Measure, global.styled, global.root$1, global.modernNormalize, global.ScrollLock, global.CloseIcon, global.reactFixedBottom, global.debounce$1));
}(this, (function (exports, React, PropTypes, framerMotion, reactAppendToBody, Measure, styled, root$1, modernNormalize, ScrollLock, CloseIcon, reactFixedBottom, debounce$1) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
	var Measure__default = /*#__PURE__*/_interopDefaultLegacy(Measure);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var root__default = /*#__PURE__*/_interopDefaultLegacy(root$1);
	var modernNormalize__default = /*#__PURE__*/_interopDefaultLegacy(modernNormalize);
	var ScrollLock__default = /*#__PURE__*/_interopDefaultLegacy(ScrollLock);
	var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
	var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce$1);

	var ChildrenProps = PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func, PropTypes__default['default'].node, PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)]);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _taggedTemplateLiteral(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }

	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _templateObject() {
	  var data = _taggedTemplateLiteral(["\n\t", "\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n"]);

	  _templateObject = function _templateObject() {
	    return data;
	  };

	  return data;
	}

	var GlobalStyle = styled.createGlobalStyle(_templateObject(), modernNormalize__default['default']);

	var Encapsulate = function Encapsulate(_ref) {
	  var style = _ref.style,
	      children = _ref.children,
	      rest = _objectWithoutProperties(_ref, ["style", "children"]);

	  return /*#__PURE__*/React__default['default'].createElement(root__default['default'].div, _extends({
	    style: _objectSpread2({
	      display: "block",
	      overflow: "scroll",
	      WebkitOverflowScrolling: "touch",
	      border: 0
	    }, style)
	  }, rest), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), children);
	};

	Encapsulate.propTypes = {
	  style: PropTypes__default['default'].object,
	  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].func, PropTypes__default['default'].node, PropTypes__default['default'].arrayOf(PropTypes__default['default'].node)]).isRequired
	};
	Encapsulate.defaultProps = {
	  style: {}
	};

	function _templateObject2() {
	  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tz-index: 5;\n\toverflow: auto;\n\t-webkit-overflow-scrolling: touch;\n\n\t", "\n\n\t@media (min-width: 450px) {\n\t\tpadding: 20px;\n\t}\n"]);

	  _templateObject2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$1() {
	  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tz-index: 99999999999;\n\twidth: 100vw;\n\theight: 100vh;\n"]);

	  _templateObject$1 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Frame = styled__default['default'](Encapsulate)(_templateObject$1());
	var Overlay = styled__default['default'].div(_templateObject2(), function (props) {
	  return typeof props.contentFixBreakpoint === "number" && "@media (min-width: 450px) and (min-height: ".concat("".concat(props.contentFixBreakpoint, "px"), ") {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-contents: center;\n\t\t\t\toverflow: hidden;\n\t\t}");
	});

	var MotionOverlay = framerMotion.motion.custom(Overlay);
	var Overlay$1 = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
	  var children = _ref.children,
	      type = _ref.type,
	      props = _objectWithoutProperties(_ref, ["children", "type"]);

	  return /*#__PURE__*/React__default['default'].createElement(MotionOverlay, _extends({
	    ref: ref,
	    variants: {
	      hidden: {
	        backgroundColor: "rgba(0, 0, 0, 0)",
	        opacity: 0,
	        pointerEvents: "none"
	      },
	      visible: {
	        backgroundColor: type === "menu" ? "rgba(0, 0, 0, 0.35)" : "rgba(0, 0, 0, 0.7)",
	        opacity: 1,
	        pointerEvents: "auto"
	      }
	    },
	    initial: "hidden",
	    animate: "visible",
	    exit: "hidden",
	    transition: {
	      duration: 0.25
	    }
	  }, props), children);
	});
	Overlay$1.propTypes = {
	  children: ChildrenProps.isRequired,
	  type: PropTypes__default['default'].string
	};
	Overlay$1.defaultProps = {
	  type: "modal"
	};

	var DialogBase = function DialogBase(_ref) {
	  var children = _ref.children,
	      props = _objectWithoutProperties(_ref, ["children"]);

	  return /*#__PURE__*/React__default['default'].createElement(Frame, props, /*#__PURE__*/React__default['default'].createElement(ScrollLock__default['default'], null, children));
	};

	DialogBase.propTypes = {
	  children: ChildrenProps.isRequired
	};

	function _templateObject$2() {
	  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 4px;\n\tbackground-color: rgba(0, 0, 0, 0);\n\tcolor: rgb(120, 120, 120);\n\tz-index: 100;\n\tborder: none;\n\toutline: 0;\n\ttransition: background-color 0.25s, color 0.25s;\n\n\t&:hover {\n\t\tbackground-color: rgba(100, 100, 100, 0.1);\n\t\tcolor: rgb(100, 100, 100);\n\t\tcursor: pointer;\n\t}\n\t&:active {\n\t\tbackground-color: rgba(100, 100, 100, 0.15);\n\t}\n\t& > svg {\n\t\tstroke-width: 3px;\n\t}\n"]);

	  _templateObject$2 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Button = styled__default['default'].button(_templateObject$2());

	var Close = function Close(_ref) {
	  var onClick = _ref.onClick;
	  return /*#__PURE__*/React__default['default'].createElement(Button, {
	    onClick: onClick
	  }, /*#__PURE__*/React__default['default'].createElement(CloseIcon__default['default'], {
	    size: 22
	  }));
	};

	Close.propTypes = {
	  onClick: PropTypes__default['default'].func.isRequired
	};

	function _templateObject2$1() {
	  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tbox-sizing: content-box;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: stretch;\n\tjustify-content: center;\n"]);

	  _templateObject2$1 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$3() {
	  var data = _taggedTemplateLiteral(["\n\tmax-width: 768px;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmin-height: 100%;\n\tposition: relative;\n\tbackground-color: #fff;\n\n\t@media (min-width: 450px) {\n\t\tmin-height: auto !important;\n\t\tborder-radius: 10px;\n\t\toverflow: hidden;\n\t\tbox-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n\t\t\t0 18px 36px -18px rgba(0, 0, 0, 0.3),\n\t\t\t0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n\t}\n"]);

	  _templateObject$3 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Container = styled__default['default'].div(_templateObject$3());
	var Body = styled__default['default'].div(_templateObject2$1());

	var MotionContainer = framerMotion.motion.custom(Container);

	var Modal = function Modal(_ref) {
	  var children = _ref.children,
	      isOpen = _ref.isOpen,
	      onClose = _ref.onClose,
	      props = _objectWithoutProperties(_ref, ["children", "isOpen", "onClose"]);

	  var _useState = React.useState(500),
	      _useState2 = _slicedToArray(_useState, 2),
	      contentFixBreakpoint = _useState2[0],
	      setContentFixBreakpoint = _useState2[1];

	  var onSheetResize = function onSheetResize(width, height) {
	    setContentFixBreakpoint(height);
	  };

	  return isOpen && /*#__PURE__*/React__default['default'].createElement(DialogBase, null, /*#__PURE__*/React__default['default'].createElement(Overlay$1, {
	    contentFixBreakpoint: contentFixBreakpoint
	  }, /*#__PURE__*/React__default['default'].createElement(Measure__default['default'], {
	    bounds: true,
	    onResize: function onResize(_ref2) {
	      var rect = _ref2.bounds;
	      return onSheetResize(rect.width, rect.height);
	    }
	  }, function (_ref3) {
	    var measureRef = _ref3.measureRef;
	    return /*#__PURE__*/React__default['default'].createElement(MotionContainer, _extends({
	      sx: {
	        color: "text",
	        bg: "background"
	      },
	      variants: {
	        hidden: {
	          opacity: 0,
	          visibility: "hidden",
	          y: 20
	        },
	        visible: {
	          opacity: 1,
	          visibility: "visible",
	          y: 0
	        }
	      },
	      initial: "hidden",
	      animate: "visible",
	      exit: "hidden",
	      transition: {
	        duration: 0.25,
	        delay: 0.25
	      },
	      ref: measureRef
	    }, props), /*#__PURE__*/React__default['default'].createElement(Close, {
	      onClick: onClose
	    }), /*#__PURE__*/React__default['default'].createElement(Body, null, /*#__PURE__*/React__default['default'].createElement("slot", {
	      name: "dynamic-sheet-content"
	    }, children)));
	  })));
	};

	Modal.propTypes = {
	  children: ChildrenProps.isRequired,
	  onClose: PropTypes__default['default'].func.isRequired,
	  isOpen: PropTypes__default['default'].bool
	};
	Modal.defaultProps = {
	  isOpen: false
	};
	var Modal$1 = reactAppendToBody.componentWillAppendToBody(Modal);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	var lodash_throttle = throttle;

	function _templateObject4() {
	  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tpadding: 30px 8px calc(30px + env(safe-area-inset-bottom, 0px)) 8px;\n\toverflow: auto;\n\tz-index: 5;\n\tposition: relative;\n\tbottom: 0px;\n\tmin-height: calc(100vh - env(safe-area-inset-top, 0px) * 2);\n\tmax-height: calc(100vh - env(safe-area-inset-top, 0px) * 2);\n\tpadding-bottom: calc(30px + env(safe-area-inset-bottom, 0px)) !important;\n\tbox-sizing: content-box;\n\n\t&:before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 8px;\n\t\theight: 6px;\n\t\twidth: 32px;\n\t\tbackground-color: #888;\n\t\topacity: 0.5;\n\t\tborder-radius: 100px;\n\t\tmargin: 0 auto;\n\t\tz-index: 100;\n\t\tborder: none;\n\t\toutline: 0;\n\t}\n\n\t& [name=\"dynamic-sheet-content\"] > *:first-child {\n\t\tpadding-bottom: calc(env(safe-area-inset-bottom) + 8px);\n\t\ttop: 30px;\n\t\tright: 0px;\n\t\tleft: 0px;\n\t\tmax-height: calc(100vh - 96px);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\toverflow-y: scroll !important;\n\t}\n\n\t.type-menu & {\n\t\tmin-height: unset;\n\t\tpadding-bottom: max(env(safe-area-inset-bottom, 0px), 8px) !important;\n\n\t\t& [name=\"dynamic-sheet-content\"] > *:first-child {\n\t\t\tpadding-bottom: unset;\n\t\t}\n\n\t\t:before {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"]);

	  _templateObject4 = function _templateObject4() {
	    return data;
	  };

	  return data;
	}

	function _templateObject3() {
	  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tleft: -100px;\n\tright: -100px;\n\ttop: 100px;\n\tbottom: -999999px;\n\tborder-radius: inherit;\n\tbackground: inherit;\n"]);

	  _templateObject3 = function _templateObject3() {
	    return data;
	  };

	  return data;
	}

	function _templateObject2$2() {
	  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 0.75rem;\n\tright: 0.75rem;\n\tborder-radius: 50%;\n\tbackground-color: rgba(0, 0, 0, 0.25);\n\twidth: 28px;\n\theight: 28px;\n\tdisplay: flex;\n\talign-content: center;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-transform: lowercase;\n\tcolor: var(--colors-text, #fff);\n"]);

	  _templateObject2$2 = function _templateObject2() {
	    return data;
	  };

	  return data;
	}

	function _templateObject$4() {
	  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tborder-radius: 9px 9px 0 0;\n\tbox-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n\t\t0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n\tborder-top: solid 1px rgba(108, 108, 108, 0.25);\n\tbackdrop-filter: blur(20px);\n\topacity: 0.85;\n\tposition: relative;\n\tleft: 0;\n\tright: 0;\n\tbackground-color: #fff;\n\tbox-sizing: content-box;\n\n\t.type-menu & {\n\t\tbackground-color: unset;\n\t\tborder-top: 0;\n\t\tbox-shadow: none;\n\t\tbackdrop-filter: none;\n\t\topacity: 0.945;\n\t}\n"]);

	  _templateObject$4 = function _templateObject() {
	    return data;
	  };

	  return data;
	}
	var Container$1 = styled__default['default'].div(_templateObject$4());
	var CloseButton = styled__default['default'].div(_templateObject2$2());
	var Background = styled__default['default'].div(_templateObject3());
	var Body$1 = styled__default['default'].div(_templateObject4());

	var MotionContainer$1 = framerMotion.motion.custom(Container$1);
	var SnapPoints = {
	  Mini: {
	    y: 80,
	    name: "mini"
	  },
	  Mid: {
	    y: 0.5,
	    name: "mid"
	  },
	  Full: {
	    y: -8,
	    name: "full"
	  }
	};
	var SnapPointCollections = {
	  DefaultSheet: [SnapPoints.Mini, SnapPoints.Mid, SnapPoints.Full]
	};
	var MIN_OFFSET = 44;

	var convertSnapPoint = function convertSnapPoint(y, _ref) {
	  var bodyRect = _ref.bodyRect,
	      visibleHeight = _ref.visibleHeight,
	      windowHeight = _ref.windowHeight;

	  if (y <= 1 && y >= 0) {
	    return bodyRect.height - windowHeight * y;
	  }

	  if (y < 24) {
	    return visibleHeight + MIN_OFFSET + Math.abs(y);
	  }

	  return bodyRect.height - MIN_OFFSET - y;
	};

	var makeSnapPoints = function makeSnapPoints(snapPointDefinitions, _ref2) {
	  var bodyRect = _ref2.bodyRect,
	      visibleHeight = _ref2.visibleHeight,
	      windowHeight = _ref2.windowHeight;
	  var points = snapPointDefinitions.map(function (pt) {
	    return _objectSpread2(_objectSpread2({}, pt), {}, {
	      yPixel: convertSnapPoint(pt.y, {
	        bodyRect: bodyRect,
	        visibleHeight: visibleHeight,
	        windowHeight: windowHeight
	      })
	    });
	  });
	  return {
	    getModeStateFromPixel: function getModeStateFromPixel(y) {
	      return points.reduce(function (acc, p) {
	        var diff = Math.abs(p.yPixel - y);

	        if (diff < acc.closest) {
	          acc.closest = diff;
	          acc.closestSnap = p.name;
	        }

	        if (p.yPixel >= y) {
	          acc.activeSnap = p.name;
	        }

	        return acc;
	      }, {
	        activeSnap: null,
	        closest: 999999,
	        closestSnap: null
	      });
	    },
	    toVariants: function toVariants() {
	      return points.reduce(function (acc, point) {
	        return Object.assign(acc, _defineProperty({}, point.name, {
	          y: point.yPixel
	        }));
	      }, {});
	    }
	  };
	}; // Variants and sheet behaviour will change based on the size of the body relative to the viewport


	var Sheet = function Sheet(_ref3) {
	  var children = _ref3.children,
	      type = _ref3.type,
	      onClose = _ref3.onClose,
	      _ref3$snapPoints = _ref3.snapPoints,
	      snapPoints = _ref3$snapPoints === void 0 ? SnapPointCollections.DefaultSheet : _ref3$snapPoints,
	      onClick = _ref3.onClick,
	      isModal = _ref3.isModal,
	      showClose = _ref3.showClose,
	      props = _objectWithoutProperties(_ref3, ["children", "type", "onClose", "snapPoints", "onClick", "isModal", "showClose"]);

	  var _useState = React.useState(false),
	      _useState2 = _slicedToArray(_useState, 2),
	      isExpandable = _useState2[0],
	      setExpandable = _useState2[1]; // const [isExpanded, setExpanded] = useState(false);


	  var _useState3 = React.useState(false),
	      _useState4 = _slicedToArray(_useState3, 2),
	      mounted = _useState4[0],
	      setMounted = _useState4[1];

	  var _useState5 = React.useState(null),
	      _useState6 = _slicedToArray(_useState5, 2),
	      size = _useState6[0],
	      setSize = _useState6[1];

	  var controls = framerMotion.useAnimation();
	  var bodyRef = React.useRef();
	  var variants = {
	    hidden: {
	      y: window && window.innerHeight ? window.innerHeight : "200%"
	    },
	    visible: {
	      y: 0
	    }
	  };
	  var dragConstraints = {
	    top: MIN_OFFSET - 8
	  };
	  var snapPointsManager = null;

	  if (isExpandable) {
	    var bodyRect = bodyRef.current.getBoundingClientRect();
	    var visibleHeight = bodyRect.height - window.innerHeight;
	    snapPointsManager = makeSnapPoints(snapPoints, {
	      bodyRect: bodyRect,
	      visibleHeight: visibleHeight,
	      windowHeight: window.innerHeight
	    });
	    variants = _objectSpread2(_objectSpread2({}, variants), {}, {
	      // Convert to a pixel value for smooth transition
	      hidden: {
	        y: bodyRect.height * 2
	      }
	    }, snapPointsManager.toVariants());
	    dragConstraints = {
	      top: visibleHeight + MIN_OFFSET
	    };
	    /*
	    console.log("woot:", dragConstraints);
	    console.log(bodyRect.height, window.innerHeight);
	    */
	  } else if (bodyRef.current) {
	    var _bodyRect = bodyRef.current.getBoundingClientRect();

	    variants = _objectSpread2(_objectSpread2({}, variants), {}, {
	      // Convert to a pixel value for smooth transition
	      hidden: {
	        y: _bodyRect.height * 2
	      }
	    });
	  }

	  var preventDefaultClick = function preventDefaultClick() {
	    var clickHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	    return function (e) {
	      // Prevent click from triggering Overlay click.
	      e.preventDefault();
	      e.stopPropagation();
	      return clickHandler(e);
	    };
	  };

	  var onDrag = lodash_throttle(function (event, info) {
	    if (!snapPointsManager) {
	      return;
	    }

	    if (size === "full") {
	      var body = bodyRef.current.childNodes[0].childNodes[0];
	      body.scrollTop -= info.delta.y;
	      return;
	    }

	    var top = bodyRef.current ? bodyRef.current.getBoundingClientRect().top : info.point.y;
	    var mode = snapPointsManager.getModeStateFromPixel(top);

	    if (mode.closestSnap !== size) {
	      setSize(mode.closestSnap);
	    }
	  }, 10, {
	    trailing: false
	  });

	  var close = function close() {
	    controls.start("hidden");
	    setSize("hidden");
	    onClose();
	  };

	  var onDragEnd = debounce__default['default'](function (event, info) {
	    // Requires much less to expand than to close.

	    /* const shouldClose =
	    	(info.velocity.y > 20 && info.point.y > 0) ||
	    	(info.velocity.y >= 0 && info.point.y > 45);
	    const shouldExpand = info.velocity.y <= 0; */
	    if (!snapPointsManager) {
	      var shouldClose = info.velocity.y > 20 && info.point.y > 0 || info.velocity.y >= 0 && info.point.y > 45; // const shouldExpand = info.velocity.y <= 0;

	      if (isModal || type === "menu") {
	        return;
	      }

	      if (shouldClose) {
	        controls.start("hidden");
	        setSize("hidden");
	        onClose();
	      }
	    }

	    var top = bodyRef.current ? bodyRef.current.getBoundingClientRect().top : info.point.y;
	    var modeState = snapPointsManager.getModeStateFromPixel(top + info.velocity.y);
	    var body = bodyRef.current && bodyRef.current.childNodes[0].childNodes[0];

	    if (body) {
	      if (size === "full" && modeState.closestSnap === "full") {
	        body.scrollTo(0, body.scrollTop - info.velocity.y);
	      } else if (modeState.closestSnap !== "full") {
	        body.scrollTo(0, 0);
	      }
	    }

	    setSize(modeState.closestSnap);
	    controls.start(modeState.closestSnap);
	    /*
	    if (isExpanded) {
	    	let x = 1;
	    	if (setExpanded) {
	    		x = 2;
	    	}
	    		x++;
	    }
	    */
	    // console.log(info);

	    /*
	    if (shouldExpand && isExpandable) {
	    	controls.start("expand");
	    	setSize("expand");
	    	setExpanded(true);
	    } else {
	    	if (
	    		shouldClose &&
	    		// Should be able to close from expanded position if big drag
	    		(isExpanded ? info.velocity.y >= 20 && info.point.y > 100 : true)
	    	) {
	    		if (!isModal) {
	    			controls.start("hidden");
	    			setSize("hidden");
	    			onClose();
	    		} else {
	    			controls.start("small");
	    			setSize("small");
	    		}
	    	} else if (shouldClose) {
	    		controls.start("small");
	    		setSize("small");
	    	} else {
	    		controls.start("visible");
	    		setSize("visible");
	    	}
	    	setExpanded(false);
	    }
	    */
	  }, 250, {
	    leading: true,
	    trailing: false
	  });
	  React.useEffect(function () {
	    if (mounted) {
	      var _bodyRect2 = bodyRef.current.getBoundingClientRect(); // Is expandable if body in sheet is greater than half the viewport height.


	      var isExp = _bodyRect2.height > window.innerHeight / 2; // console.log("useEffect => ", isExp, bodyRect.height, window.innerHeight);

	      setExpandable(isExp);

	      if (isExp) {
	        // Use function as variants change need a rerender
	        controls.start(function () {
	          return {
	            y: _bodyRect2.height - window.innerHeight / 2
	          };
	        });
	      } else {
	        controls.start(function () {
	          return {
	            y: 0
	          };
	        });
	      }

	      setSize("visible");
	    } else {
	      setMounted(true);
	    }
	  }, [controls, mounted]);
	  var overlayOnClick = {};
	  var motionOptions = {};

	  if (type === "menu") {
	    overlayOnClick.onClick = onClose;
	    motionOptions.dragTransition = {
	      damping: 100,
	      stiffness: 500
	    };
	    dragConstraints.top = 0;
	    dragConstraints.bottom = 0;
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DialogBase, null, /*#__PURE__*/React__default['default'].createElement(Overlay$1, _extends({
	    sx: {
	      overflow: "hidden !important"
	    },
	    className: "type-".concat(type),
	    type: type
	  }, overlayOnClick), /*#__PURE__*/React__default['default'].createElement(reactFixedBottom.FixedBottom, null, /*#__PURE__*/React__default['default'].createElement(MotionContainer$1, _extends({
	    sx: {
	      color: "text",
	      bg: "white"
	    },
	    drag: "y",
	    dragElastic: 0.005
	  }, motionOptions, {
	    onDrag: onDrag,
	    onDragEnd: onDragEnd,
	    dragConstraints: dragConstraints,
	    dragPropagation: true,
	    variants: variants,
	    initial: "hidden",
	    animate: controls,
	    exit: "hidden",
	    transition: {
	      type: "tween",
	      ease: "easeInOut"
	    },
	    onClick: preventDefaultClick(onClick)
	  }, props), /*#__PURE__*/React__default['default'].createElement(Background, {
	    onClick: preventDefaultClick()
	  }), /*#__PURE__*/React__default['default'].createElement(Body$1, {
	    ref: bodyRef,
	    className: "sz-".concat(size),
	    $isExpandable: isExpandable
	  }, /*#__PURE__*/React__default['default'].createElement("slot", {
	    name: "dynamic-sheet-content"
	  }, children), showClose && !isModal ? /*#__PURE__*/React__default['default'].createElement(CloseButton, {
	    className: "close-btn",
	    onClick: close
	  }, "X") : null)))));
	};

	var BottomSheet = function BottomSheet(_ref4) {
	  var isOpen = _ref4.isOpen,
	      props = _objectWithoutProperties(_ref4, ["isOpen"]);

	  return /*#__PURE__*/React__default['default'].createElement(framerMotion.AnimatePresence, {
	    exitBeforeEnter: true
	  }, isOpen && /*#__PURE__*/React__default['default'].createElement(Sheet, props));
	};

	Sheet.propTypes = {
	  children: ChildrenProps.isRequired,
	  onClose: PropTypes__default['default'].func.isRequired,
	  onClick: PropTypes__default['default'].func,
	  isModal: PropTypes__default['default'].bool,
	  showClose: PropTypes__default['default'].bool,
	  type: PropTypes__default['default'].string,
	  snapPoints: PropTypes__default['default'].arrayOf(PropTypes__default['default'].object)
	};
	Sheet.defaultProps = {
	  onClick: function onClick() {},
	  isModal: false,
	  showClose: false,
	  type: "modal",
	  snapPoints: SnapPointCollections.DefaultSheet
	};
	BottomSheet.propTypes = {
	  isOpen: PropTypes__default['default'].bool
	};
	BottomSheet.defaultProps = {
	  isOpen: false
	};
	var BottomSheet$1 = reactAppendToBody.componentWillAppendToBody(BottomSheet);

	var DynamicSheet = function DynamicSheet(_ref) {
	  var children = _ref.children,
	      isOpen = _ref.isOpen,
	      onClose = _ref.onClose,
	      confirmClose = _ref.confirmClose,
	      confirmCloseMessage = _ref.confirmCloseMessage,
	      showClose = _ref.showClose,
	      type = _ref.type;
	  var isMobile = window.innerWidth < 450;

	  var abort = function abort() {
	    if (confirmClose) {
	      var confirm = window.confirm(confirmCloseMessage); // eslint-disable-line

	      if (!confirm) {
	        return false;
	      }
	    }

	    return onClose();
	  }; // See: https://stackoverflow.com/questions/3888902/detect-browser-or-tab-closing


	  var beforeUnload = function beforeUnload(message) {
	    return function (e) {
	      (e || window.event).returnValue = message;
	      return message;
	    };
	  };

	  React.useEffect(function () {
	    var fn = beforeUnload(confirmCloseMessage);

	    if (confirmClose) {
	      window.onbeforeunload = fn;
	      window.addEventListener("beforeunload", fn, false);
	    }

	    return function () {
	      window.onbeforeunload = null;
	      window.removeEventListener("beforeunload", fn, false);
	    };
	  }, [confirmClose, confirmCloseMessage]);

	  if (isMobile) {
	    return /*#__PURE__*/React__default['default'].createElement(BottomSheet$1, {
	      isOpen: isOpen,
	      onClose: abort,
	      type: type,
	      showClose: showClose
	    }, children);
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Modal$1, {
	    isOpen: isOpen,
	    onClose: abort,
	    type: type
	  }, children);
	};

	DynamicSheet.propTypes = {
	  children: ChildrenProps.isRequired,
	  isOpen: PropTypes__default['default'].bool,
	  onClose: PropTypes__default['default'].func,
	  confirmClose: PropTypes__default['default'].bool,
	  confirmCloseMessage: PropTypes__default['default'].string,
	  type: PropTypes__default['default'].string,
	  showClose: PropTypes__default['default'].bool
	};
	DynamicSheet.defaultProps = {
	  isOpen: false,
	  onClose: function onClose() {},
	  confirmClose: false,
	  confirmCloseMessage: "Are you sure you would like to abort the checkout?",
	  type: "modal",
	  showClose: false
	};

	exports.BottomSheet = BottomSheet$1;
	exports.Modal = Modal$1;
	exports.default = DynamicSheet;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
