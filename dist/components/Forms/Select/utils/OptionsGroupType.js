"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OptionType = _interopRequireDefault(require("./OptionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].shape({
  name: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].arrayOf(_OptionType["default"]).isRequired
});

exports["default"] = _default;
//# sourceMappingURL=OptionsGroupType.js.map