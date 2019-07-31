"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("footer", {
    className: "bi-modal-footer"
  }, children);
};

ModalFooter.propTypes = {
  children: _propTypes["default"].node
};
ModalFooter.defaultProps = {
  children: undefined
};

var _default = _react["default"].memo(ModalFooter);

exports["default"] = _default;
//# sourceMappingURL=ModalFooter.js.map