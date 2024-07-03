import React from 'react'
import './style.css'
import Contact from '../../components/Contact/Contact'

function AboutUs() {
  return (
    <section>
        <div className='about p-3 bg-light'>
        <div className="container bg-white p-4 p-md-5 rounded-5">
            <h1 className="fs-3 text-success">About us</h1>
            <p className="fs-5">Be Practical Tech Solutions is a Man Power staffing and Technical Training company focused on providing best in class services at competitive prices from past 10yrs <br /> <br />
            Founded in 2012 located in Bangalore, “Be Practical” identifies the key talents across India to support Indian Industries and Corporates on their business needs. “Be Practical HR Services” is one of the HR Outsourcing Company offering one stop temporary and permanent Staffing Solutions.</p>
        </div>
    </div>

    <Contact/>
    </section>
  )
}

export default AboutUs