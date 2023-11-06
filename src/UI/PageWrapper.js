import classes from './PageWrapper.module.css'
import bg_home from '../assets/home/background-home-desktop.jpg'
import bg_crew from '../assets/crew/background-crew-desktop.jpg'
import bg_destination from '../assets/destination/background-destination-desktop.jpg'
import bg_technology from '../assets/technology/background-technology-desktop.jpg'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

const BG_IMAGE = [['/', bg_home], ['/crew', bg_crew], ['/destination', bg_destination], ['/technology', bg_technology]]

const PageWrapper = ({ children }) => {

    const location = useLocation()
    const BG_IMAGE_MAP = new Map(BG_IMAGE)
    const pathName = location.pathname
    let bg = BG_IMAGE_MAP.get(pathName)
    const [backgroundImage, setBackgroundImage] = useState(bg)


    useEffect(() => {
        bg = BG_IMAGE_MAP.get(pathName)
        setBackgroundImage(bg)
    }, [location])

    const backgroundStyle = {
        background: `url(${backgroundImage}) no-repeat center center fixed`
    };


    return <div className={classes.wrapper} style={backgroundStyle}>
        {children}
    </div>
}

export default PageWrapper;