"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FloatingContent = _interopRequireDefault(require("../FloatingContent"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Popover = function Popover(props) {
  var trigger = props.trigger,
      isOpen = props.isOpen,
      onToggle = props.onToggle,
      action = props.action,
      title = props.title,
      placement = props.placement,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["trigger", "isOpen", "onToggle", "action", "title", "placement", "children", "className"]);

  return _react["default"].createElement(_FloatingContent["default"], {
    trigger: trigger,
    onToggle: onToggle,
    isShown: isOpen,
    action: action,
    placement: placement,
    offset: 10
  }, _react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])('bi bi-popover', className)
  }, rest), title && _react["default"].createElement("h2", {
    className: "bi-popover-title"
  }, title), children));
};

Popover.propTypes = {
  trigger: _propTypes["default"].node.isRequired,
  onToggle: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool,
  action: _propTypes["default"].oneOf(['click', 'hover']),
  title: _propTypes["default"].string,
  placement: _shared.Placement
};
Popover.defaultProps = {
  isOpen: false,
  action: 'click',
  title: null,
  placement: 'top-center'
};

var _default = _react["default"].memo(Popover);

exports["default"] = _default;
//# sourceMappingURL=Popover.js.map