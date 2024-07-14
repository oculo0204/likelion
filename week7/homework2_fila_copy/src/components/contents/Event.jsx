import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// 로컬 이미지 가져오기
import image1 from '../../assets/img/event/image1.jpg';
import image2 from '../../assets/img/event/image2.jpg';
import image3 from '../../assets/img/event/image3.jpg';
import image4 from '../../assets/img/event/image4.jpg';
import image5 from '../../assets/img/event/image5.jpg';
import image6 from '../../assets/img/event/image6.jpg';
import image7 from '../../assets/img/event/image7.jpg';

const Event = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <section id='event-banner' >
      <h1 className='event-title'>기획전</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true} // 커서를 드래그 가능한 형태로 변경
        draggable={true} // 드래그 가능 여부 설정
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Event
