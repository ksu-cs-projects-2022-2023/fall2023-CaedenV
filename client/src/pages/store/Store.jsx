import "./store.css"
import React, { useState } from 'react';
import axios from "axios";
import LibBooks from "../../components/bookWithDesc/LibBooks";



const addCheckBook = async (book, backend) => {
  
  axios.post(`${backend}/books/check-book`, {
    GoogleBookId: book.GoogleBookId,
    BookTitle: book.BookTitle,
    BookCoverLink: book.BookCoverLink,
    BookAuthor: book.BookAuthor,
    BookGenre: book.BookGenre,
    BookDesc: book.BookDesc,
    BookAvgRating: book.BookAvgRating,
  });
  // console.log(book.GoogleBookId);
  // axios.post(`${backend}/books/${book.GoogleBookId}/insert-date`, {
  //   bookId: book.GoogleBookId,
  //   BookPubDate: book.BookPubDate,
  // });

};



const Store = ({ backend, userId }) => {
  const [query, setQuery] = useState('');
  const [selectedSearchType, setSelectedSearchType] = useState('intitle');
  const [results, setResults] = useState([]);

  const formatGoogleBooksResults = (unfiltered) => {
    var formatted = unfiltered.map((book) => ({
      GoogleBookId: book.id,
      BookTitle: book.volumeInfo.title,
      BookCoverLink: book.volumeInfo.imageLinks.thumbnail,
      BookAuthor: book.volumeInfo.authors && book.volumeInfo.authors[0],
      BookPubDate: book.volumeInfo.publishedDate,
      BookGenre: book.volumeInfo.categories && book.volumeInfo.categories[0],
      BookDesc: book.volumeInfo.description,
      BookAvgRating: book.volumeInfo.averageRating,
    }));
    //console.log(typeof(results[0].BookPubDate));

    setResults(formatted);
    if (results != null) {
      for (const book of results) {
        addCheckBook(book, backend);
      }
    }
  };

  const handleSearch = (e) => {
    // Sets the query for the Google Books Search
    e.preventDefault();
    const newQ = e.target.value;

    //const formattedQ = newQ.includes(' ') ? newQ.replace(' ', '+') : newQ;
    setQuery(newQ);
    //Searches through the Google Books API based on the query and search type
    const url = `https://www.googleapis.com/books/v1/volumes?q=+${selectedSearchType}:${query}&download=epub&filter=ebooks&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40`;
    axios.get(url).then((response) => {
      var unfiltered = response.data.items;
      formatGoogleBooksResults(unfiltered);

    });
    console.log(results);
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
          <button className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div className="results">
        <label>Here's what we found searching through "{selectedSearchType}":</label>
        {results ? (
          <ul className="found">
            <li>{results.map((book, i) => (
              <LibBooks
                key={i}
                cover={book.BookCoverLink}
                title={book.BookTitle}
                pubDate={book.BookPubDate}
                auth={book.BookAuthor}
                avgRate={book.BookAvgRating}
                genres={book.BookGenre}
                desc={book.BookDesc}
                id={book.GoogleBookId}
                user={userId}
              />))}</li>
          </ul>
        ) : (
          <label>No results yet...</label>
        )}
      </div>
    </div>
  )
}

export default Store;