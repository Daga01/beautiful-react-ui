"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var getLastChild = function getLastChild(children) {
  var arr = _react.Children.toArray(children);

  return arr.length > 0 ? arr[arr.length - 1] : null;
};

var _default = getLastChild;
exports["default"] = _default;
//# sourceMappingURL=getLastChild.js.map
