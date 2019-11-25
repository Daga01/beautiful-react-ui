"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FloatingContent = _interopRequireDefault(require("../FloatingContent"));

var _DropDownButton = _interopRequireDefault(require("./DropDownButton"));

var _DropDownLink = _interopRequireDefault(require("./DropDownLink"));

var _DropDownDivider = _interopRequireDefault(require("./DropDownDivider"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DropDown = _react["default"].memo(function (props) {
  var trigger = props.trigger,
      placement = props.placement,
      isShown = props.isShown,
      onToggle = props.onToggle,
      pointingArrow = props.pointingArrow,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["trigger", "placement", "isShown", "onToggle", "pointingArrow", "children", "className"]);

  var classList = (0, _classnames["default"])('bi', 'bi-dropdown', {
    'bi-dd-arrow': pointingArrow
  }, className);
  return _react["default"].createElement(_FloatingContent["default"], {
    trigger: trigger,
    placement: placement,
    isShown: isShown,
    onToggle: onToggle
  }, _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement("ul", null, children)));
});

DropDown.propTypes = {
  trigger: _propTypes["default"].node.isRequired,
  isShown: _propTypes["default"].bool,
  onToggle: _propTypes["default"].func.isRequired,
  placement: _shared.Placement,
  pointingArrow: _propTypes["default"].bool
};
DropDown.defaultProps = {
  isShown: false,
  placement: 'bottom-center',
  pointingArrow: true
};
DropDown.Button = _DropDownButton["default"];
DropDown.Link = _DropDownLink["default"];
DropDown.Divider = _DropDownDivider["default"];
var _default = DropDown;
exports["default"] = _default;
//# sourceMappingURL=DropDown.js.map
