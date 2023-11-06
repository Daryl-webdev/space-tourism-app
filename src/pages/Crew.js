import React, { useEffect, useState } from "react";
import classes from "./Crew.module.css";
import PageTextContent from "../UI/PageTextContent";
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import ansari from '../assets/crew/image-anousheh-ansari.png'

const CREW_DATA = [
    {
        name: 'DOUGLAS HURLEY',
        position: 'COMMANDER',
        description: ' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: douglas
    },
    {
        name: 'MARK SHUTTLEWORTH',
        position: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: mark
    },
    {
        name: 'Victor Glover',
        position: 'PILOT',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        img: victor
    },
    {
        name: 'Anousheh Ansari',
        position: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        img: ansari
    },
]
const Crew = () => {

    const [dataIndex, setDataIndex] = useState(0)
    const [crewImage, setCrewImage] = useState(CREW_DATA[0].img)
    const handlePagination = (e) => {
        const newIndex = e.target.value
        setDataIndex(+newIndex)
        setCrewImage(CREW_DATA[+newIndex].img)
    }


    return (
        <div className={classes.crew__wrapper}>
            <div className={classes.crew__container}>
                <h2>
                    <span>02</span>MEET OUR CREW
                </h2>
                <PageTextContent>
                    <h5
                        className={classes.crew__heading__five}
                    >
                        {CREW_DATA[dataIndex].position}
                    </h5>
                    <h1
                        className={classes.crew__heading__one}
                    >
                        {CREW_DATA[dataIndex].name}
                    </h1>
                    <p className={classes.crew__p}>
                        {CREW_DATA[dataIndex].description}
                    </p>
                </PageTextContent>
                <div className={classes.crew__pagination__container}>
                    {
                        CREW_DATA.map((_, indx) => {
                            return <button
                                key={indx}
                                className={`${classes.crew__pagination} ${dataIndex === indx && classes.active}`}
                                value={indx}
                                onClick={(e) => handlePagination(e)}
                            ></button>
                        })
                    }
                </div>
            </div>
            <div className={classes.crew__img__container}>
                <img src={crewImage} alt={crewImage} className={classes.crew__img} />
            </div>
        </div >
    );
};

export default Crew;
