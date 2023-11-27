"use strict";

import { useState } from "../../../index";  ///

const { createClass } = React;

let initialCount = 0;

const CreateClassUseStateParagraph = createClass({
  render: function(update) {
    const [ count, setCount ] = useState(this, initialCount);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        createClass state: {`${count}`}
      </p>

    );
  }
});

export default CreateClassUseStateParagraph;
