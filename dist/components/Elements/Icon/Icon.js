"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeBrandsSvgIcons.fab);

var Icon = function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["name", "color", "size", "className"]);

  var classList = (0, _classnames["default"])('bi bi-icon', "".concat(color ? "icon-".concat(color) : ''), className);
  var faSize;

  if (size === 'small') {
    faSize = 'sm';
  }

  if (size === 'large') {
    faSize = 'lg';
  }

  return _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, _extends({
    icon: name,
    size: faSize,
    className: classList,
    fixedWidth: true
  }, rest));
};

Icon.propTypes = {
  name: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]).isRequired,
  color: _shared.Color,
  size: _shared.Size
};
Icon.defaultProps = {
  color: undefined,
  size: undefined
};

var _default = _react["default"].memo(Icon);

exports["default"] = _default;
//# sourceMappingURL=Icon.js.map
