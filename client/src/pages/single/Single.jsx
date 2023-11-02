import SideBar from "../../components/sidebar/SideBar";
import Reviews from "../../components/reviews/Reviews";
import MakeReview from "../../components/makeReview/MakeReview";
import AddWishButton from "../../components/addToLists/addWishButton";
import AddOwnButton from "../../components/addToLists/addOwnButton";
import Popup from 'reactjs-popup';
import "./single.css";
import React, { useState, useEffect, memo } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const Single = memo(() => {
  const [info, setInfo] = useState({});
  const [friends, setFriends] = useState([]);
  const { userId, GoogleBookId } = useParams();

  useEffect(() => {
    async function fetchBook() {
      const response = await axios.get(`http://project-server/books/${GoogleBookId}`);
      const data = response.data;

      setInfo(data);
    }
    axios.get(`http://project-server/user/${userId}/friends-list`)
      .then((response) => {
        setFriends(response.data);
      });

    fetchBook();
  });

  const { BookCoverLink, BookTitle, BookAuthor, BookPubDate, BookAvgRating, BookDesc } = info;

  if (!info) {
    return <div>Loading...</div>;
  }

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
                <AddOwnButton userId={userId} bookId={GoogleBookId} />
                <AddWishButton userId={userId} bookId={GoogleBookId} />
                <Popup trigger=
                  {<i className="singleIcons fa-solid fa-share"></i>}
                  position="bottom right">
                  <ul>
                    {friends.map((friend) => (
                      <li key={friend.friendId}>
                        {friend.friendId}
                      </li>
                    ))}
                  </ul>
                </Popup>
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
