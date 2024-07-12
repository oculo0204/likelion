import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Clothing from './pages/Clothing'
import Shoes from './pages/Shoes'
import Portable from './pages/Portable'
import Underwear from './pages/Underwear'
import Newgoods from './pages/Newgoods'
import Best from './pages/Best'
import Sale from './pages/Sale'
import Not from './pages/Not'

import Header from './components/section/Header';   
import Main from './components/section/Main';     
import Footer from './components/section/Footer';  


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/clothing' element={<Clothing />} />
                    <Route path='/shoes' element={<Shoes />} />
                    <Route path='/portable' element={<Portable />} />
                    <Route path='/underwear' element={<Underwear />} />
                    <Route path='/newgoods' element={<Newgoods />} />
                    <Route path='/best' element={<Best />} />
                    <Route path='/sale' element={<Sale />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;