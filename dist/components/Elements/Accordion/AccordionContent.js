"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccordionContent = function AccordionContent(props) {
  var internalId = props.internalId,
      children = props.children,
      active = props.active,
      title = props.title,
      onChange = props.onChange,
      iconOpen = props.iconOpen,
      iconClose = props.iconClose,
      rest = _objectWithoutProperties(props, ["internalId", "children", "active", "title", "onChange", "iconOpen", "iconClose"]);

  var classList = (0, _classnames["default"])('bi', 'bi-acc-content', {
    'acc-content-show': active
  });
  var icon = active ? iconOpen : iconClose;
  return _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react["default"].createElement(_Button["default"], {
    block: true,
    color: "transparent",
    outline: true,
    onClick: function onClick() {
      onChange(internalId);
    },
    className: "acc-title-button",
    icon: icon
  }, title), _react["default"].createElement("div", {
    className: "acc-content"
  }, children));
};

AccordionContent.propTypes = {
  internalId: _propTypes["default"].string.isRequired,
  active: _propTypes["default"].bool.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  iconOpen: _shared.IconProp,
  iconClose: _shared.IconProp,
  title: _propTypes["default"].string
};
AccordionContent.defaultProps = {
  title: undefined,
  iconOpen: 'minus',
  iconClose: 'plus'
};

var _default = _react["default"].memo(AccordionContent);

exports["default"] = _default;
//# sourceMappingURL=AccordionContent.js.map