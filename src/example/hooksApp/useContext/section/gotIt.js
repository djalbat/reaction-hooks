"use strict";

import GotItDiv from "../div/gotIt";
import Component from "../component";
import GotItHeader from "../header/gotIt";

import { useContext } from "../../../../index"; ///

export default class GotItSection extends Component {
  closeLinkButtonClickHandler = (event) => {
    this.close();

    event.preventDefault();
  }

  openLinkButtonClickHandler = (event) => {
    this.open();

    event.preventDefault();
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

    useContext(this, {
      openLinkButtonClickHandler,
      closeLinkButtonClickHandler
    });

    return context;
  }

  childContextSet(context) {
    useContext(this, [
      "showGotItDiv",
      "hideGotItDiv",
      "showGotItHeader",
      "hideGotItHeader"
    ]);
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
