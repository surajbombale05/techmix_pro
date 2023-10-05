import React from 'react';

const imageData = [
  {
    src: 'three.jpg',
    alt: 'Image 1',
    text: 'Information managemnet system',
  },
  {
    src: 'three1.jpg',
    alt: 'Image 2',
    text: 'Information Database Security',
  },
  {
    src: 'three2.jpg',
    alt: 'Image 3',
    text: 'Multifunctional Technology',
  },
];
const gradientBoxStyle = {
  width: "10px", // Set your desired width
  height: "60px", // Set your desired height
  background: "linear-gradient(-160deg, #43baff 0%, #7141b1 100%)", // Customize the gradient colors
  
};

const YourComponent = () => {
  return (
    <div className="container">
      <p fs-5 className='text-center text-primary'>REASON TO CHOOSE US</p>
      <p className="h1 text-center mt-2"><b>We provide truly prominent<br></br>IT solutions.</b></p>
      <div className="mt-5 row justify-content-center">
        {imageData.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="position-relative mx-2 image-box text-center">
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid"
                style={{ height: '300px', width: '420px',borderRadius:'9px' }}
              />
              <div className='d-flex justify-content-between text-white position-absolute bottom-0 start-50 translate-middle-x'> 
               <div className='alignment-center text-white' style={gradientBoxStyle}></div>
              <p className='ms-3 text-start fs-5'><b>{item.text}</b> </p>
              </div>
             </div>
          </div>
        ))}
        <p className='text-center'>Learn more about<span className='text-primary'><b> More reason ⏭</b></span>  </p>
      </div>
    </div>
  );
};

export default YourComponent;
