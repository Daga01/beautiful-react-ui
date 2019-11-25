"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].shape({
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].bool]).isRequired,
  label: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool
});

exports["default"] = _default;
//# sourceMappingURL=OptionType.js.map
