"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OptionType = _interopRequireDefault(require("./OptionType"));

var _OptionsGroupType = _interopRequireDefault(require("./OptionsGroupType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_OptionType["default"]), _propTypes["default"].arrayOf(_OptionsGroupType["default"])]);

exports["default"] = _default;
//# sourceMappingURL=OptionsType.js.map