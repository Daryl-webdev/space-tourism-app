import React from "react";
import classes from "./NavItem.module.css";

const NavItem = () => {
  return (
    <ul className={classes.navbar__nav}>
      <li className={`${classes.navbar__item} `}>
        <b>00</b>HOME
      </li>
      <li className={`${classes.navbar__item} `}>
        <b>01</b>Destination
      </li>
      <li className={`${classes.navbar__item} `}>
        <b>02</b>Crew
      </li>
      <li className={`${classes.navbar__item} `}>
        <b>03</b>Technology
      </li>
    </ul>
  );
};

export default NavItem;
