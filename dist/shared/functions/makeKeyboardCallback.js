"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeCallback = _interopRequireDefault(require("./makeCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SPACE_BAR = 32;
var ENTER_KEY = 13;

var makeKeyboardCallback = function makeKeyboardCallback(callbackProp, overrideValue) {
  var allowedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [SPACE_BAR, ENTER_KEY];
  return function (event) {
    if (allowedKeys.includes(event.keyCode)) {
      var callback = (0, _makeCallback["default"])(callbackProp, overrideValue);
      callback(event);
    }

    return undefined;
  };
};

var _default = makeKeyboardCallback;
exports["default"] = _default;
//# sourceMappingURL=makeKeyboardCallback.js.map