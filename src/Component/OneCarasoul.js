import React, { useState } from 'react';
import "../../src/Component/Aboutus/Aboutus.css"

const OneCarasoul = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming you have 3 slides
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Assuming you have 3 slides
    };

    return (
        <>
            <div className="carousel slide">
                <div className="carousel-inner mt-3 mb-3">
                    <div className={`carousel-item${activeIndex === 0 ? ' active' : ''}`}>
                        <div className="d-flex justify-content-center align-items-center position-relative"> {/* Center the content */}
                            <div onClick={handleNext} style={{ height: "350px", width: "500px" }} className='cara'>

                                <img src="testi-icon.png" className=''></img>

                                <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

                                <b>Mike Holder <span> / CEO, harlond inc</span></b>

                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item${activeIndex === 1 ? ' active' : ''}`}>
                        <div className="d-flex justify-content-center align-items-center position-relative"> {/* Center the content */}
                            <div onClick={handleNext} style={{ height: "350px", width: "500px" }} className='cara'>

                                <img src="testi-icon.png" className=''></img>

                                <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

                                <b>Mike Holder <span> / CEO, harlond inc</span></b>

                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item${activeIndex === 2 ? ' active' : ''}`}>
                        <div className="d-flex justify-content-center align-items-center position-relative"> {/* Center the content */}
                            <div onClick={handleNext} style={{ height: "350px", width: "500px" }} className='cara'>

                                <img src="testi-icon.png" className=''></img>

                                <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>

                                <b>Mike Holder <span> / CEO, harlond inc</span></b>

                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </>
    );
};

export default OneCarasoul;
