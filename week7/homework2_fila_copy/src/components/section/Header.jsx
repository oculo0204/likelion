import React from 'react'
import Nav from './Nav.jsx'
const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1>
                <div class="logo"></div>
	        </h1>
            <Nav/>
        </header>
    )
}

export default Header
