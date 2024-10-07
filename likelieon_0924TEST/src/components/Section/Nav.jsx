import React from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../../assets/img/icon/home.svg'
import Like from '../../assets/img/icon/like.svg'
import Search from '../../assets/img/icon/search.svg'
import Mypage from '../../assets/img/icon/mypage.svg'

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className='Nav-wrap container'>
            <div className='btn-wrap'>
            <button className='home' onClick={()=>navigate('/main')}><img src={Home} alt="home-btn" /></button>
            <button className='like' onClick={()=>navigate('/like')}><img src={Like} alt="Like-btn" /></button>
            <button className='search' onClick={()=>navigate('/search')}><img src={Search} alt="search-btn" /></button>
            <button className='mypage' onClick={()=>navigate('/mypage')}><img src={Mypage} alt="mypage-btn" /></button>
        
            </div>
        </div>
    )
}

export default Nav