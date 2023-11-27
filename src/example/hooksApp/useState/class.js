"use strict";

import { useState } from "../../../index";  ///

const { createClass } = React;

let initialCount = 0;

export const ClassUseStateParagraph = createClass({
  render: function(update) {
    const [ count, setCount ] = useState(this, initialCount);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        state: {`${count}`}
      </p>

    );
  }
});
