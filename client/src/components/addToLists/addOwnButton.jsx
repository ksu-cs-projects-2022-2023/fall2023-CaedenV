import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./addBtn.css";

const AddOwnButton = ({ userId, bookId, isOwned }) => {
  
  
  const purchaseBook = async () => {
    // Redirect the user to the Google Books website to purchase the book
    window.open(`https://books.google.com/books?id=${bookId}`, "_blank");
    const response = await axios.put(`http://localhost:8000/user/${userId}/owned-books`, {
      bookId: bookId,
    });

    if (response.status === 200) {
      isOwned = true;
    }
  };

  const setCurrentRead = async () => {
    const response = await axios.post(`http://localhost:8000/user/${userId}/curr-read`, {
      userId, userId,
      bookId: bookId
    });
  }

  return (
    <div className="button">
      {!isOwned ?
        (<button className="buy" onClick={purchaseBook}> Buy </button>)
        :
        (<Link className="startRead" to={`${userId}/read/${bookId}`}>
          <button className="read" onClick={setCurrentRead}> Read </button>
        </Link>)}
    </div>

  );
};

export default AddOwnButton;