import "./store.css"
import { Component } from "react"
import SearchArea from "../../components/searchArea/SearchArea";
import SearchListResults from "../../components/searchListResults/SearchListResults";

class Store extends Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      field: '',
      selectedSearchType: "title",
    };
  }
  
  searchBook = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?&filter=ebooks&download=epub&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40", 
      {
        params: {q: this.state.field, filter: this.state.selectedSearchType}
      }
    );

    this.setState({ results: response.data.items });
  };

  handleSearch = (e) => {
    this.setState({ field: e.target.value });
  };

  setSelectedSearchType = (searchType) => {
    this.setState({selectedSearchType: searchType });
  }

  render() {
    return (
      <div className="store">
        <label className="pageLabel">Store</label>
        <SearchArea searchBook={this.searchBook} 
          handleSearch={this.handleSearch} 
          field={this.state.field} 
          selectedSearchType={this.state.selectedSearchType} 
          setSelectedSearchType={this.setSelectedSearchType}
        />
  
        <div className="results">
          <label>Here's what we found for {this.state.field} searching through {this.state.selectedSearchType}:</label>
          <ul className="found">
            <SearchListResults results={this.state.results}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default Store;
