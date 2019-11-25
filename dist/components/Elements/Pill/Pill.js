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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Pill = function Pill(props) {
  var className = props.className,
      children = props.children,
      color = props.color,
      href = props.href,
      render = props.render,
      rounded = props.rounded,
      rest = _objectWithoutProperties(props, ["className", "children", "color", "href", "render", "rounded"]);

  var El = href ? 'a' : 'span';
  var classList = (0, _classnames["default"])('bi bi-pill', "pill-".concat(color), {
    'pill-rounded': rounded,
    'linkable-pill': href
  }, className);
  return _react["default"].createElement(El, _extends({
    className: classList,
    href: href
  }, rest), !render && children, render && render(props));
};

Pill.propTypes = {
  color: _shared.Color,
  href: _propTypes["default"].string,
  rounded: _propTypes["default"].bool,
  render: _propTypes["default"].func,
  children: _propTypes["default"].node
};
Pill.defaultProps = {
  children: null,
  color: 'default',
  href: undefined,
  render: undefined,
  rounded: true
};

var _default = _react["default"].memo(Pill);

exports["default"] = _default;
//# sourceMappingURL=Pill.js.map
