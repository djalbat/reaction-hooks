"use strict";

import HomeButton from "../button/home";
import SettingsButton from "../button/settings";

const PrimaryNavigation = (props) =>

  <nav className="primary">
    <HomeButton/>
    <SettingsButton/>
  </nav>

;

export default PrimaryNavigation;
