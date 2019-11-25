"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardFooter = function CardFooter(_ref) {
  var children = _ref.children,
      textAlign = _ref.textAlign,
      className = _ref.className;
  var classList = (0, _classnames["default"])('card-footer', _defineProperty({}, "text-align-".concat(textAlign), !!textAlign), className);
  return _react["default"].createElement("footer", {
    className: classList
  }, children);
};

CardFooter.propTypes = {
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify'])
};
CardFooter.defaultProps = {
  textAlign: undefined
};

var _default = _react["default"].memo(CardFooter);

exports["default"] = _default;
//# sourceMappingURL=CardFooter.js.map
