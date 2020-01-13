import React from "react";
import classes from "./DrawerToggle.css";

const drawerToggle = props => (
  <div onClick={props.clicked} className={classes.DrewerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
