import { Link } from "react-router-dom";
import "./topbar.css"
import LoginButton from "../LoginBtns/LoginBtn";
import { useEffect, useState } from "react";
import axios from "axios";


const TopBar = ({ userId, updateUserId }) => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        async function userIcon() {
            if (userId != null) {
                console.log(userId);
                const response = await axios.get(`http://localhost:8000/user/${userId}`);
                const data = response.data;
                console.log(data);
                setUserInfo(data[0]);
            }
        }

        userIcon();
    }, [userId]);
    const currReadId = userInfo.userCurrRead;
    const homeLink = userId ? `${userId}/home` : ``;
    const storeLink = userId ? `${userId}/store` : ``;
    const readLink = userId ? `${userId}/read/${currReadId}` : ``;
    const libraryLink = userId ? `${userId}/library` : ``;
    const settingsLink = `${userId}/settings`;

    return (
        <div className='top'>
            <div className="topLeft">
                WeReader
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to={homeLink} >HOME</Link></li>
                    <li className="topListItem"><Link className="link" to={storeLink} >STORE</Link></li>
                    <li className="topListItem"><Link className="link" to={readLink} >READ</Link></li>
                    <li className="topListItem"><Link className="link" to={libraryLink} >LIBRARY</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {userId ? (
                    <>
                        <Link className="settingsLink" to={settingsLink} >
                            <img
                                className="topProfile"
                                src={userInfo.userPicLink}
                                alt=""
                            />
                        </Link>
                        <label className="Name"> {userInfo.userName}</label>

                    </>
                ) : (
                    <li className="topListItem">
                        <LoginButton userId={userId} updateUserId={updateUserId} />

                    </li>
                )
                }
            </div>
        </div>
    )
}

export default TopBar;
