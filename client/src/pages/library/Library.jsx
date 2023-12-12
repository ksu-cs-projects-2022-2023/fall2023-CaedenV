import LibBooks from "../../components/bookWithDesc/LibBooks";
import OwnedBook from "../../components/ownedBook/OwnedBook";
import "./library.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Library = ({ backend, userId }) => {
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading indicator

    // Function to fetch both owned and wished books
    const fetchLibraryData = async () => {
        setIsLoading(true);

        var ownedBooksPromise = axios.get(`${backend}/user/${userId}/owned-books`);
        var wishedBooksPromise = axios.get(`${backend}/user/${userId}/wished-books`);

        // Use Promise.all to wait for both requests
        await Promise.all([ownedBooksPromise, wishedBooksPromise]).then(([ownedResponse, wishedResponse]) => {
            ownedBooksPromise = ownedResponse.data;
            wishedBooksPromise = wishedResponse.data;
        });
        const ownedBooksIds = ownedBooksPromise.map((book) => book.GoogleBookId);
        const wishedBooksIds = wishedBooksPromise.map((book) => book.GoogleBookId);
        const tempOwn = [];
        for (const bookId of ownedBooksIds) {
            try {
                const response = await axios.get(`${backend}/books/${bookId}`);
                tempOwn.push(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        const tempWish = [];
        for (const bookId of wishedBooksIds) {
            try {
                const response = await axios.get(`${backend}/books/${bookId}`);
                tempWish.push(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }

        setOwnedBooks(tempOwn);
        setWishedBooks(tempWish);
        
        setIsLoading(false);
    };

    useEffect(() => {
        fetchLibraryData();
    }, [userId]);

    if (isLoading) {
        return <p>Loading your library...</p>;
    }

    return (
        <div className="library">
            <label className="libTitle">My Library</label>
            <div className="libWrapper">
                <div className="ownWrapper">
                    <label className="ownTitle">Owned</label>
                    <ul className="ownList">
                        {ownedBooks.length > 0 ? (<li>{ownedBooks.map((book, i) => (
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
                    {wishedBooks.length > 0 ? (
                        <ul className="wishList">
                            <li>{wishedBooks.map((book, i) => (
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
                                />))}
                            </li>
                        </ul>
                    ) : (<label> Looks like you don't want any books...</label>)}
                </div>
            </div>
        </div>
    )
};

export default Library;
