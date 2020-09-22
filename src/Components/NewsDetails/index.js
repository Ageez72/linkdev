import React from "react";
import axios from "axios";
import "./newsDetailes.scss";
class NewsDetails extends React.Component {
  state = {
    ids: [],
    id: [],
  };
  componentDidMount() {
    axios.get("/js/newsapi.json").then((res) => {
      const latestNews = res.data.articles.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({
        ids: latestNews,
        id: latestNews[this.props.match.params.id - 1],
      });
      console.log(this.state.ids);
      console.log(this.state.id);
    });

    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div className="NewsDetails">
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
                <li className="breadcrumb-item">
                  <a href="#">Press Release</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.id.title}
                </li>
              </ol>
            </nav>
            <div className="sources">
              <img src="/imgs/newsListing/printer.png" alt="printer" />
              <img src="/imgs/newsListing/interface.png" alt="interface" />
              <img src="/imgs/newsListing/symbol.png" alt="symbol" />
            </div>
          </div>
        </div>
        <div className="container pl-3 pr-3">
          <h1 className="mainColor text-uppercase mb-4  mt-5">Press Release</h1>

          <div className="float-left article-image">
            <img src={this.state.id.urlToImage} alt="ad" />
          </div>
          <div className="article-subject">
            <h2 className="mainColor">{this.state.id.title}</h2>
            <span className="publishedAt">{this.state.id.publishedAt}</span>
            <p>{this.state.id.content}</p>
          </div>
          <div className="clear"></div>

          <div className="attachment">
            <h2 className="mainColor text-uppercase mb-4  mt-5">Attachments</h2>
            <div className="attach-item">
              <p>Al Jalila Foundation</p>
              <span>
                <img src="/imgs/newsDetails/downLoad.png" alt="download" />
              </span>
            </div>
            <div className="attach-item">
              <p>Al Jalila Foundation</p>
              <span>
                <img src="/imgs/newsDetails/downLoad.png" alt="download" />
              </span>
            </div>
          </div>
          <div className="interested">
            <img src="/imgs/newsDetails/intersted.png" alt="interest" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsDetails;
