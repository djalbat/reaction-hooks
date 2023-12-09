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
function useContext(element, context, mapOrNames) {
    if (mapOrNames === undefined) {
        mapOrNames = Object.keys(context); ///
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGVsZW1lbnQsIGluaXRpYWxTdGF0ZSkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsO1xuXG4gICAgZWxlbWVudC5yZWRyYXcodXBkYXRlKTtcbiAgfV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChlbGVtZW50LCBjb250ZXh0LCBtYXBPck5hbWVzKSB7XG4gIGlmIChtYXBPck5hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXBPck5hbWVzID0gT2JqZWN0LmtleXMoY29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIGlmIChtYXBPck5hbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25zdCBuYW1lcyA9IG1hcE9yTmFtZXM7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IGNvbnRleHRbbmFtZV07XG5cbiAgICAgIGRlbGV0ZSBjb250ZXh0W25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hcCA9IG1hcE9yTmFtZXM7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBtYXApO1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZWxlbWVudFRvU3RhdGVXZWFrTWFwIiwiV2Vha01hcCIsImVsZW1lbnQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImhhcyIsImdldCIsInNldCIsInVwZGF0ZWRTdGF0ZSIsInVwZGF0ZSIsInJlZHJhdyIsImNvbnRleHQiLCJtYXBPck5hbWVzIiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsIkFycmF5IiwibmFtZXMiLCJmb3JFYWNoIiwibmFtZSIsIm1hcCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMEJnQkEsVUFBVTtlQUFWQTs7SUF0QkFDLFFBQVE7ZUFBUkE7Ozs7Ozs7Ozs7QUFGaEIsSUFBTUMsd0JBQXdCLElBQUlDO0FBRTNCLFNBQVNGLFNBQVNHLE9BQU8sRUFBRUMsWUFBWTtJQUM1QyxJQUFJQztJQUVKLElBQUlKLHNCQUFzQkssR0FBRyxDQUFDSCxVQUFVO1FBQ3RDRSxRQUFRSixzQkFBc0JNLEdBQUcsQ0FBQ0o7SUFDcEMsT0FBTztRQUNMRSxRQUFRRCxjQUFjLEdBQUc7UUFFekJILHNCQUFzQk8sR0FBRyxDQUFDTCxTQUFTRTtJQUNyQztJQUVBLE9BQVE7UUFBRUE7UUFBTyxTQUFDSTtZQUNoQkosUUFBUUksY0FBZSxHQUFHO1lBRTFCUixzQkFBc0JPLEdBQUcsQ0FBQ0wsU0FBU0U7WUFFbkMsSUFBTUssU0FBUztZQUVmUCxRQUFRUSxNQUFNLENBQUNEO1FBQ2pCO0tBQUU7QUFDSjtBQUVPLFNBQVNYLFdBQVdJLE9BQU8sRUFBRVMsT0FBTyxFQUFFQyxVQUFVO0lBQ3JELElBQUlBLGVBQWVDLFdBQVc7UUFDNUJELGFBQWFFLE9BQU9DLElBQUksQ0FBQ0osVUFBVyxHQUFHO0lBQ3pDO0lBRUEsSUFBSUMsQUFBVSxZQUFWQSxZQUFzQkksUUFBTztRQUMvQixJQUFNQyxRQUFRTCxZQUFZLEdBQUc7UUFFN0JLLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztZQUNiakIsT0FBTyxDQUFDaUIsS0FBSyxHQUFHUixPQUFPLENBQUNRLEtBQUs7WUFFN0IsT0FBT1IsT0FBTyxDQUFDUSxLQUFLO1FBQ3RCO0lBQ0YsT0FBTztRQUNMLElBQU1DLE1BQU1SLFlBQVksR0FBRztRQUUzQkUsT0FBT08sTUFBTSxDQUFDVixTQUFTUztJQUN6QjtBQUNGIn0=