import React, { useState } from 'react';
// import SuccessDialog from '../modals/SuccessDialog'
import axios from 'axios';
// import Loading from '../Modals/Loading';

function HeroRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'MERN',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(''); 
  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show loading while making the request
    setLoading(true);

    axios
      .post('https://fancy-mittens-ray.cyclic.app/api/register', formData)
      .then((response) => {
        console.log('Registration success:', response.data);
        setShowSuccessDialog(true);
        setError(false)
        setMessage('registartion is success')
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setMessage(`Registration error: ${error}` )
        setError(true)
          setShowSuccessDialog(true);
      })
      .finally(() => {
        // Hide loading when the request is complete
        setLoading(false);
      });
  };
  return (
   <div className="p-2">
    <div className="px-lg-5">
     <div className="register-container-home bg-white container-fluid light-shadow border-0 shadow1">
      <div className="register align-items-center rounded-1 p-3 ">
        <div className="p-2 rounded-2 py-3 border-0 bg-transparent">
          <div className="card-header-text text-center w-100">
            <span className="banner-heading fs-3 text-center mb-3">Register For Free Demo Session</span>
          </div>
          <form action="post" onSubmit={handleSubmit}>
            <div className="row mt-2">
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control p-3"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mb-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control p-3"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group mb-2">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        className="form-control p-3"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="form-group form-group-last mb-2">
                      <select
                        name="course"
                        className="form-control p-3"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="MERN">MERN</option>
                        <option value="Python Fullstack">Python Fullstack</option>
                        <option value="Java Fullstack">Java Fullstack</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 mb-2">
                <button type="submit" className="btn-danger w-100">Register <i className="bi bi-chevron-double-right"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <SuccessDialog show={showSuccessDialog} onHide={() => setShowSuccessDialog(false)} msg={message} register={error} />
      {loading && <Loading />} */}
    </div>
   </div>
   </div>
  )
}

export default HeroRegister
