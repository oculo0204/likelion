import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstImage from '../assets/img/first-01.png';
import secondImage from '../assets/img/first-02.png';
import thirdImage from '../assets/img/first-03.png';
import fourthImage from '../assets/img/first-04.png';
import bg01Image from '../assets/img/bg_mvsimg3.png';
import bg02Image from '../assets/img/bg_mvsimg4.png';
import bg03Image from '../assets/img/bg_mvsimg6.png';

const First = () => {
  const [rounded, setRounded] = useState(false);

  const handleSlideChange = (swiper) => {
    setRounded(false); // Reset before the new slide
    setTimeout(() => {
      setRounded(true); // Set to rounded after 1 second
    }, 1000);
  };

  return (
    <div className='first-main'>
      <div className='first-h1'>
        <h1>2022 개정 <br />교육과정 교과서</h1>
        <h3>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</h3>
      </div>
      <div className='first-contents'>
        <div className='event-slide'>
          <h1>EVENT</h1>
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            className='slide-wrap'
            modules={[Pagination, Autoplay]}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className='slide-content'>
              <p>선생님 아직 티솔루션 회원이 아니신가요?<br/>신규 회원가입 이벤트 🎁</p>
              <div className='move-img01'>
                <div className={`donggle ${rounded ? 'rounded' : ''}`}></div>
                <img src={firstImage} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
              <p>마음에 드는 표지 선택하고 상품 받아가세요! <br/>표지 좋아요 이벤트 💗</p>
              <div className='move-img02'>
                <div className={`donggle ${rounded ? 'rounded' : ''}`}></div>
                <img src={secondImage} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <p>여기에 들어가는 초성은 무엇일까요? <br/>빈칸 퀴즈 이벤트 💡</p>
              <div className='move-img03'>
                <div className={`donggle ${rounded ? 'rounded' : ''}`}></div>
                <img src={thirdImage} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <p>2022 개정 지학사 교과서를 응원해 주세요! <br/>응원 이벤트 🍀</p>
              <div className='move-img04'>
                <div className={`donggle ${rounded ? 'rounded' : ''}`}></div>
                <img src={fourthImage} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="img-slide">
          <Swiper
            loop={true}
            autoplay={{ delay: 5000 }}
            className='slide-wrap'
            modules={[Autoplay]}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className='slide-content'>
              <img src={bg01Image} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <img src={bg02Image} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <img src={bg03Image} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default First;
