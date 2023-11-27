"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useContext: function() {
        return useContext;
    },
    useState: function() {
        return useState;
    }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var elementToStateWeakMap = new WeakMap();
function useState(element, initialState) {
    var state;
    if (elementToStateWeakMap.has(element)) {
        state = elementToStateWeakMap.get(element);
    } else {
        state = initialState; ///
        elementToStateWeakMap.set(element, state);
    }
    return [
        state,
        function(updatedState) {
            state = updatedState; ///
            elementToStateWeakMap.set(element, state);
            var update = null;
            element.redraw(update);
        }
    ];
}
function useContext(element, mapOrNames) {
    var context = element.context;
    if (_instanceof(mapOrNames, Array)) {
        var names = mapOrNames; ///
        names.forEach(function(name) {
            element[name] = context[name];
            delete context[name];
        });
    } else {
        var map = mapOrNames; ///
        Object.assign(context, map);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGVsZW1lbnQsIGluaXRpYWxTdGF0ZSkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsO1xuXG4gICAgZWxlbWVudC5yZWRyYXcodXBkYXRlKTtcbiAgfV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChlbGVtZW50LCBtYXBPck5hbWVzKSB7XG4gIGNvbnN0IHsgY29udGV4dCB9ID0gZWxlbWVudDtcblxuICBpZiAobWFwT3JOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgbmFtZXMgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBjb250ZXh0W25hbWVdO1xuXG4gICAgICBkZWxldGUgY29udGV4dFtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXAgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwgbWFwKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImVsZW1lbnRUb1N0YXRlV2Vha01hcCIsIldlYWtNYXAiLCJlbGVtZW50IiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJoYXMiLCJnZXQiLCJzZXQiLCJ1cGRhdGVkU3RhdGUiLCJ1cGRhdGUiLCJyZWRyYXciLCJtYXBPck5hbWVzIiwiY29udGV4dCIsIkFycmF5IiwibmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMEJnQkEsVUFBVTtlQUFWQTs7SUF0QkFDLFFBQVE7ZUFBUkE7Ozs7Ozs7Ozs7QUFGaEIsSUFBTUMsd0JBQXdCLElBQUlDO0FBRTNCLFNBQVNGLFNBQVNHLE9BQU8sRUFBRUMsWUFBWTtJQUM1QyxJQUFJQztJQUVKLElBQUlKLHNCQUFzQkssR0FBRyxDQUFDSCxVQUFVO1FBQ3RDRSxRQUFRSixzQkFBc0JNLEdBQUcsQ0FBQ0o7SUFDcEMsT0FBTztRQUNMRSxRQUFRRCxjQUFjLEdBQUc7UUFFekJILHNCQUFzQk8sR0FBRyxDQUFDTCxTQUFTRTtJQUNyQztJQUVBLE9BQVE7UUFBRUE7UUFBTyxTQUFDSTtZQUNoQkosUUFBUUksY0FBZSxHQUFHO1lBRTFCUixzQkFBc0JPLEdBQUcsQ0FBQ0wsU0FBU0U7WUFFbkMsSUFBTUssU0FBUztZQUVmUCxRQUFRUSxNQUFNLENBQUNEO1FBQ2pCO0tBQUU7QUFDSjtBQUVPLFNBQVNYLFdBQVdJLE9BQU8sRUFBRVMsVUFBVTtJQUM1QyxJQUFNLEFBQUVDLFVBQVlWLFFBQVpVO0lBRVIsSUFBSUQsQUFBVSxZQUFWQSxZQUFzQkUsUUFBTztRQUMvQixJQUFNQyxRQUFRSCxZQUFZLEdBQUc7UUFFN0JHLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztZQUNiZCxPQUFPLENBQUNjLEtBQUssR0FBR0osT0FBTyxDQUFDSSxLQUFLO1lBRTdCLE9BQU9KLE9BQU8sQ0FBQ0ksS0FBSztRQUN0QjtJQUNGLE9BQU87UUFDTCxJQUFNQyxNQUFNTixZQUFZLEdBQUc7UUFFM0JPLE9BQU9DLE1BQU0sQ0FBQ1AsU0FBU0s7SUFDekI7QUFDRiJ9