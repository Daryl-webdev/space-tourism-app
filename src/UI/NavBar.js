import React, { useState } from "react";
import classes from "./NavBar.module.css";
import logo from "../assets/shared/logo.svg";
// import Hamburger from "../UI/Hamburger";
import NavItem from "../component/NavItem";
import { useLocation } from "react-router-dom";

const NavBar = ({ pathName }) => {
  // const location = useLocation()
  // const [activeItem, setActiveItem] = useState(location.pathname);

  // const navItemHandler = (pathName) => {
  //   setActiveItem(pathName);
  // };
  return (
    <div className={classes.navbar__wrapper}>
      <img src={logo} alt="space-tourism-logo" className={classes.navbar__logo} />
      <NavItem activeItem={pathName} />
    </div>
  );
};

export default NavBar;
