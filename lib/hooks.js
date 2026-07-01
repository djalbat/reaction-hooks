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
    if (Array.isArray(mapOrNames)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IGxpc3RlbmVycyA9IFtdO1xuXG5jb25zdCBlbGVtZW50VG9TdGF0ZVdlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBlbWl0RWZmZWN0KGVmZmVjdCwgYWN0aW9uKSAge1xuICBjb25zdCB1cGRhdGUgPSB7XG4gICAgW2VmZmVjdF06IGFjdGlvblxuICB9O1xuXG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgZWZmZWN0cyB9ID0gbGlzdGVuZXIsXG4gICAgICAgICAgZWZmZWN0c0luY2x1ZGVzRWZmZWN0ID0gZWZmZWN0cy5pbmNsdWRlcyhlZmZlY3QpO1xuXG4gICAgaWYgKGVmZmVjdHNJbmNsdWRlc0VmZmVjdCkge1xuICAgICAgbGlzdGVuZXIodXBkYXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5PYmplY3QuYXNzaWduKHVzZUVmZmVjdHMsIHtcbiAgZW1pdEVmZmVjdFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShlbGVtZW50LCBpbml0aWFsU3RhdGUpIHtcbiAgbGV0IHN0YXRlO1xuXG4gIGlmIChlbGVtZW50VG9TdGF0ZVdlYWtNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgc3RhdGUgPSBlbGVtZW50VG9TdGF0ZVdlYWtNYXAuZ2V0KGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlOyAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIChbIHN0YXRlLCAodXBkYXRlZFN0YXRlKSA9PiB7XG4gICAgc3RhdGUgPSB1cGRhdGVkU3RhdGU7ICAvLy9cblxuICAgIGVsZW1lbnRUb1N0YXRlV2Vha01hcC5zZXQoZWxlbWVudCwgc3RhdGUpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gbnVsbDtcblxuICAgIGVsZW1lbnQucmVkcmF3KHVwZGF0ZSk7XG4gIH1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoZWxlbWVudCwgY29udGV4dCwgbWFwT3JOYW1lcykge1xuICBpZiAobWFwT3JOYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFwT3JOYW1lcyA9IE9iamVjdC5rZXlzKGNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShtYXBPck5hbWVzKSkge1xuICAgIGNvbnN0IG5hbWVzID0gbWFwT3JOYW1lczsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBlbGVtZW50W25hbWVdID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgZGVsZXRlIGNvbnRleHRbbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWFwID0gbWFwT3JOYW1lczsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIG1hcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdHMobGlzdGVuZXIsIC4uLmVmZmVjdHMpIHtcbiAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lciwge1xuICAgIGVmZmVjdHNcbiAgfSk7XG5cbiAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGlzY2FyZGVkTGlzdGVuZXIgPSBsaXN0ZW5lcjsgLy8vXG5cbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKGxpc3RlbmVyICE9PSBkaXNjYXJkZWRMaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdHMiLCJ1c2VTdGF0ZSIsImxpc3RlbmVycyIsImVsZW1lbnRUb1N0YXRlV2Vha01hcCIsIldlYWtNYXAiLCJlbWl0RWZmZWN0IiwiZWZmZWN0IiwiYWN0aW9uIiwidXBkYXRlIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiZWZmZWN0cyIsImVmZmVjdHNJbmNsdWRlc0VmZmVjdCIsImluY2x1ZGVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudCIsImluaXRpYWxTdGF0ZSIsInN0YXRlIiwiaGFzIiwiZ2V0Iiwic2V0IiwidXBkYXRlZFN0YXRlIiwicmVkcmF3IiwiY29udGV4dCIsIm1hcE9yTmFtZXMiLCJ1bmRlZmluZWQiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwibmFtZXMiLCJuYW1lIiwibWFwIiwicHVzaCIsImRpc2NhcmRlZExpc3RlbmVyIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUErQ2dCQTtlQUFBQTs7UUFvQkFDO2VBQUFBOztRQTFDQUM7ZUFBQUE7OztBQXZCaEIsSUFBSUMsWUFBWSxFQUFFO0FBRWxCLE1BQU1DLHdCQUF3QixJQUFJQztBQUVsQyxTQUFTQyxXQUFXQyxNQUFNLEVBQUVDLE1BQU07SUFDaEMsTUFBTUMsU0FBUztRQUNiLENBQUNGLE9BQU8sRUFBRUM7SUFDWjtJQUVBTCxVQUFVTyxPQUFPLENBQUMsQ0FBQ0M7UUFDakIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsVUFDZEUsd0JBQXdCRCxRQUFRRSxRQUFRLENBQUNQO1FBRS9DLElBQUlNLHVCQUF1QjtZQUN6QkYsU0FBU0Y7UUFDWDtJQUNGO0FBQ0Y7QUFFQU0sT0FBT0MsTUFBTSxDQUFDZixZQUFZO0lBQ3hCSztBQUNGO0FBRU8sU0FBU0osU0FBU2UsT0FBTyxFQUFFQyxZQUFZO0lBQzVDLElBQUlDO0lBRUosSUFBSWYsc0JBQXNCZ0IsR0FBRyxDQUFDSCxVQUFVO1FBQ3RDRSxRQUFRZixzQkFBc0JpQixHQUFHLENBQUNKO0lBQ3BDLE9BQU87UUFDTEUsUUFBUUQsY0FBYyxHQUFHO1FBRXpCZCxzQkFBc0JrQixHQUFHLENBQUNMLFNBQVNFO0lBQ3JDO0lBRUEsT0FBUTtRQUFFQTtRQUFPLENBQUNJO1lBQ2hCSixRQUFRSSxjQUFlLEdBQUc7WUFFMUJuQixzQkFBc0JrQixHQUFHLENBQUNMLFNBQVNFO1lBRW5DLE1BQU1WLFNBQVM7WUFFZlEsUUFBUU8sTUFBTSxDQUFDZjtRQUNqQjtLQUFFO0FBQ0o7QUFFTyxTQUFTVCxXQUFXaUIsT0FBTyxFQUFFUSxPQUFPLEVBQUVDLFVBQVU7SUFDckQsSUFBSUEsZUFBZUMsV0FBVztRQUM1QkQsYUFBYVgsT0FBT2EsSUFBSSxDQUFDSCxVQUFXLEdBQUc7SUFDekM7SUFFQSxJQUFJSSxNQUFNQyxPQUFPLENBQUNKLGFBQWE7UUFDN0IsTUFBTUssUUFBUUwsWUFBWSxHQUFHO1FBRTdCSyxNQUFNckIsT0FBTyxDQUFDLENBQUNzQjtZQUNiZixPQUFPLENBQUNlLEtBQUssR0FBR1AsT0FBTyxDQUFDTyxLQUFLO1lBRTdCLE9BQU9QLE9BQU8sQ0FBQ08sS0FBSztRQUN0QjtJQUNGLE9BQU87UUFDTCxNQUFNQyxNQUFNUCxZQUFZLEdBQUc7UUFFM0JYLE9BQU9DLE1BQU0sQ0FBQ1MsU0FBU1E7SUFDekI7QUFDRjtBQUVPLFNBQVNoQyxXQUFXVSxRQUFRLEVBQUUsR0FBR0MsT0FBTztJQUM3Q0csT0FBT0MsTUFBTSxDQUFDTCxVQUFVO1FBQ3RCQztJQUNGO0lBRUFULFVBQVUrQixJQUFJLENBQUN2QjtJQUVmLE9BQVE7UUFDTixNQUFNd0Isb0JBQW9CeEIsVUFBVSxHQUFHO1FBRXZDUixZQUFZQSxVQUFVaUMsTUFBTSxDQUFDLENBQUN6QjtZQUM1QixJQUFJQSxhQUFhd0IsbUJBQW1CO2dCQUNsQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0FBQ0YifQ==