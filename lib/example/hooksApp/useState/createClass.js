"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../../index");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var createClass = React.createClass;
var initialCount = 0;
var CreateClassUseStateParagraph = createClass({
    render: function render(update) {
        var _useState = _sliced_to_array((0, _index.useState)(this, initialCount), 2), count = _useState[0], setCount = _useState[1];
        return /*#__PURE__*/ React.createElement("p", {
            onClick: function(event) {
                return setCount(count + 1);
            }
        }, "createClass state: ", "".concat(count));
    }
});
var _default = CreateClassUseStateParagraph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NyZWF0ZUNsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlQ2xhc3MgfSA9IFJlYWN0O1xuXG5sZXQgaW5pdGlhbENvdW50ID0gMDtcblxuY29uc3QgQ3JlYXRlQ2xhc3NVc2VTdGF0ZVBhcmFncmFwaCA9IGNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUodGhpcywgaW5pdGlhbENvdW50KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIGNyZWF0ZUNsYXNzIHN0YXRlOiB7YCR7Y291bnR9YH1cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJpbml0aWFsQ291bnQiLCJDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIiwicmVuZGVyIiwidXBkYXRlIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwicCIsIm9uQ2xpY2siLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O3FCQXBCeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUEsY0FBZ0JDLE1BQWhCRDtBQUVSLElBQUlFLGVBQWU7QUFFbkIsSUFBTUMsK0JBQStCSCxZQUFZO0lBQy9DSSxRQUFRLFNBQVJBLE9BQWlCQyxNQUFNO1FBQ3JCLElBQTRCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLElBQUksRUFBRUosbUJBQW5DSyxRQUFvQkQsY0FBYkUsV0FBYUY7UUFFNUIscUJBRUUsb0JBQUNHO1lBQUVDLFNBQVMsU0FBQ0M7dUJBQVVILFNBQVNELFFBQVE7O1dBQUksdUJBQ3RCLEFBQUMsR0FBUSxPQUFOQTtJQUk3QjtBQUNGO0lBRUEsV0FBZUoifQ==