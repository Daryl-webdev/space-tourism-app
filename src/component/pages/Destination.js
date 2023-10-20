import React from "react";
import classes from './Destination.module.css';
import moon from "../../assets/destination/image-moon.png";
const Destination = () => {
    return (
        <div className={classes.destination__wrapper}>
            <div className={classes.destination__container}>
                <h2>
                    <span>01</span>Pick your Destination
                </h2>
                <div className={classes.destination__moon__container}>
                    <img src={moon} alt="moon" className={classes.destination__moon__img} />
                    <div className={classes.destination__description}>
                        <ul className={classes.destination__navigation}>
                            <li className={classes.destination__navigation_item}>MOON</li>
                            <li className={classes.destination__navigation_item}>MARS</li>
                            <li className={classes.destination__navigation_item}>EUROPA</li>
                            <li className={classes.destination__navigation_item}>TITAN</li>
                        </ul>
                        <h1 className={classes.destination__planet}>MOON</h1>
                        <p className={classes.destination__planet__desc}>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <div className={classes.destination__distance__container}>
                            <div className={classes.destination__distance}>
                                <p>Avg. Distance</p>
                                <p>384,000 km</p>
                            </div>
                            <div className={classes.destination__travel__time}>
                                <p>Est. Travel Time</p>
                                <p>3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
