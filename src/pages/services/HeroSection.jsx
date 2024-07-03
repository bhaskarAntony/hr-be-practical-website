import React from 'react'
import './style.css'

function HeroSection({title, subtitle}) {
  return (
    <section className='service-hero d-flex align-items-center jsutify-content-center p-3 p-md-5'>
        <div>
            <h1 className="display-1 fw-bold"><span className="text-dark">{title.split(' ')[0]} </span>{title.split(' ').map((item, index)=>{
                if(index != 0){
                    return item + " "
                }
            } )}</h1>
            <p className="fs-5">{subtitle}</p>

           <div className="d-flex gap-3 justify-content-center">
           <button className="btn btn-light btn-lg">Contact us</button>
           <button className="btn btn-outline-light btn-lg">About us</button>
           </div>
        </div>
    </section>
  )
}

export default HeroSection