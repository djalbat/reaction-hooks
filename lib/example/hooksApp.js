"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return hooksApp;
    }
});
var _reaction = require("reaction");
require("./hooksApp/preamble");
var _view = /*#__PURE__*/ _interop_require_default(require("./hooksApp/view"));
var _constants = require("./hooksApp/constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hooksApp() {
    var rootDOMElement = document.getElementById(_constants.ROOT);
    _reaction.ReactDOM.render(/*#__PURE__*/ React.createElement(_view.default, null), rootDOMElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdERPTSB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgXCIuL2hvb2tzQXBwL3ByZWFtYmxlXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2hvb2tzQXBwL3ZpZXdcIjtcblxuaW1wb3J0IHsgUk9PVCB9IGZyb20gXCIuL2hvb2tzQXBwL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob29rc0FwcCgpIHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChST09UKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxWaWV3Lz5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJob29rc0FwcCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJPT1QiLCJSZWFjdERPTSIsInJlbmRlciIsIlZpZXciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7d0JBUkM7UUFFbEI7MkRBRVU7eUJBRUk7Ozs7OztBQUVOLFNBQVNBO0lBQ3RCLElBQU1DLGlCQUFpQkMsU0FBU0MsY0FBYyxDQUFDQyxlQUFJO0lBRW5EQyxrQkFBUSxDQUFDQyxNQUFNLGVBRVgsb0JBQUNDLGFBQUksU0FHUE47QUFFSiJ9