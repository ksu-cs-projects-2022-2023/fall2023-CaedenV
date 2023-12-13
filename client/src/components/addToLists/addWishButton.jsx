import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addBtn.css" ;

const AddWishButton = ({ userId, bookId, isWished }) => {
  const addToWishlist = async () => {
    // Add the book to the user's wishlist in the PostgreSQL database
   axios.post(`http://localhost:8000/user/${userId}/wished-books`, {
      userId: userId,
      bookId: bookId,
    });
    isWished = true;
  };

  const removeFromWishList = async () => {
    axios.delete(`http://localhost:8000/user/${userId}/wished-books`, {
      userId: userId,
      bookId: bookId,
    });
    isWished = false;
  }



  return (
    <button className="Wish" >
      {isWished ? <i className="singleIcon fa-solid fa-list" onClick={removeFromWishList} ></i> : <i className="wishIcon fa-solid fa-list-check" onClick={addToWishlist}></i>}
    </button>
  );
};

export default AddWishButton;
