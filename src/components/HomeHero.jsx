import React from 'react'
import '../styles/homehero.css'
import HeroRegister from './HeroRegister'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section className='home-hero container-fluid bg-blur'>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center">
           <div className="home-left p-lg-5 p-3">
            <p className="tag text-main-danger text-900">HR Services</p>
            <h1 className="heading text-900">Make Your Recritment Process Hassel Free</h1>
            <p className="fs-5 text-secondary">Upskill your existing workforce with the top consultancy in bangalore. Hire the best talents from one of the <span className="text-main">
            Best job consultancy in bangalore.</span></p>
           <div className="d-flex flex-wrap gap-2 mt-3">
             <button className="btn-danger hero-btn px-5"><Link className='nav-link' to='/about-us'>About us</Link></button>
            </div>
           </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
            <div className="home-right d-flex align-items-center p-5">
                <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241224.jpg?w=740&t=st=1699259085~exp=1699259685~hmac=5888d7f009512a11c9ca20635acb03de32321e60f88ad344bc6700c8246079ad" alt="" className="w-100 rounded-5" />
            </div>
        </div>
      </div>
      {/* <HeroRegister/> */}
    </section>
  )
}

export default HomeHero
