"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionIsSelected = _interopRequireDefault(require("./utils/optionIsSelected"));

var _OptionsGroupType = _interopRequireDefault(require("./utils/OptionsGroupType"));

var _SelectOption = _interopRequireDefault(require("./SelectOption"));

var _ValueType = _interopRequireDefault(require("./utils/ValueType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectOptionGroup = function SelectOptionGroup(_ref) {
  var group = _ref.group,
      value = _ref.value,
      onClick = _ref.onClick;
  return _react["default"].createElement("div", {
    className: "select-group"
  }, _react["default"].createElement("div", {
    className: "group-title"
  }, group.name), group.options.map(function (option) {
    return _react["default"].createElement(_SelectOption["default"], {
      option: option,
      selected: (0, _optionIsSelected["default"])(option, value),
      onClick: onClick,
      key: option.value
    });
  }));
};

SelectOptionGroup.propTypes = {
  group: _OptionsGroupType["default"].isRequired,
  value: _ValueType["default"].isRequired,
  onClick: _propTypes["default"].func.isRequired
};
var _default = SelectOptionGroup;
exports["default"] = _default;
//# sourceMappingURL=SelectOptionGroup.js.map