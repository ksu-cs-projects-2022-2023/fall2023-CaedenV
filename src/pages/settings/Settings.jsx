import "./settings.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <Popup trigger=
                        {<button className="friends">Friends</button>}
                        position="bottom center">
                        <ul className="friendList">
                            <li className="f 1">Friend</li>
                            <li className="f 2">Friend</li>
                            <li className="f 3">Friend</li>
                            <li className="f 4">Friend</li>
                            <li className="f 5">Friend</li>
                            <li className="f 6">Friend</li>
                        </ul>
                        <Popup trigger={<button className="addF">Add Friend</button>}
                            modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className="enterName">
                                            <label className="enterLbl">Enter Username:</label>
                                            <input type="text" className="fName" />
                                        </div>
                                        <label className="found">Friend added!</label>
                                    </div>
                                )
                            }
                        </Popup>

                    </Popup>

                    <span className="settingsDelTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="topCategory">
                        <div className="settingsProfPic">
                            <img className="topProfile"
                                src="https://www.pinclipart.com/picdir/middle/169-1690579_book-icon-png-clip-art-transparent-download-book.png"
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-solid fa-face-smile-beam"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                        <div className="personalsWrapper">
                            <form className="personalsForm">
                                <div className="favGenreContainer">
                                    <label>Favorite Genre:</label>
                                    <input type="text" placeholder="Romace" className="FavGenre" />
                                </div>
                                <div className="rankContainer">
                                    <label>Top Five Books:</label>
                                    <ol className="topFive">
                                        <li>1.<input type="text" className="rank 1" /></li>
                                        <li>2.<input type="text" className="rank 2" /></li>
                                        <li>3.<input type="text" className="rank 3" /></li>
                                        <li>4.<input type="text" className="rank 4" /></li>
                                        <li>5.<input type="text" className="rank 5" /></li>
                                    </ol>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="accountInfo">

                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Reader#429" className="userName" />
                </form>

            </div>


            <i className="settingsSubmit fa-regular fa-square-check"></i>
        </div>
    )
}
