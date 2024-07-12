import React from 'react'
import MainSlider from '../contents/MainSlider.jsx'
import MainBanner from '../contents/MainBanner.jsx'

const Main = () => {
    return (
        <main id="main" role="main">
            <MainBanner/>
            <br/>
            <MainSlider/>
            
        </main>
    )
}

export default Main