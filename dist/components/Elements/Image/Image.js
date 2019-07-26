"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      thumb = _ref.thumb,
      rounded = _ref.rounded,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["src", "alt", "thumb", "rounded", "className"]);

  var classList = (0, _classnames["default"])('bi bi-image', {
    'bi-img-thumb': thumb,
    'bi-img-rounded': rounded
  }, className);
  return _react["default"].createElement("img", _extends({
    src: src,
    alt: alt,
    className: classList
  }, props));
};

Image.propTypes = {
  src: _propTypes["default"].string.isRequired,
  alt: _propTypes["default"].string.isRequired,
  thumb: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool
};
Image.defaultProps = {
  thumb: false,
  rounded: false
};

var _default = _react["default"].memo(Image);

exports["default"] = _default;
//# sourceMappingURL=Image.js.map