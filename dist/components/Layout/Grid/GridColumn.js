"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkColumnSize = _interopRequireDefault(require("./checkColumnSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GridColumn = function GridColumn(props) {
  var _classNames;

  var children = props.children,
      size = props.size,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      offset = props.offset,
      offsetSm = props.offsetSm,
      offsetMd = props.offsetMd,
      offsetLg = props.offsetLg,
      offsetXl = props.offsetXl,
      className = props.className,
      selfAlign = props.selfAlign;
  var classList = (0, _classnames["default"])('bi bi-grid-column', (_classNames = {}, _defineProperty(_classNames, "col-size-".concat(size), !!size), _defineProperty(_classNames, "bi-offset-".concat(offset), !!offset && offset <= 12), _defineProperty(_classNames, "bi-col-sm-".concat(sm), !!sm && sm <= 12), _defineProperty(_classNames, "bi-col-md-".concat(md), !!md && md <= 12), _defineProperty(_classNames, "bi-col-lg-".concat(lg), !!lg && lg <= 12), _defineProperty(_classNames, "bi-col-xl-".concat(xl), !!xl && xl <= 12), _defineProperty(_classNames, "bi-offset-sm-".concat(offsetSm), !!offsetSm && offsetSm <= 12), _defineProperty(_classNames, "bi-offset-md-".concat(offsetMd), !!offsetMd && offsetMd <= 12), _defineProperty(_classNames, "bi-offset-lg-".concat(offsetLg), !!offsetLg && offsetLg <= 12), _defineProperty(_classNames, "bi-offset-xl-".concat(offsetXl), !!offsetXl && offsetXl <= 12), _defineProperty(_classNames, "self-".concat(selfAlign), !!selfAlign), _classNames), className);
  (0, _checkColumnSize["default"])(sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl);
  return _react["default"].createElement("div", {
    className: classList
  }, children);
};

var ColumnWidth = _propTypes["default"].oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6', 7, '7', 8, '8', 9, '9', 10, '10', 11, '11', 12, '12']);

GridColumn.propTypes = {
  size: ColumnWidth,
  sm: ColumnWidth,
  md: ColumnWidth,
  lg: ColumnWidth,
  xl: ColumnWidth,
  offset: ColumnWidth,
  offsetSm: ColumnWidth,
  offsetMd: ColumnWidth,
  offsetLg: ColumnWidth,
  offsetXl: ColumnWidth,
  selfAlign: _propTypes["default"].oneOf(['start', 'center', 'end', 'stretch', 'auto']),
  className: _propTypes["default"].string
};
GridColumn.defaultProps = {
  size: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offset: undefined,
  offsetSm: undefined,
  offsetMd: undefined,
  offsetLg: undefined,
  offsetXl: undefined,
  selfAlign: 'auto',
  className: undefined
};

var _default = _react["default"].memo(GridColumn);

exports["default"] = _default;
//# sourceMappingURL=GridColumn.js.map