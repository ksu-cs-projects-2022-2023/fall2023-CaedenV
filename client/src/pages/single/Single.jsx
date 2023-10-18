import SideBar from "../../components/sidebar/SideBar"
import Reviews from "../../components/reviews/Reviews"
import MakeReview from "../../components/makeReview/MakeReview"
import addWishButton from "../../components/addToLists/addWishButton"
import addOwnButton from "../../components/addToLists/addOwnButton"
import "./single.css"
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

const own = false;
class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      read: "/read/:" + props.id,
      unfiltered: [],
      info: []
    }
    window.addEventListener("load", this.findSingle);
  }

  findSingle = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes/" + this.state.id + "?projection=lite&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg")
    .then( (results) => {
      this.setState({ unfiltered: results.body })
    });
  }

  componentDidMount(){
    this.findSingle();
  }

  // filterInfo(){
  //   this.setState({
  //     info: {
  //       cover: this.state.unfiltered.imageLinks.large,
  //       title: this.state.unfiltered.volumeInfo.title,
  //       pubDate: this.state.unfiltered.volumeInfo.publishedDate,
  //       auth: this.state.unfiltered.volumeInfo.authors,
  //       avgRate: this.state.unfiltered.volumeInfo.averageRating,
  //       genres: this.state.unfiltered.volumeInfo.categories,
  //       desc: this.state.unfiltered.volumeInfo.description,
  //       read: "/read/:" + props.id
  //     }
  //   })
  // }

  render() {
    return (
      <div className="single">
        <div className="mainContents">
          <span className="bookCoverTitle">
            <img src={this.state.info.cover}
              alt="Book Cover"
              className="singleBookCover"
            />
            <span className="bookDetails">
              <h1 className="singleBookTitle"> {this.state.info.title}
                <div className="singleBookOpt">
                  {own ? (
                    <Link className="openLink" to={this.state.read} id={this.state.id}>
                      <button className="read">Open</button>
                    </Link>

                  ) : (
                    <>
                      <addOwnButton />
                      <addWishButton />
                    </>
                  )
                  }
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
                <span className="ratingNum">{this.state.info.avgRate}</span>
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
