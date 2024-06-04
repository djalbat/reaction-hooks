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
            key: "getChildContext",
            value: function getChildContext(context) {
                var showGotItDiv = this.show.bind(this), hideGotItDiv = this.hide.bind(this); ///
                (0, _index.useContext)(this, context, {
                    showGotItDiv: showGotItDiv,
                    hideGotItDiv: hideGotItDiv
                });
                return context;
            }
        },
        {
            key: "render",
            value: function render(update) {
                var children = this.props.children;
                return /*#__PURE__*/ React.createElement("div", {
                    className: "got-it"
                }, /*#__PURE__*/ React.createElement(_gotIt.default, null), /*#__PURE__*/ React.createElement("p", null, children));
            }
        }
    ]);
    return GotItDiv;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvZGl2L2dvdEl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIlxuaW1wb3J0IEdvdEl0U3BhbiBmcm9tIFwiLi4vc3Bhbi9nb3RJdFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdERpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2hvd0dvdEl0RGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlR290SXREaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgdXNlQ29udGV4dCh0aGlzLCBjb250ZXh0LCB7XG4gICAgICBzaG93R290SXREaXYsXG4gICAgICBoaWRlR290SXREaXZcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdC1pdFwiPlxuICAgICAgICA8R290SXRTcGFuLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdERpdiIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJzaG93R290SXREaXYiLCJzaG93IiwiYmluZCIsImhpZGVHb3RJdERpdiIsImhpZGUiLCJ1c2VDb250ZXh0IiwicmVuZGVyIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIkdvdEl0U3BhbiIsInAiLCJDb21wb25lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7Z0VBTEM7NERBQ0E7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLHlCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JDLE9BQU87Z0JBQ3JCLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2xDQyxlQUFlLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRS9DRyxJQUFBQSxpQkFBVSxFQUFDLElBQUksRUFBRU4sU0FBUztvQkFDeEJDLGNBQUFBO29CQUNBRyxjQUFBQTtnQkFDRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTSxBQUFFQyxXQUFhLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQ7Z0JBRVIscUJBRUUsb0JBQUNFO29CQUFJQyxXQUFVO2lDQUNiLG9CQUFDQyxjQUFTLHVCQUNWLG9CQUFDQyxXQUNFTDtZQUtUOzs7V0ExQm1CWDtFQUFpQmlCLGtCQUFTIn0=