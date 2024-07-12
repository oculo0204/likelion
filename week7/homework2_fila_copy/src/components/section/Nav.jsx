import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/scss/section/nav.scss';

const Nav = () => {
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const navigate = useNavigate();

  const categoryUrl = '/products?main-category=';
  const baseUrl = '/products?';
    const newList =[
        {
          link: baseUrl,
          text: 'New & Featured',
        },
        {
          link: `${baseUrl}best-seller=4`,
          text: '신상품',
        },
        {
          link: `${categoryUrl}0`,
          text: '베스트',
        },
        {
          link: `${categoryUrl}1`,
          text: '스타일',
        },
        {
          link: `${categoryUrl}2`,
          text: '세일',
        },
        {
          link: `${categoryUrl}3`,
          text: 'FILA SUMMER SHOES',
        },
        {
          link: `${categoryUrl}4`,
          text: '슬릭웨이비',
        },
        {
          link: `${categoryUrl}5`,
          text: 'INTERN & ECHAPPE',
        },
        {
          link: `${categoryUrl}6`,
          text: '워터스포츠 AQUA TIME',
        },
        {
          link: `${categoryUrl}7`,
          text: '냉감셔츠 COLD WAVE',
        },
      ];
  const clothingList = [
    {
      link: baseUrl,
      text: '의류',
    },
    {
      link: `${baseUrl}best-seller=4`,
      text: '전체보기',
    },
    {
      link: `${categoryUrl}0`,
      text: '티셔츠',
    },
    {
      link: `${categoryUrl}1`,
      text: '스커트/원피스',
    },
    {
      link: `${categoryUrl}2`,
      text: '숏팬츠',
    },
    {
      link: `${categoryUrl}3`,
      text: '바람막이/집업',
    },
    {
      link: `${categoryUrl}4`,
      text: '롱팬츠',
    },
    {
      link: `${categoryUrl}5`,
      text: '브라탑/레깅스',
    },
    {
      link: `${categoryUrl}6`,
      text: '맨투맨/후드티',
    },
    {
      link: `${categoryUrl}7`,
      text: '테니스',
    },
    {
      link: `${categoryUrl}8`,
      text: '워터스포츠',
    },
    {
      link: `${categoryUrl}9`,
      text: '트레이닝 셋업',
    },
  ];
  const shoesList = [
    {
      link: baseUrl,
      text: '신발',
    },
    {
      link: `${baseUrl}best-seller=4`,
      text: '전체보기',
    },
    {
      link: `${categoryUrl}0`,
      text: '라이프스타일',
    },
    {
      link: `${categoryUrl}1`,
      text: '샌들/슬리퍼',
    },
    {
      link: `${categoryUrl}2`,
      text: '헤리티지',
    },
    {
      link: `${categoryUrl}3`,
      text: '테니스',
    },
    {
      link: `${categoryUrl}4`,
      text: '러닝',
    },
    {
      link: `${categoryUrl}5`,
      text: '페이토',
    },
    {
      link: `${categoryUrl}6`,
      text: '에샤페',
    },
    {
        link: `${categoryUrl}7`,
        text: '인터런',
      },
  ];
  const portableList = [
    {
      link: baseUrl,
      text: '용품',
    },
    {
      link: `${baseUrl}best-seller=4`,
      text: '전체보기',
    },
    {
      link: `${categoryUrl}0`,
      text: '백팩',
    },
    {
      link: `${categoryUrl}1`,
      text: '숄더/토트백',
    },
    {
      link: `${categoryUrl}2`,
      text: '메신저/크로스백',
    },
    {
      link: `${categoryUrl}3`,
      text: '슬링백/힙색',
    },
    {
      link: `${categoryUrl}4`,
      text: '모자',
    },
    {
      link: `${categoryUrl}5`,
      text: '양말',
    },
    {
      link: `${categoryUrl}6`,
      text: '테니스',
    },
    {
        link: `${categoryUrl}7`,
        text: '기타',
      },
  ];  
  const sportsList = [
    {
      link: baseUrl,
      text: '스포츠',
    },
    {
      link: `${baseUrl}best-seller=4`,
      text: '테니스',
    },
    {
      link: `${categoryUrl}0`,
      text: '러닝/트레이닝',
    },

  ];
  const underwearList = [
    {
      link: baseUrl,
      text: '언더웨어',
    },
    {
      link: `${baseUrl}best-seller=4`,
      text: '전체보기',
    },
    {
      link: `${categoryUrl}0`,
      text: '온라인단독',
    },
    {
      link: `${categoryUrl}1`,
      text: '패키지',
    },
    {
      link: `${categoryUrl}2`,
      text: '와이어브라',
    },
    {
      link: `${categoryUrl}3`,
      text: '노와이어브라',
    },
    {
      link: `${categoryUrl}4`,
      text: '데일리브라탑',
    },
    {
      link: `${categoryUrl}5`,
      text: '스포츠브라탑',
    },
    {
      link: `${categoryUrl}6`,
      text: '팬티',
    },
    {
      link: `${categoryUrl}7`,
      text: '사각드로스',
    },
    {
      link: `${categoryUrl}8`,
      text: '이지웨어',
    },
    {
        link: `${categoryUrl}9`,
        text: '파자마',
      },
  ];
  const aboutList = [
    {
      link: '/',
      text: 'OUR STORY',
    },
    {
      link: '/',
      text: 'PRESS',
    },
    {
      link: '/',
      text: 'CAMPAIGN',
    },
  ];

  return (
    <div className="menu">
      <div
        className="category wrapBox"
        onMouseEnter={() => setIsShopHovered(true)}
        onMouseLeave={() => setIsShopHovered(false)}
      >
        <Link to="/">WOMEN</Link>
        {isShopHovered && (
          <ul className="shopCloseBox CloseBox">
            <div className='new-list'>
                {newList.map((list, index) => (
                    <li className="shopClose Close" key={index}>
                        <Link to={list.link}>{list.text}</Link>
                    </li>
                ))}
            </div>
            <div className='v-line'></div>
            <div className='new-list'>
            {clothingList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            </div>
            <div className='new-list'>
            {shoesList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            </div>
            <div className='new-list'>
            {portableList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            </div>
            <div className='new-list'>
            {underwearList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            </div>
            <div className='new-list'>
            {sportsList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            </div>
          </ul>
        )}
      </div>
      <div
        className="category wrapBox"
        onMouseEnter={() => setIsAboutHovered(true)}
        onMouseLeave={() => setIsAboutHovered(false)}
      >
        <Link to="/">MEN</Link>
        {isAboutHovered && (
          <ul className="aboutCloseBox CloseBox">
            {newList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            {clothingList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            {shoesList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            {portableList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            {underwearList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
            {sportsList.map((list, index) => (
              <li className="shopClose Close" key={index}>
                <Link to={list.link}>{list.text}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="category">
        <Link to="/">KIDS</Link>
      </div>
      <div className="category">
        <Link to="/">TENNIS</Link>
      </div>
      <div className="category">
        <Link to="/">BRAND</Link>
      </div>
    </div>
  );
};

export default Nav;
