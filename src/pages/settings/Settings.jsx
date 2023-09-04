import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Account</span>
                    <button className="friends">Friends</button>
                    <span className="settingsDelTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
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
                    <div className="accountInfo">
                        
                    </div>
                    <label>UserName</label>
                        <input type="text" placeholder="Reader#429" className="userName"/>
                        <label>Email</label>
                        <input type="email" placeholder="reader@example.com" className="userEmail"/>
                        <label>Password</label>
                        <input type="password" className="userPass"/>
                </form>

            </div>

            <div className="personalsWrapper">
                <form className="personalsForm">
                    <div className="favGenreContainer">
                        <label>Favorite Genre:</label>
                        <select name="genre" id="genre" className="genre">
                            <optgroup label="Fiction">
                                <option value="rom">Romance</option>
                                <option value="scifan">Sci-Fi/Fantasy</option>
                                <option value="myst">Mystery</option>
                                <option value="thr">Thriller</option>
                                <option value="ya">Young Adult</option>
                                <option value="hor">Horror</option>
                            </optgroup>
                            <optgroup label="Nonfiction">
                                <option value="mem">Memoir</option>
                                <option value="self">Self-Help</option>
                                <option value="rel">Religion/Spirituality</option>
                                <option value="cult">Culture</option>
                                <option value="hist">History</option>
                                <option value="bio">Biography</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="rankContainer">
                        <label>Top Five Books:</label>
                        <ol className="topFive">
                            <li><input type="text" className="rank 1" /></li>
                            <li><input type="text" className="rank 2" /></li>
                            <li><input type="text" className="rank 3" /></li>
                            <li><input type="text" className="rank 4" /></li>
                            <li><input type="text" className="rank 5" /></li>
                        </ol>
                    </div>
                </form>
            </div>
            <i className="settingsSubmit fa-regular fa-square-check"></i>
        </div>
    )
}
