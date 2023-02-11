import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Services from '../pages/services'
import About from '../pages/about'
import Navbars from '../pages/Navbar'

function Router() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router