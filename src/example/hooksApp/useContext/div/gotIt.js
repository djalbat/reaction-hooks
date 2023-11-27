"use strict";

import Component from "../component"
import GotItSpan from "../span/gotIt";

import { useContext } from "../../../../index"; ///

export default class GotItDiv extends Component {
  getChildContext(context) {
    const showGotItDiv = this.show.bind(this),  ///
          hideGotItDiv = this.hide.bind(this);  ///

    useContext(this, {
      showGotItDiv,
      hideGotItDiv
    });

    return context;
  }

  render(update) {
    const { children } = this.props;

    return (

      <div className="got-it">
        <GotItSpan/>
        <p>
          {children}
        </p>
      </div>

    );
  }
}
