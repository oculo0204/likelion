import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// 로컬 이미지 가져오기
import image1 from '../../assets/img/shoese/image1.jpg';
import image2 from '../../assets/img/shoese/image2.jpg';
import image3 from '../../assets/img/shoese/image3.jpg';
import image4 from '../../assets/img/shoese/image4.jpg';
import image5 from '../../assets/img/shoese/image5.jpg';
import image6 from '../../assets/img/shoese/image6.jpg';
import image7 from '../../assets/img/shoese/image7.jpg';
import image8 from '../../assets/img/shoese/image8.jpg';

//냉감의류
import coldimage1 from '../../assets/img/coldcloth/cold-image1.jpg';
import coldimage2 from '../../assets/img/coldcloth/cold-image2.jpg';
import coldimage3 from '../../assets/img/coldcloth/cold-image3.jpg';
import coldimage4 from '../../assets/img/coldcloth/cold-image4.jpg';
import coldimage5 from '../../assets/img/coldcloth/cold-image5.jpg';
import coldimage6 from '../../assets/img/coldcloth/cold-image6.jpg';
import coldimage7 from '../../assets/img/coldcloth/cold-image7.jpg';
import coldimage8 from '../../assets/img/coldcloth/cold-image8.jpg';

const MainSlider = () => {
  const [currentCategory, setCurrentCategory] = useState('페이토&샌들'); // 초기 카테고리 설정
  const images = {
    '페이토&샌들': [image1, image2, image3, image4, image5, image6, image7, image8],
    '냉감의류': [coldimage1, coldimage2, coldimage3, coldimage4, coldimage5, coldimage6, coldimage7, coldimage8],
    '에샤페': [image3, image4, image1, image2],
    '워터스포츠': [image4, image1, image2, image3],
    '시어서커': [image1, image2, image3, image4],
    '테니스': [image2, image3, image4, image1]
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
  };

  return (
    <>
      <div className='top-slider'>
        <h1 className='h1-center'>지금 많이 찾는 상품</h1>
        <div className='category-buttons'>
          <button onClick={() => handleCategoryClick('페이토&샌들')}>#페이토&샌들</button>
          <button onClick={() => handleCategoryClick('냉감의류')}>#냉감의류</button>
          <button onClick={() => handleCategoryClick('에샤페')}>#에샤페</button>
          <button onClick={() => handleCategoryClick('워터스포츠')}>#워터스포츠</button>
          <button onClick={() => handleCategoryClick('시어서커')}>#시어서커</button>
          <button onClick={() => handleCategoryClick('테니스')}>#테니스</button>
        </div>
      </div>

      <section id='main-slider'>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay]}
          grabCursor={true}
          draggable={true}
        >
          {images[currentCategory].map((image, index) => (
            <SwiperSlide key={index} style={{ width: '30%' }}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default MainSlider;

