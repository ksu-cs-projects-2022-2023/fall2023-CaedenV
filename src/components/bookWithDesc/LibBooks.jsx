import { Component } from "react";
import "./libBooks.css"
import { Link } from "react-router-dom";
import request from 'superagent';

const own = false;
var single = "";
class LibBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      data: {
        cover: props.fullCover,
        title: props.title,
        pubDate: props.pubDate,
        auth: props.auth,
        avgRate: props.avgRate,
        genres: props.genres,
        desc: props.desc,
        id: props.id,
        single: "/book/:" + props.id
      },
      
    }
  }

  findSingle = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes/" + this.state.data.id + "?projection=lite&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg")
      .then((data) => {
        this.setState({ info: [...data.body.items] })
      })
  
  }

  render() {
    return (
      <div className="libBooks">
        <Link className="link" to={single} id={this.state.data.id} onClick={this.findSingle}>
          <img className="bookCover"
            src={this.state.data.cover}
            alt="Book Cover" />
    
        </Link>
    
        <div className="bookInfo">
          <div className="bookGenre">
            <Link className="link" to="/store" >
              <span className="bookGenre">{this.state.data.genres}</span>
            </Link>
          </div>
          <Link className="link" to={single} id={this.state.data.id}>
            <span className="bookTitle">{this.state.data.title}</span>
          </Link>
          <span className="Pub_Auth"> {this.state.data.auth} | {this.state.data.pubDate}</span>
          <div className="iconContainer">
            <Link className="link" to="/store" >
              <span className="ratingNum">{this.state.data.avgRate}</span>
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
            </Link>
            <i className="singleLen fa-solid fa-scroll"></i>
            {own ? (
              <Link className="openLink" to={"/open/:bookId"}>
                <button className="read">Open</button>
              </Link>
    
            ) : (
              <Link className="buyLink" to={single} id={this.state.data.id}>
                <button className="read">Buy</button>
              </Link>
            )
            }
          </div>
          <span className="bookDesc">
            {this.state.data.desc}
          </span>
        </div>
      </div>
    )
  }
}


export default LibBooks;
