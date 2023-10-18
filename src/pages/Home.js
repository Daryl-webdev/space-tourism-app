import React from "react";
import ExploreBtn from "../UI/ExploreBtn";
import classes from "./Home.module.css";


const Home = () => {
  return (
    <>
      <div className={classes.home__wrapper}>
        <div className={classes.home__content__container}>
          <div className={classes.home__content}>
            <h5
              className={`${classes.home__heading__five} ${classes.page__content}`}
            >
              So, you want to travel to
            </h5>
            <h1
              className={`${classes.home__heading__one} ${classes.page__content}`}
            >
              Space
            </h1>
            <p className={`${classes.home__p} ${classes.page__content} `}>
              Let’s face it; if you want to go to space, you might as well genuinely
              go to outer space and not hover kind of on the edge of it. Well sit
              back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </div>
          <ExploreBtn />
        </div>
      </div>
    </>
  );
};

export default Home;
