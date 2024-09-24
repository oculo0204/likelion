import React from 'react'
import Slider from './Section/Slider'
import ArrowRight from '../assets/img/icon/arrowright.svg';
import Introduce from '../assets/img/png/introduce.png';

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <Slider />
            <section className='notify'>
                <ul>
                    <li><p>공지사항</p>
                        <img src={ArrowRight} alt="" />
                    </li>
                    <li><p>[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...</p>
                    <img src={ArrowRight} alt="" /></li>
                    <li><p>2024학년도 동계 단기연수 프로그램 설명회 개최 안내</p> <img src={ArrowRight} alt="" /></li>
                    <li><p>[연산지원팀] 2024학년도 동계 학부생 연구 참여 프로그램...</p> <img src={ArrowRight} alt="" /></li>
                    <li><p>[교양 교학팀] 2024-2 글로벌라운지 운영 안내</p> <img src={ArrowRight} alt="" /></li>
                    <li><p>2024학년도 2학기 제1차 성신 모의토익 접수 및 시행</p> <img src={ArrowRight} alt="" /></li>
                    <li><p>[대학혁신(2024)] 2024학년도 동계학기 글로벌 인턴십...</p> <img src={ArrowRight} alt="" /></li>
                    <li><p>2024학년도 2학기 수강철회 시행 안내</p> <img src={ArrowRight} alt="" /></li>
                </ul>
            </section>
            <section className='main-video'>
                <img src={Introduce} alt="" />
            </section>
        </div>
    )
}
export default Main