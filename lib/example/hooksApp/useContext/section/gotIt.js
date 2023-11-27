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
            key: "componentDidMount",
            value: function componentDidMount() {
            // useContext(this, [
            //   "showGotItDiv",
            //   "hideGotItDiv",
            //   "showGotItHeader",
            //   "hideGotItHeader"
            // ]);
            // this.close();
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
                var _this_constructor = this.constructor, title = _this_constructor.title, content = _this_constructor.content;
                return /*#__PURE__*/ React.createElement("section", {
                    className: "got-it"
                }, /*#__PURE__*/ React.createElement(_open.default, null, title));
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
        }
    ]);
    return GotItSection;
}(_component.default);
_define_property(GotItSection, "title", "An example of a more complex view element");
_define_property(GotItSection, "content", /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("p", null, "This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa.")));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdvdEl0RGl2IGZyb20gXCIuLi9kaXYvZ290SXRcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IEdvdEl0SGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvZ290SXRcIjtcbmltcG9ydCBPcGVuTGlua0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2xpbmsvb3BlblwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdFNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm9wZW4oKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVHb3RJdERpdigpO1xuICAgIHRoaXMuc2hvd0dvdEl0SGVhZGVyKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd0dvdEl0RGl2KCk7XG4gICAgdGhpcy5oaWRlR290SXRIZWFkZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHVzZUNvbnRleHQodGhpcywgW1xuICAgIC8vICAgXCJzaG93R290SXREaXZcIixcbiAgICAvLyAgIFwiaGlkZUdvdEl0RGl2XCIsXG4gICAgLy8gICBcInNob3dHb3RJdEhlYWRlclwiLFxuICAgIC8vICAgXCJoaWRlR290SXRIZWFkZXJcIlxuICAgIC8vIF0pO1xuXG4gICAgLy8gdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdvdC1pdFwiPlxuICAgICAgICA8T3BlbkxpbmtCdXR0b24+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L09wZW5MaW5rQnV0dG9uPlxuICAgICAgICB7Lyo8R290SXRIZWFkZXI+Ki99XG4gICAgICAgIHsvKiAge3RpdGxlfSovfVxuICAgICAgICB7Lyo8L0dvdEl0SGVhZGVyPiovfVxuICAgICAgICB7Lyo8R290SXREaXY+Ki99XG4gICAgICAgIHsvKiAge2NvbnRlbnR9Ki99XG4gICAgICAgIHsvKjwvR290SXREaXY+Ki99XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICApXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IG9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gdGhpcy5vcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlcixcbiAgICAgICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSB0aGlzLmNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlcjtcblxuICAgIHVzZUNvbnRleHQodGhpcywge1xuICAgICAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXJcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIHRpdGxlID0gXCJBbiBleGFtcGxlIG9mIGEgbW9yZSBjb21wbGV4IHZpZXcgZWxlbWVudFwiO1xuXG4gIHN0YXRpYyBjb250ZW50ID1cblxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyBhbiBleGFtcGxlIG9mIGEgbW9yZSBjb21wbGV4IHZpZXcgZWxlbWVudCwgd2hlcmUgZGVzY2VuZGFudCBlbGVtZW50cyBuZWVkIHRvIGludGVyYWN0IHdpdGggdGhlaXIgYXNjZW5kYW50IGVsZW1lbnRzIGFuZCB2aWNlLXZlcnNhLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gIDtcbn1cbiJdLCJuYW1lcyI6WyJHb3RJdFNlY3Rpb24iLCJjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImNsb3NlIiwicHJldmVudERlZmF1bHQiLCJvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsIm9wZW4iLCJoaWRlR290SXREaXYiLCJzaG93R290SXRIZWFkZXIiLCJzaG93R290SXREaXYiLCJoaWRlR290SXRIZWFkZXIiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwidXBkYXRlIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImNvbnRlbnQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiT3BlbkxpbmtCdXR0b24iLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbXBvbmVudCIsImRpdiIsInAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBBO2dFQUNDOzZEQUNFOzJEQUNHO3FCQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsK0JBQThCLFNBQUNDO1lBQzdCLE1BQUtDLEtBQUs7WUFFVkQsTUFBTUUsY0FBYztRQUN0QjtRQUVBQyxrREFBQUEsOEJBQTZCLFNBQUNIO1lBQzVCLE1BQUtJLElBQUk7WUFFVEosTUFBTUUsY0FBYztRQUN0Qjs7O2tCQVhtQko7O1lBYW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDSSxZQUFZO2dCQUNqQixJQUFJLENBQUNDLGVBQWU7WUFDdEI7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRyxZQUFZO2dCQUNqQixJQUFJLENBQUNDLGVBQWU7WUFDdEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLE1BQU07WUFFTixnQkFBZ0I7WUFDbEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7WUFDRSxHQUFHO1lBQ0w7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUEyQixvQkFBQSxJQUFJLENBQUNDLFdBQVcsRUFBbkNDLFFBQW1CLGtCQUFuQkEsT0FBT0MsVUFBWSxrQkFBWkE7Z0JBRWYscUJBRUUsb0JBQUNDO29CQUFRQyxXQUFVO2lDQUNqQixvQkFBQ0MsYUFBYyxRQUNaSjtZQVdUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsT0FBTztnQkFDckIsSUFBTWpCLDZCQUE2QixJQUFJLENBQUNBLDBCQUEwQixFQUM1REosOEJBQThCLElBQUksQ0FBQ0EsMkJBQTJCO2dCQUVwRXNCLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxFQUFFO29CQUNmbEIsNEJBQUFBO29CQUNBSiw2QkFBQUE7Z0JBQ0Y7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztXQXBFbUJ0QjtFQUFxQndCLGtCQUFTO0FBc0VqRCxpQkF0RW1CeEIsY0FzRVpnQixTQUFRO0FBRWYsaUJBeEVtQmhCLGNBd0VaaUIseUJBRUwsb0JBQUNRLDJCQUNDLG9CQUFDQyxXQUFFIn0=