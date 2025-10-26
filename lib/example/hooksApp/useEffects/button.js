"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Button;
    }
});
var _index = require("../../../index");
var _component = /*#__PURE__*/ _interop_require_default(require("./component"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var emitEffect = _index.useEffects.emitEffect;
var Button = /*#__PURE__*/ function(Component) {
    _inherits(Button, Component);
    function Button() {
        _class_call_check(this, Button);
        var _this;
        _this = _call_super(this, Button, arguments), _define_property(_this, "clickHandler", function(event) {
            var articleName = _this.constructor.articleName;
            emitEffect("articleName", articleName);
        });
        return _this;
    }
    _create_class(Button, [
        {
            key: "render",
            value: function render(update) {
                var text = this.constructor.text;
                return /*#__PURE__*/ React.createElement("button", {
                    onClick: this.clickHandler
                }, text);
            }
        }
    ]);
    return Button;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuY29uc3QgeyBlbWl0RWZmZWN0IH0gPSB1c2VFZmZlY3RzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFydGljbGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgZW1pdEVmZmVjdChcImFydGljbGVOYW1lXCIsIGFydGljbGVOYW1lKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJlbWl0RWZmZWN0IiwidXNlRWZmZWN0cyIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiYXJ0aWNsZU5hbWUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTk07Z0VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUMsYUFBZUMsaUJBQVUsQ0FBekJEO0FBRU8sSUFBQSxBQUFNRCx1QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxvQkFDbkJHLHdCQUFBQSxnQkFBZSxTQUFDQztZQUNkLElBQU0sQUFBRUMsY0FBZ0IsTUFBSyxXQUFXLENBQWhDQTtZQUVSSixXQUFXLGVBQWVJO1FBQzVCOzs7a0JBTG1CTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU0sQUFBRUMsT0FBUyxJQUFJLENBQUMsV0FBVyxDQUF6QkE7Z0JBRVIscUJBRUUsb0JBQUNDO29CQUFPQyxTQUFTLElBQUksQ0FBQ1AsWUFBWTttQkFDL0JLO1lBSVA7OztXQWpCbUJSO0VBQWVXLGtCQUFTIn0=