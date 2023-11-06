import React from 'react'
import '../styles/quote.css'

function Quote() {
  return (
    <section className='quote container-fluid d-flex flex-column justify-content-center align-items-center'>
      <p className="fs-3 text-main-danger">Get Fast Solution!</p>
      <h1 className="fs-1 text-900">Need First-Class HR Consultants?</h1>
      <button className="btn-danger mt-3">GET A QUOTE NOW</button>
    </section>
  )
}

export default Quote
