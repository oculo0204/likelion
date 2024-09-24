import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination'
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Slider01 from '../../assets/img/png/slider01.png';
import Slider02 from '../../assets/img/png/slider02.png'
import Slider03 from '../../assets/img/png/slider03.png'
import Slider04 from '../../assets/img/png/slider04.png'


const Slider = () => {
    return (
        <Swiper pagination={{clickable:true}} loop={true} autoplay={{delay:5000}} className='slide-wrap' modules={[Pagination, Autoplay]}>
            <SwiperSlide className='slide-content'>
                <img src={Slider01} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <img src={Slider02} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <img src={Slider03} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slide-content'>
            <img src={Slider04} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider