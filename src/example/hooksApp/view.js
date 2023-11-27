"use strict";

import { React } from "reaction";

const { Component } = React;

import GotItSection from "./useContext/section/gotIt";
import FunctionUseStateParagraph from "./useState/function";
import ComponentUseStateParagraph from "./useState/component";
import CreateClassUseStateParagraph from "./useState/createClass";

export default class View extends Component {
  render(update) {
    return (

      <div className="view">
        <GotItSection/>
        {/*<FunctionUseStateParagraph/>*/}
        {/*<ComponentUseStateParagraph/>*/}
        {/*<CreateClassUseStateParagraph/>*/}
      </div>

    );
  }
}
