import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// 동적으로 이미지 가져오기
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const shoeseImages = importAll(require.context('../../assets/img/shoese', false, /\.(jpg|jpeg|png|gif)$/));
const coldClothImages = importAll(require.context('../../assets/img/coldcloth', false, /\.(jpg|jpeg|png|gif)$/));

const MainSlider = () => {
  const [currentCategory, setCurrentCategory] = useState('페이토&샌들'); // 초기 카테고리 설정
  
  const images = {
    '페이토&샌들': shoeseImages.map((image, index) => ({
      src: image,
      text: {
        tag: '공용',
        title: `페이토 샌들 ${index + 1}`,
        price: `${79000 + index * 1000}원`,
      },
    })),
    '냉감의류': coldClothImages.map((image, index) => ({
      src: image,
      text: {
        tag: '정사이즈핏',
        title: `냉감의류 ${index + 1}`,
        price: `${69000 + index * 1000}원`,
      },
    })),
    // 다른 카테고리들도 같은 방식으로 설정
    '에샤페': shoeseImages.map((image, index) => ({
      src: image,
      text: {
        tag: '정사이즈핏',
        title: `에샤페 ${index + 1}`,
        price: `${89000 + index * 1000}원`,
      },
    })),
    '워터스포츠': shoeseImages.map((image, index) => ({
      src: image,
      text: {
        tag: '정사이즈핏',
        title: `워터스포츠 ${index + 1}`,
        price: `${99000 + index * 1000}원`,
      },
    })),
    '시어서커': shoeseImages.map((image, index) => ({
      src: image,
      text: {
        tag: '정사이즈핏',
        title: `시어서커 ${index + 1}`,
        price: `${109000 + index * 1000}원`,
      },
    })),
    '테니스': shoeseImages.map((image, index) => ({
      src: image,
      text: {
        tag: '정사이즈핏',
        title: `테니스 ${index + 1}`,
        price: `${119000 + index * 1000}원`,
      },
    })),
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
          slidesPerView={7}
          spaceBetween={30}
          grabCursor={true}
          draggable={true}
        >
          {images[currentCategory].map((imageData, index) => (
            <SwiperSlide key={index} style={{ width: '30%' }}>
              <div>
                <img src={imageData.src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                <div className='text-box'>
                    <div><span className='text-size'>{imageData.text.tag}</span></div>
                    <p className='text-name'>{imageData.text.title}</p>
                    <div className='hori-align'>
                        <p className='text-price'>{imageData.text.price}</p>
                        <button className='jimcong'></button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default MainSlider;

