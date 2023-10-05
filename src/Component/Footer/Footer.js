import React from 'react';
import "./Footer.css"
import "../Aboutus/Aboutus.css"
const Footer = () => {
  return (
   <div>

<div className='i row align-items-center mx-0'>
  <div className='row mt-5 marg'>
    <div className='col-lg-3'>
      <div className='container mt-5'>
        <img src='https://thepixelcurve.com/html/techwix/techwix/assets/images/logo-white.png' />
        <p>
          Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.
        </p>
        <div className='row'>
          <i class="fa-brands fa-facebook col-1"></i>
          <i class="fa-brands fa-twitter col-1"></i>
          <i class="fa-brands fa-linkedin col-1"></i>
        </div>
      </div>
    </div>
    <div className='col-lg-3'>
      <div className='container mt-5'>
        <h3>Useful Links</h3>
        <a className='bottomname'>Terms and Conditions</a><br></br>
        <a className='bottomname'>About Company</a><br></br>
        <a className='bottomname'>Payment Gateway</a><br></br>
        <a className='bottomname'>policy</a><br></br>
      </div>

    </div>
    <div className='col-lg-3'>
      <div className='container mt-5'>
        <h3>Our Services</h3>
        <a className='bottomname'>Data Security</a><br></br>
        <a className='bottomname'>IT Managment</a><br></br>
        <a className='bottomname'>Outsourcing</a><br></br>
        <a className='bottomname'>Networking</a><br></br>
      </div>
    </div>
    <div className='col-lg-3 mt-5'>
      <h3>Contact Information</h3>
      <div><i class="fa-solid fa-phone-volume"></i><a  className='bottomname2'>+91 458 654 528</a></div>
      <div><i class="fa-regular fa-envelope"></i><a className='bottomname2'>Info@example.com</a></div>
      <div><i class="fa-solid fa-location-dot"></i><a className='bottomname2' >60 East 65th Street, NY</a></div>
    </div>
  </div>
  <div className='mt-5'>
    <hr className=''></hr>
    <div className='text-center'>
      <b>© Copyrights 2022 techwix All rights reserved.</b>
    </div>
  </div>
</div>
    </div>
  );
}

export default Footer;