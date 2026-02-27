"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GotItSection;
    }
});
const _gotIt = /*#__PURE__*/ _interop_require_default(require("../div/gotIt"));
const _component = /*#__PURE__*/ _interop_require_default(require("../component"));
const _gotIt1 = /*#__PURE__*/ _interop_require_default(require("../header/gotIt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class GotItSection extends _component.default {
    closeLinkButtonClickHandler = (event)=>{
        this.close();
    };
    openLinkButtonClickHandler = (event)=>{
        this.open();
    };
    close() {
        this.hideGotItDiv();
        this.showGotItHeader();
    }
    open() {
        this.showGotItDiv();
        this.hideGotItHeader();
    }
    getChildContext(context) {
        const openLinkButtonClickHandler = this.openLinkButtonClickHandler, closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;
        return {
            openLinkButtonClickHandler,
            closeLinkButtonClickHandler
        };
    }
    childContextSet(childContext) {
        Object.assign(this, childContext);
    }
    componentDidMount() {
        this.close();
    }
    componentWillUnmount() {
    ///
    }
    render(update) {
        return /*#__PURE__*/ React.createElement("section", {
            className: "got-it"
        }, /*#__PURE__*/ React.createElement(_gotIt1.default, null, "An example of a more complex view element"), /*#__PURE__*/ React.createElement(_gotIt.default, null, "This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa."));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdvdEl0RGl2IGZyb20gXCIuLi9kaXYvZ290SXRcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IEdvdEl0SGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvZ290SXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290SXRTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuaGlkZUdvdEl0RGl2KCk7XG4gICAgdGhpcy5zaG93R290SXRIZWFkZXIoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zaG93R290SXREaXYoKTtcbiAgICB0aGlzLmhpZGVHb3RJdEhlYWRlcigpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBvcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlciA9IHRoaXMub3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICAgICAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gdGhpcy5jbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXI7XG5cbiAgICByZXR1cm4oe1xuICAgICAgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIsXG4gICAgICBjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXJcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgPEdvdEl0SGVhZGVyPlxuICAgICAgICAgIEFuIGV4YW1wbGUgb2YgYSBtb3JlIGNvbXBsZXggdmlldyBlbGVtZW50XG4gICAgICAgIDwvR290SXRIZWFkZXI+XG4gICAgICAgIDxHb3RJdERpdj5cbiAgICAgICAgICBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgYSBtb3JlIGNvbXBsZXggdmlldyBlbGVtZW50LCB3aGVyZSBkZXNjZW5kYW50IGVsZW1lbnRzIG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGVpciBhc2NlbmRhbnQgZWxlbWVudHMgYW5kIHZpY2UtdmVyc2EuXG4gICAgICAgIDwvR290SXREaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHb3RJdFNlY3Rpb24iLCJDb21wb25lbnQiLCJjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImNsb3NlIiwib3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIiLCJvcGVuIiwiaGlkZUdvdEl0RGl2Iiwic2hvd0dvdEl0SGVhZGVyIiwic2hvd0dvdEl0RGl2IiwiaGlkZUdvdEl0SGVhZGVyIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29udGV4dCIsImNoaWxkQ29udGV4dFNldCIsImNoaWxkQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiR290SXRIZWFkZXIiLCJHb3RJdERpdiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs4REFKQTtrRUFDQzsrREFDRTs7Ozs7O0FBRVQsTUFBTUEscUJBQXFCQyxrQkFBUztJQUNqREMsOEJBQThCLENBQUNDO1FBQzdCLElBQUksQ0FBQ0MsS0FBSztJQUNaLEVBQUM7SUFFREMsNkJBQTZCLENBQUNGO1FBQzVCLElBQUksQ0FBQ0csSUFBSTtJQUNYLEVBQUM7SUFFREYsUUFBUTtRQUNOLElBQUksQ0FBQ0csWUFBWTtRQUNqQixJQUFJLENBQUNDLGVBQWU7SUFDdEI7SUFFQUYsT0FBTztRQUNMLElBQUksQ0FBQ0csWUFBWTtRQUNqQixJQUFJLENBQUNDLGVBQWU7SUFDdEI7SUFFQUMsZ0JBQWdCQyxPQUFPLEVBQUU7UUFDdkIsTUFBTVAsNkJBQTZCLElBQUksQ0FBQ0EsMEJBQTBCLEVBQzVESCw4QkFBOEIsSUFBSSxDQUFDQSwyQkFBMkI7UUFFcEUsT0FBTztZQUNMRztZQUNBSDtRQUNGO0lBQ0Y7SUFFQVcsZ0JBQWdCQyxZQUFZLEVBQUU7UUFDNUJDLE9BQU9DLE1BQU0sQ0FBQyxJQUFJLEVBQUVGO0lBQ3RCO0lBRUFHLG9CQUFvQjtRQUNsQixJQUFJLENBQUNiLEtBQUs7SUFDWjtJQUVBYyx1QkFBdUI7SUFDckIsR0FBRztJQUNMO0lBRUFDLE9BQU9DLE1BQU0sRUFBRTtRQUNiLHFCQUVFLG9CQUFDQztZQUFRQyxXQUFVO3lCQUNqQixvQkFBQ0MsZUFBVyxRQUFDLDREQUdiLG9CQUFDQyxjQUFRLFFBQUM7SUFNaEI7QUFDRiJ9