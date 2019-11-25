"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("../../Typography/Link"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropDownLink = function DropDownLink(props) {
  var href = props.href,
      icon = props.icon,
      children = props.children;
  return _react["default"].createElement("li", {
    className: "bi-dd-link"
  }, _react["default"].createElement(_Link["default"], {
    href: href
  }, icon && (0, _shared.makeIconFromProp)(icon), _react["default"].createElement("span", null, children)));
};

DropDownLink.propTypes = {
  href: _propTypes["default"].string.isRequired,
  icon: _shared.IconProp
};
DropDownLink.defaultProps = {
  icon: undefined
};

var _default = _react["default"].memo(DropDownLink);

exports["default"] = _default;
//# sourceMappingURL=DropDownLink.js.map
