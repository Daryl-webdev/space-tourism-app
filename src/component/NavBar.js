import React from "react";
import classes from "./NavBar.module.css";
import logo from "../assets/shared/logo.svg";
import Hamburger from "../UI/Hamburger";
import NavItem from "../UI/NavItem";

const NavBar = () => {
  return (
    <div className={classes.navbar__wrapper}>
      <img src={logo} alt="space-tourism-logo" />
      <NavItem />
      <Hamburger />
    </div>
  );
};

export default NavBar;