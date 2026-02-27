"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
const _main = /*#__PURE__*/ _interop_require_default(require("./useEffects/section/main"));
const _gotIt = /*#__PURE__*/ _interop_require_default(require("./useContext/section/gotIt"));
const _function = /*#__PURE__*/ _interop_require_default(require("./useState/function"));
const _component = /*#__PURE__*/ _interop_require_default(require("./useState/component"));
const _createClass = /*#__PURE__*/ _interop_require_default(require("./useState/createClass"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = React;
class View extends Component {
    render(update) {
        return /*#__PURE__*/ React.createElement("div", {
            className: "view"
        }, /*#__PURE__*/ React.createElement("h2", null, "useState"), /*#__PURE__*/ React.createElement(_function.default, null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(_createClass.default, null), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(_component.default, null), /*#__PURE__*/ React.createElement("h2", null, "useContext"), /*#__PURE__*/ React.createElement(_gotIt.default, null), /*#__PURE__*/ React.createElement("h2", null, "useEffects"), /*#__PURE__*/ React.createElement(_main.default, null));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuL3VzZUVmZmVjdHMvc2VjdGlvbi9tYWluXCI7XG5pbXBvcnQgR290SXRTZWN0aW9uIGZyb20gXCIuL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdFwiO1xuaW1wb3J0IEZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGggZnJvbSBcIi4vdXNlU3RhdGUvZnVuY3Rpb25cIjtcbmltcG9ydCBDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCBmcm9tIFwiLi91c2VTdGF0ZS9jb21wb25lbnRcIjtcbmltcG9ydCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIGZyb20gXCIuL3VzZVN0YXRlL2NyZWF0ZUNsYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VTdGF0ZVxuICAgICAgICA8L2gyPlxuICAgICAgICA8RnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPENvbXBvbmVudFVzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHVzZUNvbnRleHRcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPEdvdEl0U2VjdGlvbi8+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VFZmZlY3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxNYWluU2VjdGlvbi8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWaWV3IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJyZW5kZXIiLCJ1cGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIkZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGgiLCJiciIsIkNyZWF0ZUNsYXNzVXNlU3RhdGVQYXJhZ3JhcGgiLCJDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCIsIkdvdEl0U2VjdGlvbiIsIk1haW5TZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXFCQTs7OzZEQU5HOzhEQUNDO2lFQUNhO2tFQUNDO29FQUNFOzs7Ozs7QUFOekMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0M7QUFRUCxNQUFNRixhQUFhQztJQUNoQ0UsT0FBT0MsTUFBTSxFQUFFO1FBQ2IscUJBRUUsb0JBQUNDO1lBQUlDLFdBQVU7eUJBQ2Isb0JBQUNDLFlBQUcsMkJBR0osb0JBQUNDLGlCQUF5Qix1QkFDMUIsb0JBQUNDLDJCQUNELG9CQUFDQyxvQkFBNEIsdUJBQzdCLG9CQUFDRCwyQkFDRCxvQkFBQ0Usa0JBQTBCLHVCQUMzQixvQkFBQ0osWUFBRyw2QkFHSixvQkFBQ0ssY0FBWSx1QkFDYixvQkFBQ0wsWUFBRyw2QkFHSixvQkFBQ00sYUFBVztJQUlsQjtBQUNGIn0=