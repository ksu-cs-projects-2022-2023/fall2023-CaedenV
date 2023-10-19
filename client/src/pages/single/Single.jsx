import SideBar from "../../components/sidebar/SideBar"
import Reviews from "../../components/reviews/Reviews"
import MakeReview from "../../components/makeReview/MakeReview"
import addWishButton from "../../components/addToLists/addWishButton"
import addOwnButton from "../../components/addToLists/addOwnButton"
import "./single.css"
import { Link } from "react-router-dom";
import { Component, useEffect } from "react";
import axios from "axios";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      read: "/read/:" + props.id,
      info: {}
    }
    
    useEffect(() => {
      axios.get(`/books/${this.state.id}`).then((response) => {
        this.setState({ info: response.data});
      });
    }, [this.state.id]);

  }

  render() {
    const book = this.state.info;
    return (
      <div className="single">
        <div className="mainContents">
          <span className="bookCoverTitle">
            <img src={book.BookCoverLink}
              alt="Book Cover"
              className="singleBookCover"
            />
            <span className="bookDetails">
              <h1 className="singleBookTitle"> {book.BookTitle}
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
                <span className="singleAuthor">Author: <b>{book.BookAuthor} </b></span>
                <span className="split">|</span>
                <span className="singlePub">{book.BookPubDate}</span>
                <span className="split">|</span>
                <i className="singleLen fa-solid fa-scroll"></i>
                <span className="split">|</span>
                <span className="ratingNum">{book.BookAvgRating}</span>
                <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
              </div>
              <p className="singleBookDesc">
                {book.BookDesc}
              </p>
            </span>
          </span>
          <div className="revSection">
            <div className="revHeader">
              <h>
                Reviews
              </h>
            </div>
            <MakeReview bookId={this.state.id}/>
            <Reviews bookId={this.state.id}/>
          </div>
        </div>
        <SideBar />
      </div>
    )
  }

}


export default Single;
