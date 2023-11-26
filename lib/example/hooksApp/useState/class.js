"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClassUseStateParagraph", {
    enumerable: true,
    get: function() {
        return ClassUseStateParagraph;
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
var ClassUseStateParagraph = createClass({
    render: function render(update, element) {
        var _useState = _sliced_to_array((0, _index.useState)(initialCount, element), 2), count = _useState[0], setCount = _useState[1];
        return /*#__PURE__*/ React.createElement("p", {
            onClick: function(event) {
                return setCount(count + 1);
            }
        }, "state: ", "".concat(count));
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlQ2xhc3MgfSA9IFJlYWN0O1xuXG5sZXQgaW5pdGlhbENvdW50ID0gMDtcblxuZXhwb3J0IGNvbnN0IENsYXNzVXNlU3RhdGVQYXJhZ3JhcGggPSBjcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24odXBkYXRlLCBlbGVtZW50KSB7XG4gICAgY29uc3QgWyBjb3VudCwgc2V0Q291bnQgXSA9IHVzZVN0YXRlKGluaXRpYWxDb3VudCwgZWxlbWVudCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8cCBvbkNsaWNrPXsoZXZlbnQpID0+IHNldENvdW50KGNvdW50ICsgMSl9PlxuICAgICAgICBzdGF0ZToge2Ake2NvdW50fWB9XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIiwiY3JlYXRlQ2xhc3MiLCJSZWFjdCIsImluaXRpYWxDb3VudCIsInJlbmRlciIsInVwZGF0ZSIsImVsZW1lbnQiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJwIiwib25DbGljayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRYUE7OztlQUFBQTs7O3FCQU5ZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNLEFBQUVDLGNBQWdCQyxNQUFoQkQ7QUFFUixJQUFJRSxlQUFlO0FBRVosSUFBTUgseUJBQXlCQyxZQUFZO0lBQ2hERyxRQUFRLFNBQVJBLE9BQWlCQyxNQUFNLEVBQUVDLE9BQU87UUFDOUIsSUFBNEJDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUNKLGNBQWNHLGNBQTNDRSxRQUFvQkQsY0FBYkUsV0FBYUY7UUFFNUIscUJBRUUsb0JBQUNHO1lBQUVDLFNBQVMsU0FBQ0M7dUJBQVVILFNBQVNELFFBQVE7O1dBQUksV0FDbEMsQUFBQyxHQUFRLE9BQU5BO0lBSWpCO0FBQ0YifQ==