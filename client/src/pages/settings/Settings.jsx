import "./settings.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Settings = ({ backend, userId }) => {

    const [user, setUser] = useState(null);
    const [top5Books, setTop5Books] = useState([]);
    const inputRef = useRef(null);
    const [friends, setFriends] = useState([]);
    const go = `${backend}/user/${userId}`;

    useEffect(() => {
        async function GetAllInfo() {
            axios.get(go, { userId: userId })
                .then((response) => {
                    setUser(response.data[0]);
                });
            axios.get(go + `/friends-list/names`, { userId: userId })
                .then((response) => {
                    setFriends(response.data);
                });

            axios.get(go + `/top-5-fav-books`, { userId: userId })
                .then((response) => {
                    setTop5Books(response.data);
                });
        }

        GetAllInfo();
    }, [userId]);

    const handleAddFriend = (event) => {
        event.preventDefault();

        const friendUN = event.target.friendUN.value;

        axios.post(go + `/friends-list`, { userId: userId, friendUN: friendUN })
            .then((response) => {
                setFriends(response.data);
            });
    };
    const handleRemoveFriend = (friendId, userId) => {
        axios.delete(go + `/friends-list/` + friendId, { friendId: friendId, userId: userId })
            .then((response) => {
                setFriends(response.data);
            });
    };
    const handleFileClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        var file = event.target.files[0]
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result; // base64 encoded image data
            setUser({ ...user, userPicLink: imageData });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(user);
        axios.put(go, { userInfo: user })
            .then((response) => {
                setUser({ ...user, userPicLink: response.data.userPicLink });
            });
    };

    if (!user) {
        return <div className="load">Loading</div>;
    }

    return (
        <div className="settings">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <Popup trigger=
                    {<button className="friends">Friends</button>}
                    position="bottom center">
                    <ul>
                        {friends.map((friend) => (
                            <li key={friend}>
                                {friend}
                                <button onClick={() => handleRemoveFriend(friend.friendId, user.userId)}>Remove</button>
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
                    <div className="settingsProfPic" onClick={handleFileClick}>
                        <img className="topProfile"
                            src={(user.userPicLink) || "https://static.vecteezy.com/system/resources/previews/000/348/518/original/vector-books-icon.jpg"} />
                        <input type="file" accept="image/*" onChange={handleFileChange} ref={inputRef} style={{ display: "none" }} />
                        <i className="settingsPPIcon fa-solid fa-face-smile-beam" />
                    </div>
                    <div className="personalsWrapper">
                        <form className="personalsForm">
                            <div className="favGenreContainer">
                                <label>Favorite Genre:</label>
                                <input
                                    type="text" value={user.userFavGenre || "Tell us your favorite genre"}
                                    onChange={(event) => setUser({ ...user, userFavGenre: event.target.value })}
                                />
                            </div>
                            <div className="rankContainer">
                                <label>Top Five Books:</label>
                                <ol>
                                    <input type="text" value={top5Books[0] || "Title #1"} /> by <input type="text" value={top5Books[0] || "Author #1"} />
                                </ol>
                                <ol>
                                    <input type="text" value={top5Books[1] || "Title #2"} /> by <input type="text" value={top5Books[1] || "Author #2"} />
                                </ol>
                                <ol>
                                    <input type="text" value={top5Books[2] || "Title #3"} /> by <input type="text" value={top5Books[2] || "Author #3"} />
                                </ol>
                                <ol>
                                    <input type="text" value={top5Books[3] || "Title #4"} /> by <input type="text" value={top5Books[3] || "Author #4"} />
                                </ol>
                                <ol>
                                    <input type="text" value={top5Books[4] || "Title #5"} /> by <input type="text" value={top5Books[4] || "Author #5"} />
                                </ol>
                            </div>
                        </form>
                    </div>
                </div>

                <label>UserName</label>
                <input
                    type="text" value={user.userUN || "User#1234"}
                    onChange={(event) => setUser({ ...user, userUN: event.target.value })}
                />
                <button className="Submit" ><i className="settingsSubmit fa-regular fa-square-check"></i></button>
            </form>
        </div>
    )
}

export default Settings;