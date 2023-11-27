"use strict";

import { React } from "reaction";

const { Component } = React;

import { NONE, BLOCK, DISPLAY } from "./constants";

export default class extends Component {
  show(displayStyle = BLOCK) {
    this.display(displayStyle);  ///
  }

  hide() {
    this.setStyle(DISPLAY, NONE);
  }

  display(display) {
    this.setStyle(DISPLAY, display);
  }
}
