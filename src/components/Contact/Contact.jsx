import React from 'react'
import './style.css'


const contactdata = [
    {   
        title:'CHART TO US',
        subtitle:'Our friendly team is here to help.',
        desc:'chowdarykh@be-practical.com ',
        icon:'envelope'
    },
    {   
        title:'OFFICE',
        subtitle:'Come say hello at our office HQ.',
        desc:' #737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079',
        icon:'geo-alt'
    },
    {   
        title:'PHONE',
        subtitle:'Mon-Fri from 8am to 5am',
        desc:'9740201189',
        icon:'telephone'
    }
]
function Contact() {
  return (
    <div className='contact-section container-fluid pt-5'>
        <div className="container p-3">
            <div className="row">
                {
                    contactdata.map((data, dataindex)=>(
                        <div className="col-md-4 mb-5">
                            <div className="contact-card text-center">
                                <div className="icon">
                                    <i className={`bi bi-${data.icon}`}></i>
                                </div>
                                <div className="contact-card-body">
                                    <span className="d-block fs-3">{data.title}</span>
                                    <p className="fs-5 text-success fw-bold">{data.subtitle}</p>
                                    <p className="fs-5 text-secondary">{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Contact