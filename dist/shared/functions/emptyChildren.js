"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var emptyChildren = function emptyChildren(children) {
  var arr = _react.Children.toArray(children);

  return arr.length === 0 || arr.length === 1 && arr[0] === '';
};

var _default = emptyChildren;
exports["default"] = _default;
//# sourceMappingURL=emptyChildren.js.map