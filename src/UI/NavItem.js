import React, { useState } from "react";
import classes from "./NavItem.module.css";
import Hamburger from "./Hamburger";


const NavItem = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  let navStyle = classes.navbar__nav
  const toggleNavIcon = () => {
    setIsNavShowing(prev => !prev)
  }
  if (isNavShowing) {
    navStyle += ' ' + classes.responsive__nav
  }
  return (
    <>
      <ul className={`${navStyle}`} >
        <li className={`${classes.navbar__item}  `}>
          <span>00</span>HOME
        </li>
        <li className={`${classes.navbar__item} `}>
          <span>01</span>Destination
        </li>
        <li className={`${classes.navbar__item} `}>
          <span>02</span>Crew
        </li>
        <li className={`${classes.navbar__item} `}>
          <span>03</span>Technology
        </li>
      </ul>
      <Hamburger onClick={toggleNavIcon} isShowing={isNavShowing} />
    </>
  );
};

export default NavItem;
