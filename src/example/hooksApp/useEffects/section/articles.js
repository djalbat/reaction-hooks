"use strict";

import HomeArticle from "../article/home";
import SettingsArticle from "../article/settings";

const ArticlesSection = (props) =>

  <section className="articles">
    <HomeArticle/>
    <SettingsArticle/>
  </section>

;

export default ArticlesSection;
