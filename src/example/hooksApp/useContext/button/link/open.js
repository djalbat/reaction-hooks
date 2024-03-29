"use strict";

import { useContext } from "../../../../../index";  ///

const { Component } = React;

export default class OpenLinkButton extends Component {
  getChildContext(context) {
    useContext(this, context, [
      "openLinkButtonClickHandler"
    ]);
  }

  render(update) {
    const { children } = this.props,
          clickHandler = this.openLinkButtonClickHandler;  ///

    return (

      <button className="open link" onClick={clickHandler}>
        {children}
      </button>

    );
  }
}
