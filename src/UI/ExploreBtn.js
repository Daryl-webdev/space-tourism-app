import React, { useState } from 'react'
import classes from './ExploreBtn.module.css'
const ExploreBtn = () => {
    const [hoverClass, setHoverClass] = useState('')
    const mouseEnterHandler = (e) => {

    }

    const mouseLeaveHandler = (e) => {

    }
    return <div className={classes.explore__container} onMouseEnter={() => setHoverClass(classes.explore__outer__circle)} onMouseLeave={() => setHoverClass('')}>
        <div className={hoverClass} ></div>
        <div className={classes.explore__btn} >Explore</div>
    </div>
}

export default ExploreBtn;