import "./libBooks.css"
import { Link } from "react-router-dom";
import AddWishButton from "../addToLists/addWishButton";


const LibBooks = ({ cover, title, pubDate, auth, avgRate, genres, desc, id, user }) => {
  const single = `/view/${id}`;
  const store = `/store`;


  return (
    <div className="libBooks">
      <Link className="link" to={single} id={id} >
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
          <Link className="link" to={store} bookId={id}>
            <span className="ratingNum">{avgRate}</span>
            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          </Link>
          <i className="singleLen fa-solid fa-scroll"></i>
          <Link className="buyLink" to={single}>
            <button className="buy">...</button>
          </Link>
          <AddWishButton className="Wish" userId={user} bookId={id} />
        </div>
        <span className="bookDesc">
          {desc}
        </span>
      </div>
    </div>
  )
}


export default LibBooks;