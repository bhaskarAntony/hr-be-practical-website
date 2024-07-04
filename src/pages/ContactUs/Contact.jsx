import React from 'react'
import './style.css'

function Contact() {
  return (
    <section className="contact-page bg-light d-flex align-items-center p-3">
        <div className="middle-bar">

        </div>
        <div className="contact-card  p-4 p-md-5">
            <div className="row bg-white">
                <div className="col-md-6">
                    <div className="contact-left mb-3">
                        <h1 className="fs-4 text-success mb-4 fw-bold">Contact Info</h1>
                        <ul>
                        <li> <i class="bi bi-telephone"></i> +91-9242079119</li>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6692316202034!2d77.53650917405092!3d12.992995314410939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ad89380bd%3A0xe619385693ac1684!2sBe%20Practical%20Tech%20Solutions%20%7C%20Top%20Software%20Training%20Institute%20in%20Bangalore%20%7C%20Data%20Science%20%7C%20Cloud%20Computing%20%7C%20MERN!5e0!3m2!1sen!2sin!4v1720022262836!5m2!1sen!2sin" width="100%" height="300" className='border-0 rounded-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Contact