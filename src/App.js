import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
