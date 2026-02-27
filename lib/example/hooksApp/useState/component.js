"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComponentUseStateParagraph;
    }
});
const _index = require("../../../index");
const { Component } = React;
let initialCount = 0;
class ComponentUseStateParagraph extends Component {
    render(update, element) {
        const [count, setCount] = (0, _index.useState)(element, initialCount);
        return /*#__PURE__*/ React.createElement("p", {
            onClick: (event)=>setCount(count + 1)
        }, "Component state: ", `${count}`);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmxldCBpbml0aWFsQ291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcih1cGRhdGUsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoZWxlbWVudCwgaW5pdGlhbENvdW50KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIENvbXBvbmVudCBzdGF0ZToge2Ake2NvdW50fWB9XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50VXNlU3RhdGVQYXJhZ3JhcGgiLCJDb21wb25lbnQiLCJSZWFjdCIsImluaXRpYWxDb3VudCIsInJlbmRlciIsInVwZGF0ZSIsImVsZW1lbnQiLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJwIiwib25DbGljayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7O3VCQU5JO0FBRXpCLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDO0FBRXRCLElBQUlDLGVBQWU7QUFFSixNQUFNSCxtQ0FBbUNDO0lBQ3RERyxPQUFPQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtRQUN0QixNQUFNLENBQUVDLE9BQU9DLFNBQVUsR0FBR0MsSUFBQUEsZUFBUSxFQUFDSCxTQUFTSDtRQUU5QyxxQkFFRSxvQkFBQ087WUFBRUMsU0FBUyxDQUFDQyxRQUFVSixTQUFTRCxRQUFRO1dBQUkscUJBQ3hCLEdBQUdBLE9BQU87SUFJbEM7QUFDRiJ9