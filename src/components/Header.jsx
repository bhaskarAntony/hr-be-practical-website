import React from 'react'
import brand from '../images/brand-logo.jpg'
import '../styles/header.css'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

 const handleLinkClick = () => {
  // Hide the Offcanvas when a link is clicked
  setShow(false);
};

  return (
    <header>
      {/* <div className="nav-top">
        <p className="p-dark-small m-0 text-white">Join Our Elite program <b>Explore <i class="bi bi-arrow-right"></i></b></p>
      </div> */}
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a>

<div>
<button variant="primary" onClick={handleShow} className='btn-danger d-lg-none'>
    <i class="bi bi-list text-white"></i>
    </button>
    <button variant="primary" onClick={handleShowContact} className='btn bg-gray2 mx-2 p-2 rounded-2 d-lg-none'>
      <i class="bi bi-person-lines-fill fs-4 text-white"></i>
    </button>
</div>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='p-0 m-0 list-group'>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/" className='nav-link fs-4'>Home</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/events" className='nav-link fs-4'>Job Posts</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/blogs" className='nav-link fs-4'>Blogs</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/about" className='nav-link fs-4'>About Us</Link>
            </li>
            <li className='mobile-list-item list-group-item p-2' onClick={handleLinkClick}>
              <Link to="/contacts" className='nav-link fs-4'>Contact Us</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group  d-flex justify-content-center w-100">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'> <Link to='/permanent-Staffing-Services-bangalore' className='nav-link'>Permanent Staffing</Link></li>
            <li className='list-group-item'> <Link to='/contract-Staffing-Services-bangalore' className='nav-link'>Contract Staffing</Link></li>
            <li className='list-group-item'> <Link to='/hire-train-deploy-services-bangalore' className='nav-link'>Train & Deploy Program</Link></li>
            <li className='list-group-item'> <Link to='/corporate-training-services-bangalore' className='nav-link'>Corporate Training Program</Link></li>
          </ul>
        </li>
       
        {/* <li class="nav-item">
          <a class="nav-link  elite-link" href='/elite' > <i class="bi bi-stars"></i> Elite</a>
        </li> */}
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'> <Link to='/about-us' className='nav-link'>About Us</Link></li>
            <li className='list-group-item'> <Link to='/contact-us' className='nav-link'>Contact Us</Link></li>
          </ul>
        </li>
      </ul>
     <a href="/register" className='text-decoration-none'>
     <button class="btn-danger d-flex flex-nowrap" type="button"> <a href="/contact-us" className="nav-link">Contact us</a><i class="bi bi-chevron-double-right"></i></button>
     </a>
      <button variant="primary" onClick={handleShowContact} className='btn bg-gray2 mx-2 p-2 rounded-2'>
      <i class="bi bi-person-lines-fill fs-4 text-white"></i>
    </button>
    <Offcanvas show={showContact} onHide={handleCloseContact}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <a class="navbar-brand" href="/"> <img src={brand} alt="" /></a></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group">
            <li className="list-group-item p-2">
            <p className="fs-5"><i class="bi bi-telephone-fill text-green mx-2"></i> +91-9242079779</p>
            </li>
            <li className="list-group-item p-2">
            <p className="fs-5"><i class="bi bi-envelope-fill text-yellow mx-2"></i>info@be-practicle.com</p>
            </li>
            <li className="list-group-item p-2">
            <p className="fs-5"><address> <i class="bi bi-building text-main-danger mx-2"></i>  #737C,1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</address></p>
            </li>
          </ul>
          <Link to="tel:+919242079779"><button className="btn bg-success-2 w-100 text-white">Call Now</button></Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
