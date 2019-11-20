"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropDownButton = function DropDownButton(props) {
  var onClick = props.onClick,
      icon = props.icon,
      children = props.children;
  return _react["default"].createElement("li", {
    className: "bi-dd-btn"
  }, _react["default"].createElement(_Button["default"], {
    onClick: onClick,
    icon: icon,
    fluid: true,
    color: "transparent"
  }, children));
};

DropDownButton.propTypes = {
  onClick: _propTypes["default"].func,
  icon: _shared.IconProp
};
DropDownButton.defaultProps = {
  onClick: undefined,
  icon: undefined
};

var _default = _react["default"].memo(DropDownButton);

exports["default"] = _default;
//# sourceMappingURL=DropDownButton.js.map