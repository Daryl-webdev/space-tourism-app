import React, { useState } from "react";
import classes from "./NavItem.module.css";
import Hamburger from "./Hamburger";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


const NavItem = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [activeItem, setActiveItem] = useState(null);

  const navItemHandler = (itemNumber) => {
    setActiveItem(itemNumber);
  };

  const toggleNavIcon = () => {
    setIsNavShowing(prev => !prev)
  }

  let navStyle = classes.navbar__nav
  if (isNavShowing) {
    navStyle += ' ' + classes.responsive__nav
  }


  return (
    <>
      <ul className={navStyle}>
        <Link to='/'
          className={`${classes.navbar__item} ${activeItem === 0 && classes.navbar__active__item
            }`}
          onClick={() => navItemHandler(0)}
        >
          <span>00</span>HOME
        </Link>
        <Link to='/destination'
          className={`${classes.navbar__item} ${activeItem === 1 && classes.navbar__active__item}`}
          onClick={() => navItemHandler(1)}
        >
          <span>01</span>Destination
        </Link>
        <Link to='/crew'
          className={`${classes.navbar__item} ${activeItem === 2 && classes.navbar__active__item}`}
          onClick={() => navItemHandler(2)}
        >
          <span>02</span>Crew
        </Link>
        <Link to='/technology'
          className={`${classes.navbar__item} ${activeItem === 3 && classes.navbar__active__item}`}
          onClick={() => navItemHandler(3)}
        >
          <span>03</span>Technology
        </Link>
      </ul>
      <Hamburger onClick={toggleNavIcon} isShowing={isNavShowing} />
    </>
  );
};

export default NavItem;
