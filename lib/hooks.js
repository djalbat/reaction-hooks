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
    useEffects: function() {
        return useEffects;
    },
    useState: function() {
        return useState;
    }
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var listeners = [];
var elementToStateWeakMap = new WeakMap();
function emitEffect(effect, action) {
    var update = _define_property({}, effect, action);
    listeners.forEach(function(listener) {
        var effects = listener.effects, effectsIncludesEffect = effects.includes(effect);
        if (effectsIncludesEffect) {
            listener(update);
        }
    });
}
Object.assign(useEffects, {
    emitEffect: emitEffect
});
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
function useEffects(listener) {
    for(var _len = arguments.length, effects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        effects[_key - 1] = arguments[_key];
    }
    Object.assign(listener, {
        effects: effects
    });
    listeners.push(listener);
    return function() {
        var discardedListener = listener; ///
        listeners = listeners.filter(function(listener) {
            if (listener !== discardedListener) {
                return true;
            }
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IGxpc3RlbmVycyA9IFtdO1xuXG5jb25zdCBlbGVtZW50VG9TdGF0ZVdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBlbWl0RWZmZWN0KGVmZmVjdCwgYWN0aW9uKSAge1xuICBjb25zdCB1cGRhdGUgPSB7XG4gICAgW2VmZmVjdF06IGFjdGlvblxuICB9O1xuXG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgZWZmZWN0cyB9ID0gbGlzdGVuZXIsXG4gICAgICAgICAgZWZmZWN0c0luY2x1ZGVzRWZmZWN0ID0gZWZmZWN0cy5pbmNsdWRlcyhlZmZlY3QpO1xuXG4gICAgaWYgKGVmZmVjdHNJbmNsdWRlc0VmZmVjdCkge1xuICAgICAgbGlzdGVuZXIodXBkYXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKHVzZUVmZmVjdHMsIHtcbiAgZW1pdEVmZmVjdFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShlbGVtZW50LCBpbml0aWFsU3RhdGUpIHtcbiAgbGV0IHN0YXRlO1xuXG4gIGlmIChlbGVtZW50VG9TdGF0ZVdlYWtNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgc3RhdGUgPSBlbGVtZW50VG9TdGF0ZVdlYWtNYXAuZ2V0KGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlOyAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIChbIHN0YXRlLCAodXBkYXRlZFN0YXRlKSA9PiB7XG4gICAgc3RhdGUgPSB1cGRhdGVkU3RhdGU7ICAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gbnVsbDtcblxuICAgIGVsZW1lbnQucmVkcmF3KHVwZGF0ZSk7XG4gIH1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoZWxlbWVudCwgY29udGV4dCwgbWFwT3JOYW1lcykge1xuICBpZiAobWFwT3JOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFwT3JOYW1lcyA9IE9iamVjdC5rZXlzKGNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBpZiAobWFwT3JOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgbmFtZXMgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBjb250ZXh0W25hbWVdO1xuXG4gICAgICBkZWxldGUgY29udGV4dFtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXAgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwgbWFwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0cyhsaXN0ZW5lciwgLi4uZWZmZWN0cykge1xuICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgZWZmZWN0c1xuICB9KTtcblxuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkaXNjYXJkZWRMaXN0ZW5lciA9IGxpc3RlbmVyOyAvLy9cblxuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAobGlzdGVuZXIgIT09IGRpc2NhcmRlZExpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0cyIsInVzZVN0YXRlIiwibGlzdGVuZXJzIiwiZWxlbWVudFRvU3RhdGVXZWFrTWFwIiwiV2Vha01hcCIsImVtaXRFZmZlY3QiLCJlZmZlY3QiLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJlZmZlY3RzIiwiZWZmZWN0c0luY2x1ZGVzRWZmZWN0IiwiaW5jbHVkZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50IiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJoYXMiLCJnZXQiLCJzZXQiLCJ1cGRhdGVkU3RhdGUiLCJyZWRyYXciLCJjb250ZXh0IiwibWFwT3JOYW1lcyIsInVuZGVmaW5lZCIsImtleXMiLCJBcnJheSIsIm5hbWVzIiwibmFtZSIsIm1hcCIsInB1c2giLCJkaXNjYXJkZWRMaXN0ZW5lciIsImZpbHRlciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBK0NnQkEsVUFBVTtlQUFWQTs7SUFvQkFDLFVBQVU7ZUFBVkE7O0lBMUNBQyxRQUFRO2VBQVJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZCaEIsSUFBSUMsWUFBWSxFQUFFO0FBRWxCLElBQU1DLHdCQUF3QixJQUFJQztBQUVsQyxTQUFTQyxXQUFXQyxNQUFNLEVBQUVDLE1BQU07SUFDaEMsSUFBTUMsU0FDSixxQkFBQ0YsUUFBU0M7SUFHWkwsVUFBVU8sT0FBTyxDQUFDLFNBQUNDO1FBQ2pCLElBQU0sQUFBRUMsVUFBWUQsU0FBWkMsU0FDRkMsd0JBQXdCRCxRQUFRRSxRQUFRLENBQUNQO1FBRS9DLElBQUlNLHVCQUF1QjtZQUN6QkYsU0FBU0Y7UUFDWDtJQUNGO0FBQ0Y7QUFFQU0sT0FBT0MsTUFBTSxDQUFDZixZQUFZO0lBQ3hCSyxZQUFBQTtBQUNGO0FBRU8sU0FBU0osU0FBU2UsT0FBTyxFQUFFQyxZQUFZO0lBQzVDLElBQUlDO0lBRUosSUFBSWYsc0JBQXNCZ0IsR0FBRyxDQUFDSCxVQUFVO1FBQ3RDRSxRQUFRZixzQkFBc0JpQixHQUFHLENBQUNKO0lBQ3BDLE9BQU87UUFDTEUsUUFBUUQsY0FBYyxHQUFHO1FBRXpCZCxzQkFBc0JrQixHQUFHLENBQUNMLFNBQVNFO0lBQ3JDO0lBRUEsT0FBUTtRQUFFQTtRQUFPLFNBQUNJO1lBQ2hCSixRQUFRSSxjQUFlLEdBQUc7WUFFMUJuQixzQkFBc0JrQixHQUFHLENBQUNMLFNBQVNFO1lBRW5DLElBQU1WLFNBQVM7WUFFZlEsUUFBUU8sTUFBTSxDQUFDZjtRQUNqQjtLQUFFO0FBQ0o7QUFFTyxTQUFTVCxXQUFXaUIsT0FBTyxFQUFFUSxPQUFPLEVBQUVDLFVBQVU7SUFDckQsSUFBSUEsZUFBZUMsV0FBVztRQUM1QkQsYUFBYVgsT0FBT2EsSUFBSSxDQUFDSCxVQUFXLEdBQUc7SUFDekM7SUFFQSxJQUFJQyxBQUFVLFlBQVZBLFlBQXNCRyxRQUFPO1FBQy9CLElBQU1DLFFBQVFKLFlBQVksR0FBRztRQUU3QkksTUFBTXBCLE9BQU8sQ0FBQyxTQUFDcUI7WUFDYmQsT0FBTyxDQUFDYyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ00sS0FBSztZQUU3QixPQUFPTixPQUFPLENBQUNNLEtBQUs7UUFDdEI7SUFDRixPQUFPO1FBQ0wsSUFBTUMsTUFBTU4sWUFBWSxHQUFHO1FBRTNCWCxPQUFPQyxNQUFNLENBQUNTLFNBQVNPO0lBQ3pCO0FBQ0Y7QUFFTyxTQUFTL0IsV0FBV1UsUUFBUTtJQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxVQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLFFBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFVOztJQUM3Q0csT0FBT0MsTUFBTSxDQUFDTCxVQUFVO1FBQ3RCQyxTQUFBQTtJQUNGO0lBRUFULFVBQVU4QixJQUFJLENBQUN0QjtJQUVmLE9BQVE7UUFDTixJQUFNdUIsb0JBQW9CdkIsVUFBVSxHQUFHO1FBRXZDUixZQUFZQSxVQUFVZ0MsTUFBTSxDQUFDLFNBQUN4QjtZQUM1QixJQUFJQSxhQUFhdUIsbUJBQW1CO2dCQUNsQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0YifQ==