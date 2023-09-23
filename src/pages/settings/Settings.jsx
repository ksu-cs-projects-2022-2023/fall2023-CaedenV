import "./settings.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from "react";
import axios from "axios";

export default function Settings() {
    
    const[inputs,setInputs] = useState({})
    const handleChange = (e) => {
        const name = e.target.className;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs);
        console.log(inputs);
    }
    
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
                <form className="settingsForm" onSubmit={handleSubmit}>
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
                            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleChange}/>
                        </div>
                        <div className="personalsWrapper">
                            <form className="personalsForm">
                                <div className="favGenreContainer">
                                    <label>Favorite Genre:</label>
                                    <input type="text" placeholder="Romance" className="FavGenre" onChange={handleChange}/>
                                </div>
                                <div className="rankContainer">
                                    <label>Top Five Books:</label>
                                    <ol className="topFive">
                                        <li>1.<input type="text" className="rank 1" onChange={handleChange}/></li>
                                        <li>2.<input type="text" className="rank 2" onChange={handleChange}/></li>
                                        <li>3.<input type="text" className="rank 3" onChange={handleChange}/></li>
                                        <li>4.<input type="text" className="rank 4" onChange={handleChange}/></li>
                                        <li>5.<input type="text" className="rank 5" onChange={handleChange}/></li>
                                    </ol>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="accountInfo">

                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Reader#429" className="userName" onChange={handleChange}/>

                    <button className="Submit" ><i className="settingsSubmit fa-regular fa-square-check"></i></button>
                </form>

            </div>

            
            
        </div>
    )
}
