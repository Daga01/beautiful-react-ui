"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ModalTitle = function ModalTitle(props) {
  var children = props.children;
  return _react["default"].createElement("div", {
    className: "bi-modal-title"
  }, children);
};

ModalTitle.propTypes = {
  children: _propTypes["default"].node
};
ModalTitle.defaultProps = {
  children: undefined
};

var _default = _react["default"].memo(ModalTitle);

exports["default"] = _default;
//# sourceMappingURL=ModalTitle.js.map
