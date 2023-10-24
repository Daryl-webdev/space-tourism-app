import React, { useState } from 'react'
import classes from './ExploreBtn.module.css'
import { Link } from 'react-router-dom'
const ExploreBtn = () => {
    const [hoverClass, setHoverClass] = useState('')

    return <Link className={classes.explore__container} onMouseEnter={() => setHoverClass(classes.explore__outer__circle)} onMouseLeave={() => setHoverClass('')} to='/destination'>
        <div className={hoverClass} ></div>
        <div className={classes.explore__btn} >Explore</div>
    </Link>
}

export default ExploreBtn;