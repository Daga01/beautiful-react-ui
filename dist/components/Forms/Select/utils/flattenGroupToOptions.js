"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flow = _interopRequireDefault(require("lodash/fp/flow"));

var _map = _interopRequireDefault(require("lodash/fp/map"));

var _get = _interopRequireDefault(require("lodash/fp/get"));

var _flatten = _interopRequireDefault(require("lodash/fp/flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _flow["default"])([(0, _map["default"])((0, _get["default"])('options')), _flatten["default"]]);

exports["default"] = _default;
//# sourceMappingURL=flattenGroupToOptions.js.map