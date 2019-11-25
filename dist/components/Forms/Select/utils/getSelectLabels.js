"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pill = _interopRequireDefault(require("../../../Elements/Pill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSelectedLabels = function getSelectedLabels(items, multiStyle) {
  if (Array.isArray(items)) {
    if (multiStyle === 'pills') {
      return items.map(function (_ref) {
        var label = _ref.label;
        return _react["default"].createElement(_Pill["default"], {
          key: label
        }, label);
      });
    }

    return items.map(function (_ref2) {
      var label = _ref2.label;
      return label;
    }).join(', ');
  }

  return items.label;
};

var _default = getSelectedLabels;
exports["default"] = _default;
//# sourceMappingURL=getSelectLabels.js.map
