"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FunctionUseStateParagraph", {
    enumerable: true,
    get: function() {
        return FunctionUseStateParagraph;
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
var initialCount = 0;
var FunctionUseStateParagraph = function(props, context, update, element) {
    var _useState = _sliced_to_array((0, _index.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
    return /*#__PURE__*/ React.createElement("p", {
        onClick: function(event) {
            return setCount(count + 1);
        }
    }, "state: ", "".concat(count));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGluaXRpYWxDb3VudCA9IDA7XG5cbmV4cG9ydCBjb25zdCBGdW5jdGlvblVzZVN0YXRlUGFyYWdyYXBoID0gKHByb3BzLCBjb250ZXh0LCB1cGRhdGUsIGVsZW1lbnQpID0+IHtcbiAgY29uc3QgWyBjb3VudCwgc2V0Q291bnQgXSA9IHVzZVN0YXRlKGluaXRpYWxDb3VudCwgZWxlbWVudCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICBzdGF0ZToge2Ake2NvdW50fWB9XG4gICAgPC9wPlxuXG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGgiLCJpbml0aWFsQ291bnQiLCJwcm9wcyIsImNvbnRleHQiLCJ1cGRhdGUiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwicCIsIm9uQ2xpY2siLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWFBOzs7ZUFBQUE7OztxQkFKWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTUMsZUFBZTtBQUVkLElBQU1ELDRCQUE0QixTQUFDRSxPQUFPQyxTQUFTQyxRQUFRQztJQUNoRSxJQUE0QkMsNkJBQUFBLElBQUFBLGVBQVEsRUFBQ0wsY0FBY0ksY0FBM0NFLFFBQW9CRCxjQUFiRSxXQUFhRjtJQUU1QixxQkFFRSxvQkFBQ0c7UUFBRUMsU0FBUyxTQUFDQzttQkFBVUgsU0FBU0QsUUFBUTs7T0FBSSxXQUNsQyxBQUFDLEdBQVEsT0FBTkE7QUFJakIifQ==