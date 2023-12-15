import "./bookNoDesc.css"
import { Link } from "react-router-dom";
import AddWishButton from "../addToLists/addWishButton";
import AddOwnButton from "../addToLists/addOwnButton";
import AddFavButton from "../addToLists/addFavButton";
import axios from "axios";


const BookNoDesc = ({ cover, title, pubDate, auth, avgRate, genres, id, user, wishes, owns, favs }) => {
  const single = `/view/${id}`;
  const store = `/store`;
  var isOwned = false;
  var isWished = false;
  var favRank = 0;

  if (wishes.length > 0) {
    for (const wishedId of wishes) {
      if (wishedId == id) {
        isWished = true;
      }
    }
  }

  if (owns.length > 0) {
    for (const ownedId of owns) {
      if (ownedId == id) {
        isOwned = true;
      }
    }
  }

  if (favs.length > 0) {
    for (const favBook in favs) {
      if (favBook == id) {
        favRank = axios.get(`http://localhost:8000/user/${user}/fav-rank`, { bookId: id })
      }
    }
  }

  return (
    <div className="libBooks">
      <Link className="link" to={single}>
        <img className="bookCover"
          src={cover}
          alt="Book Cover"
        />
      </Link>

      <div className="bookInfo">
        <div className="bookGenre">
          <Link className="link" to={store} >
            <span className="bookGenre">{genres}</span>
          </Link>
        </div>
        <Link className="link" to={single}>
          <span className="bookTitle">{title} </span>
        </Link>
        <div className="auth">
          <span className="Pub_Auth"> {auth} | {pubDate}</span>
        </div>
        <div className="iconContainer">
          <span className="ratingNum">{avgRate}</span>
          <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          <i className="singleLen fa-solid fa-scroll"></i>
          <Link className="buyLink" to={single}>
            <button className="buy">...</button>
          </Link>
          {isOwned ? (<label></label>) : (<AddWishButton className="Wish" userId={user} bookId={id} isWished={isWished} />)}
          <AddOwnButton className="Own" userId={user} bookId={id} isOwned={isOwned} />
          <AddFavButton className="Fav" userId={user} bookId={id} favRank={favRank} />
        </div>
      </div>
    </div>
  )
}


export default BookNoDesc;