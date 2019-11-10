"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Checkbox = _interopRequireDefault(require("../../Forms/Checkbox"));

var _shared = require("../../../shared");

var _getCheckboxFurtherProps = _interopRequireDefault(require("./getCheckboxFurtherProps"));

var _getDraggingFurtherProps = _interopRequireDefault(require("./getDraggingFurtherProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(props) {
  var checkbox = props.checkbox,
      onChange = props.onChange,
      color = props.color,
      value = props.value,
      icon = props.icon,
      draggable = props.draggable,
      onDragStart = props.onDragStart,
      onDragEnd = props.onDragEnd,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["checkbox", "onChange", "color", "value", "icon", "draggable", "onDragStart", "onDragEnd", "children", "className"]);

  var checkboxProps = (0, _react.useMemo)(function () {
    return (0, _getCheckboxFurtherProps["default"])(checkbox, onChange, value);
  }, [checkbox, onChange, value]);
  var draggingProps = (0, _react.useMemo)(function () {
    return (0, _getDraggingFurtherProps["default"])(draggable, onDragStart, onDragEnd);
  }, [draggable, onDragStart, onDragEnd]);
  var classList = (0, _classnames["default"])('bi-list-item', "bi-list-item-".concat(color), {
    'bi-list-checkable': checkbox,
    'bi-list-item-checked': value,
    'bi-list-item-draggable': draggable
  }, className);
  return _react["default"].createElement("li", _extends({
    className: classList
  }, checkboxProps, draggingProps, rest), icon && (0, _shared.makeIconFromProp)(icon, {
    className: 'bi-list-item-icon'
  }), _react["default"].createElement("span", {
    className: "bi-list-item-content"
  }, children), checkbox && _react["default"].createElement(_Checkbox["default"], {
    onChange: onChange,
    value: value,
    color: color,
    className: "bi-item-checkbox"
  }), draggable && _react["default"].createElement(_Icon["default"], {
    name: "ellipsis-v",
    className: "bi-item-dragicon"
  }));
};

ListItem.propTypes = {
  icon: _shared.IconProp,
  checkbox: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].bool,
  color: _shared.Color,
  draggable: _propTypes["default"].bool,
  onDragStart: _propTypes["default"].func,
  onDragEnd: _propTypes["default"].func
};
ListItem.defaultProps = {
  icon: undefined,
  checkbox: false,
  onChange: undefined,
  value: undefined,
  color: 'default',
  draggable: false,
  onDragStart: undefined,
  onDragEnd: undefined
};

var _default = _react["default"].memo(ListItem);

exports["default"] = _default;
//# sourceMappingURL=ListItem.js.map