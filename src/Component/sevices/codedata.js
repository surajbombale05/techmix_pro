import React from "react";

const Codedata = () => {
  const gradientBoxStyle = {
    width: "18px", // Set your desired width
    height: "170px", // Set your desired height
    background: "linear-gradient(-160deg, #43baff 0%, #7141b1 100%)", // Customize the gradient colors
    
  };

  const containerStyle = {
    backgroundImage: `url("https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/cta-bg5.jpg")`, // Set the background image
    backgroundSize: "cover", // Adjust the background image size
    backgroundRepeat: "no-repeat", // Prevent background image repetition
    backgroundPosition: "center center", // Center the background image
    padding: "100px",  // Add some padding for content
    borderRadius:"9px"  
};

  return (
    <>
      <div>
        <div className="mb-5 container" style={containerStyle}>
            <div className="row">

             <div className="col-md-6 d-flex flex-row">
               <div className="text-left text-light d-flex flex-row">
               <div style={gradientBoxStyle}></div>
              {/* {} */}
              <p className="ms-4 h1"><b>To make requests for further information, contact us</b></p> 
               </div>
              </div>

              <div className="col-md-6">
               <div className="text-right text-light ms-lg-5 mt-sm-2 text-lg-center">
               <img  src="headphones.png"/>
               <p> Call Us For Any inquiry</p>
               <p className="h3 text-primary"><b>+44 920 090 505</b> </p>
               </div>
              </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Codedata;
