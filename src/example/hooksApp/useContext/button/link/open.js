"use strict";

import { React } from "reaction";

import { useContext } from "../../../../../index";  ///

const { Component } = React;

export default class OpenLinkButton extends Component {
  render(update) {
    const { children } = this.props,
          clickHandler = this.openLinkButtonClickHandler;  ///

    return (

      <button className="open link" onClick={clickHandler}
      >
        {children}
      </button>

    );
  }

  childContextSet(context) {
    useContext(this, [
      "openLinkButtonClickHandler"
    ]);
  }
}
