import React from 'react'
import MainSlider from '../contents/MainSlider.jsx'
import MainBanner from '../contents/MainBanner.jsx'
import Event from '../contents/Event.jsx'
import GoodsScroll2 from '../contents/GoodsScroll2.jsx'

const Main = () => {
    return (
        <main id="main" role="main">
            <MainBanner/>
            <br/>
            <MainSlider/>
            <Event/>
            <GoodsScroll2/>
        </main>
    )
}

export default Main