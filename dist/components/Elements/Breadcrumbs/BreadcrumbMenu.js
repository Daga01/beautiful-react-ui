"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var _BreadcrumbsHiddenList = _interopRequireDefault(require("./BreadcrumbsHiddenList"));

var _shared = require("../../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbMenu = function BreadcrumbMenu(props) {
  var items = props.items,
      maxDisplayedItems = props.maxDisplayedItems;
  var hidingItemsNum = items.length - maxDisplayedItems;
  var hidingItems = items.slice(0, hidingItemsNum);
  var displayingItems = items.slice(hidingItemsNum);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_BreadcrumbsHiddenList["default"], {
    hiddenItems: hidingItems,
    className: "bi-breadcrumbs-hiding-menu"
  }), displayingItems.map(function (item) {
    return item.render ? item.render(item) : _react["default"].createElement(_BreadcrumbItem["default"], {
      path: item.path,
      label: item.label,
      icon: item.icon,
      key: item.path || item.label
    });
  }));
};

BreadcrumbMenu.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    path: _propTypes["default"].string,
    label: _propTypes["default"].string,
    icon: _shared.IconProp,
    render: _propTypes["default"].func
  })).isRequired,
  maxDisplayedItems: _propTypes["default"].number.isRequired
};

var _default = _react["default"].memo(BreadcrumbMenu);

exports["default"] = _default;
//# sourceMappingURL=BreadcrumbMenu.js.map