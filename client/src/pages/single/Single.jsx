import SideBar from "../../components/sidebar/SideBar";
import Reviews from "../../components/reviews/Reviews";
import MakeReview from "../../components/makeReview/MakeReview";
import AddWishButton from "../../components/addToLists/addWishButton";
import AddOwnButton from "../../components/addToLists/addOwnButton";
import "./single.css";
import React, { useState, useEffect, memo } from 'react';
import axios from "axios";

const Single = memo(({ id }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchBook() {
      const response = await axios.get(`/books/${id}`);
      const data = response.data;

      setInfo(data);
    }

    fetchBook();
  }, [id]);

  const { BookCoverLink, BookTitle, BookAuthor, BookPubDate, BookAvgRating, BookDesc } = info;
  return (
    <div className="single">
      <div className="mainContents">
        <span className="bookCoverTitle">
          <img src={BookCoverLink}
            alt="Book Cover"
            className="singleBookCover"
          />
          <span className="bookDetails">
            <h1 className="singleBookTitle"> {BookTitle}
              <div className="singleBookOpt">
                <AddOwnButton userId={1} bookId={this.state.id} />
                <AddWishButton userId={1} bookId={this.state.id} />
                <i className="singleIcons fa-solid fa-share"></i>
              </div>
            </h1>
            <div className="singleBookInfo">
              <span className="singleAuthor">Author: <b>{BookAuthor} </b></span>
              <span className="split">|</span>
              <span className="singlePub">{BookPubDate}</span>
              <span className="split">|</span>
              <i className="singleLen fa-solid fa-scroll"></i>
              <span className="split">|</span>
              <span className="ratingNum">{BookAvgRating}</span>
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
            </div>
            <p className="singleBookDesc">
              {BookDesc}
            </p>
          </span>
        </span>
        <div className="revSection">
          <div className="revHeader">
            <h>
              Reviews
            </h>
          </div>
          <MakeReview bookId={this.state.id} />
          <Reviews bookId={this.state.id} />
        </div>
      </div>
      <SideBar />
    </div>
  );
});

export default Single;
