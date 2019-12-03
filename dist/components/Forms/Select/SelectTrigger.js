"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SelectLabel = _interopRequireDefault(require("./SelectLabel"));

var _Caret = _interopRequireDefault(require("../../Elements/_Caret"));

var _CloseIcon = _interopRequireDefault(require("../../Elements/_CloseIcon"));

var _OptionsType = _interopRequireDefault(require("./utils/OptionsType"));

var _HelpText = _interopRequireDefault(require("../_HelpText"));

var _ValueType = _interopRequireDefault(require("./utils/ValueType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SelectTrigger = function SelectTrigger(props) {
  var value = props.value,
      options = props.options,
      placeholder = props.placeholder,
      clearable = props.clearable,
      onClear = props.onClear,
      helpText = props.helpText,
      hasOptionGroups = props.hasOptionGroups,
      multiStyle = props.multiStyle,
      className = props.className,
      rest = _objectWithoutProperties(props, ["value", "options", "placeholder", "clearable", "onClear", "helpText", "hasOptionGroups", "multiStyle", "className"]);

  var onClearHandler = function onClearHandler(event) {
    if (onClear) {
      event.preventDefault();
      event.stopPropagation();
      onClear();
    }
  };

  var classList = (0, _classnames["default"])('bi-select-element', {
    'select-multi': Array.isArray(value) && value.length >= 1
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", _extends({
    className: className
  }, rest), _react["default"].createElement("div", {
    className: classList,
    role: "button",
    tabIndex: 0
  }, _react["default"].createElement(_SelectLabel["default"], {
    value: value,
    options: options,
    placeholder: placeholder,
    hasOptionGroups: hasOptionGroups,
    multiStyle: multiStyle
  }), clearable && value && value.length > 0 && _react["default"].createElement("span", {
    className: "sel-clear-x",
    onClick: onClearHandler,
    onKeyDown: onClearHandler,
    role: "button",
    tabIndex: 0
  }, _react["default"].createElement(_CloseIcon["default"], null)), _react["default"].createElement(_Caret["default"], null))), helpText && _react["default"].createElement(_HelpText["default"], {
    text: helpText
  }));
};

SelectTrigger.propTypes = {
  options: _OptionsType["default"].isRequired,
  value: _ValueType["default"],
  hasOptionGroups: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  multiStyle: _propTypes["default"].oneOf(['strings', 'pills']),
  helpText: _propTypes["default"].string,
  clearable: _propTypes["default"].bool,
  onClear: _propTypes["default"].func
};
SelectTrigger.defaultProps = {
  value: undefined,
  placeholder: undefined,
  hasOptionGroups: false,
  helpText: undefined,
  multiStyle: 'pills',
  clearable: true,
  onClear: undefined
};

var _default = _react["default"].memo(SelectTrigger);

exports["default"] = _default;
//# sourceMappingURL=SelectTrigger.js.map
