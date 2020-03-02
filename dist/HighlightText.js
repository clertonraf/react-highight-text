"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HighlightText = function HighlightText(_ref) {
  var caseSensitive = _ref.caseSensitive,
      highlight = _ref.highlight,
      highlightStyle = _ref.highlightStyle,
      leftTextStyle = _ref.leftTextStyle,
      rightTextStyle = _ref.rightTextStyle,
      text = _ref.text,
      trimHighlight = _ref.trimHighlight;
  var trimmedHighlight = trimHighlight ? highlight.trim() : highlight;
  var index = !!caseSensitive ? text.indexOf(trimmedHighlight) : text.toUpperCase().indexOf(trimmedHighlight.toUpperCase());
  var begin = text.slice(0, index >= 0 ? index : text.length);
  var highlighted = text.slice(index, index >= 0 ? index + trimmedHighlight.length : index);
  var end = text.slice(index >= 0 ? index + trimmedHighlight.length : text.length);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    style: leftTextStyle
  }, begin), _react.default.createElement("span", {
    style: highlightStyle
  }, highlighted), _react.default.createElement("span", {
    style: rightTextStyle
  }, end));
};

var _default = HighlightText;
exports.default = _default;