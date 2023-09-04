import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
                WeReader
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/store" >STORE</Link></li>
                    <li className="topListItem"><Link className="link" to="/read/:bookId" >READ</Link></li>
                    <li className="topListItem"> <Link className="link" to="/library" >LIBRARY</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT" }
                        <Link className="link" to="/login" ></Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="settingsLink" to={"/settings"}>
                        <img
                        className="topProfile"
                        src="https://www.pinclipart.com/picdir/middle/169-1690579_book-icon-png-clip-art-transparent-download-book.png"
                        alt=""
                    />
                    </Link>
                    
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login" >LOGIN</Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register" >REGISTER</Link>
                        </li>
                    </ul>
                )
                }
                <input type="text" className="search" placeholder="Search.."></input>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
