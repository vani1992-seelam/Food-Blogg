import React from "react";

import classes from "./Modal.css";
const modal = props => (
  <main
    className={classes.Modal}
    style={{
      transform: props.show ? "translate(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0"
    }}
  >
    {props.children}
  </main>
);

export default modal;
