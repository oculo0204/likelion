import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// 로컬 이미지 가져오기
import image1 from '../../assets/img/shoese/image1.jpg';
import image2 from '../../assets/img/shoese/image2.jpg';
import image3 from '../../assets/img/shoese/image3.jpg';
import image4 from '../../assets/img/shoese/image4.jpg';

const MainSlider = () => {
  const images = [image1, image2, image3, image4];

  return (
    <section id='main-slider'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        grabCursor={true} // 커서를 드래그 가능한 형태로 변경
        draggable={true} // 드래그 가능 여부 설정
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: '30%' }} >
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlider;
