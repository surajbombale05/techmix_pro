import React from 'react'
import "./Aboutus.css";

const Customer = () => {
  return (
 
     <div className='customer'>
        <div className='container mt-5 position-relative mt-5'>
          <div className='g text-center row'>
            <img src='https://thepixelcurve.com/html/techwix/techwix/assets/images/cta-icon2.png' alt='' className='imgblack position-absolute top-0 start-40 translate-middle-y' style={{ height: '120px' ,width:'120px',marginLeft:'40px'}} />
            <h3 className='col-lg-9 customer'>We’re Delivering the best customer<br></br> Experience</h3>
            <button type="submit" className='h col-lg-3 text-center mt-lg-5'>+44 920 090 505</button>
          </div>
        </div>
      </div>
 
  )
}

export default Customer
