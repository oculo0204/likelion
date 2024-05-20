import React, {useState, useRef} from 'react';
import '../assets/scss/style.scss'
import plus from '../assets/img/plus.svg'
import exit from '../assets/img/exit.svg'
import PropTypes from "prop-types";
import $ from 'jquery';
const AddList = ({inputtodos,inputtodo, index,})=>{
    const i =index;
    const listid = `list${i}`
    return(
        <div id={listid} class="list">
                <div  class="box">
                    <input type="checkbox"/>
                    <label for="checkboxSample"></label>
                    <p>{inputtodo}</p>
                </div>
                <button class="deletebtn" onClick={()=>{
                    $(`#list${i}`).remove();
                }}><img src={exit} alt="exitbtn"/></button>
        </div>
    )
}
AddList.propTypes = {
    inputtodo: PropTypes.string,
  };
export default AddList