"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OptionsType = _interopRequireDefault(require("./utils/OptionsType"));

var _ValueType = _interopRequireDefault(require("./utils/ValueType"));

var _findSelectedOptions = _interopRequireDefault(require("./utils/findSelectedOptions"));

var _findSelectedInGroups = _interopRequireDefault(require("./utils/findSelectedInGroups"));

var _getSelectLabels = _interopRequireDefault(require("./utils/getSelectLabels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectLabel = function SelectLabel(_ref) {
  var options = _ref.options,
      value = _ref.value,
      hasOptionGroups = _ref.hasOptionGroups,
      multiStyle = _ref.multiStyle,
      placeholder = _ref.placeholder;
  var selectedItems = !hasOptionGroups ? (0, _findSelectedOptions["default"])(options, value) : (0, _findSelectedInGroups["default"])(options, value);
  var shouldShowPlaceholder = Array.isArray(selectedItems) ? selectedItems.length === 0 : !selectedItems;
  return _react["default"].createElement("span", {
    className: shouldShowPlaceholder ? 'bi-select-placeholder' : undefined
  }, shouldShowPlaceholder ? placeholder : (0, _getSelectLabels["default"])(selectedItems, multiStyle));
};

SelectLabel.propTypes = {
  options: _OptionsType["default"].isRequired,
  hasOptionGroups: _propTypes["default"].bool,
  value: _ValueType["default"],
  multiStyle: _propTypes["default"].oneOf(['strings', 'pills']),
  placeholder: _propTypes["default"].string
};
SelectLabel.defaultProps = {
  value: undefined,
  hasOptionGroups: false,
  multiStyle: 'pills',
  placeholder: undefined
};

var _default = _react["default"].memo(SelectLabel);

exports["default"] = _default;
//# sourceMappingURL=SelectLabel.js.map
