import React from 'react';
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (

    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">

            <a className="navbar-brand" href="#">
              <img
                src="https://thepixelcurve.com/html/techwix/techwix/assets/images/logo.png"
                alt=""
                className="ms-4"
                width={130}
              ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/Home" style={{ textDecoration: 'none' }}><a className="nav-link active ms-4" aria-current="page" href="#">
                    <b> Home</b>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" style={{ textDecoration: 'none' }} ><a className="nav-link ms-4" href="#">
                    <b>About Us</b>
                  </a> </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" style={{ textDecoration: 'none' }}>
                    <a className="nav-link  ms-4" aria-disabled="true">
                      <b> services</b>
                    </a>
                  </Link>
                </li>
                <li className="nav-item dropdown ms-4">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>blog</b>
                  </a>
                  <ul className="dropdown-menu ms-4">
                    <li>
                      <a className="dropdown-item" href="#">
                        blog grid
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        blog list
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        blog single
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/contact" style={{ textDecoration: 'none' }}><a className="nav-link  ms-4" aria-disabled="true">
                    <b> contact</b>
                  </a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <img
                  src="cart.png"
                  alt=""
                  height={20}
                  width={20}
                  className="my-auto me-3"
                ></img>

                <img
                  src="Vertical.png"
                  alt=""
                  height={20}
                  width={3}
                  className="my-auto me-3"
                ></img>

                <img
                  src="search.png"
                  alt=""
                  height={20}
                  width={20}
                  className="my-auto me-3"
                ></img>

                <button
                  className="text-light btn btn-primary btn btn-outline-dark"
                  type="submit" style={{ width: '12pc', border: 'none', height: '3pc' }}
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>

  );
};

export default Navbar;
