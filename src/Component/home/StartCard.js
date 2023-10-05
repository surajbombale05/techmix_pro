import React from 'react';
import './StartCard.css';

const card = [
  {
    img: "ser-icon10.png",
    heading: "Infrastructure Technology",
    description: "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
    bottom: "Read More"
  },
  {
    img: "ser-icon11.png",
    heading: "IT Consultancy & Solution",
    description: "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
    bottom: "Read More"
  },
  {
    img: "ser-icon12.png",
    heading: "Cloud Managed Services",
    description: "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
    bottom: "Read More"
  },
  {
    img: "ser-icon9.png",
    heading: "Blockchain Technology",
    description: "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
    bottom: "Read More"
  }
];

const StartCard = () => {
  return (
    <>
      <div className='position-relative back1 mt-5' style={{ height: "120vh" }}>
        <div className='container'>
          <div className='tech'>
            <b style={{ color: 'white' }} className='mt-5'>
              TECHNOLOGY RELATED CONSULTANCY
            </b>
            <h1 style={{ color: 'white', fontSize: '50px' }}>
              We transform ideas into<br></br> technology
            </h1>
            <p style={{ color: 'white', fontSize: '20px' }}>
              We provide the most responsive and functional IT design<br /> for companies and
              businesses worldwide.
            </p>
            <button className='btn button'>Read More</button>
          </div>
        </div>

      </div>
      <div className='container position-absolute top-110 start-50 translate-middle'>
        <div className="row">
          {card.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 mt-3">
              <div className="card p-4">
                <img src={item.img} className="card-img-top" alt={item.heading} style={{ height: "50px", width: "50px" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.heading}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="" style={{ textDecoration: 'none', color: 'black' }}>{item.bottom}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='back2'>

      </div>
    </>
  );
};

export default StartCard;

