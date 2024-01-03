"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Article;
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
var Article = /*#__PURE__*/ function(Component) {
    _inherits(Article, Component);
    var _super = _create_super(Article);
    function Article() {
        _class_call_check(this, Article);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "updateHandler", function(update) {
            var name = _this.constructor.name, articleName = update.articleName;
            name === articleName ? _this.show() : _this.hide();
        });
        return _this;
    }
    _create_class(Article, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.discardEffects = (0, _index.useEffects)(this.updateHandler, "articleName");
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.discardEffects();
            }
        }
    ]);
    return Article;
}(_component.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYXJ0aWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyID0gKHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IGFydGljbGVOYW1lIH0gPSB1cGRhdGU7XG5cbiAgICAobmFtZSA9PT0gYXJ0aWNsZU5hbWUpID9cbiAgICAgIHRoaXMuc2hvdygpIDpcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRpc2NhcmRFZmZlY3RzID0gdXNlRWZmZWN0cyh0aGlzLnVwZGF0ZUhhbmRsZXIsIFwiYXJ0aWNsZU5hbWVcIik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2NhcmRFZmZlY3RzKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBcnRpY2xlIiwidXBkYXRlSGFuZGxlciIsInVwZGF0ZSIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsImFydGljbGVOYW1lIiwic2hvdyIsImhpZGUiLCJjb21wb25lbnREaWRNb3VudCIsImRpc2NhcmRFZmZlY3RzIiwidXNlRWZmZWN0cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKTTtnRUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFBLEFBQU1BLHdCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ25CQyxrREFBQUEsaUJBQWdCLFNBQUNDO1lBQ2YsSUFBTSxBQUFFQyxPQUFTLE1BQUtDLFdBQVcsQ0FBekJELE1BQ0YsQUFBRUUsY0FBZ0JILE9BQWhCRztZQUVQRixTQUFTRSxjQUNSLE1BQUtDLElBQUksS0FDUCxNQUFLQyxJQUFJO1FBQ2Y7OztrQkFSbUJQOztZQVVuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsY0FBYyxHQUFHQyxJQUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQ1QsYUFBYSxFQUFFO1lBQ3ZEOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0YsY0FBYztZQUNyQjs7O1dBaEJtQlQ7RUFBZ0JZLGtCQUFTIn0=