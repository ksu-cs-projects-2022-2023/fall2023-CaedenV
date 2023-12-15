import SideBar from "../../components/sidebar/SideBar";
import Reviews from "../../components/reviews/Reviews";
import MakeReview from "../../components/makeReview/MakeReview";
import AddWishButton from "../../components/addToLists/addWishButton";
import AddOwnButton from "../../components/addToLists/addOwnButton";
import Popup from 'reactjs-popup';
import "./single.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Single = (userIdObj) => {
  const [info, setInfo] = useState({});
  const [friends, setFriends] = useState([]);
  const bookIdObj = useParams();
  const bookId = String(bookIdObj.GoogleBookId);
  const userId = String(userIdObj.userId);







  useEffect(() => {
    async function FetchAllInfo() {
      axios.get(`http://localhost:8000/books/${bookId}`, { GoogleBookId: bookId })
        .then((response) => { 
          setInfo(response.data[0]);
        });

      axios.get(`http://localhost:8000/user/${userId}/friends-list`, { userId: userId })
        .then((response) => {
          setFriends(response.data);
        });

    }
    FetchAllInfo();
  }, [bookId]);

  var { BookCoverLink, BookTitle, BookAuthor, BookPubDate, BookAvgRating, BookDesc } = info;

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
                <AddOwnButton userId={userId} bookId={bookId} />
                <AddWishButton userId={userId} bookId={bookId} />
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
              <span className="ratingNum">{BookAvgRating || 0}</span>
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
          <MakeReview bookId={bookId} userId={userId} bookAvgRating={BookAvgRating || "NA"}/>
          <Reviews bookId={bookId} />
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Single;
