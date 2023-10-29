import { Component } from "react";
import "./libBooks.css"
import { Link } from "react-router-dom";
import AddWishButton from "../addToLists/addWishButton";


class LibBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        cover: props.fullCover,
        title: props.title,
        pubDate: props.pubDate,
        auth: props.auth,
        avgRate: props.avgRate,
        genres: props.genres,
        desc: props.desc,
        id: props.id,
        user: props.user,
        single: "/book/:" + props.id,
        read: "/read/:" + props.id
      },

    }
  }

  render() {
    const info = this.state.data;
    const userId = info.user;
    const bookId = info.id;
    return (
      <div className="libBooks">
        <Link className="link" to={info.single} id={info.id} >
          <img className="bookCover"
            src={info.cover}
            alt="Book Cover"
          />
        </Link>

        <div className="bookInfo">
          <div className="bookGenre">
            <Link className="link" to="/store" >
              <span className="bookGenre">{info.genres}</span>
            </Link>
          </div>
          <Link className="link" to={info.single} id={info.id}>
            <span className="bookTitle">{info.title} </span>
          </Link>
          <span className="Pub_Auth"> {info.auth} | {info.pubDate}</span>
          <div className="iconContainer">
            <Link className="link" to="/store" >
              <span className="ratingNum">{info.avgRate}</span>
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
            </Link>
            <i className="singleLen fa-solid fa-scroll"></i>
            <Link className="buyLink" to={info.single} id={info.id}>
              <button className="buy">...</button>
            </Link>
            <AddWishButton userId={userId} bookId={bookId} />
          </div>
          <span className="bookDesc">
            {info.desc}
          </span>
        </div>
      </div>
    )
  }
}


export default LibBooks;
