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
const initialCount = 0;
const FunctionUseStateParagraph = (props, context, update, element)=>{
    const [count, setCount] = (0, _index.useState)(element, initialCount);
    return /*#__PURE__*/ React.createElement("p", {
        onClick: (event)=>setCount(count + 1)
    }, "Function state: ", `${count}`);
};
const _default = FunctionUseStateParagraph;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IGluaXRpYWxDb3VudCA9IDA7XG5cbmNvbnN0IEZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGggPSAocHJvcHMsIGNvbnRleHQsIHVwZGF0ZSwgZWxlbWVudCkgPT4ge1xuICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoZWxlbWVudCwgaW5pdGlhbENvdW50KTtcblxuICByZXR1cm4gKFxuXG4gICAgPHAgb25DbGljaz17KGV2ZW50KSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgIEZ1bmN0aW9uIHN0YXRlOiB7YCR7Y291bnR9YH1cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGg7XG4iXSwibmFtZXMiOlsiaW5pdGlhbENvdW50IiwiRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaCIsInByb3BzIiwiY29udGV4dCIsInVwZGF0ZSIsImVsZW1lbnQiLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJwIiwib25DbGljayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7dUJBaEJ5QjtBQUV6QixNQUFNQSxlQUFlO0FBRXJCLE1BQU1DLDRCQUE0QixDQUFDQyxPQUFPQyxTQUFTQyxRQUFRQztJQUN6RCxNQUFNLENBQUVDLE9BQU9DLFNBQVUsR0FBR0MsSUFBQUEsZUFBUSxFQUFDSCxTQUFTTDtJQUU5QyxxQkFFRSxvQkFBQ1M7UUFBRUMsU0FBUyxDQUFDQyxRQUFVSixTQUFTRCxRQUFRO09BQUksb0JBQ3pCLEdBQUdBLE9BQU87QUFJakM7TUFFQSxXQUFlTCJ9