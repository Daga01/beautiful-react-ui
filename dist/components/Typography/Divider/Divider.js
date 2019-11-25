"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Divider = function Divider(props) {
  var fancy = props.fancy,
      clear = props.clear,
      light = props.light,
      line = props.line,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, ["fancy", "clear", "light", "line", "className", "children"]);

  var classes = (0, _classnames["default"])('bi bi-divider', {
    'bi-divider-fancy': fancy,
    'bi-divider-linelong': !children,
    'bi-divider-text': !!children,
    'bi-divider-clearfix': clear,
    'bi-divider-light': light,
    'bi-divider-dashed': line === 'dashed',
    'bi-divider-dotted': line === 'dotted'
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, rest), _react["default"].createElement("span", null, children));
};

Divider.propTypes = {
  fancy: _propTypes["default"].bool,
  clear: _propTypes["default"].bool,
  light: _propTypes["default"].bool,
  line: _propTypes["default"].oneOf(['solid', 'dashed', 'dotted'])
};
Divider.defaultProps = {
  fancy: false,
  clear: true,
  light: false,
  line: 'solid'
};

var _default = _react["default"].memo(Divider);

exports["default"] = _default;
//# sourceMappingURL=Divider.js.map
