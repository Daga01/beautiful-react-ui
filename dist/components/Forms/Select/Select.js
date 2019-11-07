"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));

var _SelectDropDown = _interopRequireDefault(require("./SelectDropDown"));

var _FloatingContent = _interopRequireDefault(require("../../Elements/FloatingContent"));

var _optionsAreGrouped = _interopRequireDefault(require("./utils/optionsAreGrouped"));

var _OptionsType = _interopRequireDefault(require("./utils/OptionsType"));

var _ValueType = _interopRequireDefault(require("./utils/ValueType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(props) {
  var options = props.options,
      value = props.value,
      placeholder = props.placeholder,
      onChange = props.onChange,
      toggleOnChange = props.toggleOnChange,
      filtrable = props.filtrable,
      filterInputPlaceholder = props.filterInputPlaceholder,
      filterNoResultLabel = props.filterNoResultLabel,
      fluid = props.fluid,
      multiStyle = props.multiStyle,
      className = props.className,
      rest = _objectWithoutProperties(props, ["options", "value", "placeholder", "onChange", "toggleOnChange", "filtrable", "filterInputPlaceholder", "filterNoResultLabel", "fluid", "multiStyle", "className"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var clearable = Array.isArray(value) ? value.length !== 0 : !!value;
  var hasOptionGroups = (0, _optionsAreGrouped["default"])(options);
  var classList = (0, _classnames["default"])('bi bi-select', {
    clearable: clearable,
    fluid: fluid,
    open: isOpen
  }, className);

  var onChangeHandler = function onChangeHandler(option) {
    if (onChange && option.value !== value) onChange(option.value, options, value);
    if (toggleOnChange) setIsOpen(false);
  };

  var Trigger = _react["default"].createElement(_SelectTrigger["default"], _extends({
    options: options,
    hasOptionGroups: hasOptionGroups,
    value: value,
    placeholder: placeholder,
    multiStyle: multiStyle,
    className: classList,
    onClick: function onClick() {
      return setIsOpen(true);
    },
    onClear: function onClear() {
      return onChange(undefined, options, value);
    },
    clearable: clearable
  }, rest));

  return _react["default"].createElement(_FloatingContent["default"], {
    trigger: Trigger,
    onToggle: function onToggle() {
      return setIsOpen(!isOpen);
    },
    isShown: isOpen,
    placement: "bottom-center",
    widthAsTrigger: true,
    offset: 10
  }, _react["default"].createElement(_SelectDropDown["default"], {
    options: options,
    hasOptionGroups: hasOptionGroups,
    onChange: onChangeHandler,
    value: value,
    filtrable: filtrable,
    filterInputPlaceholder: filterInputPlaceholder,
    filterNoResultLabel: filterNoResultLabel
  }));
};

Select.propTypes = {
  options: _OptionsType["default"].isRequired,
  value: _ValueType["default"],
  onChange: _propTypes["default"].func,
  helpText: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  fluid: _propTypes["default"].bool,
  toggleOnChange: _propTypes["default"].bool,
  filtrable: _propTypes["default"].bool,
  multiStyle: _propTypes["default"].oneOf(['strings', 'pills']),
  filterInputPlaceholder: _propTypes["default"].string,
  filterNoResultLabel: _propTypes["default"].string
};
Select.defaultProps = {
  value: '',
  onChange: undefined,
  placeholder: 'Select...',
  helpText: undefined,
  fluid: false,
  toggleOnChange: true,
  filtrable: false,
  multiStyle: 'pills',
  filterInputPlaceholder: 'Filter options...',
  filterNoResultLabel: 'No options available'
};

var _default = _react["default"].memo(Select);

exports["default"] = _default;
//# sourceMappingURL=Select.js.map