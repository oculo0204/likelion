import React from 'react';
import mathImage1 from '../assets/img/mthunb-suhak31-pr.png';
import mathImage2 from '../assets/img/mthunb-suhak32-pr.png';
import socialImage1 from '../assets/img/mthunb-sahui31-pr.png';
import socialImage2 from '../assets/img/mthunb-sahui32-pr.png';
import scienceImage1 from '../assets/img/mthunb-gwahak31-pr.png';
import scienceImage2 from '../assets/img/mthunb-gwahak32-pr.png';
import musicImage from '../assets/img/mthunb-eumak3-pr.png';
import artImage from '../assets/img/mthunb-misul3-pr.png';
import sportsImage from '../assets/img/mthunb-cheyook3-pr.png';

const Second = () => {
  return (
    <div className='second-main'>
      <div className='second-h1'>
        <h1>선생님과 학생을 생각하는 <br />지학사 교과서</h1>
        <h3>가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 <br />교육과정 교과서.<br />
            항상 학교 현장을 고민하는 지학사 교과서가<br />
            그동안의 경험을 모아 더 나은 수업을 도와드립니다.</h3>
      </div>
      <div className='second-btn'>
        <button>수학</button>
        <button>사회</button>
        <button>과학</button>
        <button>음악</button>
        <button>미술</button>
        <button>체육</button>
      </div>
      <ul className='nemo'>
        <li><div className="efft-pr1"></div></li>
        <li>
          <div>
            <img src={mathImage1} alt="수학 3-1" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li>
          <div>
            <img src={mathImage2} alt="수학 3-2" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li><div className="efft-pr2"></div></li>
        <li>
          <div>
            <img src={socialImage1} alt="사회 3-1" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li>
          <div>
            <img src={socialImage2} alt="사회 3-2" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li><div className="efft-pr3"></div></li>
        <li><div className="efft-pr4"></div></li>
        <li>
          <div>
            <img src={scienceImage1} alt="과학 3-1" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li>
          <div>
            <img src={scienceImage2} alt="과학 3-2" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li><div className="efft-pr5"></div></li>
        <li>
          <div>
            <img src={musicImage} alt="음악 3" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li>
          <div>
            <img src={artImage} alt="미술 3" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li><div className="efft-pr6"></div></li>
        <li>
          <div>
            <img src={sportsImage} alt="체육 3" />
            <div className="ov-shd"></div>
          </div>
        </li>
        <li><div className="efft-pr7"></div></li>
      </ul>
    </div>
  );
};

export default Second;
