import classes from './PageWrapper.module.css'
import bg_home from '../assets/home/background-home-desktop.jpg'
import bg_crew from '../assets/crew/background-crew-desktop.jpg'
import bg_destination from '../assets/destination/background-destination-desktop.jpg'
import bg_technology from '../assets/technology/background-technology-desktop.jpg'
import { useLocation } from 'react-router-dom'

const BG_IMAGE = [['/', bg_home], ['/crew', bg_crew], ['/destination', bg_destination], ['/technology', bg_technology]]

const PageWrapper = ({ children }) => {

    const location = useLocation();
    const pathName = location.pathname;
    const defaultImage = bg_home; // Set a default background image

    // Get the background image URL based on the current path or use the default image
    const backgroundImage = BG_IMAGE.get(pathName) || defaultImage;

    // Apply a CSS transition for smoother background image changes
    const backgroundStyle = {
        background: `url(${backgroundImage}) no-repeat center center fixed`,
    };

    return (
        <div className={classes.wrapper} style={backgroundStyle}>
            {children}
        </div>
    );
};

export default PageWrapper;