import "./reviews.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "../review/Review"

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      axios.get(`http://localhost:8000/books/${bookId}/reviews`, { GoogleBookId: bookId })
      .then((response) => {
        setReviews(response.data);
      });
    } 
    
    getReviews();
    setInterval(getReviews, 60000);
  }, [bookId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          <li>{reviews.map((review, i) => (
            <Review
              key={i}
              user={review.ReviewUserId}
              revTitle={review.ReviewTitle}
              revRating={review.ReviewRating}
              revText={review.ReviewText}
            />))}</li>
        </ul>
      ) : (
        <label>No reviews yet...</label>
      )}

    </div>
  )
}

export default Reviews;
