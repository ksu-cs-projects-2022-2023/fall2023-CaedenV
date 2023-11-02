import "./reviews.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "../review/Review"

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://project-server/books/${bookId}/reviews`).then((response) => {
      setReviews(response.data);
    });
  }, [bookId]);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}><Review /></li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews;
