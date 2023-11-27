"use strict";

import Component from "../component";
import OpenLinkButton from "../button/link/open";

import { useContext } from "../../../../index"; ///

export default class GotItHeader extends Component {
  getChildContext(context) {
    const showGotItHeader = this.show.bind(this), ///
          hideGotItHeader = this.hide.bind(this); ///

    useContext(this, {
      showGotItHeader,
      hideGotItHeader
    });

    return context;
  }

  render(update) {
    const { children } = this.props;

    return (

      <header className="got-it">
        [
        <OpenLinkButton>
          {children}
        </OpenLinkButton>
        ]
      </header>

    );
  }
}
