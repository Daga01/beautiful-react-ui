"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Spinner = function Spinner(props) {
  var color = props.color,
      type = props.type,
      size = props.size,
      className = props.className,
      rest = _objectWithoutProperties(props, ["color", "type", "size", "className"]);

  var classes = (0, _classnames["default"])('bi', 'bi-spinner', "spinner-".concat(color), {
    'spin-sm': size === 'small',
    'spin-lg': size === 'large',
    'spinner-pulse': type === 'pulse',
    'spinner-circle': type === 'circle'
  }, className);
  return _react["default"].createElement("span", _extends({
    className: classes
  }, rest));
};

Spinner.propTypes = {
  color: _shared.Color,
  size: _shared.Size,
  type: _propTypes["default"].oneOf(['circle', 'pulse'])
};
Spinner.defaultProps = {
  color: 'default',
  size: 'default',
  type: 'circle'
};

var _default = _react["default"].memo(Spinner);

exports["default"] = _default;
//# sourceMappingURL=Spinner.js.map
