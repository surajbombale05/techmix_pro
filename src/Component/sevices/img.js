import React from 'react'
import "../Aboutus/Aboutus.css"
import { Outlet, Link } from "react-router-dom";

const Img = () => {
    return (
        <div>
            <div className="a mt-5">
                <div className='text-center'>
                    <h1 className='e'>Our Services</h1>
                    <div className='j'><Link to="/home" style={{textDecoration:'none'}}><a href="#" className='j'>Home </a></Link>/  Services </div>
                </div>
            </div>
            <Outlet />
        </div>

    )
}

export default Img
