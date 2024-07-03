import React from 'react'
import './style.css'

function Contact() {
  return (
    <section className="contact-page bg-light d-flex align-items-center">
        <div className="middle-bar">

        </div>
        <div className="contact-card  p-3 p-md-5">
            <div className="row bg-white">
                <div className="col-md-6">
                    <div className="contact-left">
                        <h1 className="fs-4 text-success">Contact Info</h1>
                        <ul>
                        <li> <i class="bi bi-telephone"></i> 9740201189</li>
                        <li><i class="bi bi-envelope"></i> chowdarykh@be-practical.com</li>
                        <li><i class="bi bi-geo-alt"></i> #737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</li>
                        </ul>
                        <div className="icons d-flex fs-4 text-success gap-3 ">
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-youtube"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-right">

                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Contact