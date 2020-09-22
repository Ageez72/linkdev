import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Index from "./Components/Index";
import Footer from "./Components/Footer";
import NewsListing from "./Components/NewsListing";
import NewsDetails from "./Components/NewsDetails";
import $ from "jquery";

import "./App.scss";

class App extends React.Component {
  state = {
    idUrl: [],
  };
  componentDidMount = () => {
    axios.get("js/newsapi.json").then((res) => {
      this.setState({
        idUrl: res.data.articles,
      });
    });
  };
  HeaderScroll = () => {
    $(document).ready(function () {
      "use strict";
      // Calc Slider Height
      var winH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".nav-section").innerHeight();
      $(".slider-top,.slider-top .carousel-item").height(winH - upperH);
      $(window).resize(function () {
        $(".slider-top,.slider-top .carousel-item").height(winH - upperH);
        console.log("resized");
      });
      // Scroll Down

      $(".scrollDown").click(function () {
        $("html, body").animate(
          {
            scrollTop: $(".helping").offset().top,
          },
          500
        );
      });
      window.onscroll = function () {
        myFunction();
      };
      var fixedNav = document.querySelector(".nav-section");
      function myFunction() {
        if (window.pageYOffset >= 100) {
          fixedNav.classList.add("sticky");
        } else {
          fixedNav.classList.remove("sticky");
        }
      }
    });
  };
  render() {
    this.HeaderScroll();
    const latestNews = this.state.idUrl.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(latestNews);
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Index} />
        <Route exact path="/newslisting" component={NewsListing} />
        <Route path={"/newslisting/:id"} component={NewsDetails} />
        <Contact />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
