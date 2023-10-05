import React, { useState } from 'react';
import './Reasons.css'; // Import your custom CSS for styling

const Reasons = () => {
  const [reasons] = useState([
    {
      id: 1,
      title: 'Information\nmanagemnet system',
      description: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.',
      backgroundImage: 'bg1.jpg', // Replace with your image path
    },
    {
      id: 2,
      title: 'Information Database\nSecurity',
      description: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.',
      backgroundImage: 'bg2.jpg', // Replace with your image path
    },
    {
      id: 3,
      title: 'Multifunctional\nTechnology',
      description: 'Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.',
      backgroundImage: 'bg3.jpg', // Replace with your image path
    },
  ]);

  const [hoveredReason, setHoveredReason] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredReason(id);
  };

  const handleMouseLeave = () => {
    setHoveredReason(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
 
 
      <p className=' text-center text-primary'>REASON TO CHOOSE US</p>
      <p className='text-center h1'><b>We provide truly prominent<br/>IT solutions.</b></p>


        {reasons.map((reason) => (
          <div className="col-md-4 mt-sm-5" key={reason.id}>
            <div
              className={`reason-card ${hoveredReason === reason.id ? 'active' : ''}`}
              style={{ backgroundImage: `url(${reason.backgroundImage})` }}
              onMouseEnter={() => handleMouseEnter(reason.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="reason-details">
                <h2 className="text-white">
                    
                    {/*gradient div header */}
                    {reason.title}
                    
                    </h2>
                <p className="text-white" style={{fontSize:'13px'}}>{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
        <p className='mt-4 text-center'><span> Learn more about</span><b className='text-primary'>  More reason⏩</b></p>
      </div>
    </div>
  );
};

export default Reasons;
