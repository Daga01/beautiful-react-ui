"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SingleValue = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]);

var MultiValue = _propTypes["default"].arrayOf(SingleValue);

var _default = _propTypes["default"].oneOfType([SingleValue, MultiValue]);

exports["default"] = _default;
//# sourceMappingURL=ValueType.js.map
