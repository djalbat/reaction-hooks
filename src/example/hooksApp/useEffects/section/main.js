"use strict";

import ArticlesSection from "../section/articles";
import PrimaryNavigation from "../navigation/primary";

const MainSection = (props) =>

  <section className="main">
    <PrimaryNavigation/>
    <ArticlesSection/>
  </section>

;

export default MainSection;
