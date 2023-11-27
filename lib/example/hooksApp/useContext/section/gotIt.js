"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GotItSection;
    }
});
var _gotIt = /*#__PURE__*/ _interop_require_default(require("../div/gotIt"));
var _component = /*#__PURE__*/ _interop_require_default(require("../component"));
var _gotIt1 = /*#__PURE__*/ _interop_require_default(require("../header/gotIt"));
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
var GotItSection = /*#__PURE__*/ function(Component) {
    _inherits(GotItSection, Component);
    var _super = _create_super(GotItSection);
    function GotItSection() {
        _class_call_check(this, GotItSection);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "closeLinkButtonClickHandler", function(event) {
            _this.close();
            event.preventDefault();
        });
        _define_property(_assert_this_initialized(_this), "openLinkButtonClickHandler", function(event) {
            _this.open();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(GotItSection, [
        {
            key: "close",
            value: function close() {
                this.hideGotItDiv();
                this.showGotItHeader();
            }
        },
        {
            key: "open",
            value: function open() {
                this.showGotItDiv();
                this.hideGotItHeader();
            }
        },
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                var openLinkButtonClickHandler = this.openLinkButtonClickHandler, closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;
                (0, _index.useContext)(this, {
                    openLinkButtonClickHandler: openLinkButtonClickHandler,
                    closeLinkButtonClickHandler: closeLinkButtonClickHandler
                });
                return context;
            }
        },
        {
            key: "childContextSet",
            value: function childContextSet(context) {
                (0, _index.useContext)(this, [
                    "showGotItDiv",
                    "hideGotItDiv",
                    "showGotItHeader",
                    "hideGotItHeader"
                ]);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.close();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
            ///
            }
        },
        {
            key: "render",
            value: function render(update) {
                return /*#__PURE__*/ React.createElement("section", {
                    className: "got-it"
                }, /*#__PURE__*/ React.createElement(_gotIt1.default, null, "An example of a more complex view element"), /*#__PURE__*/ React.createElement(_gotIt.default, null, "This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa."));
            }
        }
    ]);
    return GotItSection;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdvdEl0RGl2IGZyb20gXCIuLi9kaXYvZ290SXRcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IEdvdEl0SGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvZ290SXRcIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290SXRTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5vcGVuKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5oaWRlR290SXREaXYoKTtcbiAgICB0aGlzLnNob3dHb3RJdEhlYWRlcigpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNob3dHb3RJdERpdigpO1xuICAgIHRoaXMuaGlkZUdvdEl0SGVhZGVyKCk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IG9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gdGhpcy5vcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlcixcbiAgICAgICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSB0aGlzLmNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlcjtcblxuICAgIHVzZUNvbnRleHQodGhpcywge1xuICAgICAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXJcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNvbnRleHQpIHtcbiAgICB1c2VDb250ZXh0KHRoaXMsIFtcbiAgICAgIFwic2hvd0dvdEl0RGl2XCIsXG4gICAgICBcImhpZGVHb3RJdERpdlwiLFxuICAgICAgXCJzaG93R290SXRIZWFkZXJcIixcbiAgICAgIFwiaGlkZUdvdEl0SGVhZGVyXCJcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdvdC1pdFwiPlxuICAgICAgICA8R290SXRIZWFkZXI+XG4gICAgICAgICAgQW4gZXhhbXBsZSBvZiBhIG1vcmUgY29tcGxleCB2aWV3IGVsZW1lbnRcbiAgICAgICAgPC9Hb3RJdEhlYWRlcj5cbiAgICAgICAgPEdvdEl0RGl2PlxuICAgICAgICAgIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiBhIG1vcmUgY29tcGxleCB2aWV3IGVsZW1lbnQsIHdoZXJlIGRlc2NlbmRhbnQgZWxlbWVudHMgbmVlZCB0byBpbnRlcmFjdCB3aXRoIHRoZWlyIGFzY2VuZGFudCBlbGVtZW50cyBhbmQgdmljZS12ZXJzYS5cbiAgICAgICAgPC9Hb3RJdERpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkdvdEl0U2VjdGlvbiIsImNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiY2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyIiwib3BlbiIsImhpZGVHb3RJdERpdiIsInNob3dHb3RJdEhlYWRlciIsInNob3dHb3RJdERpdiIsImhpZGVHb3RJdEhlYWRlciIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY2hpbGRDb250ZXh0U2V0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInVwZGF0ZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJHb3RJdEhlYWRlciIsIkdvdEl0RGl2IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozs0REFOQTtnRUFDQzs2REFDRTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLCtCQUE4QixTQUFDQztZQUM3QixNQUFLQyxLQUFLO1lBRVZELE1BQU1FLGNBQWM7UUFDdEI7UUFFQUMsa0RBQUFBLDhCQUE2QixTQUFDSDtZQUM1QixNQUFLSSxJQUFJO1lBRVRKLE1BQU1FLGNBQWM7UUFDdEI7OztrQkFYbUJKOztZQWFuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0ksWUFBWTtnQkFDakIsSUFBSSxDQUFDQyxlQUFlO1lBQ3RCOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0csWUFBWTtnQkFDakIsSUFBSSxDQUFDQyxlQUFlO1lBQ3RCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsT0FBTztnQkFDckIsSUFBTVAsNkJBQTZCLElBQUksQ0FBQ0EsMEJBQTBCLEVBQzVESiw4QkFBOEIsSUFBSSxDQUFDQSwyQkFBMkI7Z0JBRXBFWSxJQUFBQSxpQkFBVSxFQUFDLElBQUksRUFBRTtvQkFDZlIsNEJBQUFBO29CQUNBSiw2QkFBQUE7Z0JBQ0Y7Z0JBRUEsT0FBT1c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JGLE9BQU87Z0JBQ3JCQyxJQUFBQSxpQkFBVSxFQUFDLElBQUksRUFBRTtvQkFDZjtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ1osS0FBSztZQUNaOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gscUJBRUUsb0JBQUNDO29CQUFRQyxXQUFVO2lDQUNqQixvQkFBQ0MsZUFBVyxRQUFDLDREQUdiLG9CQUFDQyxjQUFRLFFBQUM7WUFNaEI7OztXQWpFbUJ0QjtFQUFxQnVCLGtCQUFTIn0=