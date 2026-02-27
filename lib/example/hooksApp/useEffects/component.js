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
const _constants = require("./constants");
const { Component } = React;
class _default extends Component {
    show(displayStyle = _constants.BLOCK) {
        this.setStyle(_constants.DISPLAY, displayStyle);
    }
    hide() {
        this.setStyle(_constants.DISPLAY, _constants.NONE);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvY29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCB7IE5PTkUsIEJMT0NLLCBESVNQTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykge1xuICAgIHRoaXMuc2V0U3R5bGUoRElTUExBWSwgZGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShESVNQTEFZLCBOT05FKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0Iiwic2hvdyIsImRpc3BsYXlTdHlsZSIsIkJMT0NLIiwic2V0U3R5bGUiLCJESVNQTEFZIiwiaGlkZSIsIk5PTkUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJCQUZxQztBQUZyQyxNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHQztBQUlQLE1BQWYsaUJBQTZCRDtJQUMzQkUsS0FBS0MsZUFBZUMsZ0JBQUssRUFBRTtRQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0Msa0JBQU8sRUFBRUg7SUFDekI7SUFFQUksT0FBTztRQUNMLElBQUksQ0FBQ0YsUUFBUSxDQUFDQyxrQkFBTyxFQUFFRSxlQUFJO0lBQzdCO0FBQ0YifQ==