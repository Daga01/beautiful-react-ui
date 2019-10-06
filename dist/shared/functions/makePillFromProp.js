"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pill = _interopRequireDefault(require("../../components/Elements/Pill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makePillFromProp = function makePillFromProp(pillProp) {
  var defaultProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof pillProp === 'string') {
    return _react["default"].createElement(_Pill["default"], defaultProp, pillProp);
  }

  return _react["default"].cloneElement(pillProp, defaultProp);
};

var _default = makePillFromProp;
exports["default"] = _default;
//# sourceMappingURL=makePillFromProp.js.map