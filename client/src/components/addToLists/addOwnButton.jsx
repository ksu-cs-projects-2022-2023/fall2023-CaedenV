import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./addBtn.css";

const AddOwnButton = ({ userId, bookId }) => {
  const [isOwned, setIsOwned] = useState(false);
  
  const purchaseBook = async () => {
    // Redirect the user to the Google Books website to purchase the book
    window.open(`https://books.google.com/books?id=${bookId}`, "_blank");

    const response = await axios.put(`http://project-server:8000/user/${userId}/owned-books`, {
      bookId: bookId,
    });

    if (response.status === 200) {
      setIsOwned(true);
    }
  };

  const setCurrentRead = async () => {
    const response = await axios.post(`http://project-server:8000/user/${userId}/curr-read`, {
      userId, userId,
      bookId: bookId
    });
    console.log(response.data.message);
  }

  return (
    <div className="button">
      {isOwned ?
        (<button className="buy" onClick={purchaseBook}> Buy </button>)
        :
        (<Link className="startRead" to={`${userId}/read/${bookId}`}>
          <button className="read" onClick={setCurrentRead}> Read </button>
        </Link>)}
    </div>

  );
};

export default AddOwnButton;