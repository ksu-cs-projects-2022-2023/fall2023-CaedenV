import "./settings.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Settings = (backend) => {
    const userId = useParams();

    const [user, setUser] = useState(null);
    const [top5Books, setTop5Books] = useState([]);
    const [books, setBooks] = useState([]);
    const [fileInput, setFileInput] = useState(null);
    const [friends, setFriends] = useState([]);
    const go = backend + "/user/" + userId.toString();

    useEffect(() => {
        
        axios.get(go, {userId})
            .then((response) => {
                setUser(response.data);
            });

        axios.get(go + `/friends-list`, {userId})
            .then((response) => {
                setFriends(response.data);
            });

        axios.get(go + `/top-5-fav-books`, {userId})
            .then((response) => {
                setTop5Books(response.data);
            });

        axios.get(backend + `/books/`, {userId})
            .then((response) => {
                setBooks(response.data);
            });
    });

    const handleAddFriend = (event) => {
        event.preventDefault();

        const friendId = event.target.friendId.value;

        axios.put(go + `/friends-list`, { friendId: friendId })
            .then((response) => {
                setFriends([...friends, { userId: user.userId, friendId }]);
            });
    };
    const handleRemoveFriend = (friendId) => {
        axios.delete(go + `/friends-list/` + friendId)
            .then((response) => {
                setFriends(friends.filter((friend) => friend.friendId !== friendId));
            });
    };

    const handleChange = (event) => {
        const bookState = `book${event.target.className.split(' ')[1]}`;
        setTop5Books({ ...top5Books, [bookState]: event.target.value });
    };

    const handleFileChange = (event) => {
        setFileInput(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('userPicLink', fileInput);

        axios.put(go + `/profile-pic`, formData)
            .then((response) => {
                setUser({ ...user, userPicLink: response.data.userPicLink });
            });
    };

    if (!user || !top5Books || !books || !friends) {
        return <div className="load">Loading</div>;
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <Popup trigger=
                        {<button className="friends">Friends</button>}
                        position="bottom center">
                        <ul>
                            {friends.map((friend) => (
                                <li key={friend.friendId}>
                                    {friend.friendId}
                                    <button onClick={() => handleRemoveFriend(friend.friendId)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <Popup trigger={<button className="addF" onClick={handleAddFriend}>Add Friend</button>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className="enterName">
                                            <label className="enterLbl">Enter Username:</label>
                                            <input type="text" className="fName" placeholder="Friend ID" />
                                        </div>
                                        <label className="found">Friend added!</label>
                                    </div>
                                )
                            }
                        </Popup>
                    </Popup>

                    <span className="settingsDelTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="topCategory">
                        <div className="settingsProfPic">
                            <img className="topProfile" src={user.userPicLink} alt={user.userUN}
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-solid fa-face-smile-beam"></i>
                            </label>
                            <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
                        </div>
                        <div className="personalsWrapper">
                            <form className="personalsForm">
                                <div className="favGenreContainer">
                                    <label>Favorite Genre:</label>
                                    <input
                                        type="text" value={user.userFavGenre}
                                        onChange={(event) => setUser({ ...user, userFavGenre: event.target.value })}
                                    />
                                </div>
                                <div className="rankContainer">
                                    <label>Top Five Books:</label>
                                    <ol>
                                        {top5Books.map((book, index) => {
                                            const foundBook = books.find((b) => b.GoogleBookId === book.GoogleBookId);

                                            return (
                                                <li key={book.GoogleBookId}>
                                                    {index + 1}. <input type="text" className={`rank ${index + 1}`} onChange={handleChange} placeholder={foundBook.title} />
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="accountInfo">

                    </div>
                    <label>UserName</label>
                    <input
                        type="text" value={user.userUN}
                        onChange={(event) => setUser({ ...user, userUN: event.target.value })}
                    />

                    <button className="Submit" ><i className="settingsSubmit fa-regular fa-square-check"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Settings;