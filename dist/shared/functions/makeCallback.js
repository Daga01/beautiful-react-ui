"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var makeCallback = function makeCallback(callbackProp, overrideValue) {
  return function (event) {
    if (typeof callbackProp === 'function') {
      var value = event.currentTarget.value;
      return callbackProp(event, overrideValue === undefined ? value : overrideValue);
    }

    return undefined;
  };
};

var _default = makeCallback;
exports["default"] = _default;
//# sourceMappingURL=makeCallback.js.map