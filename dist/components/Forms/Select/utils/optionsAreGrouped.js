"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _filter = _interopRequireDefault(require("lodash/fp/filter"));

var _isString = _interopRequireDefault(require("lodash/fp/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isValid = function isValid(_ref) {
  var length = _ref.length;
  return length > 0;
};

var isValidOptionsArray = (0, _flow["default"])((0, _filter["default"])(function (_ref2) {
  var value = _ref2.value,
      label = _ref2.label;
  return value !== undefined && (0, _isString["default"])(label);
}), isValid);

var _default = (0, _flow["default"])((0, _filter["default"])(function (_ref3) {
  var name = _ref3.name,
      options = _ref3.options;
  return (0, _isString["default"])(name) && Array.isArray(options) && isValidOptionsArray(options);
}), isValid);

exports["default"] = _default;
//# sourceMappingURL=optionsAreGrouped.js.map