import React, { useEffect, useState } from "react";
import classes from './Destination.module.css';
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Planet from "../component/Planet";
import PlanetNavLinks from "../component/PlanetNavLinks";

const dataMap = [
    ['MOON', {
        name: 'MOON',
        imgData: { img: moon, alt: 'Moon.jpg' },
        desc: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avg_distance: '384,000KM',
        Est_Travel_time: '3 DAYS'
    }],
    ['MARS', {
        name: 'MARS',
        imgData: { img: mars, alt: 'Mars.jpg' },
        desc: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        avg_distance: '225 MIL KM',
        Est_Travel_time: '9 MONTHS'
    }],
    ['EUROPA', {
        name: 'EUROPA',
        imgData: { img: europa, alt: 'Europa.jpg' },
        desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avg_distance: '628 MIL. KM',
        Est_Travel_time: '3 YEARS'
    }],
    ['TITAN', {
        name: 'TITAN',
        imgData: { img: titan, alt: 'Titan.jpg' },
        desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avg_distance: '1.6 BIL. KM',
        Est_Travel_time: '7 YEARS'
    }]
]
const DESTINATION_DATA = new Map(dataMap)

const DEFAULT_VALUE = DESTINATION_DATA.get('MOON')

const Destination = () => {
    const arrayOfPlanets = Array.from(DESTINATION_DATA.keys())
    const [currentPlanet, setCurrentPlanet] = useState(DEFAULT_VALUE)
    const [currentPlanetImage, setCurrentPlanetImage] = useState(DEFAULT_VALUE.imgData.img)
    const [currentPlanetImageAlt, setCurrentPlanetImageAlt] = useState(DEFAULT_VALUE.imgData.alt)

    const handleDestinationLink = (planet) => {
        let currentPlanetData = DESTINATION_DATA.get(planet)
        setCurrentPlanet(prev => {
            return { ...prev, ...currentPlanetData }
        })
    }


    useEffect(() => {
        let image = currentPlanet.imgData.img
        let alt = currentPlanet.imgData.alt
        setCurrentPlanetImage(image)
        setCurrentPlanetImageAlt(alt)
    }, [currentPlanet])
    return (
        <div className={classes.destination__wrapper}>
            <div className={classes.destination__container}>
                <h2>
                    <span>01</span>Pick your Destination
                </h2>
                <div className={classes.destination__moon__container}>
                    <img src={currentPlanetImage} alt={currentPlanetImageAlt} className={classes.destination__img} />
                    <div className={classes.destination__description}>
                        <PlanetNavLinks data={arrayOfPlanets} activePlanet={currentPlanet.name} onNavigate={handleDestinationLink} />
                        <Planet data={currentPlanet} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Destination;
