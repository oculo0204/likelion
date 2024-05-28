import React,{useState} from 'react'
import '../assets/style.scss'
const Write = () => {
    const [title, setTitle]=useState('');
    const [content, setContent] = useState('');
    const Print = () =>{
        console.log('title: ', title);
        console.log('content: ',content)
    }
  return (
    <div>
      <div className="ground">
        <input value ={title} className="title" placeholder='제목을 입력해주세요!'/>
        <textarea value ={content} className="texts" placeholder="내용을 입력해주세요"name="" id=""></textarea>
        <div className="footer">
            <button className="btn" >취소하기</button>
            <button className="btn"onChange={(e)=>{setTitle();}}>작성하기</button>
        </div>
      </div>
    </div>
  )
}

export default Write
