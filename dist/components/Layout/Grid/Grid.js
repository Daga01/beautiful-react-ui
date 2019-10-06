"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _GridColumn = _interopRequireDefault(require("./GridColumn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Grid = _react["default"].memo(function (_ref) {
  var _classNames;

  var children = _ref.children,
      reversed = _ref.reversed,
      itemsAlign = _ref.itemsAlign,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "reversed", "itemsAlign", "className"]);

  var classList = (0, _classnames["default"])('bi bi-grid', (_classNames = {}, _defineProperty(_classNames, "items-".concat(itemsAlign), !!itemsAlign), _defineProperty(_classNames, "reversed", reversed), _classNames), className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, props), children);
});

Grid.propTypes = {
  reversed: _propTypes["default"].bool,
  itemsAlign: _propTypes["default"].oneOf(['start', 'center', 'end', 'stretch', 'baseline'])
};
Grid.defaultProps = {
  reversed: false,
  itemsAlign: 'start'
};
Grid.Column = _GridColumn["default"];
var _default = Grid;
exports["default"] = _default;
//# sourceMappingURL=Grid.js.map