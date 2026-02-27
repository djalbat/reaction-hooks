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
const _component = /*#__PURE__*/ _interop_require_default(require("../component"));
const _gotIt = /*#__PURE__*/ _interop_require_default(require("../span/gotIt"));
const _index = require("../../../../index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class GotItDiv extends _component.default {
    getChildContext(context) {
        const showGotItDiv = this.show.bind(this), hideGotItDiv = this.hide.bind(this); ///
        (0, _index.useContext)(this, context, {
            showGotItDiv,
            hideGotItDiv
        });
        return context;
    }
    render(update) {
        const { children } = this.props;
        return /*#__PURE__*/ React.createElement("div", {
            className: "got-it"
        }, /*#__PURE__*/ React.createElement(_gotIt.default, null), /*#__PURE__*/ React.createElement("p", null, children));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvZGl2L2dvdEl0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIlxuaW1wb3J0IEdvdEl0U3BhbiBmcm9tIFwiLi4vc3Bhbi9nb3RJdFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3RJdERpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3Qgc2hvd0dvdEl0RGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlR290SXREaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgdXNlQ29udGV4dCh0aGlzLCBjb250ZXh0LCB7XG4gICAgICBzaG93R290SXREaXYsXG4gICAgICBoaWRlR290SXREaXZcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdC1pdFwiPlxuICAgICAgICA8R290SXRTcGFuLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdERpdiIsIkNvbXBvbmVudCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJzaG93R290SXREaXYiLCJzaG93IiwiYmluZCIsImhpZGVHb3RJdERpdiIsImhpZGUiLCJ1c2VDb250ZXh0IiwicmVuZGVyIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIkdvdEl0U3BhbiIsInAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7a0VBTEM7OERBQ0E7dUJBRUs7Ozs7OztBQUVaLE1BQU1BLGlCQUFpQkMsa0JBQVM7SUFDN0NDLGdCQUFnQkMsT0FBTyxFQUFFO1FBQ3ZCLE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2xDQyxlQUFlLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFL0NHLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxFQUFFTixTQUFTO1lBQ3hCQztZQUNBRztRQUNGO1FBRUEsT0FBT0o7SUFDVDtJQUVBTyxPQUFPQyxNQUFNLEVBQUU7UUFDYixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUUvQixxQkFFRSxvQkFBQ0M7WUFBSUMsV0FBVTt5QkFDYixvQkFBQ0MsY0FBUyx1QkFDVixvQkFBQ0MsV0FDRUw7SUFLVDtBQUNGIn0=