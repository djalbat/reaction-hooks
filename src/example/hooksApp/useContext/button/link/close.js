"use strict";

import { React } from "reaction";

import { useContext } from "../../../../../index";  ///

const { Component } = React;

export default class CloseLinkButton extends Component {
  getChildContext(context) {
    useContext(this, context, [
      "closeLinkButtonClickHandler"
    ]);
  }

  render(update) {
    const clickHandler = this.closeLinkButtonClickHandler;  ///

    return (

      <button className="close link" onClick={clickHandler}>
        Got it
      </button>

    );
  }
}
