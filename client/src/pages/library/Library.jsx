import LibBooks from "../../components/bookWithDesc/LibBooks";
import OwnedBook from "../../components/ownedBook/OwnedBook";
import "./library.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Library = ({ backend, userId }) => {
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [wishedBooks, setWishedBooks] = useState([]);
    const [favBooks, setFavedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [wishIds, setWishIds] = useState([]);
    const [ownIds, setOwnIds] = useState([]);
    const [favIds, setFavIds] = useState([]);

    // Function to fetch both owned and wished books
    const fetchLibraryData = async () => {
        setIsLoading(true);

        var ownedBooksPromise = axios.get(`${backend}/user/${userId}/owned-books`);
        var wishedBooksPromise = axios.get(`${backend}/user/${userId}/wished-books`);
        var favedBooksPromise = axios.geet(`${backend}/user/${userId}/top-5-fav-books`);

        // Use Promise.all to wait for all 3 requests
        await Promise.all([ownedBooksPromise, wishedBooksPromise, favedBooksPromise]).then(([ownedResponse, wishedResponse, favedResponse]) => {
            ownedBooksPromise = ownedResponse.data;
            wishedBooksPromise = wishedResponse.data;
            favedBooksPromise = favedResponse.data;
        });

        const ownedBooksIds = ownedBooksPromise.map((book) => book.GoogleBookId);
        const wishedBooksIds = wishedBooksPromise.map((book) => book.GoogleBookId);
        const favBookIds = favedBooksPromise.map((book) => book.GoogleBookId);
        setWishIds(wishedBooksIds);
        setOwnIds(ownedBooksIds);
        setFavIds(favBookIds);

        const tempOwn = [];
        const tempWish = [];
        const tempFav = [];
        for (const bookId of ownedBooksIds) {
            try {
                const response = await axios.get(`${backend}/books/${bookId}`);
                tempOwn.push(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        for (const bookId of wishedBooksIds) {
            try {
                const response = await axios.get(`${backend}/books/${bookId}`);
                tempWish.push(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        for (const bookId of favBookIds) {
            try {
                const response = await axios.get(`${backend}/books/${bookId}`);
                tempFav.push(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        }

        setOwnedBooks(tempOwn);
        setWishedBooks(tempWish);
        setFavedBooks(tempFav);
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
                                favs={favIds}
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
                                    wishes={wishIds}
                                    owns={ownIds}
                                    favs={favIds}
                                />))}
                            </li>
                        </ul>
                    ) : (<label> Looks like you don't want any books...</label>)}
                </div>
            </div>
            <div className="favWrapper">
                <label>Favorites</label>
                {favBooks.length > 0 ? (
                    <ul className="favList">
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
                                wishes={wishIds}
                                owns={ownIds}
                                favs={favIds}
                            />))}
                        </li>
                    </ul>
                ) : (<label>Go add some of your favorites from the store!</label>)}
            </div>
        </div>
    )
};

export default Library;
