import LibBooks from "../../components/bookWithDesc/LibBooks";
import OwnedBook from "../../components/ownedBook/OwnedBook";
import "./library.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Library = ({ backend, userId }) => {
    var go = backend + "/user/" + userId;

    const [ownedBooks, setOwnedBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);

    useEffect(() => {
        // Make a GET request to the `/users/:userId/owned-books` endpoint.
        axios.get(go + `/owned-books`).then((response) => {
            setOwnedBooks(response.data);
        });

        // Make a GET request to the `/users/:userId/wished-books` endpoint.
        axios.get(go + `/wished-books`).then((response) => {
            setWishedBooks(response.data);
        });
    }, [userId]);

    return (
        <div className="library">
            <label className="libTitle">My Library</label>
            <div className="libWrapper">
                <div className="ownWrapper">
                    <label className="ownTitle">Owned</label>
                    <ul className="ownList">
                        {ownedBooks ? (<li>{ownedBooks.map((book, i) => (
                            <OwnedBook
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
                        ) : (<label> Looks like you don't own any books...</label>)}
                    </ul>
                </div>
                <div className="wishWrapper">
                    <label className="wishTitle">Wishlist</label>
                    <ul className="wishList">
                        {wishedBooks ? (<li>{wishedBooks.map((book, i) => (
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
                        ) : (<label> Looks like you don't want any books...</label>)}
                    </ul>
                </div>
            </div>
        </div>

    )
};

export default Library;
