import React from 'react'
import imgPeople from '../images/img-people.jpg'
import '../styles/choose.css'

const whyChooseData = [
    {
        image:"https://cdn-icons-png.flaticon.com/128/3188/3188615.png?ga=GA1.1.874872603.1694171926&track=ais",
        title:"Understand your challenges"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/8439/8439145.png?ga=GA1.1.874872603.1694171926&track=ais",
        title:"Design best solutions that suits your needs"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/1534/1534214.png?ga=GA1.1.874872603.1694171926&track=ais",
        title:"Ensuring your satisfaction through High quality & timely delivery"
    }
]
function WhyChoose() {
  return (
    <section className='why_choose container-fluid py-5 '>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
            <img src={imgPeople} alt="" className="w-100" />
        </div>
        <div className="col-12 col-md-12 col-lg-6 r">
            <div className="choose-text">
            <p className="fs-5 text-secondary">  YOU'RE IN GOOD COMPANY</p>
            <h1 className="fs-1 text-900">
                <span className="text-main-danger">Real People</span> <br />
                Real Solutions
            </h1>
           <div className="row mt-5">
           {
                whyChooseData.map((item, index)=>(
                    <div className="col-12 col-md-4">
                        <div className="choose-card border-b p-3">
                            <img src={item.image} alt={item.title} className="mb-3" />
                            <p className="fs-5 text-900">{item.title}</p>
                        </div>
                    </div>
                ))
            }
           </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
