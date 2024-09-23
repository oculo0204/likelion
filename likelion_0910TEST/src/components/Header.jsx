import React from 'react'
import Logo from "../assets/img/logo.svg"

const header = () => {
  return (
    <div className='header'>
        <h1 id="logo">
            <a href="https://textbook.jihak.co.kr/main-pr.php"><img src={Logo} alt="" /></a>
        </h1>
        <div className='grade'>
            <a className='third'>초등 3학년 교과서</a>
            <a>초등 4학년 교과서</a>
        </div>
        <div className='hd-right'>
            <div className='tsolution'>티솔루션</div>
            <div>이벤트</div>
        </div>
    </div>
  )
}

export default header
