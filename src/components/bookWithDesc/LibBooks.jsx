import { Component } from "react";
import "./libBooks.css"
import { Link } from "react-router-dom";

const own = false;
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
        single: "/book/:" + props.id,
        read: "/read/:" + props.id
      },
      
    }
  }

  render() {
    return (
      <div className="libBooks">
        <Link className="link" to={this.state.data.single} id={this.state.data.id} >
          <img className="bookCover"
            src={this.state.data.cover}
            alt="Book Cover" 
             />
        </Link>
    
        <div className="bookInfo">
          <div className="bookGenre">
            <Link className="link" to="/store" >
              <span className="bookGenre">{this.state.data.genres}</span>
            </Link>
          </div>
          <Link className="link" to={this.state.data.single} id={this.state.data.id}>
            <span className="bookTitle">{this.state.data.title} </span>
          </Link>
          <span className="Pub_Auth"> {this.state.data.auth} | {this.state.data.pubDate}</span>
          <div className="iconContainer">
            <Link className="link" to="/store" >
              <span className="ratingNum">{this.state.data.avgRate}</span>
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
            </Link>
            <i className="singleLen fa-solid fa-scroll"></i>
            {own ? (
              <Link className="openLink" to={this.state.data.read}>
                <button className="read">Open</button>
              </Link>
    
            ) : (
              <Link className="buyLink" to={this.state.data.single} id={this.state.data.id}>
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
