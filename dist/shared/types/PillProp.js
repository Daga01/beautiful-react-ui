"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Pill = _interopRequireDefault(require("../../components/Elements/Pill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(_Pill["default"])]);

exports["default"] = _default;
//# sourceMappingURL=PillProp.js.map
