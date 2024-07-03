import React from 'react'
import '../styles/industries.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCableCar, faCar, faGears, faGlobe, faIndustry, faKitMedical, faLaptop, faPlane } from '@fortawesome/free-solid-svg-icons'

const industriesData = [
    {
        title:"IT",
        image:faIndustry
    },
    {
        title:"Aerospace",
        image:faPlane
    },
    {
        title:"Automotive",
        image:faCar
    },
    {
        title:"Consumer Electronics",
        image:faLaptop
    },
    {
        title:"Manufacturing",
        image:faGears
    },
    {
        title:"Telecom & Network",
        image:faGlobe
    },
    {
        title:"Medical",
        image:faKitMedical
    }
]
function Industries() {
  return (
    <div className='industries container-fluid p-lg-5 p-3 bg-blur'>
        <h1 className="text-center fs-1 text-900 mb-3">Industries We Cater for <p className="text-main-danger">Recruitment</p></h1>
        <div className="row mt-5 justify-content-center">
            {
                industriesData.map((item, index)=>(
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="industry-card">
                            <div className="row">
                                <div className="col-3 d-flex align-items-center">
                                <div className="industry-image ">
                                <FontAwesomeIcon icon={item.image} className='fs-1 '/>
                            </div>
                                </div>
                                <div className="col-9 d-flex align-items-center">
                                <div className="industry-body">
                                <p className="fs-2 text-900">{item.title}</p>
                            </div>
                                </div>
                            </div>
                         
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Industries
