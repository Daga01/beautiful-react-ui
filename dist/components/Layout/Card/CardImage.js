"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("../../Elements/Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CardImage = function CardImage(props) {
  return _react["default"].createElement("div", {
    className: "card-img"
  }, _react["default"].createElement(_Image["default"], props));
};

CardImage.propTypes = _Image["default"].propTypes;
var _default = CardImage;
exports["default"] = _default;
//# sourceMappingURL=CardImage.js.map