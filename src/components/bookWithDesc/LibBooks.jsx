import "./libBooks.css"
import { Link } from "react-router-dom";

const own = false;
var single = "";
const LibBooks = (props) => {
  const data = {
    cover: props.fullCover,
    title: props.title,
    pubDate: props.pubDate,
    auth: props.auth,
    avgRate: props.avgRate,
    genres: props.genres,
    desc: props.desc,
    id: props.id
  };
  single = "/book/:" + props.id;



  return (
    <div className="libBooks">
      <Link className="link" to={single} id={props.id} onClick={props.findSingle}>
        <img className="bookCover"
        src={props.miniCover}
        alt="Book Cover"/>
        
      </Link>

      <div className="bookInfo">
        <div className="bookGenre">
          <Link className="link" to="/store" >
            <span className="bookGenre">{props.genres}</span>
          </Link>
        </div>
        <Link className="link" to={single} id={props.id}>
          <span className="bookTitle">{props.title}</span>
        </Link>
        <span className="Pub_Auth"> {props.auth} | {props.pubDate}</span>
        <div className="iconContainer">
          <Link className="link" to="/store" >
            <span className="ratingNum">{props.avgRate}</span>
            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          </Link>
          <i className="singleLen fa-solid fa-scroll"></i>
          {own ? (
            <Link className="openLink" to={"/open/:bookId"}>
              <button className="read">Open</button>
            </Link>

          ) : (
            <Link className="buyLink" to={single} id={props.id}>
              <button className="read">Buy</button>
            </Link>
          )
          }
        </div>
        <span className="bookDesc">
          {props.desc}
        </span>
      </div>
    </div>
  )
}

export default LibBooks;
