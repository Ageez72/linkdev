import React from "react";

import "./contact.scss";
const Contact = function () {
  return (
    <div className="Contact">
      <section className="contact pb-5 pt-4">
        <div className="container">
          <div className="row row-cols-3">
            <div className="col row">
              <div className="col">
                <p>Who we are</p>
                <div className="links">
                  <a href="#">About Us</a>
                  <br />
                  <a href="#">Mission, Vission &amp; Goals</a>
                  <br />
                  <a href="#">Our Message</a>
                  <br />
                  <a href="#">Board of Trustees</a>
                  <br />
                  <a href="#">Board of Directors</a>
                  <br />
                  <a href="#">FAQ’s</a>
                </div>
              </div>
              <div className="col">
                <p>What we do</p>
                <div className="links">
                  <a href="#">Research</a>
                  <br />
                  <a href="#">Programmes</a>
                  <br />
                  <a href="#">Collaborations</a>
                  <br />
                  <a href="#">in2Hc</a>
                </div>
              </div>
            </div>
            <div className="col row">
              <div className="col">
                <p>Get involved</p>
                <div className="links">
                  <a href="#">Donate</a>
                  <br />
                  <a href="#">Partners</a>
                </div>
              </div>
              <div className="col">
                <p>Media Centre</p>
                <div className="links">
                  <a href="#">Photo Gallery</a>
                  <br />
                  <a href="#">Video Gallery</a>
                  <br />
                  <a href="#">Social Media Hub</a>
                  <br />
                  <a href="#">Events</a>
                </div>
              </div>
            </div>
            <div className="col row">
              <div className="col">
                <p>Contact Us</p>
                <div className="links">
                  <a href="#">Contact Details</a>
                  <br />
                  <a href="#"> Careers</a>
                </div>
                <p className="subscribe-title">Subscribe to our Newsletter</p>
                <form action="">
                  <input type="text" placeholder="Enter Your email address" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
