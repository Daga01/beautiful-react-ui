"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Label = _interopRequireDefault(require("../Label"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DisplayField = function DisplayField(props) {
  var className = props.className,
      value = props.value,
      valueColor = props.valueColor,
      label = props.label,
      labelColor = props.labelColor,
      borderStyle = props.borderStyle,
      rest = _objectWithoutProperties(props, ["className", "value", "valueColor", "label", "labelColor", "borderStyle"]);

  var classList = (0, _classnames["default"])('bi bi-df', "bi-df-".concat(valueColor), _defineProperty({}, "bi-df-border-".concat(borderStyle), !!borderStyle), className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement(_Label["default"], {
    color: labelColor,
    tagName: "span",
    className: "bi-df-label"
  }, label), _react["default"].createElement("span", {
    className: "bi-df-value"
  }, value));
};

DisplayField.propTypes = {
  label: _propTypes["default"].string.isRequired,
  labelColor: _shared.Color,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  valueColor: _shared.Color,
  borderStyle: _propTypes["default"].oneOf(['solid', 'dashed', 'dotted', 'double', 'none'])
};
DisplayField.defaultProps = {
  labelColor: 'default',
  valueColor: 'default',
  borderStyle: 'solid'
};

var _default = _react["default"].memo(DisplayField);

exports["default"] = _default;
//# sourceMappingURL=DisplayField.js.map