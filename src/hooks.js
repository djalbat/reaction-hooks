"use strict";

let listeners = [];

const elementToStateWeakMap = new WeakMap();

function emitEffect(effect, action)  {
  const update = {
    [effect]: action
  };

  listeners.forEach((listener) => {
    const { effects } = listener,
          effectsIncludesEffect = effects.includes(effect);

    if (effectsIncludesEffect) {
      listener(update);
    }
  });
}

Object.assign(useEffects, {
  emitEffect
});

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

export function useContext(element, context, mapOrNames) {
  if (mapOrNames === undefined) {
    mapOrNames = Object.keys(context);  ///
  }

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

export function useEffects(listener, ...effects) {
  Object.assign(listener, {
    effects
  });

  listeners.push(listener);

  return (function() {
    const discardedListener = listener; ///

    listeners = listeners.filter((listener) => {
      if (listener !== discardedListener) {
        return true;
      }
    });
  });
}
