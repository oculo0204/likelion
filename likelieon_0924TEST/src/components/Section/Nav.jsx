import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Home from '../../assets/img/icon/home.svg';
import Like from '../../assets/img/icon/like.svg';
import Search from '../../assets/img/icon/search.svg';
import Mypage from '../../assets/img/icon/mypage.svg';
import Homefull from '../../assets/img/icon/homefull.svg';
import Likefull from '../../assets/img/icon/likefull.svg';
import Searchfull from '../../assets/img/icon/searchfull.svg';
import Mypagefull from '../../assets/img/icon/mypagefull.svg';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 가져오기

    // 현재 경로에 따라 활성 버튼 설정
    const getActiveButton = () => {
        switch (location.pathname) {
            case '/main':
                return 'home';
            case '/like':
                return 'like';
            case '/search':
                return 'search';
            case '/mypage':
                return 'mypage';
            default:
                return 'home'; // 기본값
        }
    };

    const activeButton = getActiveButton(); // 현재 활성 버튼

    // 버튼 클릭 핸들러
    const handleButtonClick = (route) => {
        navigate(`/${route}`); // 해당 경로로 이동
    };

    return (
        <div className='Nav-wrap container'>
            <div className='btn-wrap'>
                <button className='home' onClick={() => handleButtonClick('main')}>
                    <img src={activeButton === 'home' ? Homefull : Home} alt="home-btn" />
                </button>
                <button className='like' onClick={() => handleButtonClick('like')}>
                    <img src={activeButton === 'like' ? Likefull : Like} alt="like-btn" />
                </button>
                <button className='search' onClick={() => handleButtonClick('search')}>
                    <img src={activeButton === 'search' ? Searchfull : Search} alt="search-btn" />
                </button>
                <button className='mypage' onClick={() => handleButtonClick('mypage')}>
                    <img src={activeButton === 'mypage' ? Mypagefull : Mypage} alt="mypage-btn" />
                </button>
            </div>
        </div>
    );
}

export default Nav;
