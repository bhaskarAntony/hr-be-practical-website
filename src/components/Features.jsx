import React from 'react'
import '../styles/features.css'

const featuresData = [
    {
        title:"Permanent Staffing",
        desc:"Our approach towards recruitment is fully tailor made for each requirement.",
        image:"https://cdn-icons-png.flaticon.com/128/9373/9373083.png?ga=GA1.1.874872603.1694171926&track=ais",
        link:'Permanent-Staffing-Services-bangalore'
    },
    {
        title:"Contract Staffing",
        desc:"Building an agile and flexible workforce requires an easy and fast access to expert talent, available on short notice.",
        image:"https://cdn-icons-png.flaticon.com/128/7480/7480033.png?ga=GA1.1.874872603.1694171926&track=ais",
        link:'contract-Staffing-Services-bangalore'
    },
    {
        title:"Train & Deploy Program",
        desc:"We provide Training & Development services for Indian clients.",
        image:"https://cdn-icons-png.flaticon.com/128/8407/8407062.png?ga=GA1.1.874872603.1694171926&track=ais",
        link:'hire-train-deploy-services-bangalore'
    },
    {
        title:"Corporate Training Program",
        desc:"Be-practical provides corporate training to small, medium and large scale industry.",
        image:"https://cdn-icons-png.flaticon.com/128/4535/4535112.png?ga=GA1.1.874872603.1694171926&track=ais",
        link:'corporate-training-services-bangalore'
    }
]
function Features() {
  return (
    <section className='features bg-gray2 container-fluid p-5' id='features'>
      <div className="row">
       {
        featuresData.map((item, index)=>(
            <div className="col-12 col-md-4 col-lg-3">
                <div className="feature-card p-3">
                <div className="thumb-feature">
                       <span className="fs-3 text-black mb-4 text-center">{item.title}</span>
                    <button className="btn-danger"><a href={item.link} className='nav-link text-light'>Know more</a></button>
                </div>
                    <div className="feature-card-header">
                        <img src={item.image} alt="" className="" />
                    </div>
                    <div className="features-card-body">
                        <span className="fs-3">{item.title}</span>
                        <p className="fs-5">{item.desc}</p>
                    </div>
                </div>
              
            </div>
        ))
       }
      </div>
    </section>
  )
}

export default Features
