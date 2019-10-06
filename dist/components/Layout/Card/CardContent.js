"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paragraph = _interopRequireDefault(require("../../Typography/_Paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardContent = function CardContent(_ref) {
  var children = _ref.children,
      textAlign = _ref.textAlign,
      className = _ref.className;
  var classList = (0, _classnames["default"])('card-content', _defineProperty({}, "text-align-".concat(textAlign), !!textAlign), className);
  return _react["default"].createElement(_Paragraph["default"], {
    className: classList
  }, children);
};

CardContent.propTypes = {
  textAlign: _propTypes["default"].oneOf(['center', 'left', 'right', 'justify'])
};
CardContent.defaultProps = {
  textAlign: undefined
};
var _default = CardContent;
exports["default"] = _default;
//# sourceMappingURL=CardContent.js.map