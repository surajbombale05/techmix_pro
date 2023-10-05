import React from 'react'
import "./Aboutus.css";
import { Outlet, Link } from "react-router-dom";
import Customer from './Customer';
import CardData from './CardData';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OneCarasoul from '../OneCarasoul';
import ColorCarasoul from '../ColorCarasoul';


const Aboutus = () => {
  return (


    <div>
      <Navbar />
      <div className="a mt-5">
        <div className='text-center'>
          <h1 className='e'>About Us</h1>
          <div className='j'><Link to="/home" style={{ textDecoration: 'none' }}><a href="#" className='j'>Home</a></Link>/  About us</div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div class="b">
              <img src='https://thepixelcurve.com/html/techwix/techwix/assets/images/about-4.jpg' className="rounded img1" />
              <img src='https://thepixelcurve.com/html/techwix/techwix/assets/images/about-3.jpg' className="rounded img2" />
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mt-5">
            <b className='who'>WHO WE ARE</b>
            <h1 className='high'><b>Highly Tailored IT Design, Management & Support Services.</b></h1>
            <p className='acce'><b>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</b></p>
            <hr></hr>
            <div className='container'>
              <div className="row">
                <div className='col-sm-12 col-lg-6'>
                  <b>Our Mission</b>
                  <p className='acce'>Accelerate innovation with world-class tech teams. We help businesses elevate their value.</p>
                </div>
                <div className='col-sm-12 col-lg-6'>
                  <b>Custom Code</b>
                  <p className='acce'>Accelerate innovation with world-class tech teams. We help businesses elevate their value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='linear row text-center align-items-center fw-bold rounded'>
          <div className='col-lg-3 d-1'><h1 className='fw-bold'>354+</h1><br />Completed projects</div>
          <div className='col-lg-3 d-1'><h1 className='fw-bold'>199+</h1><br />Robotic Automation</div>
          <div className='col-lg-3 d-1'><h1 className='fw-bold'>99%</h1><br />Web Site Analyse</div>
          <div className='col-lg-3 d-1'><h1 className='fw-bold'>321+</h1><br />Clients Supoort Done</div>
        </div>
      </div>
      <div className='text-center mt-5'>
        <b>REASON TO CHOOSE US</b><br />
        <h1><b>We provide truly prominent<br />
          IT solutions.</b></h1>
      </div>
      <CardData />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='container'>
              <h1 className="prepare"><b>Preparing for your success,<br />
                we provide truly prominent<br />
                IT solutions</b></h1>
              <div className='fat mt-4' ><i class="fa-solid fa-check c "></i>    We always focus on technical excellence</div>
              <div className='fat'><i class="fa-solid fa-check c "></i>    Wherever you’re going, we bring ideas and excitement</div>
              <div className='fat'><i class="fa-solid fa-check c "></i>    We’re consultants, guides, and partners for brands</div>

              <hr className='mt-5' />
              <div className='container mt-4'>
                <div className='row'>
                  <div className='col-lg-3 col-sm-5'>
                    <img src='https://thepixelcurve.com/html/techwix/techwix/assets/images/sign.png' className='img-fluid' />
                    <div><b>Alen Morno sin</b></div>
                    <div>CEO, Techmax</div>
                  </div>
                  <div className='col-lg-2 col-sm-2'>
                    <div className='d'>
                    </div>
                  </div>
                  <div className='col-lg-7 col-sm-5'>
                    <p>Call to ask any question</p>
                    <h3><b>0123-456-7890</b></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='container'>
              <p className='loadert'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs. building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it</p>
              <span className="title">IT Managment</span>
              <div class="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-25"></div>
              </div>
              <br></br>
              <span className="title">Data Security</span>
              <div className="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar w-75"></div>
              </div>
              <br></br>

              <span className="title">Information Technology</span>
              <div className="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar w-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='f text-center d-flex flex-column justify-content-center align-items-center mt-5' style={{ minHeight: '60vh' }}>
        <div>
          <b className='whos mt-5'>OUR EXPERT TEAM</b>
        </div>
        <div>
          <h1 className='e'><b>We have a world-class expert team</b></h1>
        </div>
        <ColorCarasoul/>
      </div>

      <OneCarasoul />
      <Customer />
      <Footer />
      <Outlet />
    </div>
  )
}
export default Aboutus;