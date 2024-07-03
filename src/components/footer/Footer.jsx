import React from 'react'
import './style.css'

function Footer() {
  return (
    <div className='bg-black'>
        <div className="social bg-main p-2 d-flex align-items-center gap-3 justify-content-between">
            <span  className='d-block text-white fs-4'>get Connected with us on Social Networks</span>
            <div className="icons d-flex gap-3 text-light fs-3">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-linkedin"></i>
            </div>
        </div>
        <footer className='p-3 p-md-5 bg-black text-light'>
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-div">
                        <h1 className="fs-3">About us</h1>
                        <p className="fs-6">
                        Be Practical Tech Solutions is a Man Power staffing and Technical Training company focused on providing best in class services at competitive prices from past 10yrs <br />
                        Founded in 2012 located in Bangalore, “Be Practical” identifies the key talents across India to support  Indian Industries and Corporates on their business needs. 
                        “Be Practical HR Services” is one of the HR Outsourcing Company offering one stop temporary and permanent Staffing Solutions.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-div">
                        <h1 className="fs-3">Services</h1>
                        <ul>
                            <li><a href="#">Permanent Staffing</a></li>
                            <li><a href="#">Contract Staffing</a></li>
                            <li><a href="#">Train & Deploy Program</a></li>
                            <li><a href="#">Corporate Training Program</a></li>
                            <li><a href="#">Permanent Hire</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer-div">
                        <h1 className="fs-3">Quick Links</h1>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
        <hr />
        <div className='bg-black'>
            <span className="text-center text-light fs-6 d-block">Copyright © 2021 Be Practical HR Services. All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer