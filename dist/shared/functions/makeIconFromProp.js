"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../components/Elements/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var makeIconFromProp = function makeIconFromProp(iconProp) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof iconProp === 'string' || Array.isArray(iconProp)) {
    return _react["default"].createElement(_Icon["default"], _extends({
      name: iconProp
    }, defaultProps));
  }

  return _react["default"].cloneElement(iconProp, defaultProps);
};

var _default = makeIconFromProp;
exports["default"] = _default;
//# sourceMappingURL=makeIconFromProp.js.map
