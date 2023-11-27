"use strict";

import { React } from "reaction";

const { Component } = React;

export default class CloseLinkButton extends Component {
  render(update) {
    const { closeLinkButtonClickHandler } = this.context,
          clickHandler = closeLinkButtonClickHandler;  ///

    return (

      <button className="close link" onClick={clickHandler}>
        Got it
      </button>

    );
  }
}
