import { Component } from "react"
import "./review.css"

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      data: {
        writer: props.ReviewUserId,
        rating: props.ReviewRating,
        title: props.ReviewTitle,
        review: props.ReviewText,
      },
    }
  }

  render() {
    return (
      <div className="review">
          <div className="reviewInfo">
              {this.state.data.writer}
          </div>
          <span className="reviewTitle">
              {this.state.data.title} : {this.state.data.rating}
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          </span>
          <hr/>
          <p className="revDesc">
              {this.state.data.review}
          </p>
      </div>
    )
  }
  
}

export default Review;
