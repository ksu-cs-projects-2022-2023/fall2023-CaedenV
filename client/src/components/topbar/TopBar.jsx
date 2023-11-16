import { Link } from "react-router-dom";
import "./topbar.css"
import LoginButton from "../LoginBtns/LoginBtn";
import { useEffect, useState } from "react";
import axios from "axios";


const TopBar = ({ userId, updateUserId }) => {
    const bookId = 0;
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        async function userIcon() {
            const response = await axios.get(`http://project-server:8000/user/${userId}`);
            const data = response.data;

            setUserInfo(data);
        }

        userIcon();
    }, [userId]);

    const {userName, userPicLink} = userInfo; 

    return (
        <div className='top'>
            <div className="topLeft">
                WeReader
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to={`${userId}/home`} >HOME</Link></li>
                    <li className="topListItem"><Link className="link" to={`${userId}/store`} >STORE</Link></li>
                    <li className="topListItem"><Link className="link" to={`/${userId}/read/${bookId}`} >READ</Link></li>
                    <li className="topListItem"> <Link className="link" to={`${userId}/library`} >LIBRARY</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {userId ? (
                    <>
                        <Link className="settingsLink" to={"/settings"} >
                            <img
                                className="topProfile"
                                src={userPicLink}
                                alt=""
                            />
                        </Link>
                        <label className="Name"> {userName}</label>

                    </>
                ) : (
                    <li className="topListItem">
                        <LoginButton userId={userId} />

                    </li>
                )
                }
            </div>
        </div>
    )
}

export default TopBar;
