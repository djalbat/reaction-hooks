"use strict";

const { Component } = React;

import MainSection from "./useEffects/section/main";
import GotItSection from "./useContext/section/gotIt";
import FunctionUseStateParagraph from "./useState/function";
import ComponentUseStateParagraph from "./useState/component";
import CreateClassUseStateParagraph from "./useState/createClass";

export default class View extends Component {
  render(update) {
    return (

      <div className="view">
        <h2>
          useState
        </h2>
        <FunctionUseStateParagraph/>
        <br/>
        <CreateClassUseStateParagraph/>
        <br/>
        <ComponentUseStateParagraph/>
        <h2>
          useContext
        </h2>
        <GotItSection/>
        <h2>
          useEffects
        </h2>
        <MainSection/>
      </div>

    );
  }
}
