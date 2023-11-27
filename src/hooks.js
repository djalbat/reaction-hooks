"use strict";

const elementToStateWeakMap = new WeakMap();

export function useState(element, initialState) {
  let state;

  if (elementToStateWeakMap.has(element)) {
    state = elementToStateWeakMap.get(element);
  } else {
    state = initialState; ///

    elementToStateWeakMap.set(element, state);
  }

  return ([ state, (updatedState) => {
    state = updatedState;  ///

    elementToStateWeakMap.set(element, state);

    const update = null;

    element.redraw(update);
  }]);
}

export function useContext(element, mapOrNames) {
  const { context } = element;

  if (mapOrNames instanceof Array) {
    const names = mapOrNames; ///

    names.forEach((name) => {
      element[name] = context[name];

      delete context[name];
    });
  } else {
    const map = mapOrNames; ///

    Object.assign(context, map);
  }
}
