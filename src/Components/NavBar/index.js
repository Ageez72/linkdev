import React from "react";
import {Link} from "react-router-dom";
import "./navbar.scss";
const NavBar = function () {
  return (
    <div className="NavBar">
      <section className="nav-section">
        <div className="container-fluid">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#">
                <img src="/imgs/linkDevLogo.png" alt="linkDevLogo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link text-capitalize" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-capitalize" href="#">
                      Who we are
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-capitalize dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      What we do
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item text-capitalize" href="#">
                        Service 1
                      </a>
                      <a className="dropdown-item text-capitalize" href="#">
                        Service 2
                      </a>
                      <a className="dropdown-item text-capitalize" href="#">
                        Service 3
                      </a>
                      <a className="dropdown-item text-capitalize" href="#">
                        Service 4
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-capitalize" href="#">
                      Get involved
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link text-capitalize dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Media centre
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        className="dropdown-item text-capitalize"
                        to="/newslisting"
                      >
                        Press Release
                      </Link>
                      <a className="dropdown-item text-capitalize" href="#">
                        Media 2
                      </a>
                      <a className="dropdown-item text-capitalize" href="#">
                        Media 3
                      </a>
                      <a className="dropdown-item text-capitalize" href="#">
                        Media 4
                      </a>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-capitalize" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
                <div className="my-2 my-lg-0">
                  <a href="#">
                    <img src="/imgs/Search.png" alt="Search" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
      {/* <Link exact="true" to="/">
        Home
      </Link>
      <Link to="/newslisting">NewsListing</Link>
      <Link to="/newsdetails">NewsDetails</Link> */}
    </div>
  );
};

export default NavBar;
