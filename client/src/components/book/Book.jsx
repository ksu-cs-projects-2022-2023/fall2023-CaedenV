import "./book.css"
import { Link } from "react-router-dom";

export default function Book() {
  const own = false;
  return (
    <div className="book">
      <Link className="link" to="/book/:bookId" ><img
        className="bookCover"
        src="https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0"
        alt="Book Cover" />
      </Link>
      <div className="bookInfo">
        <div className="bookGenre">
          <Link className="link" to="/store" >
            <span className="bookGenre">Sci-Fi</span>
            <span className="bookGenre">Romance</span>
            <span className="bookGenre">Young Adult</span>
          </Link>
        </div>
        <Link className="link" to="/book/:bookId" >
          <span className="bookTitle">Book Title</span>
        </Link>
        <span className="Pub_Auth"> Abe Lincoln | Aug 12, 2012</span>
        <div className="iconContainer">
          <Link className="link" to="/store" >
            <span className="ratingNum">3.4</span>
            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          </Link>
          <i className="singleLen fa-solid fa-scroll"></i>
          {own ? (
            <Link className="openLink" to={"/open/:bookId"}>
              <button className="read">Open</button>
            </Link>

          ) : (
            <>
            <Link className="buyLink" to={"/book/:bookId"}>
              <button className="read">...</button>
            </Link>
            <addWishButton className="wish"/>
            </>
            
            
          )
          }
        </div>

      </div>
    </div>
  )
}
