import "./store.css"
import React, { useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import LibBooks from "../../components/bookWithDesc/LibBooks";

const formatGoogleBooksResults = (results) => {
  return results.map((book, i) => ({
    key: i,
    GoogleBookId: book.id,
    BookTitle: book.volumeInfo.title,
    BookCoverLink: book.volumeInfo.imageLinks.thumbnail,
    BookAuthor: book.volumeInfo.authors[0],
    BookPubDate: book.volumeInfo.publishedDate,
    BookGenre: book.volumeInfo.categories[0],
    BookDesc: book.volumeInfo.description,
    BookAvgRating: book.volumeInfo.averageRating,
  }));
};

const addCheckBook = async (GoogleBookId, BookTitle, BookCoverLink, BookAuthor, BookPubDate, BookGenre, BookDesc, BookAvgRating, backend) => {
  const response = await axios.post(`${backend}/books/checkbook`, {
    GoogleBookId,
    BookTitle,
    BookCoverLink,
    BookAuthor,
    BookPubDate,
    BookGenre,
    BookDesc,
    BookAvgRating,
  });

  return response.data;
};

const searchGoogleBooks = async (query, selectedSearchType, backend) => {
  // Search for books on Google Books.
  const url = `https://www.googleapis.com/books/v1/volumes?q=+${selectedSearchType}:${query}&download=epub&filter=ebooks&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40`;
  const response = await axios.get(url);
  console.log(response.data.items);
  //Adds the book to the db if it doesn't already exist
  //addCheckBook(formatGoogleBooksResults(response.data.items), backend);

  return response.data.items;
};

const Store = ({ backend }) => {
  const [query, setQuery] = useState('');
  const [selectedSearchType, setSelectedSearchType] = useState('intitle');
  const userIdObj = useParams();

  var jString = JSON.stringify(userIdObj);
  var userObj = JSON.parse(jString);
  var userId = userObj.userId;

  const searchResults = useMemo(async () => {
    if (query != "") {
      const results = searchGoogleBooks(query, selectedSearchType, backend);
      return results;
    }
    return "";
  }, [query, selectedSearchType]);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="store">
      <label className="pageLabel">Store</label>
      <div className='SearchArea'>
        <select className='s type' id='type' value={selectedSearchType} onChange={(e) => setSelectedSearchType(e.target.value)}>
          <option value="intitle">Book Title</option>
          <option value="inauthor">Author</option>
          <option value="subject">Genre</option>
        </select>
        <form className="searchBar" onSubmit={handleSearch}>
          <input type="text" placeholder="Search" className="s Bar" onChange={handleSearch} />
          <button type="submit" className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div className="results">
        <label>Here's what we found searching through {selectedSearchType}:</label>
        {searchResults && searchResults.results ? (
          <ul className="found">
            {searchResults.results.map((book, i) => (
              <LibBooks
                key={i}
                cover={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                pubDate={book.volumeInfo.publishedDate}
                auth={book.volumeInfo.authors[0]}
                avgRate={book.volumeInfo.averageRating}
                genres={book.volumeInfo.categories[0]}
                desc={book.volumeInfo.description}
                id={book.id}
                user={userId}
              />))}
          </ul>
        ) : (
          <label>No results yet...</label>
        )}
      </div>
    </div>
  )
}

export default Store;
