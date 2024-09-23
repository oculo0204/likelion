import React from 'react'; //chatgpt
import AsLink from '../assets/img/as-link.svg';
import AsTop from '../assets/img/as-top.svg';

const Nav = () => {
  const clip = () => {
    const linkToCopy = 'https://textbook.jihak.co.kr/main-pr.php'; 
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        alert('링크가 클립보드에 복사되었습니다!');
      })
      .catch(err => {
        alert('링크 복사에 실패했습니다:');
      });
  };

  return (
    <div id="nav-aside">
        <a onClick={clip} className="as_link"><span><img src={AsLink} alt="" /></span></a>
        <a href="" className="to-top"><span><img src={AsTop} alt="" /></span></a>
    </div>
  );
};

export default Nav;

