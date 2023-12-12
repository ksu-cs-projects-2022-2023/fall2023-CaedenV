import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addBtn.css" ;

const AddWishButton = ({ userId, bookId }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  //const userId = String(userIdObj.userId);
  
  async function AlreadyWished() {
    const wishedBooks = axios.get(`http://localhost:8000/user/${userId}/wished-books`);
    if(bookId in wishedBooks) {
      setIsWishlisted(true);
    }
    else{
      setIsWishlisted(false);
    }
  }

  useEffect(() => {
    AlreadyWished();
  }, [bookId]);

  const addToWishlist = async () => {
    // Add the book to the user's wishlist in the PostgreSQL database
    const response = await axios.post(`http://localhost:8000/user/${userId}/wished-books`, {
      userId: userId,
      bookId: bookId,
    });

    setIsWishlisted(true);
  };

  const removeFromWishList = async () => {
    const response = await axios.delete(`http://localhost:8000/user/${userId}/wished-books`, {
      userId: userId,
      bookId: bookId,
    });

    setIsWishlisted(false);
  }



  return (
    <button className="Wish" >
      {isWishlisted ? <i className="singleIcon fa-solid fa-list" onClick={removeFromWishList} ></i> : <i className="wishIcon fa-solid fa-list-check" onClick={addToWishlist}></i>}
    </button>
  );
};

export default AddWishButton;
