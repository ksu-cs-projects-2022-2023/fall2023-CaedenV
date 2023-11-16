import "./makeReview.css"
import React, { useState } from "react";
import axios from "axios";

const MakeReview = ({ bookId }) => {
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = async () => {
        const response = await axios.post(`http://project-server:8000/books/${bookId}/reviews`, {
            title: reviewTitle,
            rating: reviewRating,
            text: reviewText
        });
        return response;
    };

    return (
        <div className="make">
            <form className="makeReview">
                <div className="makeRevGrp">
                    <input type="text" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} 
                    placeholder="How about a title?" className="revInput" autoFocus={true} 
                    />
                    <input type="int" value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}
                    placeholder="3" className="numStars"/>
                    <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
                    <hr />
                </div>
                <div className="makeRevGrp">
                    <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}
                    placeholder="How was it? Let us know in more detail..." type="text" className="revInput revText"></textarea>
                </div>
                <i class="revSubmit Icon fa-solid fa-pen-nib" onClick={handleSubmit}></i>
            </form>
        </div>
    )
}

export default MakeReview;