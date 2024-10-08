import React, { useState, useEffect, useRef } from 'react';
import Slider from './Section/Slider';
import Srh from '../assets/img/icon/search.svg';

const { kakao } = window;

const Search = () => {
    const [inputText, setInputText] = useState('');
    const [place, setPlace] = useState('');
    const [placesList, setPlacesList] = useState([]);
    const mapRef = useRef(null);
    const map = useRef(null);
    const [showAll, setShowAll] = useState(false);
    
    // close 버튼 클릭 시 액션 시트 닫기
    const close = () => {
        document.getElementById('actionSheet').classList.remove('active')
    };
    
    
    // 카카오 맵 함수
    useEffect(() => {
        const container = document.querySelector('.map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        map.current = new kakao.maps.Map(container, options);
    }, []);

    useEffect(() => {
        const ps = new kakao.maps.services.Places();

        if (place) {
            ps.keywordSearch(place, (data, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(data[0].y, data[0].x);
                    map.current.setCenter(coords);
                    const marker = new kakao.maps.Marker({
                        map: map.current,
                        position: coords,
                    });

                    const infowindow = new kakao.maps.InfoWindow({
                        content: `<div style="padding:5px;">${data[0].place_name}</div>`,
                    });
                    infowindow.open(map.current, marker);

                    // 검색된 장소 리스트 업데이트
                    setPlacesList(data);
                    
                } else {
                    console.error('장소 검색 실패:', status);
                }
            });
        }
    }, [place]);

    // 실시간 입력 업데이트
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    // 폼 제출 함수 
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출시 새로고침 금지
        setPlace(inputText); // 맵 함수에 전달할 인자 세팅
    };

    // 장소 클릭 핸들러
    const handlePlaceClick = (place) => {
        const coords = new kakao.maps.LatLng(place.y, place.x);
        map.current.setCenter(coords);
        const marker = new kakao.maps.Marker({
            map: map.current,
            position: coords,
        });

        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;">${place.place_name}</div>`,
        });
        infowindow.open(map.current, marker);
    };

    // 액션 시트 표시 제어
    useEffect(() => {
        if(placesList.length > 4){
            handleShow();
        }
    }, [placesList]);

    const handleShow = ()=>{
        document.getElementById('actionSheet').classList.add('active');
    }
    return (
        <div className='Search_wrap container'>
            <Slider />
            <form onSubmit={handleSubmit} className='srch-form'>
                <input className='srch-input' placeholder="장소를 검색해주세요!" value={inputText} onChange={handleChange} />
                <button type='submit'>
                    <img src={Srh} alt='search' />
                </button>
            </form>
            {/* 검색된 장소 리스트 */}
                <div className="action-sheet" id="actionSheet">
                    <div className="action-options">
                        
                    <div className='places-list'>
                    <div class="border-line"></div>
                    <h1>"{inputText}" 주변에 있는 곳</h1>
                    
                    {placesList.slice(0, showAll ? placesList.length : 4).map((place, index) => (
                        <div key={index} className="place-item" onClick={() => { handlePlaceClick(place); }}>
                            {place.place_name}
                        </div>
                    ))}
                </div>
                        
                    </div>
                </div>
            <div className='map'></div>
        </div>
    );
}

export default Search;
