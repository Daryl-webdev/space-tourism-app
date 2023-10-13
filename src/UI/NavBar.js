import React from 'react'
import './NavBar.css'

const NavBar = () => {

    return <div className='navbar__wrapper'>
        <hr className='navbar__hr'></hr>
        <ul className='navbar'>
            <li className='navbar__nav'>Home</li>
            <li className='navbar__nav'>Destination</li>
            <li className='navbar__nav'>Crew</li>
            <li className='navbar__nav'>Technology</li>
        </ul>
    </div>
}

export default NavBar;