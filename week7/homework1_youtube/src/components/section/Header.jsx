import React from 'react'
import {headerMenus, searchKeyword,snsLink} from'../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
  return (
    <header id='header' role='banner'>
        <h1 className="header_logo">
            <a href='/'>
                <em arial-hidden='true'></em>
                <span>webs<br/>youtube</span>
            </a>
        </h1>
        <nav className="header_menu">
            <ul className='menu'>
                {headerMenus.map((menu,key)=>(
                    <li key={key}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}        
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword,key)=>(
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
        <div className='header_sns'>
                <ul>
                    {snsLink.map((sns, key)=>(
                        <li key={key}>
                            <a href={sns.url} target='_blank' rel="noopener noregerrer" aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
        </div>
    </header>
  )
}

export default Header