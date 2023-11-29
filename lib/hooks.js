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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGVsZW1lbnQsIGluaXRpYWxTdGF0ZSkge1xuICBsZXQgc3RhdGU7XG5cbiAgaWYgKGVsZW1lbnRUb1N0YXRlV2Vha01hcC5oYXMoZWxlbWVudCkpIHtcbiAgICBzdGF0ZSA9IGVsZW1lbnRUb1N0YXRlV2Vha01hcC5nZXQoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7IC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gKFsgc3RhdGUsICh1cGRhdGVkU3RhdGUpID0+IHtcbiAgICBzdGF0ZSA9IHVwZGF0ZWRTdGF0ZTsgIC8vL1xuXG4gICAgZWxlbWVudFRvU3RhdGVXZWFrTWFwLnNldChlbGVtZW50LCBzdGF0ZSk7XG5cbiAgICBjb25zdCB1cGRhdGUgPSBudWxsO1xuXG4gICAgZWxlbWVudC5yZWRyYXcodXBkYXRlKTtcbiAgfV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChlbGVtZW50LCBjb250ZXh0LCBtYXBPck5hbWVzKSB7XG4gIGlmIChtYXBPck5hbWVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBjb25zdCBuYW1lcyA9IG1hcE9yTmFtZXM7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IGNvbnRleHRbbmFtZV07XG5cbiAgICAgIGRlbGV0ZSBjb250ZXh0W25hbWVdO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hcCA9IG1hcE9yTmFtZXM7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBtYXApO1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZWxlbWVudFRvU3RhdGVXZWFrTWFwIiwiV2Vha01hcCIsImVsZW1lbnQiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImhhcyIsImdldCIsInNldCIsInVwZGF0ZWRTdGF0ZSIsInVwZGF0ZSIsInJlZHJhdyIsImNvbnRleHQiLCJtYXBPck5hbWVzIiwiQXJyYXkiLCJuYW1lcyIsImZvckVhY2giLCJuYW1lIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwQmdCQSxVQUFVO2VBQVZBOztJQXRCQUMsUUFBUTtlQUFSQTs7Ozs7Ozs7OztBQUZoQixJQUFNQyx3QkFBd0IsSUFBSUM7QUFFM0IsU0FBU0YsU0FBU0csT0FBTyxFQUFFQyxZQUFZO0lBQzVDLElBQUlDO0lBRUosSUFBSUosc0JBQXNCSyxHQUFHLENBQUNILFVBQVU7UUFDdENFLFFBQVFKLHNCQUFzQk0sR0FBRyxDQUFDSjtJQUNwQyxPQUFPO1FBQ0xFLFFBQVFELGNBQWMsR0FBRztRQUV6Qkgsc0JBQXNCTyxHQUFHLENBQUNMLFNBQVNFO0lBQ3JDO0lBRUEsT0FBUTtRQUFFQTtRQUFPLFNBQUNJO1lBQ2hCSixRQUFRSSxjQUFlLEdBQUc7WUFFMUJSLHNCQUFzQk8sR0FBRyxDQUFDTCxTQUFTRTtZQUVuQyxJQUFNSyxTQUFTO1lBRWZQLFFBQVFRLE1BQU0sQ0FBQ0Q7UUFDakI7S0FBRTtBQUNKO0FBRU8sU0FBU1gsV0FBV0ksT0FBTyxFQUFFUyxPQUFPLEVBQUVDLFVBQVU7SUFDckQsSUFBSUEsQUFBVSxZQUFWQSxZQUFzQkMsUUFBTztRQUMvQixJQUFNQyxRQUFRRixZQUFZLEdBQUc7UUFFN0JFLE1BQU1DLE9BQU8sQ0FBQyxTQUFDQztZQUNiZCxPQUFPLENBQUNjLEtBQUssR0FBR0wsT0FBTyxDQUFDSyxLQUFLO1lBRTdCLE9BQU9MLE9BQU8sQ0FBQ0ssS0FBSztRQUN0QjtJQUNGLE9BQU87UUFDTCxJQUFNQyxNQUFNTCxZQUFZLEdBQUc7UUFFM0JNLE9BQU9DLE1BQU0sQ0FBQ1IsU0FBU007SUFDekI7QUFDRiJ9