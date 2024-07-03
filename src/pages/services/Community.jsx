import React from 'react'

function Community({community}) {
  return (
    <div className='community p-3 p-md-5'>
        <div className="row align-items-center">
            <div className="col-md-6">
                <img src="https://img.freepik.com/free-vector/people-group-web-networking-template-social-connection_1017-53389.jpg?t=st=1720001871~exp=1720005471~hmac=c0207bbc5e952d35dc326ca829f94c62a588f981388eed244346fe47af7b3339&w=740" alt="" className="w-100 mb-3" />
            </div>
            <div className="col-md-6">
                <h1 className='display-2 fw-bold'>Our <br /> <span className="text-success">Commitment</span></h1>
                <p className="fs-5">{community}</p>

                <button className="btn-lg btn btn-success rounded-pill px-4">Know More</button>
            </div>
        </div>
    </div>
  )
}

export default Community