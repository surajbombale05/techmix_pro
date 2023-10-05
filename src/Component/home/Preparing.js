import React from 'react';

const Preparing = () => {
  const data = [
    {
      number: '25',
      text: 'years',
      description:
        'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.',
      linkText: 'Learn More About Us',
    },
    // Add more data objects if needed
  ];

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="card border-">
              <div className="card-body">
                <p className="h1">
                  Preparing for your success, we provide truly prominent IT
                  solutions
                </p>
                <div className="mx-3 row">
                  <div
                    className="mt-3 col-3 d-flex flex-column justify-content-center align-items-center"
                    style={{
                      background:
                        'linear-gradient(-120deg, #43baff 0%, #7141b1 100%)',
                      height: '160px',
                      width: '140px',
                    }}
                  >
                    <span style={{ color: 'white', fontSize: '42px' }}>
                      <b> {item.number}</b>
                    </span>
                    <span style={{ color: 'white', fontSize: '17px' }}>
                      {item.text}
                    </span>
                  </div>

                  <div className="mx-2 col-7">
                    <p className='mt-3 ms-3'>{item.description}</p>
                    <p className='ms-3' style={{ color: 'blue' }}>{item.linkText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='col-lg-6'>
            <div className='container mt-5 mx'>
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
              <br></br>
              <span className="title">Technolgy Consultant</span>
              <div className="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="70" aria-valuemax="100">
                <div className="progress-bar w-75"></div>
              </div>

            </div>


          </div>
      </div>
    </div>
  );
};

export default Preparing;
