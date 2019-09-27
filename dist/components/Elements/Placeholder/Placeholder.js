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

var Placeholder = function Placeholder(_ref) {
  var paragraphs = _ref.paragraphs,
      image = _ref.image,
      title = _ref.title,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["paragraphs", "image", "title", "className"]);

  var classList = (0, _classnames["default"])('bi bi-placeholder', {
    'img-placeholder': !!image,
    'img-rounded': image === 'rounded'
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), image && _react["default"].createElement("span", {
    className: "bi-placeholder-img"
  }), _react["default"].createElement("div", {
    className: "bi-placeholder-parag-wrapper"
  }, title && _react["default"].createElement("span", {
    className: "bi-placeholder-title"
  }), Array.from({
    length: paragraphs
  }).map(function (und, index) {
    return _react["default"].createElement("span", {
      key: "par-".concat(index),
      className: "bi-placeholder-paragraph"
    });
  })));
};

Placeholder.propTypes = {
  paragraphs: _propTypes["default"].number,
  title: _propTypes["default"].bool,
  image: _propTypes["default"].oneOf([true, false, 'rounded', 'square'])
};
Placeholder.defaultProps = {
  paragraphs: 1,
  title: false,
  image: false
};

var _default = _react["default"].memo(Placeholder);

exports["default"] = _default;
//# sourceMappingURL=Placeholder.js.map