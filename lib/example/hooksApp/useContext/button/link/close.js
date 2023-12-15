"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CloseLinkButton;
    }
});
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
var Component = React.Component;
var CloseLinkButton = /*#__PURE__*/ function(Component) {
    _inherits(CloseLinkButton, Component);
    var _super = _create_super(CloseLinkButton);
    function CloseLinkButton() {
        _class_call_check(this, CloseLinkButton);
        return _super.apply(this, arguments);
    }
    _create_class(CloseLinkButton, [
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                (0, _index.useContext)(this, context, [
                    "closeLinkButtonClickHandler"
                ]);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var clickHandler = this.closeLinkButtonClickHandler; ///
                return /*#__PURE__*/ React.createElement("button", {
                    className: "close link",
                    onClick: clickHandler
                }, "Got it");
            }
        }
    ]);
    return CloseLinkButton;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlTGlua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgdXNlQ29udGV4dCh0aGlzLCBjb250ZXh0LCBbXG4gICAgICBcImNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlclwiXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gdGhpcy5jbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXI7ICAvLy9cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UgbGlua1wiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICAgIEdvdCBpdFxuICAgICAgPC9idXR0b24+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2xvc2VMaW5rQnV0dG9uIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInJlbmRlciIsInVwZGF0ZSIsImNsaWNrSGFuZGxlciIsImNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNLEFBQUVDLFlBQWNDLE1BQWREO0FBRU8sSUFBQSxBQUFNRCxnQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsT0FBTztnQkFDckJDLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxFQUFFRCxTQUFTO29CQUN4QjtpQkFDRDtZQUNIOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsZUFBZSxJQUFJLENBQUNDLDJCQUEyQixFQUFHLEdBQUc7Z0JBRTNELHFCQUVFLG9CQUFDQztvQkFBT0MsV0FBVTtvQkFBYUMsU0FBU0o7bUJBQWM7WUFLMUQ7OztXQWpCbUJSO0VBQXdCQyJ9