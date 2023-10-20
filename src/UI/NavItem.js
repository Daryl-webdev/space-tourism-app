import React, { useState } from "react";
import classes from "./NavItem.module.css";
import Hamburger from "./Hamburger";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


const NavItem = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [activeItem, setActiveItem] = useState(0);

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

  const navLinksObj = {
    'HOME': '/',
    'DESTINATION': '/destination',
    'CREW': '/crew',
    'TECHNOLOGY': '/technology'
  }
  return (
    <>
      <ul className={navStyle}>
        {Object.entries(navLinksObj).map((link, indx) => {
          return <Link to={link[1]} key={link[0]}
            className={`${classes.navbar__item} ${activeItem === indx && classes.navbar__active__item
              }`}
            onClick={() => navItemHandler(indx)}>
            <span>{'0' + indx}</span>
            {link[0]}
          </Link>
        })}
      </ul>
      <Hamburger onClick={toggleNavIcon} isShowing={isNavShowing} />
    </>
  );
};

export default NavItem;
