import React, {useState, useRef} from 'react';
import '../assets/scss/style.scss'
import plus from '../assets/img/plus.svg'
import exit from '../assets/img/exit.svg'
import AddList from './AddList';

const ToDoList = () => {
    const [inputtodo,setInputToDo]=useState('');
    const [inputtodos,setInputToDos]=useState([]);
    const [addbtn,setAddBtn]=useState(false);
    
    let index = 0;
    const onRemove = (target) => {
        for (let el of inputtodos){
            if(el===target)
                {
                    inputtodos.delete(el);
                }
        }
        setInputToDos(inputtodos);
        console.log(inputtodos);
      };
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
                {inputtodos.map((inputtodo,index)=><AddList inputtodos={inputtodo}inputtodo={inputtodo} index ={index} onRemove={onRemove}/>)}
            </main>
        </div>
        
  )
}

export default ToDoList