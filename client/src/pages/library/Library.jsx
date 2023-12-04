import LibBooks from "../../components/bookWithDesc/LibBooks";
import OwnedBook from "../../components/ownedBook/OwnedBook";
import "./library.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Library = ({backend}) => {
    const userIdObj = useParams();

    var jString = JSON.stringify(userIdObj);
    var userObj = JSON.parse(jString);
    var userId = userObj.userId;
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
                        {ownedBooks ? (ownedBooks.map((book) => (
                            <li key={book.id}><OwnedBook /></li>
                        ))) : (<label> Looks like you don't own any books...</label>) }
                    </ul>
                </div>
                <div className="wishWrapper">
                    <label className="wishTitle">Wishlist</label>
                    <ul className="wishList">
                    {wishedBooks ? (wishedBooks.map((book) => (
                            <li key={book.id}><OwnedBook /></li>
                        ))) : (<label> Looks like you don't want any books...</label>) }
                    </ul>
                </div>
            </div>
        </div>

    )
};

export default Library;
