import React from "react";
import ExploreBtn from "../component/ExploreBtn";
import classes from "./Home.module.css";
import PageTextContent from "../UI/PageTextContent";


const Home = () => {
  return (
    <div className={classes.home__wrapper}>
      <div className={classes.home__content__container}>
        <PageTextContent>
          <h5
            className={classes.home__heading__five}
          >
            So, you want to travel to
          </h5>
          <h1
            className={classes.home__heading__one}
          >
            Space
          </h1>
          <p className={classes.home__p}>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </PageTextContent>
        <ExploreBtn />
      </div>
    </div>
  );
};

export default Home;
