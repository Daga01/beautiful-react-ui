"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var filterOverOptions = function filterOverOptions(options, filter) {
  return options.filter(function (option) {
    return option.label.toLowerCase().includes(filter.toLowerCase());
  });
};

var filterOverGroup = function filterOverGroup(groups, filter) {
  var filteredGroups = groups.map(function (_ref) {
    var name = _ref.name,
        options = _ref.options;
    return {
      name: name,
      options: filterOverOptions(options, filter)
    };
  });
  return filteredGroups.filter(function (_ref2) {
    var options = _ref2.options;
    return options.length > 0;
  });
};

var filterOptions = function filterOptions(items, filter) {
  var hasOptionGroups = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (filter === '' || !filter) return items;
  var method = hasOptionGroups ? filterOverGroup : filterOverOptions;
  return method(items, filter);
};

var _default = filterOptions;
exports["default"] = _default;
//# sourceMappingURL=filterOptions.js.map