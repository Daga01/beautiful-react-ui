"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shared = require("../../../shared");

var checkColumnSize = function checkColumnSize(sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl) {
  if (sm > 12 || md > 12 || lg > 12 || xl > 12 || offset > 12 || offset + sm > 12 || offset + md > 12 || offset + lg > 12 || offset + xl > 12 || offsetSm + sm > 12 || offsetMd + md > 12 || offsetLg + lg > 12 || offsetXl + xl > 12) {
    (0, _shared.warn)('An instance of the GridColumn component received a number of column bigger than 12.' + '\nThis may quite possibly break your layout. \nIf it\'s intentional, please ignore this warn.');
  }
};

var _default = checkColumnSize;
exports["default"] = _default;
//# sourceMappingURL=checkColumnSize.js.map
