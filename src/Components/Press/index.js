import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import dateFormat from "../Shared/dateFormat";
import "./press.scss";

class Press extends Component {
  state = {
    news: [],
  };
  componentDidMount = () => {
    axios.get("js/newsapi.json").then((res) => {
      this.setState({news: res.data.articles});
    });
  };
  render() {
    const {news} = this.state;
    const latestNews = this.state.news.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    const OnlyFourNews = latestNews
      .filter((x) => x.showOnHomepage == true)
      .slice(0, 4);
    console.log(OnlyFourNews);

    const newslist = OnlyFourNews.map((newsItem) => {
      if (newsItem.showOnHomepage == true) {
        return (
          <div className="col" key={newsItem.id}>
            <div className="card mb-2">
              <div className="bgImg">
                <img src={newsItem.urlToImage} alt="news1" />
              </div>
              <div className="overlay"></div>
              <div className="card-body">
                <p className="number">02</p>
                <h4 className="month">
                  {dateFormat.getMonth(newsItem.publishedAt)}
                </h4>
                <p className="days">
                  {dateFormat.getDay(newsItem.publishedAt)}{" "}
                  {dateFormat.getYear(newsItem.publishedAt)}
                </p>
                <p className="card-text">{newsItem.title}</p>
                <Link
                  type="button"
                  className="btn btn-outline-primary"
                  to={"/newslisting/" + newsItem.id}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="Press">
        <section className="news pt-5 pb-6">
          <div className="container">
            <p className="text-center mb-0 mainColor">Our latest</p>
            <h2 className="subHead text-center mainColor mb-5">
              <Link to="/newslisting">Press Releases</Link>
            </h2>
            <div className="text-center">{newslist}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default Press;
