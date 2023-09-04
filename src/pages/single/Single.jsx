import SideBar from "../../components/sidebar/SideBar"
import SingleBook from "../../components/singleBook/SingleBook"
import Reviews from "../../components/reviews/Reviews"
import MakeReview from "../../components/makeReview/MakeReview"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
      {/* Book Info */}
      <div className="mainContents">
        <SingleBook />
        <div className="revSection">
          <div className="revHeader">
            <h>
              Reviews
            </h>
          </div>
          <MakeReview/>
          <Reviews/>
        </div>
      </div>
      <SideBar/>
    </div>
  )
}
