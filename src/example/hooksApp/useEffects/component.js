"use strict";

import { React } from "reaction";

const { Component } = React;

import { NONE, BLOCK, DISPLAY } from "./constants";

export default class extends Component {
  show(displayStyle = BLOCK) {
    this.setStyle(DISPLAY, displayStyle);
  }

  hide() {
    this.setStyle(DISPLAY, NONE);
  }
}
