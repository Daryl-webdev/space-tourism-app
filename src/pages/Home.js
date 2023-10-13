import React from 'react'
import image from "../assets/home/background-home-desktop.jpg";
import './Home.css'
import NavBar from '../UI/NavBar';

const Home = () => {

    return (
        <div className='home__wrapper'>
            <NavBar />
            Hello World

            <h2> So, you want to travel to</h2>
            <h1> Space</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!</p>
        </div>
    )

}

export default Home;