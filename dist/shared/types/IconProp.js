"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../components/Elements/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].instanceOf(_Icon["default"])]);

exports["default"] = _default;
//# sourceMappingURL=IconProp.js.map