import React from "react";
import "./footer.scss";
const Footer = function () {
  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-links">
              <div className="links">
                <a href="#">Terms &amp; Conditions</a> |
                <a href="#">Privacy Policy</a> | <a href="#">User Agreement</a>{" "}
                |<a href="#">Sitemap</a>
              </div>
            </div>
            <div className="col-copy">
              <div className="copyrights">
                &copy; Copyright 2016 LinkDev. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
