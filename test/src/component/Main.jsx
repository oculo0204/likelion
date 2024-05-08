import React,{useState} from 'react';
//useState을 통해 화면이 계속 바뀌는 것을 확인해줄 수 있다. props에서 state로 바꿔주면서 ~효과가 생김
const Main =(props) => {
const [myName,setMyName]=useState("장서원")
    function ChangeName(){
        setMyName(myName === "장서원" ? "12기 아기사자" : "장서원")
    }
    return (
        <div>
            <h1>안녕하세요, {myName}입니다.</h1>
            <button onClick={ChangeName}>change</button>
        </div>
    );
}

export default Main;