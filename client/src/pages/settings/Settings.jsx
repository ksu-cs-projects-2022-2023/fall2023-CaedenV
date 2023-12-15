import "./settings.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Settings = ({ backend, userId }) => {

    const [user, setUser] = useState(null);
    const inputRef = useRef(null);
    const [friends, setFriends] = useState([]);
    const go = `${backend}/user/${userId}`;

    useEffect(() => {
        async function GetAllInfo() {
            axios.get(go, { userId: userId })
                .then((response) => {
                    setUser(response.data[0]);
                });
            axios.get(go + `/friends-list`, { userId: userId })
                .then((response) => {
                    setFriends(response.data.friends);
                });
        }

        GetAllInfo();
    }, [userId]);

    const handleAddFriend = (event) => {
        event.preventDefault();
        const friendId = event.target.value;
        axios.post(go + `/friends-list`, { userId: userId, friendId: friendId })
            .then((response) => {
                
                setFriends(response.data.friends);
            });
    };
    const handleRemoveFriend = (friendId, userId) => {
        axios.delete(go + `/friends-list/` + friendId, { friendId: friendId, userId: userId })
            .then((response) => {
                setFriends(response.data.friends);
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
        axios.put(go, { userInfo: user });
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
                            <li key={friend.friendId}>
                                {friend.friendId}
                                <button onClick={() => handleRemoveFriend(friend.friendId, user.userId)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <Popup trigger={<button className="addF" >Add Friend</button>}
                        modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div className="enterName">
                                        <label className="enterLbl">Enter Username:</label>
                                        <input type="text" className="fName" placeholder="Friend ID" onChange={handleAddFriend}/>
                                    </div>
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
                            <label>UserName</label>
                            <input
                                type="text" value={user.userUN || "User#1234"}
                                onChange={(event) => setUser({ ...user, userUN: event.target.value })}
                            />
                        </form>
                    </div>
                </div>


                <button className="Submit" ><i className="settingsSubmit fa-regular fa-square-check"></i></button>
            </form>
        </div>
    )
}

export default Settings;