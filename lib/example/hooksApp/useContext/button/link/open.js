"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpenLinkButton;
    }
});
const _index = require("../../../../../index");
const { Component } = React;
class OpenLinkButton extends Component {
    getChildContext(context) {
        (0, _index.useContext)(this, context, [
            "openLinkButtonClickHandler"
        ]);
    }
    render(update) {
        const { children } = this.props, clickHandler = this.openLinkButtonClickHandler; ///
        return /*#__PURE__*/ React.createElement("button", {
            className: "open link",
            onClick: clickHandler
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvb3Blbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkxpbmtCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHVzZUNvbnRleHQodGhpcywgY29udGV4dCwgW1xuICAgICAgXCJvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlclwiXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyOyAgLy8vXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wZW4gbGlua1wiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9wZW5MaW5rQnV0dG9uIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInJlbmRlciIsInVwZGF0ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJjbGlja0hhbmRsZXIiLCJvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSk07QUFFM0IsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0M7QUFFUCxNQUFNRix1QkFBdUJDO0lBQzFDRSxnQkFBZ0JDLE9BQU8sRUFBRTtRQUN2QkMsSUFBQUEsaUJBQVUsRUFBQyxJQUFJLEVBQUVELFNBQVM7WUFDeEI7U0FDRDtJQUNIO0lBRUFFLE9BQU9DLE1BQU0sRUFBRTtRQUNiLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLLEVBQ3pCQyxlQUFlLElBQUksQ0FBQ0MsMEJBQTBCLEVBQUcsR0FBRztRQUUxRCxxQkFFRSxvQkFBQ0M7WUFBT0MsV0FBVTtZQUFZQyxTQUFTSjtXQUNwQ0Y7SUFJUDtBQUNGIn0=