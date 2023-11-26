"use strict";

import { useState } from "../../../index";  ///

const initialCount = 0;

export const FunctionUseStateParagraph = (props, context, update, element) => {
  const [ count, setCount ] = useState(initialCount, element);

  return (

    <p onClick={(event) => setCount(count + 1)}>
      state: {`${count}`}
    </p>

  );
};
