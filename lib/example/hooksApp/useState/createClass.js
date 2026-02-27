"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _index = require("../../../index");
const { createClass } = React;
let initialCount = 0;
const CreateClassUseStateParagraph = createClass({
    render: function(update) {
        const [count, setCount] = (0, _index.useState)(this, initialCount);
        return /*#__PURE__*/ React.createElement("p", {
            onClick: (event)=>setCount(count + 1)
        }, "createClass state: ", `${count}`);
    }
});
const _default = CreateClassUseStateParagraph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NyZWF0ZUNsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlQ2xhc3MgfSA9IFJlYWN0O1xuXG5sZXQgaW5pdGlhbENvdW50ID0gMDtcblxuY29uc3QgQ3JlYXRlQ2xhc3NVc2VTdGF0ZVBhcmFncmFwaCA9IGNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbih1cGRhdGUpIHtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUodGhpcywgaW5pdGlhbENvdW50KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIGNyZWF0ZUNsYXNzIHN0YXRlOiB7YCR7Y291bnR9YH1cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwiUmVhY3QiLCJpbml0aWFsQ291bnQiLCJDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIiwicmVuZGVyIiwidXBkYXRlIiwiY291bnQiLCJzZXRDb3VudCIsInVzZVN0YXRlIiwicCIsIm9uQ2xpY2siLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O3VCQXBCeUI7QUFFekIsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0M7QUFFeEIsSUFBSUMsZUFBZTtBQUVuQixNQUFNQywrQkFBK0JILFlBQVk7SUFDL0NJLFFBQVEsU0FBU0MsTUFBTTtRQUNyQixNQUFNLENBQUVDLE9BQU9DLFNBQVUsR0FBR0MsSUFBQUEsZUFBUSxFQUFDLElBQUksRUFBRU47UUFFM0MscUJBRUUsb0JBQUNPO1lBQUVDLFNBQVMsQ0FBQ0MsUUFBVUosU0FBU0QsUUFBUTtXQUFJLHVCQUN0QixHQUFHQSxPQUFPO0lBSXBDO0FBQ0Y7TUFFQSxXQUFlSCJ9