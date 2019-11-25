"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabButton = _interopRequireDefault(require("./TabButton"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var filterTabChildren = function filterTabChildren(child, index, props) {
  if (child.type !== _TabContent["default"]) {
    (0, _shared.warn)('Tab allows only Tab.Content children, other kind of elements will be wiped out');
    return null;
  }

  var result = Object.create(null);
  result.child = _react["default"].cloneElement(child, {
    active: props.active === index
  });
  result.title = child.props.title;
  result.icon = child.props.icon;
  result.disabled = child.props.disabled;
  return result;
};

var Tab = _react["default"].memo(function (props) {
  var children = props.children,
      active = props.active,
      onChange = props.onChange,
      color = props.color,
      orientation = props.orientation,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "active", "onChange", "color", "orientation", "className"]);

  var tabContents = _react.Children.toArray(children).map(function (child, index) {
    return filterTabChildren(child, index, props);
  });

  var classList = (0, _classnames["default"])("bi bi-tab tab-color-".concat(color), {
    'tab-orientation': orientation === 'vertical'
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement("nav", {
    className: "bi-tab-nav"
  }, _react["default"].createElement("ul", null, tabContents.map(function (_ref, index) {
    var title = _ref.title,
        icon = _ref.icon,
        disabled = _ref.disabled;
    return _react["default"].createElement(_TabButton["default"], {
      key: title,
      title: title,
      icon: icon,
      active: active,
      index: index,
      onChange: onChange,
      disabled: disabled
    });
  }))), _react["default"].createElement("section", {
    className: "bi-tab-contents"
  }, tabContents.map(function (_ref2) {
    var child = _ref2.child;
    return child;
  })));
});

Tab.propTypes = {
  color: _shared.Color,
  onChange: _propTypes["default"].func.isRequired,
  active: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  orientation: _propTypes["default"].string,
  children: _propTypes["default"].node
};
Tab.defaultProps = {
  color: 'default',
  orientation: 'horizontal',
  children: undefined
};
Tab.Content = _TabContent["default"];
var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map
