import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LinkIcon from './components/LinkIcon'
import Third from './components/Third'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
            <Header />
            <LinkIcon />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
            <Nav/>
            <Third/>
            <Footer/>
    </BrowserRouter>
  )
}

export default App