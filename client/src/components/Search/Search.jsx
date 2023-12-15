import "./search.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import BookNoDesc from "../bookWithDesc/BookNoDesc";



const addCheckBook = async (book, backend) => {
    const fakeDate = "1001-01-01";
    if (book.BookPubDate != undefined) {
        console.log(book);
        axios.post(`${backend}/books/check-book`, {
            GoogleBookId: book.GoogleBookId,
            BookTitle: book.BookTitle,
            BookCoverLink: book.BookCoverLink,
            BookAuthor: book.BookAuthor,
            BookGenre: book.BookGenre,
            BookDesc: book.BookDesc,
            BookAvgRating: book.BookAvgRating,
            BookPubDate: book.BookPubDate,
        });
    }
    else {
        axios.post(`${backend}/books/check-book`, {
            GoogleBookId: book.GoogleBookId,
            BookTitle: book.BookTitle,
            BookCoverLink: book.BookCoverLink,
            BookAuthor: book.BookAuthor,
            BookGenre: book.BookGenre,
            BookDesc: book.BookDesc,
            BookAvgRating: book.BookAvgRating,
            BookPubDate: fakeDate,
        });
    }


};



const Search = ({ backend, userId, params, query }) => {
    const [results, setResults] = useState([]);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [favedBooks, setFavedBooks] = useState([]);

    const FetchLibrary = async () => {
        var ownedBooksPromise = axios.get(`${backend}/user/${userId}/owned-books`);
        var wishedBooksPromise = axios.get(`${backend}/user/${userId}/wished-books`);
        var favedBooksPromise = axios.get(`${backend}/user/${userId}/top-5-fav-books`);

        // Use Promise.all to wait for both requests
        await Promise.all([ownedBooksPromise, wishedBooksPromise, favedBooksPromise]).then(([ownedResponse, wishedResponse, favedResponse]) => {
            ownedBooksPromise = ownedResponse.data;
            wishedBooksPromise = wishedResponse.data;
            favedBooksPromise = favedResponse.data;
        });
        const ownedBooksIds = ownedBooksPromise.map((book) => book.GoogleBookId);
        const wishedBooksIds = wishedBooksPromise.map((book) => book.GoogleBookId);
        const favBookIds = favedBooksPromise.map((book) => book.GoogleBookId);

        setOwnedBooks(ownedBooksIds);
        setWishedBooks(wishedBooksIds);
        setFavedBooks(favBookIds);
    }

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


        setResults(formatted);
        if (results.length > 0) {
            for (const book of results) {
                addCheckBook(book, backend);
            }
        }
    };



    useEffect(() => {
        FetchLibrary();
        const url = `https://www.googleapis.com/books/v1/volumes?q=+${params}:${query}&download=epub&filter=ebooks&langRestring=en&printType=books&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg&maxResults=40`;
        axios.get(url).then((response) => {
            var unfiltered = response.data.items;
            if (unfiltered) {
                formatGoogleBooksResults(unfiltered);
                console.log(unfiltered);
            }
        });
    }, [userId]);



    return (
        <>
            {results ? (
                <ul className="found">
                    <li>{results.map((book, i) => (
                        <BookNoDesc
                            key={i}
                            cover={book.BookCoverLink}
                            title={book.BookTitle}
                            pubDate={book.BookPubDate}
                            auth={book.BookAuthor}
                            avgRate={book.BookAvgRating}
                            genres={book.BookGenre}
                            id={book.GoogleBookId}
                            user={userId}
                            wishes={wishedBooks}
                            owns={ownedBooks}
                            favs={favedBooks}
                        />))}</li>
                </ul>
            ) : (
                <label>No results yet...</label>
            )}
        </>

    )
}

export default Search;