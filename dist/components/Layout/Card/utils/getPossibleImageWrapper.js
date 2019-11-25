"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var getPossibleImageWrapper = function getPossibleImageWrapper(reversed, orientation) {
  var needsTheWrapper = reversed && orientation === 'horizontal';
  var PossibleImageWrapper = needsTheWrapper ? 'div' : _react.Fragment;
  var possibleImageWrapperProps = needsTheWrapper ? {
    className: 'icon-img-container'
  } : {};
  return [PossibleImageWrapper, possibleImageWrapperProps];
};

var _default = getPossibleImageWrapper;
exports["default"] = _default;
//# sourceMappingURL=getPossibleImageWrapper.js.map
