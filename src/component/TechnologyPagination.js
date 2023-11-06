
import classes from "./TechnologyPagination.module.css";

const TechnologyPagination = ({ technology_data, isActive, onBubbleClick }) => {

    return <div className={classes.technology__pagination}>
        {technology_data.map((_, indx) => {
            return <button className={+isActive === indx + 1 ? classes.active : ''} value={indx + 1} onClick={onBubbleClick}>{indx + 1}</button>
        })}
    </div>
}

export default TechnologyPagination;