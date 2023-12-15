"use strict";

import { useState } from "../../../index";  ///

const { Component } = React;

let initialCount = 0;

export default class ComponentUseStateParagraph extends Component {
  render(update, element) {
    const [ count, setCount ] = useState(element, initialCount);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        Component state: {`${count}`}
      </p>

    );
  }
}
