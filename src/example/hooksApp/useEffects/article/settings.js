"use strict";

import Article from "../article";

export default class SettingsArticle extends Article {
  static name = "settings";

  render(update) {
    return (

      <article className="settings" style={{display: "none"}}>
        <h1>
          Settings
        </h1>
      </article>

    );
  }
}
