import React from "react";
import "./banner.scss";

const Banner = function () {
  return (
    <div className="Banner">
      <section className="slider-top">
        <div id="link-slider" className="carousel slide" data-ride="carousel">
          <div className="mainTxt text-center">
            <p>
              <span className="greenColor importantTxt">
                Al Jalila Foundation
              </span>
              is focused on inspiring the next generation of Emirati
              <span className="importantTxt"> Healthcare</span> professionals in
              the UAE.
            </p>
            <button
              type="button"
              className="btn btn-outline-primary primary-white text-uppercase"
            >
              Read More
            </button>
            <button
              className="btn btn-primary btn-green text-uppercase"
              type="submit"
            >
              Donate Now
            </button>
          </div>

          <div className="scrollDown">
            <div className="icon-scroll"></div>
            <p>Scroll Down</p>
          </div>

          <div className="overlay"></div>
          <div className="carousel-inner">
            <div className="carousel-item carousel-one active"></div>
            <div className="carousel-item carousel-two"></div>
            <div className="carousel-item carousel-three"></div>
            <div className="carousel-item carousel-four"></div>
            <div className="carousel-item carousel-five"></div>
            <div className="carousel-item carousel-six"></div>
            <div className="carousel-item carousel-seven"></div>
            <div className="carousel-item carousel-eight"></div>
          </div>
          <a
            className="carousel-control-prev"
            href="#link-slider"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#link-slider"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
