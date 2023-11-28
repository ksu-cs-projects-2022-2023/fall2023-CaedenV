import "./store.css"
import React, { useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import LibBooks from "../../components/bookWithDesc/LibBooks";

const formatGoogleBooksResults = (results) => {
  return results.map((book) => ({
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
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=${selectedSearchType}&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40`;
  const response = await axios.get(url);
  const data = await response.json();

  //Adds the book to the db if it doesn't already exist
  for (const book of data.items) {
    await addCheckBook(formatGoogleBooksResults(book), backend);
  }

  return data.items;
};

const Store = (backend) => {
  const [query, setQuery] = useState('');
  const [selectedSearchType, setSelectedSearchType] = useState('title');
  const params = useParams();
  const userId = params.userId;

  const searchResults = useMemo(async () => {
    const results = await searchGoogleBooks(query, selectedSearchType, backend);
    return results;
  }, [query, selectedSearchType]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="store">
      <label className="pageLabel">Store</label>
      <div className='SearchArea'>
        <select className='s type' id='type' value={selectedSearchType} onChange={(e) => setSelectedSearchType(e.target.value)}>
          <option value="rating">Rating</option>
          <option value="title">Book Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
        <form className="searchBar" onSubmit={handleSearch}>
          <input type="text" placeholder="Search" className="s Bar" onChange={handleSearch} />
          <button type="submit" className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className="results">
          <label>Here's what we found searching through {selectedSearchType}:</label>
          <ul className="found">
            {searchResults.results.map((book) => (
              <LibBooks
                key={book.id}
                cover={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                pubDate={book.volumeInfo.publishedDate}
                auth={book.volumeInfo.authors[0]}
                avgRate={book.volumeInfo.averageRating}
                genres={book.volumeInfo.categories[0]}
                desc={book.volumeInfo.description}
                id={book.id}
                user={userId}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Store;
