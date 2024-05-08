import React from 'react';
//footer태그 안에 들어가야지 css에서 변경되지 않기 때문에 footer를 꼭 써줘야 함
function Header(props) {
    return (
        <div><footer></footer>  
            <h1>헤더입니다.</h1>
        </div>
    );
}

export default Header;