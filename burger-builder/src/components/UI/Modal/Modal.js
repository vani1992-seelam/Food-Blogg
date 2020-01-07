import React from "react";

import classes from "./Modal.css";
const modal = props => <main className={classes.Modal}>{props.children}</main>;

export default modal;
