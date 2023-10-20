import React, { useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div className={classes.burger__container} >
      <button onClick={props.onClick} className={classes.nav__btn}>
        {props.isShowing ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Hamburger;
