import React, { useEffect, useState } from "react";
import classes from "./Technology.module.css";
import PageTextContent from "../UI/PageTextContent";
import launch_vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import space_capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import TechnologyPagination from "../component/TechnologyPagination";

const TECHNOLOGY_DATA = [
    [1, {
        name: 'LAUNCH VEHICLE',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
        img: launch_vehicle
    }],
    [2, {
        name: 'SPACEPORT',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\'s rotation for launch.',
        img: spaceport
    }],
    [3, {
        name: 'SPACE CAPSULE',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        img: space_capsule
    }]
]



const Technology = () => {
    const tech_data_map = new Map(TECHNOLOGY_DATA)
    const default_value = tech_data_map.get(1)

    const [isActive, setIsActive] = useState(1)
    const [data, setData] = useState(default_value)

    const bubbleNavHandler = (e) => {
        let currentBubblePage = e.target.value
        setIsActive(+currentBubblePage)
    }

    useEffect(() => {
        let newData = tech_data_map.get(isActive)
        setData(newData)
    }, [isActive])
    return (
        <div className={classes.technology__wrapper}>
            <div className={classes.technology__container}>
                <h2>
                    <span>03</span>SPACE LAUNCH 101
                </h2>
                <div className={classes.technology__content}>
                    <TechnologyPagination isActive={isActive} onBubbleClick={bubbleNavHandler} technology_data={TECHNOLOGY_DATA} />
                    <PageTextContent>
                        <h5
                            className={classes.technology__heading__five}
                        >
                            THE TERMINOLOGY…
                        </h5>
                        <h1
                            className={classes.technology__heading__one}
                        >
                            {data.name}
                        </h1>
                        <p className={classes.technology__p}>
                            {data.description}
                        </p>
                    </PageTextContent>
                </div>
            </div>
            {/* <div className={classes.crew__img__container}>
                <img src={crewImage} alt={crewImage} className={classes.crew__img} />
            </div> */}
        </div >
    );
};

export default Technology;