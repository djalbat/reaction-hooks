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
const _index = require("../../../index");
const _component = /*#__PURE__*/ _interop_require_default(require("./component"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Article extends _component.default {
    updateHandler = (update)=>{
        const { name } = this.constructor, { articleName } = update;
        name === articleName ? this.show() : this.hide();
    };
    componentDidMount() {
        this.discardEffects = (0, _index.useEffects)(this.updateHandler, "articleName");
    }
    componentWillUnmount() {
        this.discardEffects();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYXJ0aWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0cyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyID0gKHVwZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICB7IGFydGljbGVOYW1lIH0gPSB1cGRhdGU7XG5cbiAgICAobmFtZSA9PT0gYXJ0aWNsZU5hbWUpID9cbiAgICAgIHRoaXMuc2hvdygpIDpcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmRpc2NhcmRFZmZlY3RzID0gdXNlRWZmZWN0cyh0aGlzLnVwZGF0ZUhhbmRsZXIsIFwiYXJ0aWNsZU5hbWVcIik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2NhcmRFZmZlY3RzKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiQ29tcG9uZW50IiwidXBkYXRlSGFuZGxlciIsInVwZGF0ZSIsIm5hbWUiLCJhcnRpY2xlTmFtZSIsInNob3ciLCJoaWRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJkaXNjYXJkRWZmZWN0cyIsInVzZUVmZmVjdHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozt1QkFKTTtrRUFFTDs7Ozs7O0FBRVAsTUFBTUEsZ0JBQWdCQyxrQkFBUztJQUM1Q0MsZ0JBQWdCLENBQUNDO1FBQ2YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUMzQixFQUFFQyxXQUFXLEVBQUUsR0FBR0Y7UUFFdkJDLFNBQVNDLGNBQ1IsSUFBSSxDQUFDQyxJQUFJLEtBQ1AsSUFBSSxDQUFDQyxJQUFJO0lBQ2YsRUFBQztJQUVEQyxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdDLElBQUFBLGlCQUFVLEVBQUMsSUFBSSxDQUFDUixhQUFhLEVBQUU7SUFDdkQ7SUFFQVMsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQ0YsY0FBYztJQUNyQjtBQUNGIn0=