"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabContent = function TabContent(props) {
  var active = props.active,
      title = props.title,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["active", "title", "children", "className"]);

  var classList = (0, _classnames["default"])('tab-content', {
    'tab-content-show': active
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement("h3", null, title), children);
};

TabContent.propTypes = {
  active: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  children: _propTypes["default"].node
};
TabContent.defaultProps = {
  children: undefined,
  active: false,
  title: null
};

var _default = _react["default"].memo(TabContent);

exports["default"] = _default;
//# sourceMappingURL=TabContent.js.map