import React from "react";
import NavBar from "../NavBar";

import "./header.scss";
const Header = function () {
  return (
    <div className="Header">
      <header>
        <div className="whiteBG">
          <div className="container upper-bar">
            <div className="row">
              <div className="col-sm-8 pt-4 pb-4">
                <a href="#">
                  <img
                    className="logo"
                    src="/imgs/linkDevLogo.png"
                    alt="linkdevlogo"
                  />
                </a>
              </div>
              <div className="col-sm-4 pt-4 pb-4 text-right">
                <div className="register text-uppercase">
                  <a href="#">register</a> <span className="wall">|</span>
                  <a href="#">Login</a>
                </div>
                <div className="langs">
                  <span className="en selectedLang">
                    <a href="#">En</a>
                  </span>
                  <span className="ar">
                    <a href="#">Ar </a>
                  </span>
                  <span className="wall">|</span>{" "}
                  <span className="big-a">A</span>
                  <span className="sm-a">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <NavBar />
    </div>
  );
};

export default Header;
