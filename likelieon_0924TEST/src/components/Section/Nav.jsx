import React from 'react'
import Home from '../../assets/img/icon/home.svg'
import Like from '../../assets/img/icon/like.svg'
import Search from '../../assets/img/icon/search.svg'
import Mypage from '../../assets/img/icon/mypage.svg'

const Nav = () => {
    return (
        <div className='Nav-wrap container'>
            <div className='btn-wrap'>
            <button className='home'><img src={Home} alt="" /></button>
            <button className='like'><img src={Like} alt="" /></button>
            <button className='search'><img src={Search} alt="" /></button>
            <button className='mypage'><img src={Mypage} alt="" /></button>
        
            </div>
        </div>
    )
}

export default Nav