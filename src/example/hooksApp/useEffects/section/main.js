"use strict";

import { useEffects } from "../../../../index";  ///

import Component from "../component";
import HomeButton from "../button/home";
import ArticlesSection from "../section/articles";
import PrimaryNavigation from "../navigation/primary";

const { emitEffect } = useEffects;

export default class MainSection extends Component {
  componentDidMount() {
    const { articleName } = HomeButton;

    emitEffect("articleName", articleName);
  }

  componentWillUnmount() {
    ///
  }

  render(update) {
    return (

      <section className="main">
        <PrimaryNavigation/>
        <ArticlesSection/>
      </section>

    );
  }
}
