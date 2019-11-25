"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _CardImage = _interopRequireDefault(require("../CardImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var takeCardImageOutOfChildren = function takeCardImageOutOfChildren(children) {
  var childrenArray = _react.Children.toArray(children);

  var cardImage = null;
  var nextChildren = childrenArray.filter(function (child) {
    if (child.type !== _CardImage["default"]) {
      return child;
    }

    cardImage = child;
    return false;
  });
  return [cardImage, nextChildren];
};

var _default = takeCardImageOutOfChildren;
exports["default"] = _default;
//# sourceMappingURL=takeCardImageOutOfChildren.js.map
