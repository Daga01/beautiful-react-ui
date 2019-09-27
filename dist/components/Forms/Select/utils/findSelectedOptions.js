"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var findSingleOption = function findSingleOption(options, value) {
  return options.find(function (option) {
    return option.value === value;
  });
};

var findMultipleOptions = function findMultipleOptions(options, value) {
  return options.filter(function (option) {
    return value.includes(option.value);
  });
};

var findSelectedOptions = function findSelectedOptions(options, value) {
  return Array.isArray(value) ? findMultipleOptions(options, value) : findSingleOption(options, value);
};

var _default = findSelectedOptions;
exports["default"] = _default;
//# sourceMappingURL=findSelectedOptions.js.map