"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SettingsArticle;
    }
});
var _article = /*#__PURE__*/ _interop_require_default(require("../article"));
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
var SettingsArticle = /*#__PURE__*/ function(Article) {
    _inherits(SettingsArticle, Article);
    function SettingsArticle() {
        _class_call_check(this, SettingsArticle);
        return _call_super(this, SettingsArticle, arguments);
    }
    _create_class(SettingsArticle, [
        {
            key: "render",
            value: function render(update) {
                return /*#__PURE__*/ React.createElement("article", {
                    className: "settings"
                }, /*#__PURE__*/ React.createElement("h1", null, "Settings"));
            }
        }
    ]);
    return SettingsArticle;
}(_article.default);
_define_property(SettingsArticle, "name", "settings");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYXJ0aWNsZS9zZXR0aW5ncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2FydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NBcnRpY2xlIGV4dGVuZHMgQXJ0aWNsZSB7XG4gIHN0YXRpYyBuYW1lID0gXCJzZXR0aW5nc1wiO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJzZXR0aW5nc1wiID5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2V0dGluZ3NBcnRpY2xlIiwicmVuZGVyIiwidXBkYXRlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImgxIiwiQXJ0aWNsZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLHFCQUVFLG9CQUFDQztvQkFBUUMsV0FBVTtpQ0FDakIsb0JBQUNDLFlBQUc7WUFNVjs7O1dBYm1CTDtFQUF3Qk0sZ0JBQU87QUFDbEQsaUJBRG1CTixpQkFDWk8sUUFBTyJ9