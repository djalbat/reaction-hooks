"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get useContext () {
        return useContext;
    },
    get useEffects () {
        return useEffects;
    },
    get useState () {
        return useState;
    }
});
let listeners = [];
const elementToStateWeakMap = new WeakMap();
function emitEffect(effect, action) {
    const update = {
        [effect]: action
    };
    listeners.forEach((listener)=>{
        const { effects } = listener, effectsIncludesEffect = effects.includes(effect);
        if (effectsIncludesEffect) {
            listener(update);
        }
    });
}
Object.assign(useEffects, {
    emitEffect
});
function useState(element, initialState) {
    let state;
    if (elementToStateWeakMap.has(element)) {
        state = elementToStateWeakMap.get(element);
    } else {
        state = initialState; ///
        elementToStateWeakMap.set(element, state);
    }
    return [
        state,
        (updatedState)=>{
            state = updatedState; ///
            elementToStateWeakMap.set(element, state);
            const update = null;
            element.redraw(update);
        }
    ];
}
function useContext(element, context, mapOrNames) {
    if (mapOrNames === undefined) {
        mapOrNames = Object.keys(context); ///
    }
    if (mapOrNames instanceof Array) {
        const names = mapOrNames; ///
        names.forEach((name)=>{
            element[name] = context[name];
            delete context[name];
        });
    } else {
        const map = mapOrNames; ///
        Object.assign(context, map);
    }
}
function useEffects(listener, ...effects) {
    Object.assign(listener, {
        effects
    });
    listeners.push(listener);
    return function() {
        const discardedListener = listener; ///
        listeners = listeners.filter((listener)=>{
            if (listener !== discardedListener) {
                return true;
            }
        });
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IGxpc3RlbmVycyA9IFtdO1xuXG5jb25zdCBlbGVtZW50VG9TdGF0ZVdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBlbWl0RWZmZWN0KGVmZmVjdCwgYWN0aW9uKSAge1xuICBjb25zdCB1cGRhdGUgPSB7XG4gICAgW2VmZmVjdF06IGFjdGlvblxuICB9O1xuXG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgZWZmZWN0cyB9ID0gbGlzdGVuZXIsXG4gICAgICAgICAgZWZmZWN0c0luY2x1ZGVzRWZmZWN0ID0gZWZmZWN0cy5pbmNsdWRlcyhlZmZlY3QpO1xuXG4gICAgaWYgKGVmZmVjdHNJbmNsdWRlc0VmZmVjdCkge1xuICAgICAgbGlzdGVuZXIodXBkYXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKHVzZUVmZmVjdHMsIHtcbiAgZW1pdEVmZmVjdFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShlbGVtZW50LCBpbml0aWFsU3RhdGUpIHtcbiAgbGV0IHN0YXRlO1xuXG4gIGlmIChlbGVtZW50VG9TdGF0ZVdlYWtNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgc3RhdGUgPSBlbGVtZW50VG9TdGF0ZVdlYWtNYXAuZ2V0KGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlOyAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIChbIHN0YXRlLCAodXBkYXRlZFN0YXRlKSA9PiB7XG4gICAgc3RhdGUgPSB1cGRhdGVkU3RhdGU7ICAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gbnVsbDtcblxuICAgIGVsZW1lbnQucmVkcmF3KHVwZGF0ZSk7XG4gIH1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoZWxlbWVudCwgY29udGV4dCwgbWFwT3JOYW1lcykge1xuICBpZiAobWFwT3JOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFwT3JOYW1lcyA9IE9iamVjdC5rZXlzKGNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBpZiAobWFwT3JOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY29uc3QgbmFtZXMgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBjb250ZXh0W25hbWVdO1xuXG4gICAgICBkZWxldGUgY29udGV4dFtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXAgPSBtYXBPck5hbWVzOyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwgbWFwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0cyhsaXN0ZW5lciwgLi4uZWZmZWN0cykge1xuICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgZWZmZWN0c1xuICB9KTtcblxuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgcmV0dXJuIChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkaXNjYXJkZWRMaXN0ZW5lciA9IGxpc3RlbmVyOyAvLy9cblxuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICBpZiAobGlzdGVuZXIgIT09IGRpc2NhcmRlZExpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0cyIsInVzZVN0YXRlIiwibGlzdGVuZXJzIiwiZWxlbWVudFRvU3RhdGVXZWFrTWFwIiwiV2Vha01hcCIsImVtaXRFZmZlY3QiLCJlZmZlY3QiLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJlZmZlY3RzIiwiZWZmZWN0c0luY2x1ZGVzRWZmZWN0IiwiaW5jbHVkZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50IiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJoYXMiLCJnZXQiLCJzZXQiLCJ1cGRhdGVkU3RhdGUiLCJyZWRyYXciLCJjb250ZXh0IiwibWFwT3JOYW1lcyIsInVuZGVmaW5lZCIsImtleXMiLCJBcnJheSIsIm5hbWVzIiwibmFtZSIsIm1hcCIsInB1c2giLCJkaXNjYXJkZWRMaXN0ZW5lciIsImZpbHRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0NnQkE7ZUFBQUE7O1FBb0JBQztlQUFBQTs7UUExQ0FDO2VBQUFBOzs7QUF2QmhCLElBQUlDLFlBQVksRUFBRTtBQUVsQixNQUFNQyx3QkFBd0IsSUFBSUM7QUFFbEMsU0FBU0MsV0FBV0MsTUFBTSxFQUFFQyxNQUFNO0lBQ2hDLE1BQU1DLFNBQVM7UUFDYixDQUFDRixPQUFPLEVBQUVDO0lBQ1o7SUFFQUwsVUFBVU8sT0FBTyxDQUFDLENBQUNDO1FBQ2pCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdELFVBQ2RFLHdCQUF3QkQsUUFBUUUsUUFBUSxDQUFDUDtRQUUvQyxJQUFJTSx1QkFBdUI7WUFDekJGLFNBQVNGO1FBQ1g7SUFDRjtBQUNGO0FBRUFNLE9BQU9DLE1BQU0sQ0FBQ2YsWUFBWTtJQUN4Qks7QUFDRjtBQUVPLFNBQVNKLFNBQVNlLE9BQU8sRUFBRUMsWUFBWTtJQUM1QyxJQUFJQztJQUVKLElBQUlmLHNCQUFzQmdCLEdBQUcsQ0FBQ0gsVUFBVTtRQUN0Q0UsUUFBUWYsc0JBQXNCaUIsR0FBRyxDQUFDSjtJQUNwQyxPQUFPO1FBQ0xFLFFBQVFELGNBQWMsR0FBRztRQUV6QmQsc0JBQXNCa0IsR0FBRyxDQUFDTCxTQUFTRTtJQUNyQztJQUVBLE9BQVE7UUFBRUE7UUFBTyxDQUFDSTtZQUNoQkosUUFBUUksY0FBZSxHQUFHO1lBRTFCbkIsc0JBQXNCa0IsR0FBRyxDQUFDTCxTQUFTRTtZQUVuQyxNQUFNVixTQUFTO1lBRWZRLFFBQVFPLE1BQU0sQ0FBQ2Y7UUFDakI7S0FBRTtBQUNKO0FBRU8sU0FBU1QsV0FBV2lCLE9BQU8sRUFBRVEsT0FBTyxFQUFFQyxVQUFVO0lBQ3JELElBQUlBLGVBQWVDLFdBQVc7UUFDNUJELGFBQWFYLE9BQU9hLElBQUksQ0FBQ0gsVUFBVyxHQUFHO0lBQ3pDO0lBRUEsSUFBSUMsc0JBQXNCRyxPQUFPO1FBQy9CLE1BQU1DLFFBQVFKLFlBQVksR0FBRztRQUU3QkksTUFBTXBCLE9BQU8sQ0FBQyxDQUFDcUI7WUFDYmQsT0FBTyxDQUFDYyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ00sS0FBSztZQUU3QixPQUFPTixPQUFPLENBQUNNLEtBQUs7UUFDdEI7SUFDRixPQUFPO1FBQ0wsTUFBTUMsTUFBTU4sWUFBWSxHQUFHO1FBRTNCWCxPQUFPQyxNQUFNLENBQUNTLFNBQVNPO0lBQ3pCO0FBQ0Y7QUFFTyxTQUFTL0IsV0FBV1UsUUFBUSxFQUFFLEdBQUdDLE9BQU87SUFDN0NHLE9BQU9DLE1BQU0sQ0FBQ0wsVUFBVTtRQUN0QkM7SUFDRjtJQUVBVCxVQUFVOEIsSUFBSSxDQUFDdEI7SUFFZixPQUFRO1FBQ04sTUFBTXVCLG9CQUFvQnZCLFVBQVUsR0FBRztRQUV2Q1IsWUFBWUEsVUFBVWdDLE1BQU0sQ0FBQyxDQUFDeEI7WUFDNUIsSUFBSUEsYUFBYXVCLG1CQUFtQjtnQkFDbEMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGIn0=