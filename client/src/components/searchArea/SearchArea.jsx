import React, { useState, useMemo } from 'react';
import "./searchArea.css";
import axios from "axios";

const searchGoogleBooks = async (query, selectedSearchType) => {
    // Search for books on Google Books.
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=${selectedSearchType}&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40`;
    const response = await axios.get(url);
    const data = await response.json();
    return data.items;
};

const SearchArea = () => {
    const [query, setQuery] = useState('');
    const [selectedSearchType, setSelectedSearchType] = useState('title');

    const searchResults = useMemo(async () => {
        const results = await searchGoogleBooks(query, selectedSearchType);
        return results;
    }, [query, selectedSearchType]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const addBookToDB = async (book) => {

    }

    return (
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
                <label>Here's what we found for {this.state.field} searching through {this.state.selectedSearchType}:</label>
                <ul className="found">
                { searchResults.results.map((book) => (
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
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchArea;
