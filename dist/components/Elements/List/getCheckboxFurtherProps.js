"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shared = require("../../../shared");

var getCheckboxFurtherProps = function getCheckboxFurtherProps(checkbox, onChange, value) {
  return !checkbox ? {} : {
    onClick: (0, _shared.makeCallback)(onChange, !value),
    onKeyUp: (0, _shared.makeKeyboardCallback)(onChange, !value),
    role: 'button',
    tabIndex: 0
  };
};

var _default = getCheckboxFurtherProps;
exports["default"] = _default;
//# sourceMappingURL=getCheckboxFurtherProps.js.map
