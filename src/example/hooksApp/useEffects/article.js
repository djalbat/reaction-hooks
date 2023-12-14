"use strict";

import { useEffects } from "../../../index";  ///

import Component from "./component";

export default class Article extends Component {
  updateHandler = (update) => {
    const { name } = this.constructor,
          { articleName } = update;

    (name === articleName) ?
      this.show() :
        this.hide();
  }

  componentDidMount() {
    this.discardEffects = useEffects(this.updateHandler, "articleName");
  }

  componentWillUnmount() {
    this.discardEffects();
  }
}
