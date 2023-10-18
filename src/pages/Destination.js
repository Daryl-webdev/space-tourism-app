import React from "react";
import classes from "./Destination.module.css";
import moon from "../assets/destination/image-moon.png";
const Destination = () => {
  return (
    <div className={classes.destination__wrapper}>
      <div className={classes.destination__container}>
        <h2>
          <span>01</span>Pick your Destination
        </h2>
        <div className={classes.destination__moon__container}>
          <img src={moon} alt="moon" className={classes.destination__moon} />
          <div className={classes.destination__description}>
            <ul className={classes.destination__navigation}>
              <li className={classes.destination__navigation_item}>MOON</li>
              <li className={classes.destination__navigation_item}>MARS</li>
              <li className={classes.destination__navigation_item}>EUROPA</li>
              <li className={classes.destination__navigation_item}>TITAN</li>
            </ul>
            <h1 className={classes.destination__planet}>Mars</h1>
            <p className={classes.destination__planet__desc}>Mars</p>
            <hr />
            <div className={classes.destination__distance__container}>
              <div className={classes.destination__distance}>
                <p>Avg. Distance</p>
                <p>384,000</p>
              </div>
              <div className={classes.destination__travel__time}>
                <p>Est. Travel Time</p>
                <p>3days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
