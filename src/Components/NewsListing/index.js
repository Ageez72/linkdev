import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import dateFormat from "../Shared/dateFormat";
import "./newsListing.scss";

class NewsListing extends Component {
  state = {
    category: [],
    allNewsAfterSorted: [],
    items: [],
    start: 0,
    end: 8,
  };
  componentDidMount = () => {
    axios.get("/js/newsapi.json").then((res) => {
      const latestNews = res.data.articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        category: res.data.sourceCategory,
        allNewsAfterSorted: latestNews,
      });
      this.paginate(this.state.start, this.state.end);
    });
  };

  newsSearch = () => {
    var self = this;
    var newsLst = this.state.allNewsAfterSorted.slice();
    var id = document.querySelector("#News").value;
    var title = document.querySelector(".searchInput").value;
    var lst = [];
    var search = function (id, title) {
      id = parseInt(id);
      title = title == "" ? "" : title;
      if (id == 0 && title) {
        lst = newsLst.filter((x) => x.title.indexOf(title) > -1);
      } else if (id || title) {
        lst = newsLst.filter(
          (x) => x.sourceID == id && x.title.indexOf(title) > -1
        );
      } else {
        lst = newsLst;
      }
      self.setState({items: lst});
    };
    console.log(search(id, title));
  };
  loadMore = () => {
    let dbl = this.state.end + 8;
    if (this.state.end <= this.state.allNewsAfterSorted.length) {
      this.setState({
        end: dbl,
      });
      this.paginate(this.state.start, this.state.end + 8);
    }
  };

  paginate = function (start, end) {
    var sortedNews = this.state.allNewsAfterSorted.slice();
    if (end > sortedNews.length) end = sortedNews.length;
    sortedNews = sortedNews.slice(start, end);
    this.setState({items: sortedNews});
  };

  render() {
    const newslist = this.state.items.map((newsItem) => {
      return (
        <div className="col" key={newsItem.id}>
          <div className="card mb-2">
            <div className="bgImg">
              <img
                src={newsItem.urlToImage ? newsItem.urlToImage : "test"}
                alt="news1"
              />
            </div>
            <div className="overlay"></div>
            <div className="card-body">
              <p className="number">
                {dateFormat.getDayNum(newsItem.publishedAt)}
              </p>
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
                to={"newslisting/" + newsItem.id}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      );
    });
    const categoryList = this.state.category.map((category) => {
      return (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      );
    });
    return (
      <div className="Press newsListing">
        <section className="news pt-3 pb-6">
          <div className="breadcrumb-container">
            <div className="container">
              <nav className="breadcrumb-nav" aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Media Center</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Press Release
                  </li>
                </ol>
              </nav>
              <div className="sources">
                <img src="imgs/newsListing/printer.png" alt="printer" />
                <img src="imgs/newsListing/interface.png" alt="interface" />
                <img src="imgs/newsListing/symbol.png" alt="symbol" />
              </div>
            </div>
          </div>

          <div className="container section-title">
            <h1 className="mainColor text-uppercase mb-4">Press Release</h1>
            <select id="News" className="p-2" onChange={this.selectList}>
              <option value="0">Category</option>
              {categoryList}
            </select>
            <div className="input-group mb-3 searchContainer">
              <input
                type="text"
                className="form-control searchInput"
                placeholder="title"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.newsSearch}
                >
                  <img src="imgs/newsListing/search.svg" alt="search" />
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="newsContainer">{newslist}</div>
            <button
              type="button"
              className={
                this.state.allNewsAfterSorted.length <= this.state.end
                  ? "invisible"
                  : "btn btn-secondary btn-lg btn-block loadMore"
              }
              onClick={this.loadMore}
            >
              Load More
            </button>
          </div>
        </section>
      </div>
    );
  }
}
export default NewsListing;
