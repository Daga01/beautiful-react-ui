"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Spinner = _interopRequireDefault(require("../../components/Elements/Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makeSpinnerFromProp = function makeSpinnerFromProp(iconProp) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (iconProp === true) {
    return _react["default"].createElement(_Spinner["default"], defaultProps);
  }

  return _react["default"].cloneElement(iconProp, defaultProps);
};

var _default = makeSpinnerFromProp;
exports["default"] = _default;
//# sourceMappingURL=makeSpinnerFromProp.js.map
