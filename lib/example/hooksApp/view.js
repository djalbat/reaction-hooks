"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _main = /*#__PURE__*/ _interop_require_default(require("./useEffects/section/main"));
var _gotIt = /*#__PURE__*/ _interop_require_default(require("./useContext/section/gotIt"));
var _function = /*#__PURE__*/ _interop_require_default(require("./useState/function"));
var _component = /*#__PURE__*/ _interop_require_default(require("./useState/component"));
var _createClass = /*#__PURE__*/ _interop_require_default(require("./useState/createClass"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Component = React.Component;
var View = /*#__PURE__*/ function(Component) {
    _inherits(View, Component);
    function View() {
        _class_call_check(this, View);
        return _call_super(this, View, arguments);
    }
    _create_class(View, [
        {
            key: "render",
            value: function render(update) {
                return /*#__PURE__*/ React.createElement("div", {
                    className: "view"
                }, /*#__PURE__*/ React.createElement("h2", null, "useState"), /*#__PURE__*/ React.createElement(_function.default, null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(_createClass.default, null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(_component.default, null), /*#__PURE__*/ React.createElement("h2", null, "useContext"), /*#__PURE__*/ React.createElement(_gotIt.default, null), /*#__PURE__*/ React.createElement("h2", null, "useEffects"), /*#__PURE__*/ React.createElement(_main.default, null));
            }
        }
    ]);
    return View;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuL3VzZUVmZmVjdHMvc2VjdGlvbi9tYWluXCI7XG5pbXBvcnQgR290SXRTZWN0aW9uIGZyb20gXCIuL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdFwiO1xuaW1wb3J0IEZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGggZnJvbSBcIi4vdXNlU3RhdGUvZnVuY3Rpb25cIjtcbmltcG9ydCBDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCBmcm9tIFwiLi91c2VTdGF0ZS9jb21wb25lbnRcIjtcbmltcG9ydCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIGZyb20gXCIuL3VzZVN0YXRlL2NyZWF0ZUNsYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VTdGF0ZVxuICAgICAgICA8L2gyPlxuICAgICAgICA8RnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPENvbXBvbmVudFVzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHVzZUNvbnRleHRcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPEdvdEl0U2VjdGlvbi8+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VFZmZlY3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxNYWluU2VjdGlvbi8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJyZW5kZXIiLCJ1cGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIkZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGgiLCJiciIsIkNyZWF0ZUNsYXNzVXNlU3RhdGVQYXJhZ3JhcGgiLCJDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCIsIkdvdEl0U2VjdGlvbiIsIk1haW5TZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFORzs0REFDQzsrREFDYTtnRUFDQztrRUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU56QyxJQUFNLEFBQUVDLFlBQWNDLE1BQWREO0FBUU8sSUFBQSxBQUFNRCxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gscUJBRUUsb0JBQUNDO29CQUFJQyxXQUFVO2lDQUNiLG9CQUFDQyxZQUFHLDJCQUdKLG9CQUFDQyxpQkFBeUIsdUJBQzFCLG9CQUFDQywyQkFDRCxvQkFBQ0Msb0JBQTRCLHVCQUM3QixvQkFBQ0QsMkJBQ0Qsb0JBQUNFLGtCQUEwQix1QkFDM0Isb0JBQUNKLFlBQUcsNkJBR0osb0JBQUNLLGNBQVksdUJBQ2Isb0JBQUNMLFlBQUcsNkJBR0osb0JBQUNNLGFBQVc7WUFJbEI7OztXQXhCbUJiO0VBQWFDIn0=