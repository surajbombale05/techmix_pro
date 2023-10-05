import React from 'react'

const Carasoul = () => {
    const divStyle = {
        backgroundImage: 'url("case-study-bg.jpg")', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        padding: "100px",
    };
    return (
        <>
            <div style={divStyle}>
                <div>
                    <p className='text-center text-primary pt-5'>FROM OUR CASE STUDIES</p>
                    <p className='h1 text-center text-light fs-1'>We delivered best solution</p>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner mt-3 mb-3">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <img src="case-4.jpg" className="d-block w-100" alt="Slide 1" />
                                </div>
                                <div className="col-4">
                                    <img src="case-5.jpg" className="d-block w-100" alt="Slide 2" />
                                </div>
                                <div className="col-4">
                                    <img src="case-6.jpg" className="d-block w-100" alt="Slide 3" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <img src="case-4.jpg" className="d-block w-100" alt="Slide 4" />
                                </div>
                                <div className="col-4">
                                    <img src="case-5.jpg" className="d-block w-100" alt="Slide 5" />
                                </div>
                                <div className="col-4">
                                    <img src="case-6.jpg" className="d-block w-100" alt="Slide 6" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <img src="case-4.jpg" className="d-block w-100" alt="Slide 7" />
                                </div>
                                <div className="col-4">
                                    <img src="case-5.jpg" className="d-block w-100" alt="Slide 8" />
                                </div>
                                <div className="col-4">
                                    <img src="case-6.jpg" className="d-block w-100" alt="Slide 9" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Carasoul
