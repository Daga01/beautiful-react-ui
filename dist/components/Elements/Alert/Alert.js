"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _CloseIcon = _interopRequireDefault(require("../_CloseIcon"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Alert = function Alert(props) {
  var color = props.color,
      solid = props.solid,
      outline = props.outline,
      onClose = props.onClose,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["color", "solid", "outline", "onClose", "children", "className"]);

  var classList = (0, _classnames["default"])("bi bi-alert alert-".concat(color), {
    'alert-solid': solid,
    'alert-outline': outline
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), children, onClose && _react["default"].createElement(_Button["default"], {
    color: "transparent",
    className: "alert-button",
    onClick: onClose
  }, _react["default"].createElement(_CloseIcon["default"], null)));
};

Alert.propTypes = {
  color: _shared.Color,
  solid: _propTypes["default"].bool,
  outline: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
Alert.defaultProps = {
  color: 'default',
  solid: false,
  outline: false,
  onClose: undefined
};

var _default = _react["default"].memo(Alert);

exports["default"] = _default;
//# sourceMappingURL=Alert.js.map