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
var GotItSection = /*#__PURE__*/ function(Component) {
    _inherits(GotItSection, Component);
    function GotItSection() {
        _class_call_check(this, GotItSection);
        var _this;
        _this = _call_super(this, GotItSection, arguments), _define_property(_this, "closeLinkButtonClickHandler", function(event) {
            _this.close();
        }), _define_property(_this, "openLinkButtonClickHandler", function(event) {
            _this.open();
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
                return {
                    openLinkButtonClickHandler: openLinkButtonClickHandler,
                    closeLinkButtonClickHandler: closeLinkButtonClickHandler
                };
            }
        },
        {
            key: "childContextSet",
            value: function childContextSet(childContext) {
                Object.assign(this, childContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdvdEl0RGl2IGZyb20gXCIuLi9kaXYvZ290SXRcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IEdvdEl0SGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvZ290SXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290SXRTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZUdvdEl0RGl2KCk7XG4gICAgdGhpcy5zaG93R290SXRIZWFkZXIoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93R290SXREaXYoKTtcbiAgICB0aGlzLmhpZGVHb3RJdEhlYWRlcigpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlciA9IHRoaXMub3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICAgICAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gdGhpcy5jbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXI7XG5cbiAgICByZXR1cm4oe1xuICAgICAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgPEdvdEl0SGVhZGVyPlxuICAgICAgICAgIEFuIGV4YW1wbGUgb2YgYSBtb3JlIGNvbXBsZXggdmlldyBlbGVtZW50XG4gICAgICAgIDwvR290SXRIZWFkZXI+XG4gICAgICAgIDxHb3RJdERpdj5cbiAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBtb3JlIGNvbXBsZXggdmlldyBlbGVtZW50LCB3aGVyZSBkZXNjZW5kYW50IGVsZW1lbnRzIG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGVpciBhc2NlbmRhbnQgZWxlbWVudHMgYW5kIHZpY2UtdmVyc2EuXG4gICAgICAgIDwvR290SXREaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdFNlY3Rpb24iLCJjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImNsb3NlIiwib3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIiLCJvcGVuIiwiaGlkZUdvdEl0RGl2Iiwic2hvd0dvdEl0SGVhZGVyIiwic2hvd0dvdEl0RGl2IiwiaGlkZUdvdEl0SGVhZGVyIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29udGV4dCIsImNoaWxkQ29udGV4dFNldCIsImNoaWxkQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiR290SXRIZWFkZXIiLCJHb3RJdERpdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NERBSkE7Z0VBQ0M7NkRBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSwwQkFDbkJDLHdCQUFBQSwrQkFBOEIsU0FBQ0M7WUFDN0IsTUFBS0MsS0FBSztRQUNaLElBRUFDLHdCQUFBQSw4QkFBNkIsU0FBQ0Y7WUFDNUIsTUFBS0csSUFBSTtRQUNYOzs7a0JBUG1CTDs7WUFTbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNHLFlBQVk7Z0JBQ2pCLElBQUksQ0FBQ0MsZUFBZTtZQUN0Qjs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNHLFlBQVk7Z0JBQ2pCLElBQUksQ0FBQ0MsZUFBZTtZQUN0Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLE9BQU87Z0JBQ3JCLElBQU1QLDZCQUE2QixJQUFJLENBQUNBLDBCQUEwQixFQUM1REgsOEJBQThCLElBQUksQ0FBQ0EsMkJBQTJCO2dCQUVwRSxPQUFPO29CQUNMRyw0QkFBQUE7b0JBQ0FILDZCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWTtnQkFDMUJDLE9BQU9DLE1BQU0sQ0FBQyxJQUFJLEVBQUVGO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2IsS0FBSztZQUNaOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gscUJBRUUsb0JBQUNDO29CQUFRQyxXQUFVO2lDQUNqQixvQkFBQ0MsZUFBVyxRQUFDLDREQUdiLG9CQUFDQyxjQUFRLFFBQUM7WUFNaEI7OztXQXREbUJ2QjtFQUFxQndCLGtCQUFTIn0=