import "./makeReview.css"
import React, { useState } from "react";
import axios from "axios";

const MakeReview = ({ bookId, userId, bookAvgRating}) => {
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleSubmit = async () => {
        const response = await axios.post(`http://localhost:8000/books/${bookId}/reviews`, {
            title: reviewTitle,
            rating: reviewRating,
            text: reviewText,
            userId: userId,
        });
        const oldAvg = (response.data.oldAvg[0].BookAvgRating) || 0;
        const numRevs = response.data.numRevs[0].count;
        if(numRevs == 0) {
            bookAvgRating = (oldAvg + reviewRating) / 1;
        }
        console.log(bookAvgRating);
        await axios.put(`http://localhost:8000/books/${bookId}/avgRating`, {newAvg: bookAvgRating})
            .then((response) => console.log(response.data.message)
        );

    };

    return (
        <div className="make">
            <form className="makeReview" onSubmit={handleSubmit}>
                <div className="makeRevGrp">
                    <input type="text" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} 
                    placeholder="How about a title?" className="revInput" autoFocus={true} 
                    />
                    <input type="int" value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}
                    placeholder="3" className="numStars"/>
                    <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
                    <i class="revSubmit Icon fa-solid fa-pen-nib" onClick={handleSubmit}></i>
                    <hr />
                    
                </div>
                <div className="makeRevText">
                    <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}
                    placeholder="How was it? Let us know in more detail..." type="text" className="revInput revText"></textarea>
                </div>
                
            </form>
        </div>
    )
}

export default MakeReview;