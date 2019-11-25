"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _OptionType = _interopRequireDefault(require("./utils/OptionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectOption = function SelectOption(_ref) {
  var option = _ref.option,
      onClick = _ref.onClick,
      selected = _ref.selected;
  var classList = (0, _classnames["default"])('bi-select-opt', {
    selected: selected,
    disabled: option.disabled
  });

  var clickHandler = function clickHandler() {
    if (!option.disabled && onClick) {
      onClick(option);
    }
  };

  return _react["default"].createElement("div", {
    className: classList,
    onClick: clickHandler,
    onKeyDown: clickHandler,
    role: "button",
    tabIndex: 0
  }, option.label);
};

SelectOption.propTypes = {
  option: _OptionType["default"].isRequired,
  onClick: _propTypes["default"].func.isRequired,
  selected: _propTypes["default"].bool
};
SelectOption.defaultProps = {
  selected: false
};

var _default = _react["default"].memo(SelectOption);

exports["default"] = _default;
//# sourceMappingURL=SelectOption.js.map
