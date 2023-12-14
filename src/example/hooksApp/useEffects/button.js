"use strict";

import { useEffects } from "../../../index";  ///

import Component from "./component";

const { emitEffect } = useEffects;

export default class Button extends Component {
  clickHandler = (event) => {
    const { articleName } = this.constructor;

    emitEffect("articleName", articleName);
  }

  render(update) {
    const { text } = this.constructor;

    return (

      <button onClick={this.clickHandler}>
        {text}
      </button>

    );
  }
}
