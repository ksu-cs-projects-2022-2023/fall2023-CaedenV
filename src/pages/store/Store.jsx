import "./store.css"
import { Component } from "react"
import SearchArea from "../../components/searchArea/SearchArea";
import request from 'superagent';
import SearchListResults from "../../components/searchListResults/SearchListResults";

class Store extends Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      field: ''
    }
  }
  
  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes?&filter=ebooks&download=epub&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg" +"&maxResults=40")
      .query({q: this.state.field})
      .then((data) => {
        this.setState({results: [...data.body.items]})
      })

  }

  handleSearch = (e) => {
    this.setState({ field: e.target.value });
  }

  render() {
    return (
      <div className="store">
        <label className="pageLabel">Store</label>
        <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
  
        <div className="results">
          <label>Here's what we found for {this.state.field}:</label>
          <ul className="found">
            <SearchListResults results={this.state.results}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default Store;
