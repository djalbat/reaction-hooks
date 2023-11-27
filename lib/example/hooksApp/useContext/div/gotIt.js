"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GotItDiv;
    }
});
var _component = /*#__PURE__*/ _interop_require_default(require("../component"));
var _gotIt = /*#__PURE__*/ _interop_require_default(require("../span/gotIt"));
var _index = require("../../../../index");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var GotItDiv = /*#__PURE__*/ function(Component) {
    _inherits(GotItDiv, Component);
    var _super = _create_super(GotItDiv);
    function GotItDiv() {
        _class_call_check(this, GotItDiv);
        return _super.apply(this, arguments);
    }
    _create_class(GotItDiv, [
        {
            key: "render",
            value: function render(update) {
                var children = this.props.children;
                return /*#__PURE__*/ React.createElement("div", {
                    className: "got-it"
                }, /*#__PURE__*/ React.createElement(_gotIt.default, null), children);
            }
        }
    ]);
    return GotItDiv;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvZGl2L2dvdEl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIlxuaW1wb3J0IEdvdEl0U3BhbiBmcm9tIFwiLi4vc3Bhbi9nb3RJdFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdERpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgPEdvdEl0U3Bhbi8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIC8vIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gIC8vICAgY29uc3Qgc2hvd0dvdEl0RGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgLy8gICAgICAgICBoaWRlR290SXREaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuICAvL1xuICAvLyAgIHVzZUNvbnRleHQodGhpcywge1xuICAvLyAgICAgc2hvd0dvdEl0RGl2LFxuICAvLyAgICAgaGlkZUdvdEl0RGl2XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGNvbnRleHQ7XG4gIC8vIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdERpdiIsInJlbmRlciIsInVwZGF0ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJHb3RJdFNwYW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2dFQUxDOzREQUNBO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSx5QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTSxBQUFFQyxXQUFhLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQ7Z0JBRVIscUJBRUUsb0JBQUNFO29CQUFJQyxXQUFVO2lDQUNiLG9CQUFDQyxjQUFTLFNBQ1RKO1lBSVA7OztXQVptQkg7RUFBaUJRLGtCQUFTIn0=