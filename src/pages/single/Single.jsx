import SideBar from "../../components/sidebar/SideBar"
import Reviews from "../../components/reviews/Reviews"
import MakeReview from "../../components/makeReview/MakeReview"
import "./single.css"
import { Link } from "react-router-dom";
import { Component } from "react";

const own = false;
class Single extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      info: []
    }
  }

  render() {
    return (
      <div className="single">
        <div className="mainContents">
        {this.state.info}
          <span className="bookCoverTitle">
            <img src={this.state.info.cover}
              alt="Book Cover"
              className="singleBookCover"
            />
            <span className="bookDetails">
              <h1 className="singleBookTitle"> {this.state.info.title}
                <div className="singleBookOpt">
                  {own ? (
                    <Link className="openLink" to={"/open/:bookId"}>
                      <button className="read">Open</button>
                    </Link>

                  ) : (
                    <button className="read">Buy</button>
                  )
                  }
                  <i className="singleIcons fa-solid fa-list"></i>
                  <i className="singleIcons fa-solid fa-share"></i>
                </div>
              </h1>
              <div className="singleBookInfo">
                <span className="singleAuthor">Author: <b>{this.state.info.auth} </b></span>
                <span className="split">|</span>
                <span className="singlePub">{this.state.info.pubDate}</span>
                <span className="split">|</span>
                <i className="singleLen fa-solid fa-scroll"></i>
                <span className="split">|</span>
                <span className="ratingNum">{this.state.info.avgRank}</span>
                <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
              </div>
              <p className="singleBookDesc">
                {this.state.info.desc}
              </p>
            </span>
          </span>
          <div className="revSection">
            <div className="revHeader">
              <h>
                Reviews
              </h>
            </div>
            <MakeReview />
            <Reviews />
          </div>
        </div>
        <SideBar />
      </div>
    )
  }

}


export default Single;
