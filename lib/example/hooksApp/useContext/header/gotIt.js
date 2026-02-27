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
const _component = /*#__PURE__*/ _interop_require_default(require("../component"));
const _open = /*#__PURE__*/ _interop_require_default(require("../button/link/open"));
const _index = require("../../../../index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class GotItHeader extends _component.default {
    getChildContext(context) {
        const showGotItHeader = this.show.bind(this), hideGotItHeader = this.hide.bind(this); ///
        (0, _index.useContext)(this, context, {
            showGotItHeader,
            hideGotItHeader
        });
        return context;
    }
    render(update) {
        const { children } = this.props;
        return /*#__PURE__*/ React.createElement("header", {
            className: "got-it"
        }, "[", /*#__PURE__*/ React.createElement(_open.default, null, children), "]");
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvaGVhZGVyL2dvdEl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIjtcbmltcG9ydCBPcGVuTGlua0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2xpbmsvb3BlblwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2hvd0dvdEl0SGVhZGVyID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGhpZGVHb3RJdEhlYWRlciA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHVzZUNvbnRleHQodGhpcywgY29udGV4dCwge1xuICAgICAgc2hvd0dvdEl0SGVhZGVyLFxuICAgICAgaGlkZUdvdEl0SGVhZGVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgW1xuICAgICAgICA8T3BlbkxpbmtCdXR0b24+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L09wZW5MaW5rQnV0dG9uPlxuICAgICAgICBdXG4gICAgICA8L2hlYWRlcj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdEhlYWRlciIsIkNvbXBvbmVudCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJzaG93R290SXRIZWFkZXIiLCJzaG93IiwiYmluZCIsImhpZGVHb3RJdEhlYWRlciIsImhpZGUiLCJ1c2VDb250ZXh0IiwicmVuZGVyIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhlYWRlciIsImNsYXNzTmFtZSIsIk9wZW5MaW5rQnV0dG9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2tFQUxDOzZEQUNLO3VCQUVBOzs7Ozs7QUFFWixNQUFNQSxvQkFBb0JDLGtCQUFTO0lBQ2hEQyxnQkFBZ0JDLE9BQU8sRUFBRTtRQUN2QixNQUFNQyxrQkFBa0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3JDQyxrQkFBa0IsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztRQUVqREcsSUFBQUEsaUJBQVUsRUFBQyxJQUFJLEVBQUVOLFNBQVM7WUFDeEJDO1lBQ0FHO1FBQ0Y7UUFFQSxPQUFPSjtJQUNUO0lBRUFPLE9BQU9DLE1BQU0sRUFBRTtRQUNiLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBRS9CLHFCQUVFLG9CQUFDQztZQUFPQyxXQUFVO1dBQVMsbUJBRXpCLG9CQUFDQyxhQUFjLFFBQ1pKLFdBQ2M7SUFLdkI7QUFDRiJ9