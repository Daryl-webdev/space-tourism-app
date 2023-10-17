import React, { useRef } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import classes from "./Hamburger.module.css";
const Hamburger = (props) => {

  // const navRef = useRef()
  // const toggleNavIcon = () => {
  //   navRef.current.classList.toggle('toggleNavIcon')
  // }
  return (
    <div className={classes.burger__container} >
      {
        props.isShowing ?
          <button onClick={props.onClick} className={classes.nav__btn}>
            <FaTimes />
          </button>
          :
          <button onClick={props.onClick} className={classes.nav__btn}>
            <FaBars />
          </button>
      }


    </div>
  );
};

export default Hamburger;
