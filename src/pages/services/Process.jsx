import React from 'react'

function Process({data}) {
  return (
   <div className="container-fluid bg-light p-3 p-md-5">
    <h1 className="display-2 fw-bold text-center">Our <span className="text-success">Process</span></h1>
     <div className="container ">
        {
            data.map((item, index)=>(
                <div className="steps-card bg-white d-flex gap-3 align-items-center justify-content-center py-3">
                    <div className="step">
                        <span className="fs-4">0{index +1}</span>
                    </div>
                    <div className="steps-body">
                        <span className="fs-5 d-block fw-bold mb-2">{item.title}</span>
                        <span className="fs-5">{item.subtitle}</span>
                    </div>
                </div>
            ))
        }
    </div>
   </div>
  )
}

export default Process