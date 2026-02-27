"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Button;
    }
});
const _index = require("../../../index");
const _component = /*#__PURE__*/ _interop_require_default(require("./component"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { emitEffect } = _index.useEffects;
class Button extends _component.default {
    clickHandler = (event)=>{
        const { articleName } = this.constructor;
        emitEffect("articleName", articleName);
    };
    render(update) {
        const { text } = this.constructor;
        return /*#__PURE__*/ React.createElement("button", {
            onClick: this.clickHandler
        }, text);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuY29uc3QgeyBlbWl0RWZmZWN0IH0gPSB1c2VFZmZlY3RzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFydGljbGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgZW1pdEVmZmVjdChcImFydGljbGVOYW1lXCIsIGFydGljbGVOYW1lKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJlbWl0RWZmZWN0IiwidXNlRWZmZWN0cyIsIkNvbXBvbmVudCIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiYXJ0aWNsZU5hbWUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozt1QkFOTTtrRUFFTDs7Ozs7O0FBRXRCLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGlCQUFVO0FBRWxCLE1BQU1GLGVBQWVHLGtCQUFTO0lBQzNDQyxlQUFlLENBQUNDO1FBQ2QsTUFBTSxFQUFFQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztRQUV4Q0wsV0FBVyxlQUFlSztJQUM1QixFQUFDO0lBRURDLE9BQU9DLE1BQU0sRUFBRTtRQUNiLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFFakMscUJBRUUsb0JBQUNDO1lBQU9DLFNBQVMsSUFBSSxDQUFDUCxZQUFZO1dBQy9CSztJQUlQO0FBQ0YifQ==