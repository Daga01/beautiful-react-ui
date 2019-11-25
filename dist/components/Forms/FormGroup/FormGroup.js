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

var FormGroup = function FormGroup(props) {
  var orientation = props.orientation,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["orientation", "children", "className"]);

  var classList = (0, _classnames["default"])('bi bi-fgroup', {
    'bi-vertical-fgroup': orientation === 'vertical',
    'bi-horizontal-fgroup': orientation === 'horizontal'
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), children);
};

FormGroup.propTypes = {
  orientation: _propTypes["default"].oneOf(['vertical', 'horizontal'])
};
FormGroup.defaultProps = {
  orientation: 'vertical'
};

var _default = _react["default"].memo(FormGroup);

exports["default"] = _default;
//# sourceMappingURL=FormGroup.js.map
