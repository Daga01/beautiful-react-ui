"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Portal = _interopRequireDefault(require("../_Portal"));

var _ModalTitle = _interopRequireDefault(require("./ModalTitle"));

var _ModalBody = _interopRequireDefault(require("./ModalBody"));

var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var wipeOutIncorrectChildren = function wipeOutIncorrectChildren(child) {
  if (child.type !== _ModalTitle["default"] && child.type !== _ModalBody["default"] && child.type !== _ModalFooter["default"]) {
    (0, _shared.warn)('Modal allows Modal.Title, Modal.Body or Modal.Footer children only, other elements types are wiped out');
    return null;
  }

  return child;
};

var Modal = _react["default"].memo(function (props) {
  var children = props.children,
      className = props.className,
      isOpen = props.isOpen,
      centered = props.centered,
      size = props.size,
      animation = props.animation,
      onBackdropClick = props.onBackdropClick,
      backdropRender = props.backdropRender,
      onShow = props.onShow,
      rest = _objectWithoutProperties(props, ["children", "className", "isOpen", "centered", "size", "animation", "onBackdropClick", "backdropRender", "onShow"]);

  (0, _react.useEffect)(function () {
    if (onShow && isOpen === true) {
      onShow();
    }
  }, [isOpen]);
  var classList = (0, _classnames["default"])('bi bi-modal', {
    'modal-sm': size === 'small',
    'modal-lg': size === 'large',
    'bi-anim-fade-in': animation === 'fade',
    'bi-anim-zoom-in': animation === 'zoom',
    'bi-anim-slide-right': animation === 'slideRight',
    'bi-anim-slide-left': animation === 'slideLeft',
    'bi-anim-slide-bottom': animation === 'slideBottom',
    'bi-anim-slide-top': animation === 'slideTop'
  }, className);
  return _react["default"].createElement(_Portal["default"], {
    id: "bi-modals"
  }, isOpen && _react["default"].createElement("div", {
    className: (0, _classnames["default"])('bi-modal-wrapper', {
      'center-modals': centered
    })
  }, !backdropRender && _react["default"].createElement("div", {
    role: "presentation",
    onClick: (0, _shared.makeCallback)(onBackdropClick),
    className: "bi-backdrop"
  }), backdropRender && backdropRender(props), _react["default"].createElement("div", _extends({
    className: classList
  }, rest), _react.Children.map(children, wipeOutIncorrectChildren))));
});

Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onShow: _propTypes["default"].func,
  centered: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  animation: _propTypes["default"].oneOf(['none', 'fade', 'zoom', 'slideRight', 'slideLeft', 'slideBottom', 'slideTop']),
  onBackdropClick: _propTypes["default"].func,
  backdropRender: _propTypes["default"].func
};
Modal.defaultProps = {
  onShow: undefined,
  centered: false,
  size: 'default',
  animation: 'zoom',
  backdropRender: undefined,
  onBackdropClick: undefined
};
Modal.Title = _ModalTitle["default"];
Modal.Body = _ModalBody["default"];
Modal.Footer = _ModalFooter["default"];
var _default = Modal;
exports["default"] = _default;
//# sourceMappingURL=Modal.js.map