"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabButton = function TabButton(props) {
  var title = props.title,
      icon = props.icon,
      active = props.active,
      index = props.index,
      onChange = props.onChange,
      disabled = props.disabled;

  var clickOrKeyDownHandler = function clickOrKeyDownHandler() {
    if (!disabled) {
      onChange(index);
    }
  };

  return _react["default"].createElement("li", {
    className: (0, _classnames["default"])({
      'tab-btn-current': active === index,
      'tab-disabled': disabled
    })
  }, _react["default"].createElement("a", {
    onClick: clickOrKeyDownHandler,
    onKeyDown: clickOrKeyDownHandler,
    role: "button",
    tabIndex: 0
  }, !!title && _react["default"].createElement(_react["default"].Fragment, null, !!icon && (0, _shared.makeIconFromProp)(icon), _react["default"].createElement("span", {
    className: "tab-title"
  }, title)), !title && _react["default"].createElement(_react["default"].Fragment, null, !!icon && (0, _shared.makeIconFromProp)(icon) || _react["default"].createElement("span", null, "no  title"))));
};

TabButton.propTypes = {
  index: _propTypes["default"].number,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  active: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  title: _propTypes["default"].string,
  icon: _shared.IconProp
};
TabButton.defaultProps = {
  index: 0,
  disabled: false,
  title: null,
  icon: undefined
};

var _default = _react["default"].memo(TabButton);

exports["default"] = _default;
//# sourceMappingURL=TabButton.js.map
