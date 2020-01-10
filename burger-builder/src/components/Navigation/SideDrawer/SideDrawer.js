import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import clasess from "./SideDrawer.css";
const sideDrawer = props => {
  return (
    <div className={clasess.SideDrawer}>
      <div className={clasess.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default sideDrawer;
