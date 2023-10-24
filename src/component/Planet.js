import classes from './Planet.module.css';

const Planet = ({ data }) => {
    return <>
        <h1 className={classes.destination__planet}>{data.name}</h1>
        <p className={classes.destination__planet__desc}>{data.desc}</p>
        <div className={classes.destination__distance__container}>
            <div className={classes.destination__distance}>
                <p>Avg. Distance</p>
                <p>{data.avg_distance}</p>
            </div>
            <div className={classes.destination__travel__time}>
                <p>Est. Travel Time</p>
                <p>{data.Est_Travel_time}</p>
            </div>
        </div></>
}

export default Planet;