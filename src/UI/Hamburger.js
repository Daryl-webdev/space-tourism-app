import React from "react";
import classes from "./Hamburger.module.css";
const Hamburger = () => {
  return (
    <div className={classes.burger__container}>
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
      <div className={classes.burger__line}></div>
    </div>
  );
};

export default Hamburger;
