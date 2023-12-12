import "./review.css"

const Review = ({ user, revTitle, revRating, revText }) => {

  return (
    <div className="review">
      <span className="reviewTitle">
      {user}|{revTitle} : {revRating}
        <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
      </span>
      <hr />
      <p className="revDesc">
        {revText}
      </p>
    </div>
  )
}

export default Review;
