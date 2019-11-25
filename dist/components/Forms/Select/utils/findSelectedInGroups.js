"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flattenGroupToOptions = _interopRequireDefault(require("./flattenGroupToOptions"));

var _findSelectedOptions = _interopRequireDefault(require("./findSelectedOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var findSelectedInGroups = function findSelectedInGroups(groups, value) {
  var options = (0, _flattenGroupToOptions["default"])(groups);
  return (0, _findSelectedOptions["default"])(options, value);
};

var _default = findSelectedInGroups;
exports["default"] = _default;
//# sourceMappingURL=findSelectedInGroups.js.map
