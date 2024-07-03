import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Contract from './pages/services/Contract'
import Footer from './components/footer/Footer'
import Corporate from './pages/services/Corporate'
import Deploy from './pages/services/Deploy'
import Permanent from './pages/services/Permanent'
import Contact from './pages/ContactUs/Contact'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/permanent-Staffing-Services-bangalore' element={ <Permanent/>}/>
      <Route path='/contract-Staffing-Services-bangalore' element={ <Contract/>}/>
      <Route path='/hire-train-deploy-services-bangalore' element={ <Deploy/>}/>
      <Route path='/corporate-training-services-bangalore' element={ <Corporate/>}/>
      <Route path='/contact-us' element={ <Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
