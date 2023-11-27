"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GotItHeader;
    }
});
var _component = /*#__PURE__*/ _interop_require_default(require("../component"));
var _open = /*#__PURE__*/ _interop_require_default(require("../button/link/open"));
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
var GotItHeader = /*#__PURE__*/ function(Component) {
    _inherits(GotItHeader, Component);
    var _super = _create_super(GotItHeader);
    function GotItHeader() {
        _class_call_check(this, GotItHeader);
        return _super.apply(this, arguments);
    }
    _create_class(GotItHeader, [
        {
            key: "render",
            value: function render(update) {
                var children = this.props.children;
                return /*#__PURE__*/ React.createElement("header", {
                    className: "got-it"
                }, "[", /*#__PURE__*/ React.createElement(_open.default, null, children), "]");
            }
        }
    ]);
    return GotItHeader;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvaGVhZGVyL2dvdEl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIjtcbmltcG9ydCBPcGVuTGlua0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2xpbmsvb3BlblwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgW1xuICAgICAgICA8T3BlbkxpbmtCdXR0b24+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L09wZW5MaW5rQnV0dG9uPlxuICAgICAgICBdXG4gICAgICA8L2hlYWRlcj5cblxuICAgICk7XG4gIH1cblxuICAvLyBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAvLyAgIGNvbnN0IHNob3dHb3RJdEhlYWRlciA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgLy8gICAgICAgICBoaWRlR290SXRIZWFkZXIgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG4gIC8vXG4gIC8vICAgdXNlQ29udGV4dCh0aGlzLCB7XG4gIC8vICAgICBzaG93R290SXRIZWFkZXIsXG4gIC8vICAgICBoaWRlR290SXRIZWFkZXJcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGV4dDtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbIkdvdEl0SGVhZGVyIiwicmVuZGVyIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhlYWRlciIsImNsYXNzTmFtZSIsIk9wZW5MaW5rQnV0dG9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztnRUFMQzsyREFDSztxQkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU0sQUFBRUMsV0FBYSxJQUFJLENBQUNDLEtBQUssQ0FBdkJEO2dCQUVSLHFCQUVFLG9CQUFDRTtvQkFBT0MsV0FBVTttQkFBUyxtQkFFekIsb0JBQUNDLGFBQWMsUUFDWkosV0FDYztZQUt2Qjs7O1dBZm1CSDtFQUFvQlEsa0JBQVMifQ==