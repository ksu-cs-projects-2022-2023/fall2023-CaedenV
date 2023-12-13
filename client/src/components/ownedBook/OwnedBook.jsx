import "./ownedBook.css"
import { Link } from "react-router-dom";
import axios from "axios";
import AddFavButton from "../addToLists/addFavButton";


const OwnedBook = ({ cover, title, pubDate, auth, avgRate, genres, id, user, favs }) => {
  const single = `/view/${id}`;
  const store = `/store`;
  const read = `/read/${id}`;
  var favRank = 0;

  if (favs.length > 0) {
    for (const favBook in favs) {
      if (favBook == id) {
        favRank = axios.get(`http://localhost:8000/user/${user}/fav-rank`, {bookId: id} )
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
        <span className="Pub_Auth"> {auth} | {pubDate}</span>
        <div className="iconContainer">
          <Link className="link" to={store} >
            <span className="ratingNum">{avgRate}</span>
            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          </Link>
          <i className="singleLen fa-solid fa-scroll"></i>
          <Link className="openLink" to={read}>
            <button className="read">Open</button>
          </Link>
          <AddFavButton favRank={favRank} userId={user} bookId={id}/>
        </div>
      </div>
    </div>
  )
}


export default OwnedBook;