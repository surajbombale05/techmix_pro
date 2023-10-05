import React from "react";
import "./Contactus.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, Link } from "react-router-dom";

const contactData = [
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/info-1.png",
      title: "Give us a call",
      des1: "(+1) 400-630 123",
      des2:"(+2) 500-950 456"
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/info-2.png",
      title: "Drop us a line",
      des1: "info@techwix-theme.com",
      des2: "mail@techwix-tech.com",
    },
    {
      img: "https://thepixelcurve.com/html/techwix/techwix/assets/images/info-3.png",
      title: "Visit our office",
      des1: "New York. 112 W 34th St",
      des2: "caroline, USA",
    },
  ];
const Contactus = () => {
  return (
    <>
  <Navbar/>

      <div className="a mt-5">
        <div className='text-center'>
          <h1 className='e'>Contact Us</h1>
          <div className='j'><Link to="/home" style={{textDecoration:'none'}}><a href="#" className='j'>Home</a></Link>/  Contact us</div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          {contactData.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4">
              <div className="card p-4 pt-5 cards mt-3" style={{ width: "100%", height: "18rem" }}>
                <div className="text-center">
                  <img src={item.img} className="card-img-top img" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div>{item.des1}</div>
                  <div>{item.des2}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="Form container text-center mt-5 ">
        <b className="request">REQUEST A QUOTE</b>
        <h1>
          <b>How May We Help You!</b>
        </h1>
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-12 form-group">
            <input type="text" placeholder=" Name *" className="input p-2 form-control" />
          </div>
          <div className="col-lg-6  col-sm-12 form-group">
            <input type="text" placeholder=" Email *" className="input p-2 form-control" />
          </div>
        </div>

        <div className="mt-3 form-group">
          <input placeholder="Subject *" className="subinput mt-2 p-2 form-control" />
        </div>

        <div className="form-group">
          <textarea placeholder="Write A Message" className="textarea mt-4 p-2 form-control"></textarea>
        </div>
        <div className="mt-5 container">
          <button type="submit" className="sendb">
            Send Message
          </button>
        </div>
      </div>

      <div className="back img-fluid"> 

      </div>

      <Footer/>
      <Outlet/>
    </>
  );
};

export default Contactus;