import React, { useState } from "react";
import classes from "./NavItem.module.css";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";


const NavItem = ({ activeItem, onNavItemClick }) => {
  const [isNavShowing, setIsNavShowing] = useState(false)



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
          //link[1] are the endpoints/pathname
          return <Link to={link[1]} key={link[0]}
            className={`${classes.navbar__item} ${link[1] === activeItem && classes.navbar__active__item
              }`}
            onClick={() => onNavItemClick(link[1])}>
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
