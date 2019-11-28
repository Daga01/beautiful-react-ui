"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shared = require("../../../shared");

var _HelpText = _interopRequireDefault(require("../_HelpText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextArea = function TextArea(props) {
  var color = props.color,
      onChange = props.onChange,
      value = props.value,
      fluid = props.fluid,
      size = props.size,
      placeholder = props.placeholder,
      disabled = props.disabled,
      helpText = props.helpText,
      resizable = props.resizable,
      className = props.className,
      rest = _objectWithoutProperties(props, ["color", "onChange", "value", "fluid", "size", "placeholder", "disabled", "helpText", "resizable", "className"]);

  var classList = (0, _classnames["default"])('bi bi-textarea', "textarea-".concat(color), {
    disabled: disabled,
    'textarea-sm': size === 'small',
    'textarea-lg': size === 'large',
    fluid: fluid,
    resizable: resizable
  }, className);
  return _react["default"].createElement("div", {
    className: classList
  }, _react["default"].createElement("textarea", _extends({
    value: value,
    onChange: (0, _shared.makeCallback)(onChange),
    placeholder: placeholder,
    disabled: disabled
  }, rest)), helpText && _react["default"].createElement(_HelpText["default"], {
    text: helpText,
    color: color
  }));
};

TextArea.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  onChange: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  color: _shared.Color,
  size: _shared.Size,
  fluid: _propTypes["default"].bool,
  helpText: _propTypes["default"].string,
  resizable: _propTypes["default"].bool
};
TextArea.defaultProps = {
  value: null,
  onChange: undefined,
  placeholder: 'Insert your text...',
  disabled: false,
  color: 'default',
  size: 'default',
  fluid: false,
  helpText: undefined,
  resizable: false
};

var _default = _react["default"].memo(TextArea);

exports["default"] = _default;
//# sourceMappingURL=TextArea.js.map
