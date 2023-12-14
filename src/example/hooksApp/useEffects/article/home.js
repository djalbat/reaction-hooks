"use strict";

import Article from "../article";

export default class HomeArticle extends Article {
  static name = "home";

  render(update) {
    return (

      <article className="home">
        <h1>
          Home
        </h1>
      </article>

    );
  }
}
