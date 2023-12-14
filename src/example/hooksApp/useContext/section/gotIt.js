"use strict";

import GotItDiv from "../div/gotIt";
import Component from "../component";
import GotItHeader from "../header/gotIt";

export default class GotItSection extends Component {
  closeLinkButtonClickHandler = (event) => {
    this.close();
  }

  openLinkButtonClickHandler = (event) => {
    this.open();
  }

  close() {
    this.hideGotItDiv();
    this.showGotItHeader();
  }

  open() {
    this.showGotItDiv();
    this.hideGotItHeader();
  }

  getChildContext(context) {
    const openLinkButtonClickHandler = this.openLinkButtonClickHandler,
          closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;

    return({
      openLinkButtonClickHandler,
      closeLinkButtonClickHandler
    });
  }

  childContextSet(childContext) {
    Object.assign(this, childContext);
  }

  componentDidMount() {
    this.close();
  }

  componentWillUnmount() {
    ///
  }

  render(update) {
    return (

      <section className="got-it">
        <GotItHeader>
          An example of a more complex view element
        </GotItHeader>
        <GotItDiv>
          This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa.
        </GotItDiv>
      </section>

    )
  }
}
