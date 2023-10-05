import React from 'react'
import "../../src/Component/Aboutus/Aboutus.css"
const ColorCarasoul = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-3'>
                   <img src='team-1.jpg'></img>

                        {/* <div className='d-flex'>
                            <div style={{ height: "100px", width: "30px" }} className='linear4'
                            ></div>
                            <h2 style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>Andrew </h2><br></br>
                            <h2 style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}> Max Fetcher </h2>
                            <b style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>CEO,<span>texhwix</span></b>
                        </div> */}

             

                </div>
                <div className='col-lg-3'>
                    <img src="team-2.jpg"
                    ></img>
                </div>
                <div className='col-lg-3'>
                    <img src="team-3.jpg"
                    ></img>

                </div>
                <div className='col-lg-3'>

                    <img src="team-4.jpg"
                    ></img>

                </div>
            </div>
        </>
    )
}

export default ColorCarasoul