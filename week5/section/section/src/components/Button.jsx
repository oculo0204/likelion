import React from 'react'
import { Link } from 'react-router-dom'

const Button = ()=> {
  return (
    <div className='button_wrap'>
        <Link to='/write'>글쓰기 start!</Link>
    </div>
  )
}

export default Button
