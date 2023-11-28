import React, { useState } from "react";
import axios from "axios";
import "./addBtn.css" ;

const AddWishButton = ({ userId, bookId }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const addToWishlist = async () => {
    // Add the book to the user's wishlist in the PostgreSQL database
    const response = await axios.put(`http://project-server:8000/user/${userId}/wish-listed-books`, {
      userId,
      bookId,
    });

    if (response.status === 200) {
      setIsWishlisted(true);
    }
  };

  return (
    <button onClick={addToWishlist}>
      {isWishlisted ? <i className="singleIcon fa-solid fa-list"></i> : <i className="wishIcon fa-solid fa-list-check"></i>}
    </button>
  );
};

export default AddWishButton;
