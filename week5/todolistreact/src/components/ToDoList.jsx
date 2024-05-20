import React, {useState, useRef} from 'react';
import '../assets/scss/style.scss'
import plus from '../assets/img/plus.svg'
import exit from '../assets/img/exit.svg'
import AddList from './AddList';

const ToDoList = () => {
    const [inputtodo,setInputToDo]=useState(''); //input의 text 받음
    const [inputtodos,setInputToDos]=useState([]); // 배열로 저장해서 map으로 한번에 render
    const [addbtn,setAddBtn]=useState(false);
    
    let index = 0;
    return (
        <div id="wrap">
            <header id="header">
                <h1>TO-DO-LIST</h1>
                <div class="add">
                    <input value={inputtodo} onChange={(e)=>{setInputToDo(e.target.value)}}  type="text"  placeholder="오늘 할 일을 입력해주세요." id="input_todo"/>
                    <button value={addbtn} onClick={()=>{if(inputtodo=='')alert("내용을 입력해주세요.")
                        else {setAddBtn(true);index++;
                            setInputToDos((currentArray) =>[inputtodo, ...currentArray]);
                        }
                    }} id="addbtn">
                        <img src={plus} alt="plusbtn"/>
                    </button>
                </div>
            </header>
            <main id="main">
                {inputtodos.map((inputtodo,index)=><AddList inputtodos={inputtodos} inputtodo={inputtodo} index ={index}/>)}
            </main>
        </div>
        
  )
}

export default ToDoList