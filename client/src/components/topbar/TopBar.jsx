import { Link } from "react-router-dom";
import "./topbar.css"
import LoginButton from "../LoginBtns/LoginBtn";


const TopBar = ({userId, updateUserId }) => {
    const bookId = 0;
    return (
        <div className='top'>
            <div className="topLeft">
                WeReader
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to={`/user/${userId}/home`} data={this.state.info}>HOME</Link></li>
                    <li className="topListItem"><Link className="link" to={`/user/${userId}/store`} data={this.state.info}>STORE</Link></li>
                    <li className="topListItem"><Link className="link" to={`/${userId}/read/${bookId}`} >READ</Link></li>
                    <li className="topListItem"> <Link className="link" to={`/user/${userId}/library`} data={this.state.info}>LIBRARY</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {this.state.user ? (
                    <>
                        <Link className="settingsLink" to={"/settings"} > 
                            <img
                                className="topProfile"
                                src={this.state.info.prof}
                                alt=""
                            />
                        </Link>
                        <label className="Name"> {this.state.info.first}</label>

                    </>
                ) : (
                    <li className="topListItem">
                        <LoginButton userId={userId}/>
                        
                    </li>
                )
                }
            </div>
        </div>
    )
}

export default TopBar;
