"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpenLinkButton;
    }
});
var _reaction = require("reaction");
var _index = require("../../../../../index");
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
var Component = _reaction.React.Component;
var OpenLinkButton = /*#__PURE__*/ function(Component) {
    _inherits(OpenLinkButton, Component);
    var _super = _create_super(OpenLinkButton);
    function OpenLinkButton() {
        _class_call_check(this, OpenLinkButton);
        return _super.apply(this, arguments);
    }
    _create_class(OpenLinkButton, [
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                (0, _index.useContext)(this, [
                    "openLinkButtonClickHandler"
                ]);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var children = this.props.children, clickHandler = this.openLinkButtonClickHandler; ///
                return /*#__PURE__*/ _reaction.React.createElement("button", {
                    className: "open link",
                    onClick: clickHandler
                }, children);
            }
        }
    ]);
    return OpenLinkButton;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvb3Blbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkxpbmtCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHVzZUNvbnRleHQodGhpcywgW1xuICAgICAgXCJvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlclwiXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyOyAgLy8vXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wZW4gbGlua1wiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9wZW5MaW5rQnV0dG9uIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInJlbmRlciIsInVwZGF0ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJjbGlja0hhbmRsZXIiLCJvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3dCQU5DO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLFlBQWNDLGVBQUssQ0FBbkJEO0FBRU8sSUFBQSxBQUFNRCwrQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsT0FBTztnQkFDckJDLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxFQUFFO29CQUNmO2lCQUNEO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNLEFBQUVDLFdBQWEsSUFBSSxDQUFDQyxLQUFLLENBQXZCRCxVQUNGRSxlQUFlLElBQUksQ0FBQ0MsMEJBQTBCLEVBQUcsR0FBRztnQkFFMUQscUJBRUUsOEJBQUNDO29CQUFPQyxXQUFVO29CQUFZQyxTQUFTSjttQkFDcENGO1lBSVA7OztXQWxCbUJSO0VBQXVCQyJ9