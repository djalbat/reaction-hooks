"use strict";

import { useState } from "../../../index";  ///

const initialCount = 0;

const FunctionUseStateParagraph = (props, context, update, element) => {
  const [ count, setCount ] = useState(element, initialCount);

  return (

    <p onClick={(event) => setCount(count + 1)}>
      Function state: {`${count}`}
    </p>

  );
};

export default FunctionUseStateParagraph;
