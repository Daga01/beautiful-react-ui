"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var getFirstChild = function getFirstChild(children) {
  var arr = _react.Children.toArray(children);

  return arr.length > 0 ? arr[0] : null;
};

var _default = getFirstChild;
exports["default"] = _default;
//# sourceMappingURL=getFirstChild.js.map
