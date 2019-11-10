"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getDraggingFurtherProps = function getDraggingFurtherProps(draggable, onDragStart, onDragEnd) {
  return !draggable ? {} : {
    draggable: 'true',
    onDragStart: onDragStart,
    onDragEnd: onDragEnd
  };
};

var _default = getDraggingFurtherProps;
exports["default"] = _default;
//# sourceMappingURL=getDraggingFurtherProps.js.map