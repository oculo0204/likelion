import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/scss/section/nav.scss';
import {
  newList,
  clothingList,
  shoesList,
  portableList,
  sportsList,
  underwearList,
  aboutList,
} from '../../assets/data/data';

const Nav = () => {
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`menu ${showNav ? '' : 'hideNav'}`}>
      <div
        className="category wrapBox"
        onMouseEnter={() => setIsShopHovered(true)}
        onMouseLeave={() => setIsShopHovered(false)}
      >
        <Link className='nav-title' to="/">WOMEN</Link>
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
        <Link  className='nav-title' to="/">MEN</Link>
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
        <Link  className='nav-title' to="/">KIDS</Link>
      </div>
      <div className="category">
        <Link  className='nav-title' to="/">TENNIS</Link>
      </div>
      <div className="category">
        <Link  className='nav-title' to="/">BRAND</Link>
      </div>
    </div>
  );
};

export default Nav;
