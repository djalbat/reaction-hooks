"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MainSection;
    }
});
const _index = require("../../../../index");
const _component = /*#__PURE__*/ _interop_require_default(require("../component"));
const _home = /*#__PURE__*/ _interop_require_default(require("../button/home"));
const _articles = /*#__PURE__*/ _interop_require_default(require("../section/articles"));
const _primary = /*#__PURE__*/ _interop_require_default(require("../navigation/primary"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { emitEffect } = _index.useEffects;
class MainSection extends _component.default {
    componentDidMount() {
        const { articleName } = _home.default;
        emitEffect("articleName", articleName);
    }
    componentWillUnmount() {
    ///
    }
    render(update) {
        return /*#__PURE__*/ React.createElement("section", {
            className: "main"
        }, /*#__PURE__*/ React.createElement(_primary.default, null), /*#__PURE__*/ React.createElement(_articles.default, null));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvc2VjdGlvbi9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgSG9tZUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2hvbWVcIjtcbmltcG9ydCBBcnRpY2xlc1NlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vYXJ0aWNsZXNcIjtcbmltcG9ydCBQcmltYXJ5TmF2aWdhdGlvbiBmcm9tIFwiLi4vbmF2aWdhdGlvbi9wcmltYXJ5XCI7XG5cbmNvbnN0IHsgZW1pdEVmZmVjdCB9ID0gdXNlRWZmZWN0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGFydGljbGVOYW1lIH0gPSBIb21lQnV0dG9uO1xuXG4gICAgZW1pdEVmZmVjdChcImFydGljbGVOYW1lXCIsIGFydGljbGVOYW1lKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPFByaW1hcnlOYXZpZ2F0aW9uLz5cbiAgICAgICAgPEFydGljbGVzU2VjdGlvbi8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWFpblNlY3Rpb24iLCJlbWl0RWZmZWN0IiwidXNlRWZmZWN0cyIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwiYXJ0aWNsZU5hbWUiLCJIb21lQnV0dG9uIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiUHJpbWFyeU5hdmlnYXRpb24iLCJBcnRpY2xlc1NlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7dUJBVE07a0VBRUw7NkRBQ0M7aUVBQ0s7Z0VBQ0U7Ozs7OztBQUU5QixNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxpQkFBVTtBQUVsQixNQUFNRixvQkFBb0JHLGtCQUFTO0lBQ2hEQyxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsYUFBVTtRQUVsQ0wsV0FBVyxlQUFlSTtJQUM1QjtJQUVBRSx1QkFBdUI7SUFDckIsR0FBRztJQUNMO0lBRUFDLE9BQU9DLE1BQU0sRUFBRTtRQUNiLHFCQUVFLG9CQUFDQztZQUFRQyxXQUFVO3lCQUNqQixvQkFBQ0MsZ0JBQWlCLHVCQUNsQixvQkFBQ0MsaUJBQWU7SUFJdEI7QUFDRiJ9