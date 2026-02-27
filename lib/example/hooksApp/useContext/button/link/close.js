"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CloseLinkButton;
    }
});
const _index = require("../../../../../index");
const { Component } = React;
class CloseLinkButton extends Component {
    getChildContext(context) {
        (0, _index.useContext)(this, context, [
            "closeLinkButtonClickHandler"
        ]);
    }
    render(update) {
        const clickHandler = this.closeLinkButtonClickHandler; ///
        return /*#__PURE__*/ React.createElement("button", {
            className: "close link",
            onClick: clickHandler
        }, "Got it");
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlTGlua0J1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgdXNlQ29udGV4dCh0aGlzLCBjb250ZXh0LCBbXG4gICAgICBcImNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlclwiXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gdGhpcy5jbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXI7ICAvLy9cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UgbGlua1wiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICAgIEdvdCBpdFxuICAgICAgPC9idXR0b24+XG5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2xvc2VMaW5rQnV0dG9uIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInJlbmRlciIsInVwZGF0ZSIsImNsaWNrSGFuZGxlciIsImNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSk07QUFFM0IsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0M7QUFFUCxNQUFNRix3QkFBd0JDO0lBQzNDRSxnQkFBZ0JDLE9BQU8sRUFBRTtRQUN2QkMsSUFBQUEsaUJBQVUsRUFBQyxJQUFJLEVBQUVELFNBQVM7WUFDeEI7U0FDRDtJQUNIO0lBRUFFLE9BQU9DLE1BQU0sRUFBRTtRQUNiLE1BQU1DLGVBQWUsSUFBSSxDQUFDQywyQkFBMkIsRUFBRyxHQUFHO1FBRTNELHFCQUVFLG9CQUFDQztZQUFPQyxXQUFVO1lBQWFDLFNBQVNKO1dBQWM7SUFLMUQ7QUFDRiJ9