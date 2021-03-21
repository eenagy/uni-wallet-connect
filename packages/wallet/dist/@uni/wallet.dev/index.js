'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var styled = require('styled-components');
var rebass = require('rebass');
var reactFeather = require('react-feather');
var core = require('@web3-react/core');
var providers = require('@ethersproject/providers');
var injectedConnector = require('@web3-react/injected-connector');
var walletconnectConnector = require('@web3-react/walletconnect-connector');
var walletlinkConnector = require('@web3-react/walletlink-connector');
var portisConnector = require('@web3-react/portis-connector');
var sdk = require('@uniswap/sdk');
var fortmaticConnector = require('@web3-react/fortmatic-connector');
var abstractConnector = require('@web3-react/abstract-connector');
var reactDeviceDetect = require('react-device-detect');
var bytes = require('@ethersproject/bytes');
var bignumber = require('@ethersproject/bignumber');
var keccak256 = require('@ethersproject/keccak256');
var styledComponents = require('rebass/styled-components');
var jazziconReact = require('@ukstv/jazzicon-react');
var copy = require('copy-to-clipboard');
var dialog = require('@reach/dialog');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

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

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct$1(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct$1 = Reflect.construct;
  } else {
    _construct$1 = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$1(instance, Class.prototype);
      return instance;
    };
  }

  return _construct$1.apply(null, arguments);
}

function _isNativeFunction$1(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper$1 = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction$1(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct$1(Class, arguments, _getPrototypeOf$1(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };

  return _wrapNativeSuper$1(Class);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

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

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
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

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */

var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose$1(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized$1(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb$1(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb$1(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb$1(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */


function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb$1(hue, saturation, lightness, convertToHex);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */


function hsl$1(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */


function hsla$1(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb$1(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb$1(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb$1(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba$1(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb$1(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb$1(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba$1(color);
  if (isRgb(color)) return rgb$1(color);
  if (isHsla(color)) return hsla$1(color);
  if (isHsl(color)) return hsl$1(color);
  throw new PolishedError(8);
} // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */


function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */


function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba$1(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);

var _templateObject$g, _templateObject2$e, _templateObject3$c, _templateObject4$b, _templateObject5$9, _templateObject6$7, _templateObject7$6, _templateObject8$5, _templateObject9$5, _templateObject10$5, _templateObject11$4, _templateObject12$4, _templateObject13$3, _templateObject14$2, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$1, _templateObject20;
styled__default['default'].button(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  font-size: inherit;\n  padding: 0;\n  margin: 0;\n  background: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.7;\n  }\n\n  :focus {\n    text-decoration: underline;\n  }\n"])));
styled__default['default'].button.attrs(function (_ref) {
  var warning = _ref.warning,
      theme = _ref.theme;
  return {
    backgroundColor: warning ? theme.red1 : theme.primary1
  };
})(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"])), function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return backgroundColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.white;
}, function (_ref4) {
  var backgroundColor = _ref4.backgroundColor;
  return curriedDarken(0.05, backgroundColor);
}, function (_ref5) {
  var backgroundColor = _ref5.backgroundColor;
  return curriedDarken(0.1, backgroundColor);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.bg1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.text4;
});
styled__default['default'](reactFeather.X)(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]))); // for wrapper react feather icons

styled__default['default'].div(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  margin-right: ", ";\n  margin-left: ", ";\n  & > * {\n    stroke: ", ";\n  }\n"])), function (_ref8) {
  var size = _ref8.size;
  return size !== null && size !== void 0 ? size : '20px';
}, function (_ref9) {
  var size = _ref9.size;
  return size !== null && size !== void 0 ? size : '20px';
}, function (_ref10) {
  var marginRight = _ref10.marginRight;
  return marginRight !== null && marginRight !== void 0 ? marginRight : 0;
}, function (_ref11) {
  var marginLeft = _ref11.marginLeft;
  return marginLeft !== null && marginLeft !== void 0 ? marginLeft : 0;
}, function (_ref12) {
  var theme = _ref12.theme,
      stroke = _ref12.stroke;
  return stroke !== null && stroke !== void 0 ? stroke : theme.blue1;
}); // A button that triggers some onClick result, but looks like a link.

var LinkStyledButton = styled__default['default'].button(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? 'default' : 'pointer';
}, function (_ref14) {
  var theme = _ref14.theme,
      disabled = _ref14.disabled;
  return disabled ? theme.text2 : theme.primary1;
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? null : 'underline';
}, function (_ref16) {
  var disabled = _ref16.disabled;
  return disabled ? null : 'underline';
}); // An internal link from the react-router-dom library that is correctly styled

var StyledInternalLink = styled__default['default'].a(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), function (_ref17) {
  var theme = _ref17.theme;
  return theme.primary1;
});
var StyledLink = styled__default['default'].a(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), function (_ref18) {
  var theme = _ref18.theme;
  return theme.primary1;
});
styled__default['default'].a(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    text-decoration: none;\n    opacity: 0.7;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: none;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])));
styled__default['default'](reactFeather.ExternalLink)(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral(["\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ", ";\n"])), function (_ref19) {
  var theme = _ref19.theme;
  return theme.blue1;
});
styled__default['default'](reactFeather.Trash)(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ", ";\n\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    opacity: 0.7;\n  }\n"])), function (_ref20) {
  var theme = _ref20.theme;
  return theme.text3;
});
var rotateImg = styled.keyframes(["0%{transform:perspective(1000px) rotateY(0deg);}100%{transform:perspective(1000px) rotateY(360deg);}"]);
styled__default['default'].img(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["\n  animation: ", " 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  padding: 2rem 0 0 0;\n  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));\n"])), rotateImg);
/**
 * Outbound link that handles firing google analytics events
 */

function ExternalLink(_ref21) {
  var _ref21$target = _ref21.target,
      target = _ref21$target === void 0 ? '_blank' : _ref21$target,
      href = _ref21.href,
      _ref21$rel = _ref21.rel,
      rel = _ref21$rel === void 0 ? 'noopener noreferrer' : _ref21$rel,
      rest = _objectWithoutProperties(_ref21, ["target", "href", "rel"]);

  var handleClick = React$1.useCallback(function (event) {// don't prevent default, don't redirect if it's a new tab
    // if (target === '_blank' || event.ctrlKey || event.metaKey) {
    //   ReactGA.outboundLink({ label: href }, () => {
    //     console.debug('Fired outbound link event', href)
    //   })
    // } else {
    //   event.preventDefault()
    //   // send a ReactGA event and then trigger a location change
    //   ReactGA.outboundLink({ label: href }, () => {
    //     window.location.href = href
    //   })
    // }
  }, [href, target]);
  return /*#__PURE__*/React__default['default'].createElement(StyledLink, _extends$2({
    target: target,
    rel: rel,
    href: href,
    onClick: handleClick
  }, rest));
}
var rotate$1 = styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var Spinner = styled__default['default'].img(_templateObject12$4 || (_templateObject12$4 = _taggedTemplateLiteral(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"])), rotate$1);
styled__default['default'](StyledInternalLink)(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref23) {
  var theme = _ref23.theme;
  return theme.text1;
});
styled__default['default'](Spinner)(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n"])), function (_ref25) {
  var size = _ref25.size;
  return size;
}, function (_ref26) {
  var size = _ref26.size;
  return size;
});
styled__default['default'].span(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref27) {
  var theme = _ref27.theme;
  return theme.mediaWidth.upToSmall(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});
styled__default['default'].span(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref28) {
  var theme = _ref28.theme;
  return theme.mediaWidth.upToExtraSmall(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});
styled__default['default'].span(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["\n  display: none;\n  ", ";\n"])), function (_ref29) {
  var theme = _ref29.theme;
  return theme.mediaWidth.upToExtraSmall(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    display: block;\n  "])));
});

var _templateObject$f, _templateObject2$d, _templateObject3$b;
var MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
};
var mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(function (accumulator, size) {

  accumulator[size] = function (a, b, c) {
    return styled.css(["@media (max-width:", "px){", "}"], MEDIA_WIDTHS[size], styled.css(a, b, c));
  };

  return accumulator;
}, {});
var white = '#FFFFFF';
var black = '#000000';
function colors$1(darkMode) {
  return {
    // base
    white: white,
    black: black,
    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',
    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FFFFFF',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',
    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',
    //primary colors
    primary1: darkMode ? '#2172E5' : '#ff007a',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',
    // color text
    primaryText1: darkMode ? '#6da8ff' : '#ff007a',
    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',
    // other
    red1: '#FD4040',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#2172E5' // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

  };
}
function theme(darkMode) {
  return _objectSpread2(_objectSpread2({}, colors$1(darkMode)), {}, {
    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },
    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',
    // media queries
    mediaWidth: mediaWidthTemplates,
    // css snippets
    flexColumnNoWrap: styled.css(["display:flex;flex-flow:column nowrap;"]),
    flexRowNoWrap: styled.css(["display:flex;flex-flow:row nowrap;"])
  });
}
function ThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: theme(false)
  }, children);
}
var TextWrapper = styled__default['default'](rebass.Text)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return theme[color];
});
var TYPE = {
  main: function main(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'text2'
    }, props));
  },
  link: function link(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'primary1'
    }, props));
  },
  black: function black(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'text1'
    }, props));
  },
  white: function white(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'white'
    }, props));
  },
  body: function body(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 400,
      fontSize: 16,
      color: 'text1'
    }, props));
  },
  largeHeader: function largeHeader(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 600,
      fontSize: 24
    }, props));
  },
  mediumHeader: function mediumHeader(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      fontSize: 20
    }, props));
  },
  subHeader: function subHeader(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 400,
      fontSize: 14
    }, props));
  },
  small: function small(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      fontSize: 11
    }, props));
  },
  blue: function blue(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'blue1'
    }, props));
  },
  yellow: function yellow(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'yellow1'
    }, props));
  },
  darkGray: function darkGray(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'text3'
    }, props));
  },
  gray: function gray(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: 'bg3'
    }, props));
  },
  italic: function italic(props) {
    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      fontSize: 12,
      fontStyle: 'italic',
      color: 'text2'
    }, props));
  },
  error: function error(_ref3) {
    var error = _ref3.error,
        props = _objectWithoutProperties(_ref3, ["error"]);

    return /*#__PURE__*/React__default['default'].createElement(TextWrapper, _extends$2({
      fontWeight: 500,
      color: error ? 'red1' : 'text2'
    }, props));
  }
};
styled.createGlobalStyle(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n a {\n   color: ", "; \n }\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;\n  \n}\n"])), colors$1(false).blue1);
var ThemedGlobalStyle = styled.createGlobalStyle(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["\nhtml {\n  color: ", ";\n  background-color: ", ";\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ", ";\n}\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.text1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.bg2;
}, function (_ref6) {
  var theme = _ref6.theme;
  return "radial-gradient(50% 50% at 50% 50%, ".concat(curriedTransparentize(0.9, theme.primary1), " 0%, ").concat(curriedTransparentize(1, theme.bg1), " 100%)");
});

function getLibrary(provider) {
  var library = new providers.Web3Provider(provider, 'any');
  library.pollingInterval = 15000;
  return library;
}

var _CHAIN_ID_NETWORK_ARG;
var OVERLAY_READY = 'OVERLAY_READY';
var CHAIN_ID_NETWORK_ARGUMENT = (_CHAIN_ID_NETWORK_ARG = {}, _defineProperty(_CHAIN_ID_NETWORK_ARG, sdk.ChainId.MAINNET, undefined), _defineProperty(_CHAIN_ID_NETWORK_ARG, sdk.ChainId.ROPSTEN, 'ropsten'), _defineProperty(_CHAIN_ID_NETWORK_ARG, sdk.ChainId.RINKEBY, 'rinkeby'), _defineProperty(_CHAIN_ID_NETWORK_ARG, sdk.ChainId.KOVAN, 'kovan'), _CHAIN_ID_NETWORK_ARG);
var FortmaticConnector = /*#__PURE__*/function (_FortmaticConnectorCo) {
  _inherits(FortmaticConnector, _FortmaticConnectorCo);

  var _super = _createSuper(FortmaticConnector);

  function FortmaticConnector() {
    _classCallCheck(this, FortmaticConnector);

    return _super.apply(this, arguments);
  }

  _createClass$1(FortmaticConnector, [{
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var _yield$import, Fortmatic, _ref, apiKey, chainId, provider, pollForOverlayReady, _yield$Promise$all, _yield$Promise$all2, account;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.fortmatic) {
                  _context.next = 11;
                  break;
                }

                _context.next = 3;
                return Promise.resolve().then(function () { return require('./fortmatic-22791d2c.js'); });

              case 3:
                _yield$import = _context.sent;
                Fortmatic = _yield$import["default"];
                _ref = this, apiKey = _ref.apiKey, chainId = _ref.chainId;

                if (!(chainId in CHAIN_ID_NETWORK_ARGUMENT)) {
                  _context.next = 10;
                  break;
                }

                this.fortmatic = new Fortmatic(apiKey, CHAIN_ID_NETWORK_ARGUMENT[chainId]);
                _context.next = 11;
                break;

              case 10:
                throw new Error("Unsupported network ID: ".concat(chainId));

              case 11:
                provider = this.fortmatic.getProvider();
                pollForOverlayReady = new Promise(function (resolve) {
                  var interval = setInterval(function () {
                    if (provider.overlayReady) {
                      clearInterval(interval);

                      _this.emit(OVERLAY_READY);

                      resolve();
                    }
                  }, 200);
                });
                _context.next = 15;
                return Promise.all([provider.enable().then(function (accounts) {
                  return accounts[0];
                }), pollForOverlayReady]);

              case 15:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
                account = _yield$Promise$all2[0];
                return _context.abrupt("return", {
                  provider: this.fortmatic.getProvider(),
                  chainId: this.chainId,
                  account: account
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activate() {
        return _activate.apply(this, arguments);
      }

      return activate;
    }()
  }]);

  return FortmaticConnector;
}(fortmaticConnector.FortmaticConnector);

var isProduction = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ''));
}

var RequestError = /*#__PURE__*/function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(message, code, data) {
    _classCallCheck(this, RequestError);

    return _super.call(this, message);
  }

  return RequestError;
}( /*#__PURE__*/_wrapNativeSuper$1(Error));

var MiniRpcProvider = function MiniRpcProvider(chainId, url, batchWaitTimeMs) {
  var _this = this;

  _classCallCheck(this, MiniRpcProvider);

  _defineProperty(this, "isMetaMask", false);

  _defineProperty(this, "chainId", void 0);

  _defineProperty(this, "url", void 0);

  _defineProperty(this, "host", void 0);

  _defineProperty(this, "path", void 0);

  _defineProperty(this, "batchWaitTimeMs", void 0);

  _defineProperty(this, "nextId", 1);

  _defineProperty(this, "batchTimeoutId", null);

  _defineProperty(this, "batch", []);

  _defineProperty(this, "clearBatch", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var batch, response, json, byKey, _iterator, _step, _result, _byKey$_result$id, resolve, reject, method, _result$error, _result$error2, _result$error3;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.debug('Clearing batch', _this.batch);
            batch = _this.batch;
            _this.batch = [];
            _this.batchTimeoutId = null;
            _context.prev = 4;
            _context.next = 7;
            return fetch(_this.url, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                accept: 'application/json'
              },
              body: JSON.stringify(batch.map(function (item) {
                return item.request;
              }))
            });

          case 7:
            response = _context.sent;
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            batch.forEach(function (_ref2) {
              var reject = _ref2.reject;
              return reject(new Error('Failed to send batch call'));
            });
            return _context.abrupt("return");

          case 14:
            if (response.ok) {
              _context.next = 17;
              break;
            }

            batch.forEach(function (_ref3) {
              var reject = _ref3.reject;
              return reject(new RequestError("".concat(response.status, ": ").concat(response.statusText), -32000));
            });
            return _context.abrupt("return");

          case 17:
            _context.prev = 17;
            _context.next = 20;
            return response.json();

          case 20:
            json = _context.sent;
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](17);
            batch.forEach(function (_ref4) {
              var reject = _ref4.reject;
              return reject(new Error('Failed to parse JSON response'));
            });
            return _context.abrupt("return");

          case 27:
            byKey = batch.reduce(function (memo, current) {
              memo[current.request.id] = current;
              return memo;
            }, {});
            _iterator = _createForOfIteratorHelper(json);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _result = _step.value;
                _byKey$_result$id = byKey[_result.id], resolve = _byKey$_result$id.resolve, reject = _byKey$_result$id.reject, method = _byKey$_result$id.request.method;

                if (resolve && reject) {
                  if ('error' in _result) {
                    reject(new RequestError(_result === null || _result === void 0 ? void 0 : (_result$error = _result.error) === null || _result$error === void 0 ? void 0 : _result$error.message, _result === null || _result === void 0 ? void 0 : (_result$error2 = _result.error) === null || _result$error2 === void 0 ? void 0 : _result$error2.code, _result === null || _result === void 0 ? void 0 : (_result$error3 = _result.error) === null || _result$error3 === void 0 ? void 0 : _result$error3.data));
                  } else if ('result' in _result) {
                    resolve(_result.result);
                  } else {
                    reject(new RequestError("Received unexpected JSON-RPC response to ".concat(method, " request."), -32000, _result));
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10], [17, 23]]);
  })));

  _defineProperty(this, "sendAsync", function (request, callback) {
    _this.request(request.method, request.params).then(function (result) {
      return callback(null, {
        jsonrpc: '2.0',
        id: request.id,
        result: result
      });
    })["catch"](function (error) {
      return callback(error, null);
    });
  });

  _defineProperty(this, "request", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(method, params) {
      var _this$batchTimeoutId;

      var promise;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof method !== 'string')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", _this.request(method.method, method.params));

            case 2:
              if (!(method === 'eth_chainId')) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", "0x".concat(_this.chainId.toString(16)));

            case 4:
              promise = new Promise(function (resolve, reject) {
                _this.batch.push({
                  request: {
                    jsonrpc: '2.0',
                    id: _this.nextId++,
                    method: method,
                    params: params
                  },
                  resolve: resolve,
                  reject: reject
                });
              });
              _this.batchTimeoutId = (_this$batchTimeoutId = _this.batchTimeoutId) !== null && _this$batchTimeoutId !== void 0 ? _this$batchTimeoutId : setTimeout(_this.clearBatch, _this.batchWaitTimeMs);
              return _context2.abrupt("return", promise);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }());

  this.chainId = chainId;
  this.url = url;
  var parsed = new URL(url);
  this.host = parsed.host;
  this.path = parsed.pathname; // how long to wait to batch calls

  this.batchWaitTimeMs = batchWaitTimeMs !== null && batchWaitTimeMs !== void 0 ? batchWaitTimeMs : 50;
};

var NetworkConnector = /*#__PURE__*/function (_AbstractConnector) {
  _inherits(NetworkConnector, _AbstractConnector);

  var _super2 = _createSuper(NetworkConnector);

  function NetworkConnector(_ref6) {
    var _this2;

    var urls = _ref6.urls,
        defaultChainId = _ref6.defaultChainId;

    _classCallCheck(this, NetworkConnector);

    invariant(defaultChainId || Object.keys(urls).length === 1, 'defaultChainId is a required argument with >1 url');
    _this2 = _super2.call(this, {
      supportedChainIds: Object.keys(urls).map(function (k) {
        return Number(k);
      })
    });

    _defineProperty(_assertThisInitialized$2(_this2), "providers", void 0);

    _defineProperty(_assertThisInitialized$2(_this2), "currentChainId", void 0);

    _this2.currentChainId = defaultChainId || Number(Object.keys(urls)[0]);
    _this2.providers = Object.keys(urls).reduce(function (accumulator, chainId) {
      accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
      return accumulator;
    }, {});
    return _this2;
  }

  _createClass$1(NetworkConnector, [{
    key: "provider",
    get: function get() {
      return this.providers[this.currentChainId];
    }
  }, {
    key: "activate",
    value: function () {
      var _activate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", {
                  provider: this.providers[this.currentChainId],
                  chainId: this.currentChainId,
                  account: null
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function activate() {
        return _activate.apply(this, arguments);
      }

      return activate;
    }()
  }, {
    key: "getProvider",
    value: function () {
      var _getProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.providers[this.currentChainId]);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getProvider() {
        return _getProvider.apply(this, arguments);
      }

      return getProvider;
    }()
  }, {
    key: "getChainId",
    value: function () {
      var _getChainId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.currentChainId);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getChainId() {
        return _getChainId.apply(this, arguments);
      }

      return getChainId;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", null);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getAccount() {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "deactivate",
    value: function deactivate() {
      return;
    }
  }]);

  return NetworkConnector;
}(abstractConnector.AbstractConnector);

var _process$env$REACT_AP;

var NETWORK_URL = process.env.REACT_APP_NETWORK_URL || "https://mainnet.infura.io/v3/4bf032f2d38a4ed6bb975b80d6340847";
var FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY;
var PORTIS_ID = process.env.REACT_APP_PORTIS_ID;
var NETWORK_CHAIN_ID = parseInt((_process$env$REACT_AP = process.env.REACT_APP_CHAIN_ID) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : '1'); // TODO this keep throwing errors

if (process.env && typeof NETWORK_URL === 'undefined') {
  throw new Error("REACT_APP_NETWORK_URL must be a defined environment variable");
}

var network = new NetworkConnector({
  urls: _defineProperty({}, NETWORK_CHAIN_ID, NETWORK_URL)
});
var injected = new injectedConnector.InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
}); // mainnet only

var walletconnect = new walletconnectConnector.WalletConnectConnector({
  rpc: {
    1: NETWORK_URL
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000
}); // mainnet only

var fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY !== null && FORMATIC_KEY !== void 0 ? FORMATIC_KEY : '',
  chainId: 1
}); // mainnet only

var portis = new portisConnector.PortisConnector({
  dAppId: PORTIS_ID !== null && PORTIS_ID !== void 0 ? PORTIS_ID : '',
  networks: [1]
}); // mainnet only

var walletlink = new walletlinkConnector.WalletLinkConnector({
  url: NETWORK_URL,
  appName: 'Uniswap',
  appLogoUrl: 'https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg'
});

var NetworkContextName = 'NETWORK';
var SUPPORTED_WALLETS = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
};

function useActiveWeb3React() {
  var context = core.useWeb3React();
  var contextNetwork = core.useWeb3React(NetworkContextName);
  return context.active ? context : contextNetwork;
}
function useEagerConnect() {
  var _useWeb3ReactCore = core.useWeb3React(),
      activate = _useWeb3ReactCore.activate,
      active = _useWeb3ReactCore.active; // specifically using useWeb3ReactCore because of what this hook does


  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      tried = _useState2[0],
      setTried = _useState2[1];

  React$1.useEffect(function () {
    injected.isAuthorized().then(function (isAuthorized) {
      if (isAuthorized) {
        activate(injected, undefined, true)["catch"](function () {
          setTried(true);
        });
      } else {
        if (reactDeviceDetect.isMobile && window.ethereum) {
          activate(injected, undefined, true)["catch"](function () {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  React$1.useEffect(function () {
    if (active) {
      setTried(true);
    }
  }, [active]);
  return tried;
}
/**
 * Use for network and injected - logs user in
 * and out after checking what network theyre on
 */

function useInactiveListener() {
  var suppress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useWeb3ReactCore2 = core.useWeb3React(),
      active = _useWeb3ReactCore2.active,
      error = _useWeb3ReactCore2.error,
      activate = _useWeb3ReactCore2.activate; // specifically using useWeb3React because of what this hook does


  React$1.useEffect(function () {
    var _window = window,
        ethereum = _window.ethereum;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      var handleChainChanged = function handleChainChanged() {
        // eat errors
        activate(injected, undefined, true)["catch"](function (error) {
          console.error('Failed to activate after chain changed', error);
        });
      };

      var handleAccountsChanged = function handleAccountsChanged(accounts) {
        if (accounts.length > 0) {
          // eat errors
          activate(injected, undefined, true)["catch"](function (error) {
            console.error('Failed to activate after accounts changed', error);
          });
        }
      };

      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      return function () {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}

var _templateObject$e;
var rotate = styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var StyledSVG = styled__default['default'].svg(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), rotate, function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var stroke = _ref3.stroke,
      theme = _ref3.theme;
  return stroke !== null && stroke !== void 0 ? stroke : theme.primary1;
});
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */

function Loader(_ref4) {
  var _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? '16px' : _ref4$size,
      stroke = _ref4.stroke,
      rest = _objectWithoutProperties(_ref4, ["size", "stroke"]);

  return /*#__PURE__*/React__default['default'].createElement(StyledSVG, _extends$2({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    size: size,
    stroke: stroke
  }, rest), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var _templateObject$d, _templateObject2$c;
var MessageWrapper = styled__default['default'].div(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"])));
var Message = styled__default['default'].h2(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.secondary1;
});
function Web3ReactManager(_ref2) {
  var children = _ref2.children;

  var _useWeb3React = core.useWeb3React(),
      active = _useWeb3React.active;

  var _useWeb3React2 = core.useWeb3React(NetworkContextName),
      networkActive = _useWeb3React2.active,
      networkError = _useWeb3React2.error,
      activateNetwork = _useWeb3React2.activate; // try to eagerly connect to an injected provider, if it exists and has granted access already


  var triedEager = useEagerConnect(); // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd

  React$1.useEffect(function () {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network);
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active]); // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists

  useInactiveListener(!triedEager); // handle delayed loader state

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  React$1.useEffect(function () {
    var timeout = setTimeout(function () {
      setShowLoader(true);
    }, 600);
    return function () {
      clearTimeout(timeout);
    };
  }, []); // on page load, do nothing until we've tried to connect to the injected connector

  if (!triedEager) {
    return null;
  } // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error


  if (!active && networkError) {
    return /*#__PURE__*/React__default['default'].createElement(MessageWrapper, null, /*#__PURE__*/React__default['default'].createElement(Message, null, 'unknownError'));
  } // if neither context is active, spin


  if (!active && !networkActive) {
    return showLoader ? /*#__PURE__*/React__default['default'].createElement(MessageWrapper, null, /*#__PURE__*/React__default['default'].createElement(Loader, null)) : null;
  }

  return children;
}

/**
 * Returns whether a transaction happened in the last day (86400 seconds * 1000 milliseconds / second)
 * @param tx to check for recency
 */
function isTransactionRecent(tx) {
  return new Date().getTime() - tx.addedTime < 86400000;
} // returns all the transactions for the current chain

function useAllTransactions() {
  var _state$chainId;

  var _useActiveWeb3React = useActiveWeb3React(),
      chainId = _useActiveWeb3React.chainId; // TODO 


  var state = {
    chainId: null
  }; // @ts-ignore

  return chainId ? (_state$chainId = state[chainId]) !== null && _state$chainId !== void 0 ? _state$chainId : {} : {};
}

const version$1 = "logger/5.0.10";

let _permanentCensorErrors = false;
let _censorErrors = false;
const LogLevels = {
  debug: 1,
  "default": 2,
  info: 2,
  warning: 3,
  error: 4,
  off: 5
};
let _logLevel = LogLevels["default"];
let _globalLogger = null;

function _checkNormalize() {
  try {
    const missing = []; // Make sure all forms of normalization are supported

    ["NFD", "NFC", "NFKD", "NFKC"].forEach(form => {
      try {
        if ("test".normalize(form) !== "test") {
          throw new Error("bad normalize");
        }

        ;
      } catch (error) {
        missing.push(form);
      }
    });

    if (missing.length) {
      throw new Error("missing " + missing.join(", "));
    }

    if (String.fromCharCode(0xe9).normalize("NFD") !== String.fromCharCode(0x65, 0x0301)) {
      throw new Error("broken implementation");
    }
  } catch (error) {
    return error.message;
  }

  return null;
}

const _normalizeError = _checkNormalize();

var LogLevel;

(function (LogLevel) {
  LogLevel["DEBUG"] = "DEBUG";
  LogLevel["INFO"] = "INFO";
  LogLevel["WARNING"] = "WARNING";
  LogLevel["ERROR"] = "ERROR";
  LogLevel["OFF"] = "OFF";
})(LogLevel || (LogLevel = {}));

var ErrorCode;

(function (ErrorCode) {
  ///////////////////
  // Generic Errors
  // Unknown Error
  ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"; // Not Implemented

  ErrorCode["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"; // Unsupported Operation
  //   - operation

  ErrorCode["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"; // Network Error (i.e. Ethereum Network, such as an invalid chain ID)
  //   - event ("noNetwork" is not re-thrown in provider.ready; otherwise thrown)

  ErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR"; // Some sort of bad response from the server

  ErrorCode["SERVER_ERROR"] = "SERVER_ERROR"; // Timeout

  ErrorCode["TIMEOUT"] = "TIMEOUT"; ///////////////////
  // Operational  Errors
  // Buffer Overrun

  ErrorCode["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"; // Numeric Fault
  //   - operation: the operation being executed
  //   - fault: the reason this faulted

  ErrorCode["NUMERIC_FAULT"] = "NUMERIC_FAULT"; ///////////////////
  // Argument Errors
  // Missing new operator to an object
  //  - name: The name of the class

  ErrorCode["MISSING_NEW"] = "MISSING_NEW"; // Invalid argument (e.g. value is incompatible with type) to a function:
  //   - argument: The argument name that was invalid
  //   - value: The value of the argument

  ErrorCode["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"; // Missing argument to a function:
  //   - count: The number of arguments received
  //   - expectedCount: The number of arguments expected

  ErrorCode["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"; // Too many arguments
  //   - count: The number of arguments received
  //   - expectedCount: The number of arguments expected

  ErrorCode["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"; ///////////////////
  // Blockchain Errors
  // Call exception
  //  - transaction: the transaction
  //  - address?: the contract address
  //  - args?: The arguments passed into the function
  //  - method?: The Solidity method signature
  //  - errorSignature?: The EIP848 error signature
  //  - errorArgs?: The EIP848 error parameters
  //  - reason: The reason (only for EIP848 "Error(string)")

  ErrorCode["CALL_EXCEPTION"] = "CALL_EXCEPTION"; // Insufficien funds (< value + gasLimit * gasPrice)
  //   - transaction: the transaction attempted

  ErrorCode["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"; // Nonce has already been used
  //   - transaction: the transaction attempted

  ErrorCode["NONCE_EXPIRED"] = "NONCE_EXPIRED"; // The replacement fee for the transaction is too low
  //   - transaction: the transaction attempted

  ErrorCode["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"; // The gas limit could not be estimated
  //   - transaction: the transaction passed to estimateGas

  ErrorCode["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT";
})(ErrorCode || (ErrorCode = {}));
class Logger {
  constructor(version) {
    Object.defineProperty(this, "version", {
      enumerable: true,
      value: version,
      writable: false
    });
  }

  _log(logLevel, args) {
    const level = logLevel.toLowerCase();

    if (LogLevels[level] == null) {
      this.throwArgumentError("invalid log level name", "logLevel", logLevel);
    }

    if (_logLevel > LogLevels[level]) {
      return;
    }

    console.log.apply(console, args);
  }

  debug(...args) {
    this._log(Logger.levels.DEBUG, args);
  }

  info(...args) {
    this._log(Logger.levels.INFO, args);
  }

  warn(...args) {
    this._log(Logger.levels.WARNING, args);
  }

  makeError(message, code, params) {
    // Errors are being censored
    if (_censorErrors) {
      return this.makeError("censored error", code, {});
    }

    if (!code) {
      code = Logger.errors.UNKNOWN_ERROR;
    }

    if (!params) {
      params = {};
    }

    const messageDetails = [];
    Object.keys(params).forEach(key => {
      try {
        messageDetails.push(key + "=" + JSON.stringify(params[key]));
      } catch (error) {
        messageDetails.push(key + "=" + JSON.stringify(params[key].toString()));
      }
    });
    messageDetails.push(`code=${code}`);
    messageDetails.push(`version=${this.version}`);
    const reason = message;

    if (messageDetails.length) {
      message += " (" + messageDetails.join(", ") + ")";
    } // @TODO: Any??


    const error = new Error(message);
    error.reason = reason;
    error.code = code;
    Object.keys(params).forEach(function (key) {
      error[key] = params[key];
    });
    return error;
  }

  throwError(message, code, params) {
    throw this.makeError(message, code, params);
  }

  throwArgumentError(message, name, value) {
    return this.throwError(message, Logger.errors.INVALID_ARGUMENT, {
      argument: name,
      value: value
    });
  }

  assert(condition, message, code, params) {
    if (!!condition) {
      return;
    }

    this.throwError(message, code, params);
  }

  assertArgument(condition, message, name, value) {
    if (!!condition) {
      return;
    }

    this.throwArgumentError(message, name, value);
  }

  checkNormalize(message) {

    if (_normalizeError) {
      this.throwError("platform missing String.prototype.normalize", Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "String.prototype.normalize",
        form: _normalizeError
      });
    }
  }

  checkSafeUint53(value, message) {
    if (typeof value !== "number") {
      return;
    }

    if (message == null) {
      message = "value not safe";
    }

    if (value < 0 || value >= 0x1fffffffffffff) {
      this.throwError(message, Logger.errors.NUMERIC_FAULT, {
        operation: "checkSafeInteger",
        fault: "out-of-safe-range",
        value: value
      });
    }

    if (value % 1) {
      this.throwError(message, Logger.errors.NUMERIC_FAULT, {
        operation: "checkSafeInteger",
        fault: "non-integer",
        value: value
      });
    }
  }

  checkArgumentCount(count, expectedCount, message) {
    if (message) {
      message = ": " + message;
    } else {
      message = "";
    }

    if (count < expectedCount) {
      this.throwError("missing argument" + message, Logger.errors.MISSING_ARGUMENT, {
        count: count,
        expectedCount: expectedCount
      });
    }

    if (count > expectedCount) {
      this.throwError("too many arguments" + message, Logger.errors.UNEXPECTED_ARGUMENT, {
        count: count,
        expectedCount: expectedCount
      });
    }
  }

  checkNew(target, kind) {
    if (target === Object || target == null) {
      this.throwError("missing new", Logger.errors.MISSING_NEW, {
        name: kind.name
      });
    }
  }

  checkAbstract(target, kind) {
    if (target === kind) {
      this.throwError("cannot instantiate abstract class " + JSON.stringify(kind.name) + " directly; use a sub-class", Logger.errors.UNSUPPORTED_OPERATION, {
        name: target.name,
        operation: "new"
      });
    } else if (target === Object || target == null) {
      this.throwError("missing new", Logger.errors.MISSING_NEW, {
        name: kind.name
      });
    }
  }

  static globalLogger() {
    if (!_globalLogger) {
      _globalLogger = new Logger(version$1);
    }

    return _globalLogger;
  }

  static setCensorship(censorship, permanent) {
    if (!censorship && permanent) {
      this.globalLogger().throwError("cannot permanently disable censorship", Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }

    if (_permanentCensorErrors) {
      if (!censorship) {
        return;
      }

      this.globalLogger().throwError("error censorship permanent", Logger.errors.UNSUPPORTED_OPERATION, {
        operation: "setCensorship"
      });
    }

    _censorErrors = !!censorship;
    _permanentCensorErrors = !!permanent;
  }

  static setLogLevel(logLevel) {
    const level = LogLevels[logLevel.toLowerCase()];

    if (level == null) {
      Logger.globalLogger().warn("invalid log level - " + logLevel);
      return;
    }

    _logLevel = level;
  }

  static from(version) {
    return new Logger(version);
  }

}
Logger.errors = ErrorCode;
Logger.levels = LogLevel;

const version = "address/5.0.11";

const logger = new Logger(version);

function getChecksumAddress(address) {
  if (!bytes.isHexString(address, 20)) {
    logger.throwArgumentError("invalid address", "address", address);
  }

  address = address.toLowerCase();
  const chars = address.substring(2).split("");
  const expanded = new Uint8Array(40);

  for (let i = 0; i < 40; i++) {
    expanded[i] = chars[i].charCodeAt(0);
  }

  const hashed = bytes.arrayify(keccak256.keccak256(expanded));

  for (let i = 0; i < 40; i += 2) {
    if (hashed[i >> 1] >> 4 >= 8) {
      chars[i] = chars[i].toUpperCase();
    }

    if ((hashed[i >> 1] & 0x0f) >= 8) {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }

  return "0x" + chars.join("");
} // Shims for environments that are missing some required constants and functions


const MAX_SAFE_INTEGER = 0x1fffffffffffff;

function log10(x) {
  if (Math.log10) {
    return Math.log10(x);
  }

  return Math.log(x) / Math.LN10;
} // See: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// Create lookup table


const ibanLookup = {};

for (let i = 0; i < 10; i++) {
  ibanLookup[String(i)] = String(i);
}

for (let i = 0; i < 26; i++) {
  ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
} // How many decimal digits can we process? (for 64-bit float, this is 15)


const safeDigits = Math.floor(log10(MAX_SAFE_INTEGER));

function ibanChecksum(address) {
  address = address.toUpperCase();
  address = address.substring(4) + address.substring(0, 2) + "00";
  let expanded = address.split("").map(c => {
    return ibanLookup[c];
  }).join(""); // Javascript can handle integers safely up to 15 (decimal) digits

  while (expanded.length >= safeDigits) {
    let block = expanded.substring(0, safeDigits);
    expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
  }

  let checksum = String(98 - parseInt(expanded, 10) % 97);

  while (checksum.length < 2) {
    checksum = "0" + checksum;
  }

  return checksum;
}
function getAddress(address) {
  let result = null;

  if (typeof address !== "string") {
    logger.throwArgumentError("invalid address", "address", address);
  }

  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    // Missing the 0x prefix
    if (address.substring(0, 2) !== "0x") {
      address = "0x" + address;
    }

    result = getChecksumAddress(address); // It is a checksummed address with a bad checksum

    if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && result !== address) {
      logger.throwArgumentError("bad address checksum", "address", address);
    } // Maybe ICAP? (we only support direct mode)

  } else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    // It is an ICAP address with a bad checksum
    if (address.substring(2, 4) !== ibanChecksum(address)) {
      logger.throwArgumentError("bad icap checksum", "address", address);
    }

    result = bignumber._base36To16(address.substring(4));

    while (result.length < 40) {
      result = "0" + result;
    }

    result = getChecksumAddress("0x" + result);
  } else {
    logger.throwArgumentError("invalid address", "address", address);
  }

  return result;
}

// returns the checksummed address if the address is valid, otherwise returns false
function isAddress(value) {
  try {
    return getAddress(value);
  } catch (_unused) {
    return false;
  }
}
var ETHERSCAN_PREFIXES = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.'
}; // shorten the checksummed version of the input address to have 0x + 4 characters at start and end

function shortenAddress(address) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var parsed = isAddress(address);

  if (!parsed) {
    throw Error("Invalid 'address' parameter '".concat(address, "'."));
  }

  return "".concat(parsed.substring(0, chars + 2), "...").concat(parsed.substring(42 - chars));
}
function getEtherscanLink(chainId, data, type) {
  var prefix = "https://".concat(ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1], "etherscan.io");

  switch (type) {
    case 'transaction':
      {
        return "".concat(prefix, "/tx/").concat(data);
      }

    case 'token':
      {
        return "".concat(prefix, "/token/").concat(data);
      }

    case 'block':
      {
        return "".concat(prefix, "/block/").concat(data);
      }

    case 'address':
    default:
      {
        return "".concat(prefix, "/address/").concat(data);
      }
  }
}

var _templateObject$c, _templateObject2$b, _templateObject3$a, _templateObject4$a, _templateObject5$8;
var Row = styled__default['default'](styledComponents.Box)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), function (_ref) {
  var width = _ref.width;
  return width !== null && width !== void 0 ? width : '100%';
}, function (_ref2) {
  var align = _ref2.align;
  return align !== null && align !== void 0 ? align : 'center';
}, function (_ref3) {
  var justify = _ref3.justify;
  return justify !== null && justify !== void 0 ? justify : 'flex-start';
}, function (_ref4) {
  var padding = _ref4.padding;
  return padding;
}, function (_ref5) {
  var border = _ref5.border;
  return border;
}, function (_ref6) {
  var borderRadius = _ref6.borderRadius;
  return borderRadius;
});
var RowBetween = styled__default['default'](Row)(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["\n  justify-content: space-between;\n"])));
styled__default['default'].div(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n"])));
var AutoRow = styled__default['default'](Row)(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"])), function (_ref7) {
  var gap = _ref7.gap;
  return gap && "-".concat(gap);
}, function (_ref8) {
  var justify = _ref8.justify;
  return justify && justify;
}, function (_ref9) {
  var gap = _ref9.gap;
  return gap;
});
var RowFixed = styled__default['default'](Row)(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["\n  width: fit-content;\n  margin: ", ";\n"])), function (_ref10) {
  var gap = _ref10.gap;
  return gap && "-".concat(gap);
});

var _templateObject$b, _templateObject2$a, _templateObject3$9, _templateObject4$9, _templateObject5$7, _templateObject6$6, _templateObject7$5, _templateObject8$4, _templateObject9$4, _templateObject10$4, _templateObject11$3, _templateObject12$3;
var Base = styled__default['default'](styledComponents.Button)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  padding: ", ";\n  width: ", ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ", ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n"])), function (_ref) {
  var padding = _ref.padding;
  return padding ? padding : '18px';
}, function (_ref2) {
  var width = _ref2.width;
  return width ? width : '100%';
}, function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius && borderRadius;
});
var ButtonPrimary = styled__default['default'](Base)(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ", ";\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref6) {
  var theme = _ref6.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref7) {
  var theme = _ref7.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref8) {
  var theme = _ref8.theme;
  return curriedDarken(0.1, theme.primary1);
}, function (_ref9) {
  var theme = _ref9.theme;
  return curriedDarken(0.1, theme.primary1);
}, function (_ref10) {
  var theme = _ref10.theme,
      altDisabledStyle = _ref10.altDisabledStyle,
      disabled = _ref10.disabled;
  return altDisabledStyle ? disabled ? theme.bg3 : theme.primary1 : theme.bg3;
}, function (_ref11) {
  var theme = _ref11.theme,
      altDisabledStyle = _ref11.altDisabledStyle,
      disabled = _ref11.disabled;
  return altDisabledStyle ? disabled ? theme.text3 : 'white' : theme.text3;
}, function (_ref12) {
  var altDisabledStyle = _ref12.altDisabledStyle;
  return altDisabledStyle ? '0.5' : '1';
});
styled__default['default'](Base)(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ", ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.primary5;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.primaryText1;
}, function (_ref15) {
  var theme = _ref15.theme,
      disabled = _ref15.disabled;
  return !disabled && curriedDarken(0.03, theme.primary5);
}, function (_ref16) {
  var theme = _ref16.theme,
      disabled = _ref16.disabled;
  return !disabled && curriedDarken(0.03, theme.primary5);
}, function (_ref17) {
  var theme = _ref17.theme,
      disabled = _ref17.disabled;
  return !disabled && curriedDarken(0.03, theme.primary5);
}, function (_ref18) {
  var theme = _ref18.theme,
      disabled = _ref18.disabled;
  return !disabled && curriedDarken(0.05, theme.primary5);
}, function (_ref19) {
  var theme = _ref19.theme,
      disabled = _ref19.disabled;
  return !disabled && curriedDarken(0.05, theme.primary5);
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.primary5;
});
styled__default['default'](Base)(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", ";\n  }\n"])), function (_ref21) {
  var theme = _ref21.theme;
  return theme.bg3;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.text2;
}, function (_ref23) {
  var theme = _ref23.theme,
      disabled = _ref23.disabled;
  return !disabled && curriedDarken(0.05, theme.bg4);
}, function (_ref24) {
  var theme = _ref24.theme,
      disabled = _ref24.disabled;
  return !disabled && curriedDarken(0.05, theme.bg4);
}, function (_ref25) {
  var theme = _ref25.theme,
      disabled = _ref25.disabled;
  return !disabled && curriedDarken(0.1, theme.bg4);
});
var ButtonSecondary = styled__default['default'](Base)(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: transparent;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:hover {\n    border: 1px solid ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n  a:hover {\n    text-decoration: none;\n  }\n"])), function (_ref26) {
  var theme = _ref26.theme;
  return theme.primary4;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.primary1;
}, function (_ref28) {
  var padding = _ref28.padding;
  return padding ? padding : '10px';
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.primary4;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.primary3;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.primary3;
}, function (_ref32) {
  var theme = _ref32.theme;
  return theme.primary4;
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.primary3;
});
styled__default['default'](Base)(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref34) {
  var theme = _ref34.theme;
  return theme.primary1;
}, function (_ref35) {
  var theme = _ref35.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref36) {
  var theme = _ref36.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref37) {
  var theme = _ref37.theme;
  return curriedDarken(0.05, theme.primary1);
}, function (_ref38) {
  var theme = _ref38.theme;
  return curriedDarken(0.1, theme.primary1);
}, function (_ref39) {
  var theme = _ref39.theme;
  return curriedDarken(0.1, theme.primary1);
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.primary1;
});
styled__default['default'](ButtonPrimary)(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["\n  color: white;\n  padding: 4px 8px;\n  height: 36px;\n  font-weight: 500;\n  background-color: ", ";\n  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  white-space: no-wrap;\n  :hover {\n    opacity: 0.8;\n  }\n  :active {\n    opacity: 0.9;\n  }\n"])), function (_ref41) {
  var theme = _ref41.theme;
  return theme.bg3;
});
styled__default['default'](Base)(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background-color: transparent;\n  color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref42) {
  var theme = _ref42.theme;
  return theme.bg2;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.text1;
}, function (_ref44) {
  var theme = _ref44.theme;
  return theme.bg4;
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.bg4;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.bg4;
});
styled__default['default'](Base)(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    text-decoration: underline;\n  }\n  &:hover {\n    text-decoration: none;\n  }\n  &:active {\n    text-decoration: none;\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref47) {
  var theme = _ref47.theme;
  return theme.primary1;
});
styled__default['default'](Base)(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["\n  border: 1px solid #edeef2;\n  background-color: ", ";\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref48) {
  var theme = _ref48.theme;
  return theme.bg1;
}, curriedDarken(0.05, '#edeef2'), curriedDarken(0.1, '#edeef2'), curriedDarken(0.1, '#edeef2'));
styled__default['default'](Base)(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"])), function (_ref49) {
  var theme = _ref49.theme;
  return curriedLighten(0.5, theme.green1);
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.green1;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.green1;
});
styled__default['default'](Base)(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"])), function (_ref52) {
  var theme = _ref52.theme;
  return theme.red1;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.red1;
}, function (_ref54) {
  var theme = _ref54.theme;
  return curriedDarken(0.05, theme.red1);
}, function (_ref55) {
  var theme = _ref55.theme;
  return curriedDarken(0.05, theme.red1);
}, function (_ref56) {
  var theme = _ref56.theme;
  return curriedDarken(0.05, theme.red1);
}, function (_ref57) {
  var theme = _ref57.theme;
  return curriedDarken(0.1, theme.red1);
}, function (_ref58) {
  var theme = _ref58.theme;
  return curriedDarken(0.1, theme.red1);
}, function (_ref59) {
  var theme = _ref59.theme;
  return theme.red1;
}, function (_ref60) {
  var theme = _ref60.theme;
  return theme.red1;
});

var _templateObject$a;
var StyledIdenticonContainer = styled__default['default'].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.bg4;
});
function Identicon() {
  var _useActiveWeb3React = useActiveWeb3React(),
      account = _useActiveWeb3React.account;

  var seed = account ? parseInt(account.slice(2, 10), 16).toString() : ""; // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451

  return /*#__PURE__*/React__default['default'].createElement(StyledIdenticonContainer, null, /*#__PURE__*/React__default['default'].createElement(jazziconReact.Jazzicon, {
    address: seed
  }));
}

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3e%3cline x1='18' y1='6' x2='6' y2='18'%3e%3c/line%3e%3cline x1='6' y1='6' x2='18' y2='18'%3e%3c/line%3e%3c/svg%3e";

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = React$1.useRef(); // Store current value in ref

  React$1.useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

function useCopyClipboard() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCopied = _useState2[0],
      setIsCopied = _useState2[1];

  var staticCopy = React$1.useCallback(function (text) {
    var didCopy = copy__default['default'](text);
    setIsCopied(didCopy);
  }, []);
  React$1.useEffect(function () {
    if (isCopied) {
      var hide = setTimeout(function () {
        setIsCopied(false);
      }, timeout);
      return function () {
        clearTimeout(hide);
      };
    }

    return undefined;
  }, [isCopied, setIsCopied, timeout]);
  return [isCopied, staticCopy];
}

var _templateObject$9, _templateObject2$9;
var CopyIcon = styled__default['default'](LinkStyledButton)(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  color: ", ";\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n  font-size: 0.825rem;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.text3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.text2;
});
var TransactionStatusText$1 = styled__default['default'].span(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n  margin-left: 0.25rem;\n  font-size: 0.825rem;\n  ", ";\n  align-items: center;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.flexRowNoWrap;
});
function Copy(props) {
  var _useCopyClipboard = useCopyClipboard(),
      _useCopyClipboard2 = _slicedToArray(_useCopyClipboard, 2),
      isCopied = _useCopyClipboard2[0],
      setCopied = _useCopyClipboard2[1];

  return /*#__PURE__*/React__default['default'].createElement(CopyIcon, {
    onClick: function onClick() {
      return setCopied(props.toCopy);
    }
  }, isCopied ? /*#__PURE__*/React__default['default'].createElement(TransactionStatusText$1, null, /*#__PURE__*/React__default['default'].createElement(reactFeather.CheckCircle, {
    size: '16'
  }), /*#__PURE__*/React__default['default'].createElement(TransactionStatusText$1, null, "Copied")) : /*#__PURE__*/React__default['default'].createElement(TransactionStatusText$1, null, /*#__PURE__*/React__default['default'].createElement(reactFeather.Copy, {
    size: '16'
  })), isCopied ? '' : props.children);
}

var _templateObject$8, _templateObject2$8, _templateObject3$8, _templateObject4$8;
var TransactionWrapper = styled__default['default'].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral([""])));
var TransactionStatusText = styled__default['default'].div(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n  :hover {\n    text-decoration: underline;\n  }\n"])));
var TransactionState = styled__default['default'](ExternalLink)(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.primary1;
});
var IconWrapper$3 = styled__default['default'].div(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref2) {
  var pending = _ref2.pending,
      success = _ref2.success,
      theme = _ref2.theme;
  return pending ? theme.primary1 : success ? theme.green1 : theme.red1;
});
function Transaction(_ref3) {
  var _tx$receipt, _tx$receipt2;

  var hash = _ref3.hash;

  var _useActiveWeb3React = useActiveWeb3React(),
      chainId = _useActiveWeb3React.chainId;

  var allTransactions = useAllTransactions();
  var tx = allTransactions === null || allTransactions === void 0 ? void 0 : allTransactions[hash];
  var summary = tx === null || tx === void 0 ? void 0 : tx.summary;
  var pending = !(tx !== null && tx !== void 0 && tx.receipt);
  var success = !pending && tx && (((_tx$receipt = tx.receipt) === null || _tx$receipt === void 0 ? void 0 : _tx$receipt.status) === 1 || typeof ((_tx$receipt2 = tx.receipt) === null || _tx$receipt2 === void 0 ? void 0 : _tx$receipt2.status) === 'undefined');
  if (!chainId) return null;
  return /*#__PURE__*/React__default['default'].createElement(TransactionWrapper, null, /*#__PURE__*/React__default['default'].createElement(TransactionState, {
    href: getEtherscanLink(chainId, hash, 'transaction'),
    pending: pending,
    success: success
  }, /*#__PURE__*/React__default['default'].createElement(RowFixed, null, /*#__PURE__*/React__default['default'].createElement(TransactionStatusText, null, summary !== null && summary !== void 0 ? summary : hash, " \u2197")), /*#__PURE__*/React__default['default'].createElement(IconWrapper$3, {
    pending: pending,
    success: success
  }, pending ? /*#__PURE__*/React__default['default'].createElement(Loader, null) : success ? /*#__PURE__*/React__default['default'].createElement(reactFeather.CheckCircle, {
    size: "16"
  }) : /*#__PURE__*/React__default['default'].createElement(reactFeather.Triangle, {
    size: "16"
  }))));
}

var _templateObject$7, _templateObject2$7, _templateObject3$7, _templateObject4$7, _templateObject5$6, _templateObject6$5, _templateObject7$4, _templateObject8$3, _templateObject9$3, _templateObject10$3, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$1, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
var HeaderRow$1 = styled__default['default'].div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref2) {
    var theme = _ref2.theme;
    return theme.primary1;
  } : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaWidth.upToMedium(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n    padding: 1rem;\n  "])));
});
var UpperSection$1 = styled__default['default'].div(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"])));
var InfoCard$1 = styled__default['default'].div(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["\n  padding: 1rem;\n  border: 1px solid ", ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.bg3;
});
var AccountGroupingRow = styled__default['default'].div(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  div {\n    ", "\n    align-items: center;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.flexRowNoWrap;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.text1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.flexRowNoWrap;
});
var AccountSection = styled__default['default'].div(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 0rem 1rem;\n  ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.bg1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.mediaWidth.upToMedium(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["padding: 0rem 1rem 1.5rem 1rem;"])));
});
var YourAccount = styled__default['default'].div(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"])));
var LowerSection = styled__default['default'].div(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["\n  ", "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ", ";\n  }\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.flexColumnNoWrap;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.bg2;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.text3;
});
var AccountControl = styled__default['default'].div(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])));
var AddressLink = styled__default['default'](ExternalLink)(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["\n  font-size: 0.825rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ", ";\n  }\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.text3;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.text2;
});
var CloseIcon$1 = styled__default['default'].div(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))); // @ts-ignore

var CloseColor$1 = styled__default['default'](img)(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["\n  path {\n    stroke: ", ";\n  }\n"])), function (_ref15) {
  var theme = _ref15.theme;
  return theme.text4;
});
var WalletName = styled__default['default'].div(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ", ";\n"])), function (_ref16) {
  var theme = _ref16.theme;
  return theme.text3;
});
var IconWrapper$2 = styled__default['default'].div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"])), function (_ref17) {
  var theme = _ref17.theme;
  return theme.flexColumnNoWrap;
}, function (_ref18) {
  var size = _ref18.size;
  return size ? size + 'px' : '32px';
}, function (_ref19) {
  var size = _ref19.size;
  return size ? size + 'px' : '32px';
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.mediaWidth.upToMedium(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "])));
});
var TransactionListWrapper = styled__default['default'].div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref21) {
  var theme = _ref21.theme;
  return theme.flexColumnNoWrap;
});
var WalletAction = styled__default['default'](ButtonSecondary)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"])));
var MainWalletAction = styled__default['default'](WalletAction)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  color: ", ";\n"])), function (_ref22) {
  var theme = _ref22.theme;
  return theme.primary1;
});

function renderTransactions(transactions) {
  return /*#__PURE__*/React__default['default'].createElement(TransactionListWrapper, null, transactions.map(function (hash, i) {
    return /*#__PURE__*/React__default['default'].createElement(Transaction, {
      key: i,
      hash: hash
    });
  }));
}

function AccountDetails(_ref23) {
  var toggleWalletModal = _ref23.toggleWalletModal,
      pendingTransactions = _ref23.pendingTransactions,
      confirmedTransactions = _ref23.confirmedTransactions,
      ENSName = _ref23.ENSName,
      openOptions = _ref23.openOptions;

  var _useActiveWeb3React = useActiveWeb3React(),
      chainId = _useActiveWeb3React.chainId,
      account = _useActiveWeb3React.account,
      connector = _useActiveWeb3React.connector;

  var theme = React$1.useContext(styled.ThemeContext);

  function formatConnectorName() {
    // @ts-ignore
    var _window = window,
        ethereum = _window.ethereum;
    var isMetaMask = !!(ethereum && ethereum.isMetaMask);
    var name = Object.keys(SUPPORTED_WALLETS).filter(function (k) {
      return SUPPORTED_WALLETS[k].connector === connector && (connector !== injected || isMetaMask === (k === 'METAMASK'));
    }).map(function (k) {
      return SUPPORTED_WALLETS[k].name;
    })[0];
    return /*#__PURE__*/React__default['default'].createElement(WalletName, null, "Connected with ", name);
  }

  function getStatusIcon() {
    if (connector === injected) {
      return /*#__PURE__*/React__default['default'].createElement(IconWrapper$2, {
        size: 16
      }, /*#__PURE__*/React__default['default'].createElement(Identicon, null));
    } else if (connector === walletconnect) {
      return /*#__PURE__*/React__default['default'].createElement(IconWrapper$2, {
        size: 16
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: '/assets/images/walletConnectIcon.svg',
        alt: 'wallet connect logo'
      }));
    } else if (connector === walletlink) {
      return /*#__PURE__*/React__default['default'].createElement(IconWrapper$2, {
        size: 16
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: '/assets/images/coinbaseWalletIcon.svg',
        alt: 'coinbase wallet logo'
      }));
    } else if (connector === fortmatic) {
      return /*#__PURE__*/React__default['default'].createElement(IconWrapper$2, {
        size: 16
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: '/assets/images/fortmaticIcon.png',
        alt: 'fortmatic logo'
      }));
    } else if (connector === portis) {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(IconWrapper$2, {
        size: 16
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: '/assets/images/portisIcon.png',
        alt: 'portis logo'
      }), /*#__PURE__*/React__default['default'].createElement(MainWalletAction, {
        onClick: function onClick() {
          portis.portis.showPortis();
        }
      }, "Show Portis")));
    }

    return null;
  }

  var clearAllTransactionsCallback = React$1.useCallback(function () {
  }, [chainId]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(UpperSection$1, null, /*#__PURE__*/React__default['default'].createElement(CloseIcon$1, {
    onClick: toggleWalletModal
  }, /*#__PURE__*/React__default['default'].createElement(CloseColor$1, null)), /*#__PURE__*/React__default['default'].createElement(HeaderRow$1, null, "Account"), /*#__PURE__*/React__default['default'].createElement(AccountSection, null, /*#__PURE__*/React__default['default'].createElement(YourAccount, null, /*#__PURE__*/React__default['default'].createElement(InfoCard$1, null, /*#__PURE__*/React__default['default'].createElement(AccountGroupingRow, null, formatConnectorName(), /*#__PURE__*/React__default['default'].createElement("div", null, connector !== injected && connector !== walletlink && /*#__PURE__*/React__default['default'].createElement(WalletAction, {
    style: {
      fontSize: '.825rem',
      fontWeight: 400,
      marginRight: '8px'
    },
    onClick: function onClick() {
      connector.close();
    }
  }, "Disconnect"), /*#__PURE__*/React__default['default'].createElement(WalletAction, {
    style: {
      fontSize: '.825rem',
      fontWeight: 400
    },
    onClick: function onClick() {
      openOptions();
    }
  }, "Change"))), /*#__PURE__*/React__default['default'].createElement(AccountGroupingRow, {
    id: "web3-account-identifier-row"
  }, /*#__PURE__*/React__default['default'].createElement(AccountControl, null, ENSName ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", null, getStatusIcon(), /*#__PURE__*/React__default['default'].createElement("p", null, " ", ENSName))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", null, getStatusIcon(), /*#__PURE__*/React__default['default'].createElement("p", null, " ", account && shortenAddress(account)))))), /*#__PURE__*/React__default['default'].createElement(AccountGroupingRow, null, ENSName ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(AccountControl, null, /*#__PURE__*/React__default['default'].createElement("div", null, account && /*#__PURE__*/React__default['default'].createElement(Copy, {
    toCopy: account
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "Copy Address")), chainId && account && /*#__PURE__*/React__default['default'].createElement(AddressLink, {
    hasENS: !!ENSName,
    isENS: true,
    href: chainId && getEtherscanLink(chainId, ENSName, 'address')
  }, /*#__PURE__*/React__default['default'].createElement(reactFeather.ExternalLink, {
    size: 16
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "View on Etherscan"))))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(AccountControl, null, /*#__PURE__*/React__default['default'].createElement("div", null, account && /*#__PURE__*/React__default['default'].createElement(Copy, {
    toCopy: account
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "Copy Address")), chainId && account && /*#__PURE__*/React__default['default'].createElement(AddressLink, {
    hasENS: !!ENSName,
    isENS: false,
    href: getEtherscanLink(chainId, account, 'address')
  }, /*#__PURE__*/React__default['default'].createElement(reactFeather.ExternalLink, {
    size: 16
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      marginLeft: '4px'
    }
  }, "View on Etherscan")))))))))), !!pendingTransactions.length || !!confirmedTransactions.length ? /*#__PURE__*/React__default['default'].createElement(LowerSection, null, /*#__PURE__*/React__default['default'].createElement(AutoRow, {
    mb: '1rem',
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React__default['default'].createElement(TYPE.body, null, "Recent Transactions"), /*#__PURE__*/React__default['default'].createElement(LinkStyledButton, {
    onClick: clearAllTransactionsCallback
  }, "(clear all)")), renderTransactions(pendingTransactions), renderTransactions(confirmedTransactions)) : /*#__PURE__*/React__default['default'].createElement(LowerSection, null, /*#__PURE__*/React__default['default'].createElement(TYPE.body, {
    color: theme.text1
  }, "Your transactions will appear here...")));
}

var stateInitialValue = {
  modalOpen: false,
  error: ''
};
var actionsIntialValue = {
  toggleModal: function toggleModal() {}
};
var ApplicationState = /*#__PURE__*/React$1.createContext(stateInitialValue);
var ApplicationActions = /*#__PURE__*/React$1.createContext(actionsIntialValue);
var ApplicationProvider = function ApplicationProvider(_ref) {
  var children = _ref.children;

  var _useReducer = React$1.useReducer(function (state, action) {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        {
          return _objectSpread2(_objectSpread2({}, state), {}, {
            modalOpen: !state.modalOpen
          });
        }

      default:
        return state;
    }
  }, {
    modalOpen: false,
    error: ''
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // Actions to components


  var actions = React$1.useMemo(function () {
    return {
      toggleModal: function toggleModal() {
        dispatch({
          type: 'TOGGLE_MODAL'
        });
      }
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(ApplicationState.Provider, {
    value: state
  }, /*#__PURE__*/React__default['default'].createElement(ApplicationActions.Provider, {
    value: actions
  }, children));
};

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};

function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}

function useForceUpdate() {
  const _useState = React$1.useState(false),
        f = _useState[1];

  const forceUpdate = React$1.useCallback(() => f(v => !v), []);
  return forceUpdate;
}

function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}

function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}

function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  props.to;
        props.from;
        props.config;
        props.onStart;
        props.onRest;
        props.onFrame;
        props.children;
        props.reset;
        props.reverse;
        props.force;
        props.immediate;
        props.delay;
        props.attach;
        props.destroyed;
        props.interpolateTo;
        props.ref;
        props.lazy;
        const forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return _extends$1({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : _extends$1({}, a, {
    [k]: props[k]
  }), {});
  return _extends$1({
    to: forward
  }, rest);
}

function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}

class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}

class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;

function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}

let colorNames;

function injectColorNames(names) {
  colorNames = names;
}

let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;

let interpolation;

function injectStringInterpolator(fn) {
  interpolation = fn;
}

let now = () => Date.now();

let animatedApi = node => node.current;

let createAnimatedStyle;

function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : _extends$1({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof React__default['default'].Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = React$1.forwardRef((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = React$1.useRef(true);
    const propsAnimated = React$1.useRef(null);
    const node = React$1.useRef(null);
    const attachProps = React$1.useCallback(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    React$1.useEffect(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    React$1.useImperativeHandle(ref, () => animatedApi(node));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue();
          _getValue.scrollTop;
          _getValue.scrollLeft;
          const animatedProps = _objectWithoutPropertiesLoose$1(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return React__default['default'].createElement(Component, _extends$1({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}
/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */


function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller$1 {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = _objectWithoutPropertiesLoose$1(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(_extends$1({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach(_ref2 => {
        let k = _ref2[0],
            v = _ref2[1]; // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props

        const entry = _extends$1({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = _extends$1({}, ops[entry.delay], entry, {
          to: _extends$1({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach(_ref3 => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = _extends$1({}, from, this.merged);
          if (is.obj(to)) this.merged = _extends$1({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = _objectWithoutPropertiesLoose$1(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    _ref5.delay;
        let props = _objectWithoutPropertiesLoose$1(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = _extends$1({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = _extends$1({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = _extends$1({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = _extends$1({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1]; // Issue cached entries, except on reset

      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return _extends$1({}, acc, {
          [name]: _extends$1({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return _extends$1({}, acc, {
            [name]: _extends$1({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}
/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */


const useSprings = (length, props) => {
  const mounted = React$1.useRef(false);
  const ctrl = React$1.useRef();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = React$1.useMemo(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller$1();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  React$1.useImperativeHandle(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = React$1.useMemo(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  React$1.useEffect(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  React$1.useEffect(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};
/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */


const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};
/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */


let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = _objectWithoutPropertiesLoose$1(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return _extends$1({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = _extends$1({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy;
        _get.unique;
        const _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset;
        _get.enter;
        _get.leave;
        _get.update;
        const onDestroyed = _get.onDestroyed;
        _get.keys;
        _get.items;
        const onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = _objectWithoutPropertiesLoose$1(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = React$1.useRef(false);
  const state = React$1.useRef({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  React$1.useImperativeHandle(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map(_ref => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach(_ref2 => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map(_ref3 => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller$1()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = _extends$1({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some(_ref4 => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  React$1.useEffect(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map(_ref5 => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map(_ref6 => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = _objectWithoutPropertiesLoose$1(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = _extends$1({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(_extends$1({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = _extends$1({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach(_ref9 => {
    let left = _ref9.left;
        _ref9.right;
        let item = _objectWithoutPropertiesLoose$1(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return _extends$1({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

} // http://www.w3.org/TR/css3-color/#svg-color


const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
}; // const INTEGER = '[-+]?\\d+';

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;
/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(_extends$1({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);
const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']; // Extend animated with all the available THREE elements

const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);

function addV(v1, v2) {
  return v1.map(function (v, i) {
    return v + v2[i];
  });
} // vector substract


function subV(v1, v2) {
  return v1.map(function (v, i) {
    return v - v2[i];
  });
}
/**
 * Calculates distance
 * @param movement the difference between current and initial vectors
 * @returns distance
 */


function calculateDistance(movement) {
  return Math.hypot.apply(Math, movement);
}

function calculateAllGeometry(movement, delta) {
  if (delta === void 0) {
    delta = movement;
  }

  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    distance: distance,
    direction: direction
  };
}
/**
 * Calculates all kinematics
 * @template T the expected vector type
 * @param movement the difference between current and initial vectors
 * @param delta the difference between current and previous vectors
 * @param delta_t the time difference between current and previous timestamps
 * @returns all kinematics
 */


function calculateAllKinematics(movement, delta, dt) {
  var dl = calculateDistance(delta);
  var alpha = dl === 0 ? 0 : 1 / dl;
  var beta = dt === 0 ? 0 : 1 / dt;
  var velocity = beta * dl;
  var velocities = delta.map(function (v) {
    return beta * v;
  });
  var direction = delta.map(function (v) {
    return alpha * v;
  });
  var distance = calculateDistance(movement);
  return {
    velocities: velocities,
    velocity: velocity,
    distance: distance,
    direction: direction
  };
}
/**
 * Because IE doesn't support `Math.sign` function, so we use the polyfill version of the function.
 * This polyfill function is suggested by Mozilla:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill
 * @param x target number
 */


function sign(x) {
  if (Math.sign) return Math.sign(x);
  return Number(x > 0) - Number(x < 0) || +x;
}

function minMax(value, min, max) {
  return Math.max(min, Math.min(value, max));
} // Based on @aholachek ;)
// https://twitter.com/chpwn/status/285540192096497664
// iOS constant = 0.55
// https://medium.com/@nathangitter/building-fluid-interfaces-ios-swift-9732bb934bf5


function rubberband2(distance, constant) {
  // default constant from the article is 0.7
  return Math.pow(distance, constant * 5);
}

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return rubberband2(distance, constant);
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, constant) {
  if (constant === void 0) {
    constant = 0.15;
  }

  if (constant === 0) return minMax(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function noop() {}
/**
 * TODO Beware that only optimized cases are covered in tests =)
 * TODO Need to cover general case as well
 *
 * @param fns
 */


function chainFns() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    var result;

    for (var _iterator = _createForOfIteratorHelperLoose(fns), _step; !(_step = _iterator()).done;) {
      var fn = _step.value;
      result = fn.apply(this, arguments) || result;
    }

    return result;
  };
}
/**
 * Expects a simple value or 2D vector (an array with 2 elements) and
 * always returns 2D vector. If simple value is passed, returns a
 * vector with this value as both coordinates.
 *
 * @param value
 */


function ensureVector(value, fallback) {
  if (value === undefined) {
    if (fallback === undefined) {
      throw new Error('Must define fallback value if undefined is expected');
    }

    value = fallback;
  }

  if (Array.isArray(value)) return value;
  return [value, value];
}
/**
 * Helper for defining a default value
 *
 * @param value
 * @param fallback
 */


function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
/**
 * Resolves getters (functions) by calling them
 * If simple value is given it just passes through
 *
 * @param v
 */


function valueFn(v) {
  if (typeof v === 'function') {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    } // @ts-ignore


    return v.apply(void 0, args);
  } else {
    return v;
  }
}

function resolveWith(config, resolvers) {
  if (config === void 0) {
    config = {};
  }

  var result = {};

  for (var _i = 0, _Object$entries = Object.entries(resolvers); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        key = _Object$entries$_i[0],
        resolver = _Object$entries$_i[1];

    switch (typeof resolver) {
      case 'function':
        result[key] = resolver.call(result, config[key], key, config);
        break;

      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;

      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }

  return result;
}
/**
 * Whether the browser supports GestureEvent (ie Safari)
 * @returns true if the browser supports gesture event
 */


function supportsGestureEvents() {
  try {
    // TODO [TS] possibly find GestureEvent definitions?
    // @ts-ignore: no type definitions for webkit GestureEvents
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}

function supportsTouchEvents() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
}

function supportsPointerEvents() {
  return typeof window !== 'undefined' && 'onpointerdown' in window;
}

function getEventTouches(event) {
  if ('pointerId' in event) return null;
  return event.type === 'touchend' ? event.changedTouches : event.targetTouches;
}

function getTouchIds(event) {
  return Array.from(getEventTouches(event)).map(function (t) {
    return t.identifier;
  });
}

function getGenericEventData(event) {
  var buttons = 'buttons' in event ? event.buttons : 0;
  var shiftKey = event.shiftKey,
      altKey = event.altKey,
      metaKey = event.metaKey,
      ctrlKey = event.ctrlKey; // TODO check if this might create some overrides?

  return {
    buttons: buttons,
    shiftKey: shiftKey,
    altKey: altKey,
    metaKey: metaKey,
    ctrlKey: ctrlKey
  };
}

var identity = function identity(xy) {
  return xy;
};
/**
 * Gets pointer event values.
 * @param event
 * @returns pointer event values
 */


function getPointerEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var touchEvents = getEventTouches(event);

  var _ref = touchEvents ? touchEvents[0] : event,
      clientX = _ref.clientX,
      clientY = _ref.clientY;

  return transform([clientX, clientY]);
}
/**
 * Gets two touches event data
 * @param event
 * @returns two touches event data
 */


function getTwoTouchesEventValues(event, pointerIds, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var _Array$from$filter = Array.from(event.touches).filter(function (t) {
    return pointerIds.includes(t.identifier);
  }),
      A = _Array$from$filter[0],
      B = _Array$from$filter[1];

  if (!A || !B) throw Error("The event doesn't have two pointers matching the pointerIds");
  var dx = B.clientX - A.clientX;
  var dy = B.clientY - A.clientY;
  var cx = (B.clientX + A.clientX) / 2;
  var cy = (B.clientY + A.clientY) / 2; // const e: any = 'nativeEvent' in event ? event.nativeEvent : event

  var distance = Math.hypot(dx, dy); // FIXME rotation has inconsistant values so we're not using it atm
  // const angle = (e.rotation as number) ?? -(Math.atan2(dx, dy) * 180) / Math.PI

  var angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
  var values = transform([distance, angle]);
  var origin = transform([cx, cy]);
  return {
    values: values,
    origin: origin
  };
}
/**
 * Gets scroll event values
 * @param event
 * @returns scroll event values
 */


function getScrollEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  } // If the currentTarget is the window then we return the scrollX/Y position.
  // If not (ie the currentTarget is a DOM element), then we return scrollLeft/Top


  var _event$currentTarget = event.currentTarget,
      scrollX = _event$currentTarget.scrollX,
      scrollY = _event$currentTarget.scrollY,
      scrollLeft = _event$currentTarget.scrollLeft,
      scrollTop = _event$currentTarget.scrollTop;
  return transform([scrollX || scrollLeft || 0, scrollY || scrollTop || 0]);
} // wheel delta defaults from https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js


var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Gets wheel event values.
 * @param event
 * @returns wheel event values
 */

function getWheelEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  var deltaX = event.deltaX,
      deltaY = event.deltaY,
      deltaMode = event.deltaMode; // normalize wheel values, especially for Firefox

  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }

  return transform([deltaX, deltaY]);
}
/**
 * Gets webkit gesture event values.
 * @param event
 * @returns webkit gesture event values
 */


function getWebkitGestureEventValues(event, transform) {
  if (transform === void 0) {
    transform = identity;
  }

  return transform([event.scale, event.rotation]);
}

var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_RUBBERBAND = 0.15;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 50;
var DEFAULT_SWIPE_DURATION = 250;
var InternalGestureOptionsNormalizers = {
  threshold: function threshold(value) {
    if (value === void 0) {
      value = 0;
    }

    return ensureVector(value);
  },
  rubberband: function rubberband(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return ensureVector(DEFAULT_RUBBERBAND);

      case false:
        return ensureVector(0);

      default:
        return ensureVector(value);
    }
  },
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  triggerAllEvents: function triggerAllEvents(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  initial: function initial(value) {
    if (value === void 0) {
      value = 0;
    }

    if (typeof value === 'function') return value;
    return ensureVector(value);
  },
  transform: true
};

var InternalCoordinatesOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  axis: true,
  lockDirection: function lockDirection(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  bounds: function bounds(value) {
    if (value === void 0) {
      value = {};
    }

    if (typeof value === 'function') return function (state) {
      return InternalCoordinatesOptionsNormalizers.bounds(value(state));
    };
    var _value2 = value,
        _value2$left = _value2.left,
        left = _value2$left === void 0 ? -Infinity : _value2$left,
        _value2$right = _value2.right,
        right = _value2$right === void 0 ? Infinity : _value2$right,
        _value2$top = _value2.top,
        top = _value2$top === void 0 ? -Infinity : _value2$top,
        _value2$bottom = _value2.bottom,
        bottom = _value2$bottom === void 0 ? Infinity : _value2$bottom;
    return [[left, right], [top, bottom]];
  }
});

var isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
var InternalGenericOptionsNormalizers = {
  enabled: function enabled(value) {
    if (value === void 0) {
      value = true;
    }

    return value;
  },
  domTarget: true,
  window: /*#__PURE__*/function (_window) {
    function window(_x) {
      return _window.apply(this, arguments);
    }

    window.toString = function () {
      return _window.toString();
    };

    return window;
  }(function (value) {
    if (value === void 0) {
      value = isBrowser ? window : undefined;
    }

    return value;
  }),
  eventOptions: function eventOptions(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$passive = _ref.passive,
        passive = _ref$passive === void 0 ? true : _ref$passive,
        _ref$capture = _ref.capture,
        capture = _ref$capture === void 0 ? false : _ref$capture;

    return {
      passive: passive,
      capture: capture
    };
  },
  transform: true
};

var InternalDistanceAngleOptionsNormalizers = /*#__PURE__*/_extends({}, InternalGestureOptionsNormalizers, {
  bounds: function bounds(_value, _key, _ref2) {
    var _ref2$distanceBounds = _ref2.distanceBounds,
        distanceBounds = _ref2$distanceBounds === void 0 ? {} : _ref2$distanceBounds,
        _ref2$angleBounds = _ref2.angleBounds,
        angleBounds = _ref2$angleBounds === void 0 ? {} : _ref2$angleBounds;

    var _distanceBounds = function _distanceBounds(state) {
      var D = assignDefault(valueFn(distanceBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };

    var _angleBounds = function _angleBounds(state) {
      var A = assignDefault(valueFn(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };

    if (typeof distanceBounds !== 'function' && typeof angleBounds !== 'function') return [_distanceBounds(), _angleBounds()];
    return function (state) {
      return [_distanceBounds(state), _angleBounds(state)];
    };
  }
});

var InternalDragOptionsNormalizers = /*#__PURE__*/_extends({}, InternalCoordinatesOptionsNormalizers, {
  useTouch: function useTouch(value) {
    if (value === void 0) {
      value = false;
    }

    var supportsTouch = supportsTouchEvents();
    var supportsPointer = supportsPointerEvents();
    if (value && supportsTouch) return true;
    if (supportsTouch && !supportsPointer) return true;
    return false;
  },
  experimental_preventWindowScrollY: function experimental_preventWindowScrollY(value) {
    if (value === void 0) {
      value = false;
    }

    return value;
  },
  threshold: function threshold(v, _k, _ref3) {
    var _ref3$filterTaps = _ref3.filterTaps,
        filterTaps = _ref3$filterTaps === void 0 ? false : _ref3$filterTaps,
        _ref3$lockDirection = _ref3.lockDirection,
        lockDirection = _ref3$lockDirection === void 0 ? false : _ref3$lockDirection,
        _ref3$axis = _ref3.axis,
        axis = _ref3$axis === void 0 ? undefined : _ref3$axis;
    var A = ensureVector(v, filterTaps ? 3 : lockDirection ? 1 : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    return A;
  },
  swipeVelocity: function swipeVelocity(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_VELOCITY;
    }

    return ensureVector(v);
  },
  swipeDistance: function swipeDistance(v) {
    if (v === void 0) {
      v = DEFAULT_SWIPE_DISTANCE;
    }

    return ensureVector(v);
  },
  swipeDuration: function swipeDuration(value) {
    if (value === void 0) {
      value = DEFAULT_SWIPE_DURATION;
    }

    return value;
  },
  delay: function delay(value) {
    if (value === void 0) {
      value = 0;
    }

    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;

      case false:
        return 0;

      default:
        return value;
    }
  }
});

function getInternalGenericOptions(config) {
  if (config === void 0) {
    config = {};
  } // TODO warn when passive is set to true and domTarget is undefined


  return resolveWith(config, InternalGenericOptionsNormalizers);
}

function getInternalCoordinatesOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalCoordinatesOptionsNormalizers);
}

function getInternalDistanceAngleOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDistanceAngleOptionsNormalizers);
}

function getInternalDragOptions(config) {
  if (config === void 0) {
    config = {};
  }

  return resolveWith(config, InternalDragOptionsNormalizers);
}

function buildComplexConfig(config, actions) {
  if (config === void 0) {
    config = {};
  }

  if (actions === void 0) {
    actions = new Set();
  }

  var _config = config,
      drag = _config.drag,
      wheel = _config.wheel,
      move = _config.move,
      scroll = _config.scroll,
      pinch = _config.pinch,
      hover = _config.hover,
      eventOptions = _config.eventOptions,
      window = _config.window,
      transform = _config.transform,
      domTarget = _config.domTarget,
      enabled = _config.enabled;
  var mergedConfig = getInternalGenericOptions({
    domTarget: domTarget,
    eventOptions: eventOptions,
    transform: transform,
    window: window,
    enabled: enabled
  });
  if (actions.has('onDrag')) mergedConfig.drag = getInternalDragOptions(drag);
  if (actions.has('onWheel')) mergedConfig.wheel = getInternalCoordinatesOptions(wheel);
  if (actions.has('onScroll')) mergedConfig.scroll = getInternalCoordinatesOptions(scroll);
  if (actions.has('onMove')) mergedConfig.move = getInternalCoordinatesOptions(move);
  if (actions.has('onPinch')) mergedConfig.pinch = getInternalDistanceAngleOptions(pinch);
  if (actions.has('onHover')) mergedConfig.hover = _extends({
    enabled: true
  }, hover);
  return mergedConfig;
}

function getInitial(mixed) {
  return _extends({
    _active: false,
    _blocked: false,
    _intentional: [false, false],
    _movement: [0, 0],
    _initial: [0, 0],
    _bounds: [[-Infinity, Infinity], [-Infinity, Infinity]],
    _threshold: [0, 0],
    _lastEventType: undefined,
    _dragStarted: false,
    _dragPreventScroll: false,
    _dragIsTap: true,
    _dragDelayed: false,
    event: undefined,
    intentional: false,
    values: [0, 0],
    velocities: [0, 0],
    delta: [0, 0],
    movement: [0, 0],
    offset: [0, 0],
    lastOffset: [0, 0],
    direction: [0, 0],
    initial: [0, 0],
    previous: [0, 0],
    first: false,
    last: false,
    active: false,
    timeStamp: 0,
    startTime: 0,
    elapsedTime: 0,
    cancel: noop,
    canceled: false,
    memo: undefined,
    args: undefined
  }, mixed);
}

function getInitialState() {
  var shared = {
    hovering: false,
    scrolling: false,
    wheeling: false,
    dragging: false,
    moving: false,
    pinching: false,
    touches: 0,
    buttons: 0,
    down: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    ctrlKey: false,
    locked: false
  };
  var drag = getInitial({
    _pointerId: undefined,
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0,
    tap: false,
    swipe: [0, 0]
  });
  var pinch = getInitial({
    // @ts-expect-error when used _pointerIds we can assert its type will be [number, number]
    _pointerIds: [],
    da: [0, 0],
    vdva: [0, 0],
    // @ts-expect-error origin can never be passed as undefined in userland
    origin: undefined,
    turns: 0
  });
  var wheel = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var move = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  var scroll = getInitial({
    axis: undefined,
    xy: [0, 0],
    vxvy: [0, 0],
    velocity: 0,
    distance: 0
  });
  return {
    shared: shared,
    drag: drag,
    pinch: pinch,
    wheel: wheel,
    move: move,
    scroll: scroll
  };
}

var RecognizersMap = /*#__PURE__*/new Map();

var identity$1 = function identity(xy) {
  return xy;
};
/**
 * @private
 * Recognizer abstract class.
 */


var Recognizer = /*#__PURE__*/function () {
  /**
   * Creates an instance of a gesture recognizer.
   * @param stateKey drag, move, pinch, etc.
   * @param controller the controller attached to the gesture
   * @param [args] the args that should be passed to the gesture handler
   */
  function Recognizer(controller, args) {
    var _this = this;

    if (args === void 0) {
      args = [];
    }

    this.controller = controller;
    this.args = args;
    this.debounced = true; // Convenience method to set a timeout for a given gesture

    this.setTimeout = function (callback, ms) {
      var _window;

      if (ms === void 0) {
        ms = 140;
      }

      clearTimeout(_this.controller.timeouts[_this.stateKey]);

      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      _this.controller.timeouts[_this.stateKey] = (_window = window).setTimeout.apply(_window, [callback, ms].concat(args));
    }; // Convenience method to clear a timeout for a given gesture


    this.clearTimeout = function () {
      clearTimeout(_this.controller.timeouts[_this.stateKey]);
    };
    /**
     * Fires the gesture handler
     */


    this.fireGestureHandler = function (forceFlag) {
      if (forceFlag === void 0) {
        forceFlag = false;
      }
      /**
       * If the gesture has been blocked (this can happen when the gesture has started in an unwanted direction),
       * clean everything and don't do anything.
       */


      if (_this.state._blocked) {
        // we need debounced gestures to end by themselves
        if (!_this.debounced) {
          _this.state._active = false;

          _this.clean();
        }

        return null;
      } // If the gesture has no intentional dimension, don't fire the handler.


      if (!forceFlag && !_this.state.intentional && !_this.config.triggerAllEvents) return null;

      if (_this.state.intentional) {
        var prev_active = _this.state.active;
        var next_active = _this.state._active;
        _this.state.active = next_active;
        _this.state.first = next_active && !prev_active;
        _this.state.last = prev_active && !next_active;
        _this.controller.state.shared[_this.ingKey] = next_active; // Sets dragging, pinching, etc. to the gesture active state
      }

      var touches = _this.controller.pointerIds.size || _this.controller.touchIds.size;
      var down = _this.controller.state.shared.buttons > 0 || touches > 0;

      var state = _extends({}, _this.controller.state.shared, _this.state, _this.mapStateValues(_this.state), {
        locked: !!document.pointerLockElement,
        touches: touches,
        down: down
      }); // @ts-expect-error


      var newMemo = _this.handler(state); // Sets memo to the returned value of the handler (unless it's not undefined)


      _this.state.memo = newMemo !== void 0 ? newMemo : _this.state.memo;
      return state;
    };

    this.controller = controller;
    this.args = args;
  } // Returns the gesture config


  var _proto = Recognizer.prototype; // Convenience method to update the shared state

  _proto.updateSharedState = function updateSharedState(sharedState) {
    Object.assign(this.controller.state.shared, sharedState);
  } // Convenience method to update the gesture state
  ;

  _proto.updateGestureState = function updateGestureState(gestureState) {
    Object.assign(this.state, gestureState);
  }
  /**
   * Returns state properties depending on the movement and state.
   *
   * Should be overriden for custom behavior, doesn't do anything in the implementation
   * below.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    return {
      _intentional: _intentional,
      _blocked: false
    };
  }
  /**
   * Returns basic movement properties for the gesture based on the next values and current state.
   */
  ;

  _proto.getMovement = function getMovement(values) {
    var rubberband = this.config.rubberband;
    var _this$state = this.state,
        _bounds = _this$state._bounds,
        _initial = _this$state._initial,
        _active = _this$state._active,
        wasIntentional = _this$state._intentional,
        lastOffset = _this$state.lastOffset,
        prevMovement = _this$state.movement,
        _T = _this$state._threshold;
    var M = this.getInternalMovement(values, this.state);
    var i0 = wasIntentional[0] === false ? getIntentionalDisplacement(M[0], _T[0]) : wasIntentional[0];
    var i1 = wasIntentional[1] === false ? getIntentionalDisplacement(M[1], _T[1]) : wasIntentional[1]; // Get gesture specific state properties based on intentionality and movement.

    var intentionalityCheck = this.checkIntentionality([i0, i1], M);

    if (intentionalityCheck._blocked) {
      return _extends({}, intentionalityCheck, {
        _movement: M,
        delta: [0, 0]
      });
    }

    var _intentional = intentionalityCheck._intentional;
    var _movement = M;
    /**
     * The movement sent to the handler has 0 in its dimensions when intentionality is false.
     * It is calculated from the actual movement minus the threshold.
     */

    var movement = [_intentional[0] !== false ? M[0] - _intentional[0] : 0, _intentional[1] !== false ? M[1] - _intentional[1] : 0];
    var offset = addV(movement, lastOffset);
    /**
     * Rubberband should be 0 when the gesture is no longer active, so that movement
     * and offset can return within their bounds.
     */

    var _rubberband = _active ? rubberband : [0, 0];

    movement = computeRubberband(_bounds, addV(movement, _initial), _rubberband);
    return _extends({}, intentionalityCheck, {
      intentional: _intentional[0] !== false || _intentional[1] !== false,
      _initial: _initial,
      _movement: _movement,
      movement: movement,
      values: values,
      offset: computeRubberband(_bounds, offset, _rubberband),
      delta: subV(movement, prevMovement)
    });
  } // Cleans the gesture. Can be overriden by gestures.
  ;

  _proto.clean = function clean() {
    this.clearTimeout();
  };

  _createClass(Recognizer, [{
    key: "config",
    get: function get() {
      return this.controller.config[this.stateKey];
    } // Is the gesture enabled

  }, {
    key: "enabled",
    get: function get() {
      return this.controller.config.enabled && this.config.enabled;
    } // Returns the controller state for a given gesture

  }, {
    key: "state",
    get: function get() {
      return this.controller.state[this.stateKey];
    } // Returns the gesture handler

  }, {
    key: "handler",
    get: function get() {
      return this.controller.handlers[this.stateKey];
    }
  }, {
    key: "transform",
    get: function get() {
      return this.config.transform || this.controller.config.transform || identity$1;
    }
  }]);

  return Recognizer;
}(); //--------------------------------------------


function getIntentionalDisplacement(movement, threshold) {
  if (Math.abs(movement) >= threshold) {
    return sign(movement) * threshold;
  } else {
    return false;
  }
}

function computeRubberband(bounds, _ref, _ref2) {
  var Vx = _ref[0],
      Vy = _ref[1];
  var Rx = _ref2[0],
      Ry = _ref2[1];
  var _bounds$ = bounds[0],
      X1 = _bounds$[0],
      X2 = _bounds$[1],
      _bounds$2 = bounds[1],
      Y1 = _bounds$2[0],
      Y2 = _bounds$2[1];
  return [rubberbandIfOutOfBounds(Vx, X1, X2, Rx), rubberbandIfOutOfBounds(Vy, Y1, Y2, Ry)];
}
/**
 * Returns a generic, common payload for all gestures from an event.
 */


function getGenericPayload(_ref3, event, isStartEvent) {
  var state = _ref3.state;
  var timeStamp = event.timeStamp,
      _lastEventType = event.type;
  var previous = state.values;
  var elapsedTime = isStartEvent ? 0 : timeStamp - state.startTime;
  return {
    _lastEventType: _lastEventType,
    event: event,
    timeStamp: timeStamp,
    elapsedTime: elapsedTime,
    previous: previous
  };
}
/**
 * Returns the reinitialized start state for the gesture.
 * Should be common to all gestures.
 */


function getStartGestureState(_ref4, values, event, initial) {
  var state = _ref4.state,
      config = _ref4.config,
      stateKey = _ref4.stateKey,
      args = _ref4.args,
      transform = _ref4.transform;
  var offset = state.offset;
  var startTime = event.timeStamp;
  var initialFn = config.initial,
      bounds = config.bounds,
      threshold = config.threshold; // the _threshold is the difference between a [0,0] offset converted to
  // its new space coordinates

  var _threshold = subV(transform(threshold), transform([0, 0])).map(Math.abs);

  var _state = _extends({}, getInitialState()[stateKey], {
    _active: true,
    args: args,
    values: values,
    initial: initial != null ? initial : values,
    _threshold: _threshold,
    offset: offset,
    lastOffset: offset,
    startTime: startTime
  });

  return _extends({}, _state, {
    _initial: valueFn(initialFn, _state),
    _bounds: valueFn(bounds, _state)
  });
}
/**
 * The controller will keep track of the state for all gestures and also keep
 * track of timeouts, and window listeners.
 */


var Controller = function Controller(classes) {
  var _this = this;

  this.classes = classes;
  this.pointerIds = new Set(); // register Pointer Events pointerIds

  this.touchIds = new Set(); // register Touch Events identifiers

  this.supportsTouchEvents = supportsTouchEvents();
  this.supportsGestureEvents = supportsGestureEvents();

  this.bind = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var bindings = {};

    for (var _iterator = _createForOfIteratorHelperLoose(_this.classes), _step; !(_step = _iterator()).done;) {
      var RecognizerClass = _step.value;
      new RecognizerClass(_this, args).addBindings(bindings);
    } // // we also add event bindings for native handlers


    var _loop = function _loop(eventKey) {
      addBindings(bindings, eventKey, function (event) {
        return _this.nativeRefs[eventKey](_extends({}, _this.state.shared, {
          event: event,
          args: args
        }));
      });
    };

    for (var eventKey in _this.nativeRefs) {
      _loop(eventKey);
    }

    if (_this.config.domTarget) {
      // If config.domTarget is set we add event listeners to it and return the clean function.
      return updateDomListeners(_this, bindings);
    } else {
      // If not, we return an object that contains gesture handlers mapped to react handler event keys.
      return getPropsListener(_this, bindings);
    }
  };

  this.effect = function () {
    if (_this.config.domTarget) _this.bind();
    return _this.clean;
  };
  /**
   * Function ran on component unmount: cleans timeouts and removes dom listeners set by the bind function.
   */


  this.clean = function () {
    var domTarget = getDomTargetFromConfig(_this.config);
    var eventOptions = _this.config.eventOptions;
    if (domTarget) removeListeners(domTarget, takeAll(_this.domListeners), eventOptions);
    Object.values(_this.timeouts).forEach(clearTimeout);
    clearAllWindowListeners(_this);
  };

  this.classes = classes;
  this.state = getInitialState();
  this.timeouts = {};
  this.domListeners = [];
  this.windowListeners = {};
};

function addEventIds(controller, event) {
  if ('pointerId' in event) {
    controller.pointerIds.add(event.pointerId);
  } else {
    controller.touchIds = new Set(getTouchIds(event));
  }
}

function removeEventIds(controller, event) {
  if ('pointerId' in event) {
    controller.pointerIds["delete"](event.pointerId);
  } else {
    getTouchIds(event).forEach(function (id) {
      return controller.touchIds["delete"](id);
    });
  }
}

function clearAllWindowListeners(controller) {
  var _controller$config = controller.config,
      el = _controller$config.window,
      eventOptions = _controller$config.eventOptions,
      windowListeners = controller.windowListeners;
  if (!el) return;

  for (var stateKey in windowListeners) {
    var handlers = windowListeners[stateKey];
    removeListeners(el, handlers, eventOptions);
  }

  controller.windowListeners = {};
}

function clearWindowListeners(_ref, stateKey, options) {
  var config = _ref.config,
      windowListeners = _ref.windowListeners;

  if (options === void 0) {
    options = config.eventOptions;
  }

  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], options);
  delete windowListeners[stateKey];
}

function updateWindowListeners(_ref2, stateKey, listeners, options) {
  var config = _ref2.config,
      windowListeners = _ref2.windowListeners;

  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = config.eventOptions;
  }

  if (!config.window) return;
  removeListeners(config.window, windowListeners[stateKey], options);
  addListeners(config.window, windowListeners[stateKey] = listeners, options);
}

function updateDomListeners(_ref3, bindings) {
  var config = _ref3.config,
      domListeners = _ref3.domListeners;
  var domTarget = getDomTargetFromConfig(config);
  if (!domTarget) throw new Error('domTarget must be defined');
  var eventOptions = config.eventOptions;
  removeListeners(domTarget, takeAll(domListeners), eventOptions);

  for (var _i = 0, _Object$entries = Object.entries(bindings); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        key = _Object$entries$_i[0],
        fns = _Object$entries$_i[1];
    var name = key.slice(2).toLowerCase();
    domListeners.push([name, chainFns.apply(void 0, fns)]);
  }

  addListeners(domTarget, domListeners, eventOptions);
}

function getPropsListener(_ref4, bindings) {
  var config = _ref4.config;
  var props = {};
  var captureString = config.eventOptions.capture ? 'Capture' : '';

  for (var _i2 = 0, _Object$entries2 = Object.entries(bindings); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _Object$entries2[_i2],
        event = _Object$entries2$_i[0],
        fns = _Object$entries2$_i[1];
    var fnsArray = Array.isArray(fns) ? fns : [fns];
    var key = event + captureString;
    props[key] = chainFns.apply(void 0, fnsArray);
  }

  return props;
}

function takeAll(array) {
  if (array === void 0) {
    array = [];
  }

  return array.splice(0, array.length);
}

function getDomTargetFromConfig(_ref5) {
  var domTarget = _ref5.domTarget;
  return domTarget && 'current' in domTarget ? domTarget.current : domTarget;
}
/**
 * bindings is an object which keys match ReactEventHandlerKeys.
 * Since a recognizer might want to bind a handler function to an event key already used by a previously
 * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
 * that key.
 */


function addBindings(bindings, name, fn) {
  if (!bindings[name]) bindings[name] = [];
  bindings[name].push(fn);
}

function addListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(listeners), _step2; !(_step2 = _iterator2()).done;) {
    var _step2$value = _step2.value,
        eventName = _step2$value[0],
        eventHandler = _step2$value[1];
    el.addEventListener(eventName, eventHandler, options);
  }
}

function removeListeners(el, listeners, options) {
  if (listeners === void 0) {
    listeners = [];
  }

  if (options === void 0) {
    options = {};
  }

  for (var _iterator3 = _createForOfIteratorHelperLoose(listeners), _step3; !(_step3 = _iterator3()).done;) {
    var _step3$value = _step3.value,
        eventName = _step3$value[0],
        eventHandler = _step3$value[1];
    el.removeEventListener(eventName, eventHandler, options);
  }
}
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * Utility hook called by all gesture hooks and that will be responsible for the internals.
 *
 * @param handlers
 * @param classes
 * @param config
 * @param nativeHandlers - native handlers such as onClick, onMouseDown, etc.
 */


function useRecognizers(handlers, config, nativeHandlers) {
  if (nativeHandlers === void 0) {
    nativeHandlers = {};
  }

  var classes = resolveClasses(handlers);
  var controller = React__default['default'].useMemo(function () {
    return new Controller(classes);
  }, []);
  controller.config = config;
  controller.handlers = handlers;
  controller.nativeRefs = nativeHandlers;
  React__default['default'].useEffect(controller.effect, []); // @ts-ignore

  if (controller.config.domTarget) return deprecationNoticeForDomTarget; // @ts-ignore

  return controller.bind;
}

function deprecationNoticeForDomTarget() {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn("Deprecation notice: When the `domTarget` option is specified, you don't need to write `useEffect(bind, [bind])` anymore: event binding is now made handled internally to this lib.\n\nNext version won't return anything when `domTarget` is provided, therefore your code will break if you try to call `useEffect`.");
  }
}

function resolveClasses(internalHandlers) {
  var classes = new Set();
  if (internalHandlers.drag) classes.add(RecognizersMap.get('drag'));
  if (internalHandlers.wheel) classes.add(RecognizersMap.get('wheel'));
  if (internalHandlers.scroll) classes.add(RecognizersMap.get('scroll'));
  if (internalHandlers.move) classes.add(RecognizersMap.get('move'));
  if (internalHandlers.pinch) classes.add(RecognizersMap.get('pinch'));
  if (internalHandlers.hover) classes.add(RecognizersMap.get('hover'));
  return classes;
}
/**
 * @private
 * Abstract class for coordinates-based gesture recongizers
 */


var CoordinatesRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(CoordinatesRecognizer, _Recognizer);

  function CoordinatesRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = CoordinatesRecognizer.prototype;
  /**
   * Returns the real movement (without taking intentionality into account)
   */

  _proto.getInternalMovement = function getInternalMovement(values, state) {
    return subV(values, state.initial);
  }
  /**
   * In coordinates-based gesture, this function will detect the first intentional axis,
   * lock the gesture axis if lockDirection is specified in the config, block the gesture
   * if the first intentional axis doesn't match the specified axis in config.
   */
  ;

  _proto.checkIntentionality = function checkIntentionality(_intentional, _movement) {
    if (_intentional[0] === false && _intentional[1] === false) {
      return {
        _intentional: _intentional,
        axis: this.state.axis
      };
    }

    var _movement$map = _movement.map(Math.abs),
        absX = _movement$map[0],
        absY = _movement$map[1];

    var axis = this.state.axis || (absX > absY ? 'x' : absX < absY ? 'y' : undefined);
    if (!this.config.axis && !this.config.lockDirection) return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
    if (!axis) return {
      _intentional: [false, false],
      _blocked: false,
      axis: axis
    };
    if (!!this.config.axis && axis !== this.config.axis) return {
      _intentional: _intentional,
      _blocked: true,
      axis: axis
    };
    _intentional[axis === 'x' ? 1 : 0] = false;
    return {
      _intentional: _intentional,
      _blocked: false,
      axis: axis
    };
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);

    if (!state._blocked) {
      var dt = event.timeStamp - this.state.timeStamp;
      Object.assign(state, calculateAllKinematics(state.movement, state.delta, dt));
    }

    return state;
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      xy: state.values,
      vxvy: state.velocities
    };
  };

  return CoordinatesRecognizer;
}(Recognizer);

var TAP_DISTANCE_THRESHOLD = 3;

function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist();
}

var DragRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(DragRecognizer, _CoordinatesRecognize);

  function DragRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'dragging';
    _this.stateKey = 'drag'; // TODO add back when setPointerCapture is widely wupported
    // https://caniuse.com/#search=setPointerCapture

    _this.setPointerCapture = function (event) {
      // don't perform pointere capture when user wants to use touch events or
      // when a pointerLockElement exists as this would throw an error
      if (_this.config.useTouch || document.pointerLockElement) return;
      var target = event.target,
          pointerId = event.pointerId;

      if (target && 'setPointerCapture' in target) {
        // this would work in the DOM but doesn't with react three fiber
        // target.addEventListener('pointermove', this.onDragChange, this.controller.config.eventOptions)
        // @ts-expect-error
        target.setPointerCapture(pointerId);
      }

      _this.updateGestureState({
        _dragTarget: target,
        _dragPointerId: pointerId
      });
    };

    _this.releasePointerCapture = function () {
      if (_this.config.useTouch || document.pointerLockElement) return;
      var _this$state = _this.state,
          _dragTarget = _this$state._dragTarget,
          _dragPointerId = _this$state._dragPointerId;

      if (_dragPointerId && _dragTarget && 'releasePointerCapture' in _dragTarget) {
        // this would work in the DOM but doesn't with react three fiber
        // target.removeEventListener('pointermove', this.onDragChange, this.controller.config.eventOptions)
        if (!('hasPointerCapture' in _dragTarget) || _dragTarget.hasPointerCapture(_dragPointerId)) try {
          _dragTarget.releasePointerCapture(_dragPointerId);
        } catch (e) {}
      }
    };

    _this.preventScroll = function (event) {
      if (_this.state._dragPreventScroll && event.cancelable) {
        event.preventDefault();
      }
    };

    _this.getEventId = function (event) {
      if (_this.config.useTouch) return event.changedTouches[0].identifier;
      return event.pointerId;
    };

    _this.isValidEvent = function (event) {
      // if we were using pointer events only event.isPrimary === 1 would suffice
      return _this.state._pointerId === _this.getEventId(event);
    };

    _this.shouldPreventWindowScrollY = _this.config.experimental_preventWindowScrollY && _this.controller.supportsTouchEvents;

    _this.setUpWindowScrollDetection = function (event) {
      persistEvent(event); // we add window listeners that will prevent the scroll when the user has started dragging

      updateWindowListeners(_this.controller, _this.stateKey, [['touchmove', _this.preventScroll], ['touchend', _this.clean.bind(_assertThisInitialized(_this))], ['touchcancel', _this.clean.bind(_assertThisInitialized(_this))]], {
        passive: false
      });

      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), 250, event);
    };

    _this.setUpDelayedDragTrigger = function (event) {
      _this.state._dragDelayed = true;
      persistEvent(event);

      _this.setTimeout(_this.startDrag.bind(_assertThisInitialized(_this)), _this.config.delay, event);
    };

    _this.setStartState = function (event) {
      var values = getPointerEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerId: _this.getEventId(event)
      }));

      _this.updateGestureState(_this.getMovement(values));
    };

    _this.onDragStart = function (event) {
      addEventIds(_this.controller, event);
      if (!_this.enabled || _this.state._active) return;

      _this.setStartState(event);

      _this.setPointerCapture(event);

      if (_this.shouldPreventWindowScrollY) _this.setUpWindowScrollDetection(event);else if (_this.config.delay > 0) _this.setUpDelayedDragTrigger(event);else _this.startDrag(event, true); // we pass the values to the startDrag event
    };

    _this.onDragChange = function (event) {
      if ( // if the gesture was canceled or
      _this.state.canceled || // if onDragStart wasn't fired or
      !_this.state._active || // if the event pointerId doesn't match the one that initiated the drag
      !_this.isValidEvent(event) || // if the event has the same timestamp as the previous event
      // note that checking type equality is ONLY for tests ¯\_(ツ)_/¯
      _this.state._lastEventType === event.type && event.timeStamp === _this.state.timeStamp) return;
      var values;

      if (document.pointerLockElement) {
        var movementX = event.movementX,
            movementY = event.movementY;
        values = addV(_this.transform([movementX, movementY]), _this.state.values);
      } else values = getPointerEventValues(event, _this.transform);

      var kinematics = _this.getKinematics(values, event); // if startDrag hasn't fired


      if (!_this.state._dragStarted) {
        // If the gesture isn't active then respond to the event only if
        // it's been delayed via the `delay` option, in which case start
        // the gesture immediately.
        if (_this.state._dragDelayed) {
          _this.startDrag(event);

          return;
        } // if the user wants to prevent vertical window scroll when user starts dragging


        if (_this.shouldPreventWindowScrollY) {
          if (!_this.state._dragPreventScroll && kinematics.axis) {
            // if the user is dragging horizontally then we should allow the drag
            if (kinematics.axis === 'x') {
              _this.startDrag(event);
            } else {
              _this.state._active = false;
              return;
            }
          } else return;
        } else return;
      }

      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      var genericPayload = getGenericPayload(_assertThisInitialized(_this), event); // This verifies if the drag can be assimilated to a tap by checking
      // if the real distance of the drag (ie not accounting for the threshold) is
      // greater than the TAP_DISTANCE_THRESHOLD.

      var realDistance = calculateDistance(kinematics._movement);
      var _dragIsTap = _this.state._dragIsTap;
      if (_dragIsTap && realDistance >= TAP_DISTANCE_THRESHOLD) _dragIsTap = false;

      _this.updateGestureState(_extends({}, genericPayload, kinematics, {
        _dragIsTap: _dragIsTap
      }));

      _this.fireGestureHandler();
    };

    _this.onDragEnd = function (event) {
      removeEventIds(_this.controller, event); // if the event pointerId doesn't match the one that initiated the drag
      // we don't want to end the drag

      if (!_this.isValidEvent(event)) return;

      _this.clean(); // if the gesture is no longer active (ie canceled)
      // don't do anything


      if (!_this.state._active) return;
      _this.state._active = false;
      var tap = _this.state._dragIsTap;
      var _this$state$velocitie = _this.state.velocities,
          vx = _this$state$velocitie[0],
          vy = _this$state$velocitie[1];
      var _this$state$movement = _this.state.movement,
          mx = _this$state$movement[0],
          my = _this$state$movement[1];
      var _this$state$_intentio = _this.state._intentional,
          ix = _this$state$_intentio[0],
          iy = _this$state$_intentio[1];
      var _this$config$swipeVel = _this.config.swipeVelocity,
          svx = _this$config$swipeVel[0],
          svy = _this$config$swipeVel[1];
      var _this$config$swipeDis = _this.config.swipeDistance,
          sx = _this$config$swipeDis[0],
          sy = _this$config$swipeDis[1];
      var sd = _this.config.swipeDuration;

      var endState = _extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values));

      var swipe = [0, 0];

      if (endState.elapsedTime < sd) {
        if (ix !== false && Math.abs(vx) > svx && Math.abs(mx) > sx) swipe[0] = sign(vx);
        if (iy !== false && Math.abs(vy) > svy && Math.abs(my) > sy) swipe[1] = sign(vy);
      }

      _this.updateSharedState({
        buttons: 0
      });

      _this.updateGestureState(_extends({}, endState, {
        tap: tap,
        swipe: swipe
      }));

      _this.fireGestureHandler(_this.config.filterTaps && tap === true);
    };

    _this.clean = function () {
      _CoordinatesRecognize.prototype.clean.call(_assertThisInitialized(_this));

      _this.state._dragStarted = false;

      _this.releasePointerCapture();

      clearWindowListeners(_this.controller, _this.stateKey);
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;

      _this.updateGestureState({
        canceled: true,
        _active: false
      });

      _this.updateSharedState({
        buttons: 0
      });

      setTimeout(function () {
        return _this.fireGestureHandler();
      }, 0);
    };

    _this.onClick = function (event) {
      if (!_this.state._dragIsTap) event.stopPropagation();
    };

    return _this;
  }

  var _proto = DragRecognizer.prototype;

  _proto.startDrag = function startDrag(event, onDragIsStart) {
    if (onDragIsStart === void 0) {
      onDragIsStart = false;
    } // startDrag can happen after a timeout, so we need to check if the gesture is still active
    // as the user might have lift up the pointer in between.


    if ( // if the gesture isn't active (probably means)
    !this.state._active || // if the drag has already started we should ignore subsequent attempts
    this.state._dragStarted) return;
    if (!onDragIsStart) this.setStartState(event);
    this.updateGestureState({
      _dragStarted: true,
      _dragPreventScroll: true,
      cancel: this.onCancel
    });
    this.clearTimeout();
    this.fireGestureHandler();
  };

  _proto.addBindings = function addBindings$1(bindings) {
    if (this.config.useTouch) {
      addBindings(bindings, 'onTouchStart', this.onDragStart);
      addBindings(bindings, 'onTouchMove', this.onDragChange); // this is needed for react-three-fiber

      addBindings(bindings, 'onTouchEnd', this.onDragEnd);
      addBindings(bindings, 'onTouchCancel', this.onDragEnd);
    } else {
      addBindings(bindings, 'onPointerDown', this.onDragStart);
      addBindings(bindings, 'onPointerMove', this.onDragChange); // this is needed for react-three-fiber

      addBindings(bindings, 'onPointerUp', this.onDragEnd);
      addBindings(bindings, 'onPointerCancel', this.onDragEnd);
    }

    if (this.config.filterTaps) {
      var handler = this.controller.config.eventOptions.capture ? 'onClick' : 'onClickCapture';
      addBindings(bindings, handler, this.onClick);
    }
  };

  return DragRecognizer;
}(CoordinatesRecognizer);
/**
 * @private
 * Abstract class for distance/angle-based gesture recongizers
 */


var DistanceAngleRecognizer = /*#__PURE__*/function (_Recognizer) {
  _inheritsLoose(DistanceAngleRecognizer, _Recognizer);

  function DistanceAngleRecognizer() {
    return _Recognizer.apply(this, arguments) || this;
  }

  var _proto = DistanceAngleRecognizer.prototype;

  _proto.getInternalMovement = function getInternalMovement(values, state) {
    var prev_a = state.values[1]; // not be defined if ctrl+wheel is used for zoom only

    var d = values[0],
        _values$ = values[1],
        a = _values$ === void 0 ? prev_a : _values$;
    var delta_a = a - prev_a;
    var next_turns = state.turns;
    if (Math.abs(delta_a) > 270) next_turns += sign(delta_a);
    return subV([d, a - 360 * next_turns], state.initial);
  };

  _proto.getKinematics = function getKinematics(values, event) {
    var state = this.getMovement(values);
    var turns = (values[1] - state._movement[1] - this.state.initial[1]) / 360;
    var dt = event.timeStamp - this.state.timeStamp;

    var _calculateAllKinemati = calculateAllKinematics(state.movement, state.delta, dt),
        kinematics = _objectWithoutPropertiesLoose(_calculateAllKinemati, ["distance", "velocity"]);

    return _extends({
      turns: turns
    }, state, kinematics);
  };

  _proto.mapStateValues = function mapStateValues(state) {
    return {
      da: state.values,
      vdva: state.velocities
    };
  };

  return DistanceAngleRecognizer;
}(Recognizer);

var ZOOM_CONSTANT = 7;
var WEBKIT_DISTANCE_SCALE_FACTOR = 260;

var PinchRecognizer = /*#__PURE__*/function (_DistanceAngleRecogni) {
  _inheritsLoose(PinchRecognizer, _DistanceAngleRecogni);

  function PinchRecognizer() {
    var _this;

    _this = _DistanceAngleRecogni.apply(this, arguments) || this;
    _this.ingKey = 'pinching';
    _this.stateKey = 'pinch';

    _this.onPinchStart = function (event) {
      addEventIds(_this.controller, event);
      var touchIds = _this.controller.touchIds;
      if (!_this.enabled) return;

      if (_this.state._active) {
        // check that the pointerIds that initiated the gesture
        // are still enabled. This is useful for when the page
        // loses track of the pointers (minifying gesture on iPad).
        if (_this.state._pointerIds.every(function (id) {
          return touchIds.has(id);
        })) return; // something was wrong with the pointers but we let it go.
      } // until we reach two fingers on the target don't react


      if (touchIds.size < 2) return;

      var _pointerIds = Array.from(touchIds).slice(0, 2);

      var _getTwoTouchesEventVa = getTwoTouchesEventValues(event, _pointerIds, _this.transform),
          values = _getTwoTouchesEventVa.values,
          origin = _getTwoTouchesEventVa.origin;

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        _pointerIds: _pointerIds,
        cancel: _this.onCancel,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onPinchChange = function (event) {
      var _this$state = _this.state,
          canceled = _this$state.canceled,
          _active = _this$state._active;
      if (canceled || !_active || // if the event has the same timestamp as the previous event
      event.timeStamp === _this.state.timeStamp) return;
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData);

      try {
        var _getTwoTouchesEventVa2 = getTwoTouchesEventValues(event, _this.state._pointerIds, _this.transform),
            values = _getTwoTouchesEventVa2.values,
            origin = _getTwoTouchesEventVa2.origin;

        var kinematics = _this.getKinematics(values, event);

        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
          origin: origin
        }));

        _this.fireGestureHandler();
      } catch (e) {
        _this.onPinchEnd(event);
      }
    };

    _this.onPinchEnd = function (event) {
      removeEventIds(_this.controller, event);
      var pointerIds = getTouchIds(event); // if none of the lifted pointerIds is in the state pointerIds don't do anything

      if (_this.state._pointerIds.every(function (id) {
        return !pointerIds.includes(id);
      })) return;

      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values), {
        _active: false
      }));

      _this.fireGestureHandler();
    };

    _this.onCancel = function () {
      if (_this.state.canceled) return;

      _this.updateGestureState({
        _active: false,
        canceled: true
      });

      setTimeout(function () {
        return _this.fireGestureHandler();
      }, 0);
    };
    /**
     * PINCH WITH WEBKIT GESTURES
     */


    _this.onGestureStart = function (event) {
      if (!_this.enabled) return;
      event.preventDefault();
      var values = getWebkitGestureEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true), {
        origin: [event.clientX, event.clientY],
        cancel: _this.onCancel
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onGestureChange = function (event) {
      var _this$state2 = _this.state,
          canceled = _this$state2.canceled,
          _active = _this$state2._active;
      if (canceled || !_active) return;
      event.preventDefault();
      var genericEventData = getGenericEventData(event);

      _this.updateSharedState(genericEventData); // this normalizes the values of the Safari's WebKitEvent by calculating
      // the delta and then multiplying it by a constant.


      var values = getWebkitGestureEventValues(event, _this.transform);
      values[0] = (values[0] - _this.state.event.scale) * WEBKIT_DISTANCE_SCALE_FACTOR + _this.state.values[0];

      var kinematics = _this.getKinematics(values, event);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), kinematics, {
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };

    _this.onGestureEnd = function (event) {
      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getMovement(_this.state.values), {
        _active: false,
        origin: [event.clientX, event.clientY]
      }));

      _this.fireGestureHandler();
    };
    /**
     * PINCH WITH WHEEL
     */


    _this.wheelShouldRun = function (event) {
      return _this.enabled && event.ctrlKey;
    };

    _this.getWheelValuesFromEvent = function (event) {
      var _getWheelEventValues = getWheelEventValues(event, _this.transform),
          delta_d = _getWheelEventValues[1];

      var _this$state$values = _this.state.values,
          prev_d = _this$state$values[0],
          prev_a = _this$state$values[1]; // ZOOM_CONSTANT is based on Safari trackpad natural zooming

      var _delta_d = -delta_d * ZOOM_CONSTANT; // new distance is the previous state distance added to the delta


      var d = prev_d + _delta_d;
      var a = prev_a !== void 0 ? prev_a : 0;
      return {
        values: [d, a],
        origin: [event.clientX, event.clientY],
        delta: [_delta_d, a]
      };
    };

    _this.onWheel = function (event) {
      if (!_this.wheelShouldRun(event)) return;

      _this.setTimeout(_this.onWheelEnd);

      if (!_this.state._active) _this.onWheelStart(event);else _this.onWheelChange(event);
    };

    _this.onWheelStart = function (event) {
      var _this$getWheelValuesF = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF.values,
          delta = _this$getWheelValuesF.delta,
          origin = _this$getWheelValuesF.origin;

      if (event.cancelable) event.preventDefault();else if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('To properly support zoom on trackpads, try using the `domTarget` option and `config.eventOptions.passive` set to `false`. This message will only appear in development mode.');
      }

      _this.updateSharedState(getGenericEventData(event));

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event, _this.state.values), getGenericPayload(_assertThisInitialized(_this), event, true), {
        offset: values,
        delta: delta,
        origin: origin
      }));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onWheelChange = function (event) {
      if (event.cancelable) event.preventDefault();

      _this.updateSharedState(getGenericEventData(event));

      var _this$getWheelValuesF2 = _this.getWheelValuesFromEvent(event),
          values = _this$getWheelValuesF2.values,
          origin = _this$getWheelValuesF2.origin,
          delta = _this$getWheelValuesF2.delta;

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event), {
        origin: origin,
        delta: delta
      }));

      _this.fireGestureHandler();
    };

    _this.onWheelEnd = function () {
      _this.clean();

      if (!_this.state._active) return;
      _this.state._active = false;

      _this.updateGestureState(_this.getMovement(_this.state.values));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    // Only try to use gesture events when they are supported and domTarget is set
    // as React doesn't support gesture handlers.
    if (this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents) {
      addBindings(bindings, 'onGestureStart', this.onGestureStart);
      addBindings(bindings, 'onGestureChange', this.onGestureChange);
      addBindings(bindings, 'onGestureEnd', this.onGestureEnd);
    } else {
      addBindings(bindings, 'onTouchStart', this.onPinchStart);
      addBindings(bindings, 'onTouchMove', this.onPinchChange);
      addBindings(bindings, 'onTouchEnd', this.onPinchEnd);
      addBindings(bindings, 'onTouchCancel', this.onPinchEnd);
      addBindings(bindings, 'onWheel', this.onWheel);
    }
  };

  return PinchRecognizer;
}(DistanceAngleRecognizer);

var WheelRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(WheelRecognizer, _CoordinatesRecognize);

  function WheelRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'wheeling';
    _this.stateKey = 'wheel';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (event.ctrlKey && 'pinch' in _this.controller.handlers) return;
      if (!_this.enabled) return;

      _this.setTimeout(_this.onEnd);

      _this.updateSharedState(getGenericEventData(event));

      var values = addV(getWheelEventValues(event, _this.transform), _this.state.values);

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event, _this.state.values), getGenericPayload(_assertThisInitialized(_this), event, true)));

        var movement = _this.getMovement(values);

        var geometry = calculateAllGeometry(movement.delta);

        _this.updateGestureState(movement);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      _this.clean();

      if (!_this.state._active) return;

      var movement = _this.getMovement(_this.state.values);

      _this.updateGestureState(movement);

      _this.updateGestureState({
        _active: false,
        velocities: [0, 0],
        velocity: 0
      });

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = WheelRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onWheel', this.handleEvent);
  };

  return WheelRecognizer;
}(CoordinatesRecognizer);

var MoveRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(MoveRecognizer, _CoordinatesRecognize);

  function MoveRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'moving';
    _this.stateKey = 'move';
    _this.debounced = true;

    _this.onMove = function (event) {
      if (!_this.enabled) return;

      _this.setTimeout(_this.onMoveEnd);

      if (!_this.state._active) _this.onMoveStart(event);else _this.onMoveChange(event);
    };

    _this.onMoveStart = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event, _this.transform);

      _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event), getGenericPayload(_assertThisInitialized(_this), event, true)));

      _this.updateGestureState(_this.getMovement(values));

      _this.fireGestureHandler();
    };

    _this.onMoveChange = function (event) {
      _this.updateSharedState(getGenericEventData(event));

      var values = getPointerEventValues(event, _this.transform);

      _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));

      _this.fireGestureHandler();
    };

    _this.onMoveEnd = function () {
      _this.clean();

      if (!_this.state._active) return;
      var values = _this.state.values;

      _this.updateGestureState(_this.getMovement(values));

      _this.updateGestureState({
        velocities: [0, 0],
        velocity: 0,
        _active: false
      });

      _this.fireGestureHandler();
    };

    _this.hoverTransform = function () {
      return _this.controller.config.hover.transform || _this.controller.config.transform;
    };

    _this.onPointerEnter = function (event) {
      _this.controller.state.shared.hovering = true;
      if (!_this.controller.config.enabled) return;

      if (_this.controller.config.hover.enabled) {
        var values = getPointerEventValues(event, _this.hoverTransform());

        var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event, true), {
          args: _this.args,
          values: values,
          active: true,
          hovering: true
        });

        _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
      }

      if ('move' in _this.controller.handlers) _this.onMoveStart(event);
    };

    _this.onPointerLeave = function (event) {
      _this.controller.state.shared.hovering = false;
      if ('move' in _this.controller.handlers) _this.onMoveEnd();
      if (!_this.controller.config.hover.enabled) return;
      var values = getPointerEventValues(event, _this.hoverTransform());

      var state = _extends({}, _this.controller.state.shared, _this.state, getGenericPayload(_assertThisInitialized(_this), event), {
        args: _this.args,
        values: values,
        active: false
      });

      _this.controller.handlers.hover(_extends({}, state, _this.mapStateValues(state)));
    };

    return _this;
  }

  var _proto = MoveRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    if ('move' in this.controller.handlers) {
      addBindings(bindings, 'onPointerMove', this.onMove);
    }

    if ('hover' in this.controller.handlers) {
      addBindings(bindings, 'onPointerEnter', this.onPointerEnter);
      addBindings(bindings, 'onPointerLeave', this.onPointerLeave);
    }
  };

  return MoveRecognizer;
}(CoordinatesRecognizer);

var ScrollRecognizer = /*#__PURE__*/function (_CoordinatesRecognize) {
  _inheritsLoose(ScrollRecognizer, _CoordinatesRecognize);

  function ScrollRecognizer() {
    var _this;

    _this = _CoordinatesRecognize.apply(this, arguments) || this;
    _this.ingKey = 'scrolling';
    _this.stateKey = 'scroll';
    _this.debounced = true;

    _this.handleEvent = function (event) {
      if (!_this.enabled) return;

      _this.clearTimeout();

      _this.setTimeout(_this.onEnd);

      var values = getScrollEventValues(event, _this.transform);

      _this.updateSharedState(getGenericEventData(event));

      if (!_this.state._active) {
        _this.updateGestureState(_extends({}, getStartGestureState(_assertThisInitialized(_this), values, event, _this.state.values), getGenericPayload(_assertThisInitialized(_this), event, true)));

        var movementDetection = _this.getMovement(values);

        var geometry = calculateAllGeometry(movementDetection.delta);

        _this.updateGestureState(movementDetection);

        _this.updateGestureState(geometry);
      } else {
        _this.updateGestureState(_extends({}, getGenericPayload(_assertThisInitialized(_this), event), _this.getKinematics(values, event)));
      }

      _this.fireGestureHandler();
    };

    _this.onEnd = function () {
      _this.clean();

      if (!_this.state._active) return;

      _this.updateGestureState(_extends({}, _this.getMovement(_this.state.values), {
        _active: false,
        velocities: [0, 0],
        velocity: 0
      }));

      _this.fireGestureHandler();
    };

    return _this;
  }

  var _proto = ScrollRecognizer.prototype;

  _proto.addBindings = function addBindings$1(bindings) {
    addBindings(bindings, 'onScroll', this.handleEvent);
  };

  return ScrollRecognizer;
}(CoordinatesRecognizer);

var RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

function sortHandlers(handlers) {
  var _native = {};
  var handle = {};
  var actions = new Set();

  for (var key in handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handle[key] = handlers[key];
    } else {
      _native[key] = handlers[key];
    }
  }

  return [handle, _native, actions];
}
/**
 * @public
 *
 * The most complete gesture hook, allowing support for multiple gestures.
 *
 * @param {Handlers} handlers - an object with on[Gesture] keys containg gesture handlers
 * @param {UseGestureConfig} [config={}] - the full config object
 * @returns {(...args: any[]) => HookReturnType<Config>}
 */


function useGesture(_handlers, config) {
  if (config === void 0) {
    config = {};
  }

  var _sortHandlers = sortHandlers(_handlers),
      handlers = _sortHandlers[0],
      nativeHandlers = _sortHandlers[1],
      actions = _sortHandlers[2];

  RecognizersMap.set('drag', DragRecognizer);
  RecognizersMap.set('hover', MoveRecognizer);
  RecognizersMap.set('move', MoveRecognizer);
  RecognizersMap.set('pinch', PinchRecognizer);
  RecognizersMap.set('scroll', ScrollRecognizer);
  RecognizersMap.set('wheel', WheelRecognizer);
  var mergedConfig = buildComplexConfig(config, actions);
  var internalHandlers = {};
  if (actions.has('onDrag')) internalHandlers.drag = includeStartEndHandlers(handlers, 'onDrag');
  if (actions.has('onWheel')) internalHandlers.wheel = includeStartEndHandlers(handlers, 'onWheel');
  if (actions.has('onScroll')) internalHandlers.scroll = includeStartEndHandlers(handlers, 'onScroll');
  if (actions.has('onMove')) internalHandlers.move = includeStartEndHandlers(handlers, 'onMove');
  if (actions.has('onPinch')) internalHandlers.pinch = includeStartEndHandlers(handlers, 'onPinch');
  if (actions.has('onHover')) internalHandlers.hover = handlers.onHover;
  return useRecognizers(internalHandlers, mergedConfig, nativeHandlers);
}

function includeStartEndHandlers(handlers, handlerKey) {
  var startKey = handlerKey + 'Start';
  var endKey = handlerKey + 'End';

  var fn = function fn(state) {
    var memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };

  return fn;
}

var _templateObject$6, _templateObject2$6, _templateObject3$6, _templateObject4$6;
var AnimatedDialogOverlay = extendedAnimated(dialog.DialogOverlay); // eslint-disable-next-line @typescript-eslint/no-unused-vars

var StyledDialogOverlay = styled__default['default'](AnimatedDialogOverlay)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.modalBG;
});
var AnimatedDialogContent = extendedAnimated(dialog.DialogContent); // destructure to not pass custom props to Dialog DOM element
// eslint-disable-next-line @typescript-eslint/no-unused-vars

var StyledDialogContent = styled__default['default'](function (_ref2) {
  _ref2.minHeight;
      _ref2.maxHeight;
      _ref2.mobile;
      _ref2.isOpen;
      var rest = _objectWithoutProperties(_ref2, ["minHeight", "maxHeight", "mobile", "isOpen"]);

  return /*#__PURE__*/React__default['default'].createElement(AnimatedDialogContent, rest);
}).attrs({
  'aria-label': 'dialog'
})(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n  overflow-y: ", ";\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ", ";\n    overflow-x: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n    ", "\n    ", "\n  }\n"])), function (_ref3) {
  var mobile = _ref3.mobile;
  return mobile ? 'scroll' : 'hidden';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.bg1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return curriedTransparentize(0.95, theme.shadow1);
}, function (_ref6) {
  var mobile = _ref6.mobile;
  return mobile ? 'scroll' : 'hidden';
}, function (_ref7) {
  var mobile = _ref7.mobile;
  return mobile ? 'flex-end' : 'center';
}, function (_ref8) {
  var maxHeight = _ref8.maxHeight;
  return maxHeight && styled.css(["max-height:", "vh;"], maxHeight);
}, function (_ref9) {
  var minHeight = _ref9.minHeight;
  return minHeight && styled.css(["min-height:", "vh;"], minHeight);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.mediaWidth.upToMedium(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n      width: 65vw;\n      margin: 0;\n    "])));
}, function (_ref11) {
  var theme = _ref11.theme,
      mobile = _ref11.mobile;
  return theme.mediaWidth.upToSmall(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["\n      width:  85vw;\n      ", "\n    "])), mobile && styled.css(["width:100vw;border-radius:20px;border-bottom-left-radius:0;border-bottom-right-radius:0;"]));
});
function Modal(_ref12) {
  var isOpen = _ref12.isOpen,
      onDismiss = _ref12.onDismiss,
      _ref12$minHeight = _ref12.minHeight,
      minHeight = _ref12$minHeight === void 0 ? false : _ref12$minHeight,
      _ref12$maxHeight = _ref12.maxHeight,
      maxHeight = _ref12$maxHeight === void 0 ? 90 : _ref12$maxHeight,
      initialFocusRef = _ref12.initialFocusRef,
      children = _ref12.children;
  var fadeTransition = useTransition(isOpen, null, {
    config: {
      duration: 200
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });

  var _useSpring = useSpring(function () {
    return {
      y: 0,
      config: {
        mass: 1,
        tension: 210,
        friction: 20
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      y = _useSpring2[0].y,
      set = _useSpring2[1];

  var bind = useGesture({
    onDrag: function onDrag(state) {
      set({
        y: state.down ? state.movement[1] : 0
      });

      if (state.movement[1] > 300 || state.velocity > 3 && state.direction[1] > 0) {
        onDismiss();
      }
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, fadeTransition.map(function (_ref13) {
    var item = _ref13.item,
        key = _ref13.key,
        props = _ref13.props;
    return item && /*#__PURE__*/React__default['default'].createElement(StyledDialogOverlay, {
      key: key,
      style: props,
      onDismiss: onDismiss,
      initialFocusRef: initialFocusRef,
      unstable_lockFocusAcrossFrames: false
    }, /*#__PURE__*/React__default['default'].createElement(StyledDialogContent, _extends$2({}, reactDeviceDetect.isMobile ? _objectSpread2(_objectSpread2({}, bind()), {}, {
      // @ts-ignore
      style: {
        transform: y.interpolate(function (y) {
          return "translateY(".concat(y > 0 ? y : 0, "px)");
        })
      }
    }) : {}, {
      "aria-label": "dialog content",
      minHeight: minHeight,
      maxHeight: maxHeight,
      mobile: reactDeviceDetect.isMobile
    }), !initialFocusRef && reactDeviceDetect.isMobile ? /*#__PURE__*/React__default['default'].createElement("div", {
      tabIndex: 1
    }) : null, children));
  }));
}

var _templateObject$5, _templateObject2$5, _templateObject3$5, _templateObject4$5, _templateObject5$5, _templateObject6$4, _templateObject7$3, _templateObject8$2, _templateObject9$2, _templateObject10$2;
var InfoCard = styled__default['default'].button(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  border-color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme,
      active = _ref.active;
  return active ? theme.bg3 : theme.bg2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary1;
}, function (_ref3) {
  var theme = _ref3.theme,
      active = _ref3.active;
  return active ? 'transparent' : theme.bg3;
});
var OptionCard = styled__default['default'](InfoCard)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n"])));
var OptionCardLeft = styled__default['default'].div(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n  ", ";\n  justify-content: center;\n  height: 100%;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.flexColumnNoWrap;
});
var OptionCardClickable = styled__default['default'](OptionCard)(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  &:hover {\n    cursor: ", ";\n    border: ", ";\n  }\n  opacity: ", ";\n"])), function (_ref5) {
  var clickable = _ref5.clickable;
  return clickable ? 'pointer' : '';
}, function (_ref6) {
  var clickable = _ref6.clickable,
      theme = _ref6.theme;
  return clickable ? "1px solid ".concat(theme.primary1) : "";
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled ? '0.5' : '1';
});
var GreenCircle = styled__default['default'].div(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["\n  ", "\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.flexRowNoWrap;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.green1;
});
var CircleWrapper = styled__default['default'].div(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.green1;
});
var HeaderText = styled__default['default'].div(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["\n  ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 500;\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref12) {
    var theme = _ref12.theme;
    return theme.primary1;
  } : function (_ref13) {
    var theme = _ref13.theme;
    return theme.text1;
  };
});
var SubHeader = styled__default['default'].div(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-top: 10px;\n  font-size: 12px;\n"])), function (_ref14) {
  var theme = _ref14.theme;
  return theme.text1;
});
var IconWrapper$1 = styled__default['default'].div(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"])), function (_ref15) {
  var theme = _ref15.theme;
  return theme.flexColumnNoWrap;
}, function (_ref16) {
  var size = _ref16.size;
  return size ? size + 'px' : '24px';
}, function (_ref17) {
  var size = _ref17.size;
  return size ? size + 'px' : '24px';
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.mediaWidth.upToMedium(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "])));
});
function Option(_ref19) {
  var _ref19$link = _ref19.link,
      link = _ref19$link === void 0 ? null : _ref19$link,
      _ref19$clickable = _ref19.clickable,
      clickable = _ref19$clickable === void 0 ? true : _ref19$clickable,
      size = _ref19.size,
      _ref19$onClick = _ref19.onClick,
      onClick = _ref19$onClick === void 0 ? null : _ref19$onClick,
      color = _ref19.color,
      header = _ref19.header,
      _ref19$subheader = _ref19.subheader,
      subheader = _ref19$subheader === void 0 ? null : _ref19$subheader,
      icon = _ref19.icon,
      _ref19$active = _ref19.active,
      active = _ref19$active === void 0 ? false : _ref19$active,
      id = _ref19.id;
  var content = /*#__PURE__*/React__default['default'].createElement(OptionCardClickable, {
    id: id,
    onClick: onClick,
    clickable: clickable && !active,
    active: active
  }, /*#__PURE__*/React__default['default'].createElement(OptionCardLeft, null, /*#__PURE__*/React__default['default'].createElement(HeaderText, {
    color: color
  }, active ? /*#__PURE__*/React__default['default'].createElement(CircleWrapper, null, /*#__PURE__*/React__default['default'].createElement(GreenCircle, null, /*#__PURE__*/React__default['default'].createElement("div", null))) : '', header), subheader && /*#__PURE__*/React__default['default'].createElement(SubHeader, null, subheader)), /*#__PURE__*/React__default['default'].createElement(IconWrapper$1, {
    size: size
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: icon,
    alt: 'Icon',
    width: "24px",
    height: "24px"
  })));

  if (link) {
    return /*#__PURE__*/React__default['default'].createElement(ExternalLink, {
      href: link
    }, content);
  }

  return content;
}

var _templateObject$4, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$4, _templateObject6$3;
var PendingSection = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexColumnNoWrap;
});
var StyledLoader = styled__default['default'](Loader)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"])));
var LoadingMessage = styled__default['default'].div(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ", ";\n  border: 1px solid ", ";\n\n  & > * {\n    padding: 1rem;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.flexRowNoWrap;
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error;
  return error ? theme.red1 : 'inherit';
}, function (_ref4) {
  var theme = _ref4.theme,
      error = _ref4.error;
  return error ? theme.red1 : theme.text4;
});
var ErrorGroup = styled__default['default'].div(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.flexRowNoWrap;
});
var ErrorButton = styled__default['default'].div(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.text1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.bg4;
}, function (_ref8) {
  var theme = _ref8.theme;
  return curriedDarken(0.1, theme.text4);
});
var LoadingWrapper = styled__default['default'].div(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.flexRowNoWrap;
});
function PendingView(_ref10) {
  var _window, _window$ethereum;

  var connector = _ref10.connector,
      _ref10$error = _ref10.error,
      error = _ref10$error === void 0 ? false : _ref10$error,
      setPendingError = _ref10.setPendingError,
      tryActivation = _ref10.tryActivation;
  // @ts-ignore
  var isMetamask = (_window = window) === null || _window === void 0 ? void 0 : (_window$ethereum = _window.ethereum) === null || _window$ethereum === void 0 ? void 0 : _window$ethereum.isMetaMask;
  return /*#__PURE__*/React__default['default'].createElement(PendingSection, null, /*#__PURE__*/React__default['default'].createElement(LoadingMessage, {
    error: error
  }, /*#__PURE__*/React__default['default'].createElement(LoadingWrapper, null, error ? /*#__PURE__*/React__default['default'].createElement(ErrorGroup, null, /*#__PURE__*/React__default['default'].createElement("div", null, "Error connecting."), /*#__PURE__*/React__default['default'].createElement(ErrorButton, {
    onClick: function onClick() {
      setPendingError(false);
      connector && tryActivation(connector);
    }
  }, "Try Again")) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(StyledLoader, null), "Initializing..."))), Object.keys(SUPPORTED_WALLETS).map(function (key) {
    var option = SUPPORTED_WALLETS[key];

    if (option.connector === connector) {
      if (option.connector === injected) {
        if (isMetamask && option.name !== 'MetaMask') {
          return null;
        }

        if (!isMetamask && option.name === 'MetaMask') {
          return null;
        }
      }

      return /*#__PURE__*/React__default['default'].createElement(Option, {
        id: "connect-".concat(key),
        key: key,
        clickable: false,
        color: option.color,
        header: option.name,
        subheader: option.description,
        icon: '/assets/images/' + option.iconName
      });
    }

    return null;
  }));
}

var _templateObject$3, _templateObject2$3, _templateObject3$3, _templateObject4$3, _templateObject5$3, _templateObject6$2, _templateObject7$2, _templateObject8$1, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1;
var CloseIcon = styled__default['default'].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))); // @ts-ignore

var CloseColor = styled__default['default'](img)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  path {\n    stroke: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.text4;
});
var Wrapper = styled__default['default'].div(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n  ", "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.flexColumnNoWrap;
});
var HeaderRow = styled__default['default'].div(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.flexRowNoWrap;
}, function (props) {
  return props.color === 'blue' ? function (_ref4) {
    var theme = _ref4.theme;
    return theme.primary1;
  } : 'inherit';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaWidth.upToMedium(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["\n    padding: 1rem;\n  "])));
});
var ContentWrapper = styled__default['default'].div(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.bg2;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.mediaWidth.upToMedium(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["padding: 1rem"])));
});
var UpperSection = styled__default['default'].div(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"])));
var Blurb = styled__default['default'].div(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.flexRowNoWrap;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.mediaWidth.upToMedium(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["\n    margin: 1rem;\n    font-size: 12px;\n  "])));
});
var OptionGrid = styled__default['default'].div(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 10px;\n  ", ";\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.mediaWidth.upToMedium(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "])));
});
var HoverText = styled__default['default'].div(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["\n  :hover {\n    cursor: pointer;\n  }\n"])));
var WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending'
};
function WalletModal(_ref11) {
  var pendingTransactions = _ref11.pendingTransactions,
      confirmedTransactions = _ref11.confirmedTransactions,
      ENSName = _ref11.ENSName;

  // important that these are destructed from the account-specific web3-react context
  var _useWeb3React = core.useWeb3React(),
      active = _useWeb3React.active,
      account = _useWeb3React.account,
      connector = _useWeb3React.connector,
      activate = _useWeb3React.activate,
      error = _useWeb3React.error;

  var _useState = React$1.useState(WALLET_VIEWS.ACCOUNT),
      _useState2 = _slicedToArray(_useState, 2),
      walletView = _useState2[0],
      setWalletView = _useState2[1];

  var _useState3 = React$1.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      pendingWallet = _useState4[0],
      setPendingWallet = _useState4[1];

  var _useState5 = React$1.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      pendingError = _useState6[0],
      setPendingError = _useState6[1];

  var _useContext = React$1.useContext(ApplicationState),
      modalOpen = _useContext.modalOpen;

  var _useContext2 = React$1.useContext(ApplicationActions),
      toggleModal = _useContext2.toggleModal;

  var previousAccount = usePrevious(account); // close on connection, when logged out before

  React$1.useEffect(function () {
    if (account && !previousAccount && modalOpen) {
      toggleModal();
    }
  }, [account, previousAccount, toggleModal, modalOpen]); // always reset to account view

  React$1.useEffect(function () {
    if (modalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [modalOpen]); // close modal when a connection is successful

  var activePrevious = usePrevious(active);
  var connectorPrevious = usePrevious(connector);
  React$1.useEffect(function () {
    if (modalOpen && (active && !activePrevious || connector && connector !== connectorPrevious && !error)) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [setWalletView, active, error, connector, modalOpen, activePrevious, connectorPrevious]);

  var tryActivation = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(connector) {
      var _connector$walletConn, _connector$walletConn2;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object.keys(SUPPORTED_WALLETS).map(function (key) {
                if (connector === SUPPORTED_WALLETS[key].connector) {
                  return SUPPORTED_WALLETS[key].name;
                }

                return true;
              });
              setPendingWallet(connector); // set wallet for pending view

              setWalletView(WALLET_VIEWS.PENDING); // if the connector is walletconnect and the user has already tried to connect, manually reset the connector

              if (connector instanceof walletconnectConnector.WalletConnectConnector && (_connector$walletConn = connector.walletConnectProvider) !== null && _connector$walletConn !== void 0 && (_connector$walletConn2 = _connector$walletConn.wc) !== null && _connector$walletConn2 !== void 0 && _connector$walletConn2.uri) {
                connector.walletConnectProvider = undefined;
              }

              connector && activate(connector, undefined, true)["catch"](function (error) {
                if (error instanceof core.UnsupportedChainIdError) {
                  activate(connector); // a little janky...can't use setError because the connector isn't set
                } else {
                  setPendingError(true);
                }
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function tryActivation(_x) {
      return _ref12.apply(this, arguments);
    };
  }(); // close wallet modal if fortmatic modal is active


  React$1.useEffect(function () {
    fortmatic.on(OVERLAY_READY, function () {
      toggleModal();
    });
  }, [toggleModal]); // get wallets user can switch too, depending on device/browser

  function getOptions() {
    // @ts-ignore
    var isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map(function (key) {
      var option = SUPPORTED_WALLETS[key]; // check for mobile options

      if (reactDeviceDetect.isMobile) {
        //disable portis on mobile for now
        if (option.connector === portis) {
          return null;
        } // @ts-ignore


        if (!window.web3 && !window.ethereum && option.mobile) {
          return /*#__PURE__*/React__default['default'].createElement(Option, {
            onClick: function onClick() {
              option.connector !== connector && !option.href && tryActivation(option.connector);
            },
            id: "connect-".concat(key),
            key: key,
            active: option.connector && option.connector === connector,
            color: option.color,
            link: option.href,
            header: option.name,
            subheader: null,
            icon: '/assets/images/' + option.iconName
          });
        }

        return null;
      } // overwrite injected when needed


      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        // @ts-ignore
        if (!(window.web3 || window.ethereum)) {
          if (option.name === 'MetaMask') {
            return /*#__PURE__*/React__default['default'].createElement(Option, {
              id: "connect-".concat(key),
              key: key,
              color: '#E8831D',
              header: 'Install Metamask',
              subheader: null,
              link: 'https://metamask.io/',
              icon: "/assets/images/metamask.png"
            });
          } else {
            return null; //dont want to return install twice
          }
        } // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
            return null;
          } // likewise for generic
          else if (option.name === 'Injected' && isMetamask) {
              return null;
            }
      } // return rest of options


      return !reactDeviceDetect.isMobile && !option.mobileOnly && /*#__PURE__*/React__default['default'].createElement(Option, {
        id: "connect-".concat(key),
        onClick: function onClick() {
          option.connector === connector ? setWalletView(WALLET_VIEWS.ACCOUNT) : !option.href && tryActivation(option.connector);
        },
        key: key,
        active: option.connector === connector,
        color: option.color,
        link: option.href,
        header: option.name,
        subheader: null //use option.descriptio to bring back multi-line
        ,
        icon: '/assets/images/' + option.iconName
      });
    });
  }

  function getModalContent() {
    if (error) {
      return /*#__PURE__*/React__default['default'].createElement(UpperSection, null, /*#__PURE__*/React__default['default'].createElement(CloseIcon, {
        onClick: toggleModal
      }, /*#__PURE__*/React__default['default'].createElement(CloseColor, null)), /*#__PURE__*/React__default['default'].createElement(HeaderRow, null, error instanceof core.UnsupportedChainIdError ? 'Wrong Network' : 'Error connecting'), /*#__PURE__*/React__default['default'].createElement(ContentWrapper, null, error instanceof core.UnsupportedChainIdError ? /*#__PURE__*/React__default['default'].createElement("h5", null, "Please connect to the appropriate Ethereum network.") : 'Error connecting. Try refreshing the page.'));
    }

    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return /*#__PURE__*/React__default['default'].createElement(AccountDetails, {
        toggleWalletModal: toggleModal,
        pendingTransactions: pendingTransactions,
        confirmedTransactions: confirmedTransactions,
        ENSName: ENSName,
        openOptions: function openOptions() {
          return setWalletView(WALLET_VIEWS.OPTIONS);
        }
      });
    }

    return /*#__PURE__*/React__default['default'].createElement(UpperSection, null, /*#__PURE__*/React__default['default'].createElement(CloseIcon, {
      onClick: toggleModal
    }, /*#__PURE__*/React__default['default'].createElement(CloseColor, null)), walletView !== WALLET_VIEWS.ACCOUNT ? /*#__PURE__*/React__default['default'].createElement(HeaderRow, {
      color: "blue"
    }, /*#__PURE__*/React__default['default'].createElement(HoverText, {
      onClick: function onClick() {
        setPendingError(false);
        setWalletView(WALLET_VIEWS.ACCOUNT);
      }
    }, "Back")) : /*#__PURE__*/React__default['default'].createElement(HeaderRow, null, /*#__PURE__*/React__default['default'].createElement(HoverText, null, "Connect to a wallet")), /*#__PURE__*/React__default['default'].createElement(ContentWrapper, null, walletView === WALLET_VIEWS.PENDING ? /*#__PURE__*/React__default['default'].createElement(PendingView, {
      connector: pendingWallet,
      error: pendingError,
      setPendingError: setPendingError,
      tryActivation: tryActivation
    }) : /*#__PURE__*/React__default['default'].createElement(OptionGrid, null, getOptions()), walletView !== WALLET_VIEWS.PENDING && /*#__PURE__*/React__default['default'].createElement(Blurb, null, /*#__PURE__*/React__default['default'].createElement("span", null, "New to Ethereum? \xA0"), ' ', /*#__PURE__*/React__default['default'].createElement(ExternalLink, {
      href: "https://ethereum.org/wallets/"
    }, "Learn more about wallets"))));
  }

  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    isOpen: modalOpen,
    onDismiss: toggleModal,
    minHeight: false,
    maxHeight: 90
  }, /*#__PURE__*/React__default['default'].createElement(Wrapper, null, getModalContent()));
}

var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$1, _templateObject7$1;
var IconWrapper = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexColumnNoWrap;
}, function (_ref2) {
  var size = _ref2.size;
  return size ? size + 'px' : '32px';
}, function (_ref3) {
  var size = _ref3.size;
  return size ? size + 'px' : '32px';
});
var Web3StatusGeneric = styled__default['default'](ButtonSecondary)(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.flexRowNoWrap;
});
var Web3StatusError = styled__default['default'](Web3StatusGeneric)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.red1;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.red1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.white;
}, function (_ref8) {
  var theme = _ref8.theme;
  return curriedDarken(0.1, theme.red1);
});
var Web3StatusConnect = styled__default['default'](Web3StatusGeneric)(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: none;\n  color: ", ";\n  font-weight: 500;\n\n  :hover,\n  :focus {\n    border: 1px solid ", ";\n    color: ", ";\n  }\n\n  ", "\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.primary4;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.primaryText1;
}, function (_ref11) {
  var theme = _ref11.theme;
  return curriedDarken(0.05, theme.primary4);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.primaryText1;
}, function (_ref13) {
  var faded = _ref13.faded;
  return faded && styled.css(["background-color:", ";border:1px solid ", ";color:", ";:hover,:focus{border:1px solid ", ";color:", ";}"], function (_ref14) {
    var theme = _ref14.theme;
    return theme.primary5;
  }, function (_ref15) {
    var theme = _ref15.theme;
    return theme.primary5;
  }, function (_ref16) {
    var theme = _ref16.theme;
    return theme.primaryText1;
  }, function (_ref17) {
    var theme = _ref17.theme;
    return curriedDarken(0.05, theme.primary4);
  }, function (_ref18) {
    var theme = _ref18.theme;
    return curriedDarken(0.05, theme.primaryText1);
  });
});
var Web3StatusConnected = styled__default['default'](Web3StatusGeneric)(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n\n    :focus {\n      border: 1px solid ", ";\n    }\n  }\n"])), function (_ref19) {
  var pending = _ref19.pending,
      theme = _ref19.theme;
  return pending ? theme.primary1 : theme.bg2;
}, function (_ref20) {
  var pending = _ref20.pending,
      theme = _ref20.theme;
  return pending ? theme.primary1 : theme.bg3;
}, function (_ref21) {
  var pending = _ref21.pending,
      theme = _ref21.theme;
  return pending ? theme.white : theme.text1;
}, function (_ref22) {
  var pending = _ref22.pending,
      theme = _ref22.theme;
  return pending ? curriedDarken(0.05, theme.primary1) : curriedLighten(0.05, theme.bg2);
}, function (_ref23) {
  var pending = _ref23.pending,
      theme = _ref23.theme;
  return pending ? curriedDarken(0.1, theme.primary1) : curriedDarken(0.1, theme.bg3);
});
var Text = styled__default['default'].p(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n"])));
var NetworkIcon = styled__default['default'](reactFeather.Activity)(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n"]))); // we want the latest one to come first, so return negative if a is after b

function newTransactionsFirst(a, b) {
  return b.addedTime - a.addedTime;
}

function StatusIcon(_ref24) {
  var connector = _ref24.connector;

  if (connector === injected) {
    return /*#__PURE__*/React__default['default'].createElement(Identicon, null);
  } else if (connector === walletconnect) {
    return /*#__PURE__*/React__default['default'].createElement(IconWrapper, {
      size: 16
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: "/assets/images/walletConnectIcon.svg",
      alt: ''
    }));
  } else if (connector === walletlink) {
    return /*#__PURE__*/React__default['default'].createElement(IconWrapper, {
      size: 16
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: "/assets/images/coinbaseWalletIcon.svg",
      alt: ''
    }));
  } else if (connector === fortmatic) {
    return /*#__PURE__*/React__default['default'].createElement(IconWrapper, {
      size: 16
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: "/assets/images/fortmaticIcon.png",
      alt: ''
    }));
  } else if (connector === portis) {
    return /*#__PURE__*/React__default['default'].createElement(IconWrapper, {
      size: 16
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: "/assets/images/portisIcon.png",
      alt: ''
    }));
  }

  return null;
}

function Web3StatusInner() {
  var _useWeb3React = core.useWeb3React(),
      account = _useWeb3React.account,
      connector = _useWeb3React.connector,
      error = _useWeb3React.error;

  var allTransactions = useAllTransactions();
  var sortedRecentTransactions = React$1.useMemo(function () {
    var txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);
  var pending = sortedRecentTransactions.filter(function (tx) {
    return !tx.receipt;
  }).map(function (tx) {
    return tx.hash;
  });
  var hasPendingTransactions = !!pending.length;

  var _useContext = React$1.useContext(ApplicationActions),
      toggleModal = _useContext.toggleModal;

  if (account) {
    return /*#__PURE__*/React__default['default'].createElement(Web3StatusConnected, {
      id: "web3-status-connected",
      onClick: toggleModal,
      pending: hasPendingTransactions
    }, hasPendingTransactions ? /*#__PURE__*/React__default['default'].createElement(RowBetween, null, /*#__PURE__*/React__default['default'].createElement(Text, null, pending === null || pending === void 0 ? void 0 : pending.length, " Pending"), " ", /*#__PURE__*/React__default['default'].createElement(Loader, {
      stroke: "white"
    })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, null, /*#__PURE__*/React__default['default'].createElement(Text, null, shortenAddress(account))), !hasPendingTransactions && connector && /*#__PURE__*/React__default['default'].createElement(StatusIcon, {
      connector: connector
    }));
  } else if (error) {
    return /*#__PURE__*/React__default['default'].createElement(Web3StatusError, {
      onClick: toggleModal
    }, /*#__PURE__*/React__default['default'].createElement(NetworkIcon, null), /*#__PURE__*/React__default['default'].createElement(Text, null, error instanceof core.UnsupportedChainIdError ? 'Wrong Network' : 'Error'));
  } else {
    return /*#__PURE__*/React__default['default'].createElement(Web3StatusConnect, {
      id: "connect-wallet",
      onClick: toggleModal,
      faded: !account
    }, /*#__PURE__*/React__default['default'].createElement(Text, null, "Connect to a wallet"));
  }
}

function Web3Status() {
  var _useWeb3React2 = core.useWeb3React(),
      active = _useWeb3React2.active;
      _useWeb3React2.account;

  var contextNetwork = core.useWeb3React(NetworkContextName);

  var allTransactions = useAllTransactions();
  var sortedRecentTransactions = React$1.useMemo(function () {
    var txs = Object.values(allTransactions);
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst);
  }, [allTransactions]);
  var pending = sortedRecentTransactions.filter(function (tx) {
    return !tx.receipt;
  }).map(function (tx) {
    return tx.hash;
  });
  var confirmed = sortedRecentTransactions.filter(function (tx) {
    return tx.receipt;
  }).map(function (tx) {
    return tx.hash;
  });

  if (!contextNetwork.active && !active) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Web3StatusInner, null), /*#__PURE__*/React__default['default'].createElement(WalletModal, {
    ENSName: undefined,
    pendingTransactions: pending,
    confirmedTransactions: confirmed
  }));
}

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _NETWORK_LABELS;
var Card = styled__default['default'](styledComponents.Box)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"])), function (_ref) {
  var width = _ref.width;
  return width !== null && width !== void 0 ? width : '100%';
}, function (_ref2) {
  var padding = _ref2.padding;
  return padding;
}, function (_ref3) {
  var border = _ref3.border;
  return border;
}, function (_ref4) {
  var borderRadius = _ref4.borderRadius;
  return borderRadius;
});
var YellowCard = styled__default['default'](Card)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ", ";\n  font-weight: 500;\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.yellow2;
});
var HeaderFrame = styled__default['default'].div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 120px;\n  align-items: center;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  top: 0;\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 1rem;\n  z-index: 2;\n"])));
var HeaderControls = styled__default['default'].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-self: flex-end;\n"])));
var HeaderElement = styled__default['default'].div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  /* addresses safari's lack of support for \"gap\" */\n  & > *:not(:first-child) {\n    margin-left: 8px;\n  }\n\n   ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.mediaWidth.upToMedium(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    flex-direction: row-reverse;\n     align-items: center;\n   "])));
});
var AccountElement = styled__default['default'].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  white-space: nowrap;\n  width: 100%;\n  cursor: pointer;\n\n  :focus {\n    border: 1px solid blue;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme,
      active = _ref7.active;
  return !active ? theme.bg1 : theme.bg3;
});
var HideSmall = styled__default['default'].span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n   ", ";\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.mediaWidth.upToSmall(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n     display: none;\n   "])));
});
var NetworkCard = styled__default['default'](YellowCard)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 12px;\n  padding: 8px 12px;\n   ", ";\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.mediaWidth.upToSmall(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n     margin: 0;\n     margin-right: 0.5rem;\n     width: initial;\n     overflow: hidden;\n     text-overflow: ellipsis;\n     flex-shrink: 1;\n   "])));
});
styled__default['default'].button(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n  margin-left: 8px;\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n  > * {\n     stroke: ", ";\n  }\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.bg3;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.bg4;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.text1;
});
var BalanceText = styled__default['default'](rebass.Text)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n   ", ";\n"])), function (_ref13) {
  var theme = _ref13.theme;
  return theme.mediaWidth.upToExtraSmall(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n     display: none;\n   "])));
});
var NETWORK_LABELS = (_NETWORK_LABELS = {}, _defineProperty(_NETWORK_LABELS, sdk.ChainId.RINKEBY, 'Rinkeby'), _defineProperty(_NETWORK_LABELS, sdk.ChainId.ROPSTEN, 'Ropsten'), _defineProperty(_NETWORK_LABELS, sdk.ChainId.GÖRLI, 'Görli'), _defineProperty(_NETWORK_LABELS, sdk.ChainId.KOVAN, 'Kovan'), _defineProperty(_NETWORK_LABELS, sdk.ChainId.MAINNET, 'Mainnet'), _defineProperty(_NETWORK_LABELS, 31337, 'Localhost'), _NETWORK_LABELS);
function Header() {
  var _useActiveWeb3React = useActiveWeb3React(),
      account = _useActiveWeb3React.account,
      chainId = _useActiveWeb3React.chainId; //TODO const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']


  var userEthBalance = {
    toSignificant: function toSignificant(_) {
      return "0.33";
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(HeaderFrame, null, /*#__PURE__*/React__default['default'].createElement(HeaderControls, null, /*#__PURE__*/React__default['default'].createElement(HeaderElement, null, /*#__PURE__*/React__default['default'].createElement(HideSmall, null, chainId && NETWORK_LABELS[chainId] && /*#__PURE__*/React__default['default'].createElement(NetworkCard, {
    title: NETWORK_LABELS[chainId]
  }, NETWORK_LABELS[chainId])), /*#__PURE__*/React__default['default'].createElement(AccountElement, {
    active: !!account,
    style: {
      pointerEvents: 'auto'
    }
  }, account && userEthBalance ? /*#__PURE__*/React__default['default'].createElement(BalanceText, {
    style: {
      flexShrink: 0
    },
    pl: "0.75rem",
    pr: "0.5rem",
    fontWeight: 500
  }, userEthBalance === null || userEthBalance === void 0 ? void 0 : userEthBalance.toSignificant(4), " ETH") : null, /*#__PURE__*/React__default['default'].createElement(Web3Status, null)))));
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var AppWrapper = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"])));
var HeaderWrapper = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n  justify-content: space-between;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.flexRowNoWrap;
});
var BodyWrapper = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 100px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 10;\n\n  ", ";\n\n  z-index: 1;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaWidth.upToSmall(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 16px;\n    padding-top: 2rem;\n  "])));
});
var Marginer = styled__default['default'].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 5rem;\n"])));
function Layout(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React__default['default'].createElement(AppWrapper, null, /*#__PURE__*/React__default['default'].createElement(ApplicationProvider, null, /*#__PURE__*/React__default['default'].createElement(HeaderWrapper, null, /*#__PURE__*/React__default['default'].createElement(Header, null)), /*#__PURE__*/React__default['default'].createElement(BodyWrapper, null, /*#__PURE__*/React__default['default'].createElement(Web3ReactManager, null, children), /*#__PURE__*/React__default['default'].createElement(Marginer, null))));
}

// TODO stupid way to load web3provider
var ErrorBoundaryWeb3ProviderNetwork = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundaryWeb3ProviderNetwork, _Component);

  var _super = _createSuper(ErrorBoundaryWeb3ProviderNetwork);

  function ErrorBoundaryWeb3ProviderNetwork(props) {
    var _this;

    _classCallCheck(this, ErrorBoundaryWeb3ProviderNetwork);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass$1(ErrorBoundaryWeb3ProviderNetwork, [{
    key: "render",
    value: function render() {
      var Web3ProviderNetwork;

      try {
        Web3ProviderNetwork = core.createWeb3ReactRoot(NetworkContextName);
      } catch (e) {
        return this.props.children;
      }

      if (this.state.hasError) {
        return this.props.children;
      }

      return /*#__PURE__*/React.createElement(Web3ProviderNetwork, {
        getLibrary: getLibrary
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundaryWeb3ProviderNetwork;
}(React$1.Component);

function Wallet(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React$1.StrictMode, null, /*#__PURE__*/React.createElement(core.Web3ReactProvider, {
    getLibrary: getLibrary
  }, /*#__PURE__*/React.createElement(ErrorBoundaryWeb3ProviderNetwork, null, /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(ThemedGlobalStyle, null), children))));
}

exports.Layout = Layout;
exports.default = Wallet;
//# sourceMappingURL=index.js.map
