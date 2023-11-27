"use strict";

import GotItDiv from "../div/gotIt";
import Component from "../component";
import GotItHeader from "../header/gotIt";
import OpenLinkButton from "../button/link/open";

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

  componentDidMount() {
    // useContext(this, [
    //   "showGotItDiv",
    //   "hideGotItDiv",
    //   "showGotItHeader",
    //   "hideGotItHeader"
    // ]);

    // this.close();
  }

  componentWillUnmount() {
    ///
  }

  render(update) {
    const { title, content } = this.constructor;

    return (

      <section className="got-it">
        <OpenLinkButton>
          {title}
        </OpenLinkButton>
        {/*<GotItHeader>*/}
        {/*  {title}*/}
        {/*</GotItHeader>*/}
        {/*<GotItDiv>*/}
        {/*  {content}*/}
        {/*</GotItDiv>*/}
      </section>

    )
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

  static title = "An example of a more complex view element";

  static content =

    <div>
      <p>
        This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa.
      </p>
    </div>

  ;
}
