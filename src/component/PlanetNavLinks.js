import { Link } from "react-router-dom";
import classes from './PlanetNavLinks.module.css';


const PlanetNavLinks = ({ data, activePlanet, onNavigate }) => {

    return <ul className={classes.planet__navigation}>
        {data.map(planet => {
            return (
                <Link className={`${classes.planet__navigation__item}  ${activePlanet === planet && classes.active__planet__navigation__item}`}
                    onClick={() => onNavigate(planet)}>
                    {planet}
                </Link>
            )
        })}
    </ul>

}

export default PlanetNavLinks;