import { Link } from "react-router-dom";
import "./topbar.css"
import { useContext } from "react";
import { UserContext } from './context';
import LoginButton from "../LoginBtns/LoginBtn";


const TopBar = () => {
    const userId = useContext(UserContext);

    return (
        <div className='top'>
            <div className="topLeft">
                WeReader
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/" data={this.state.info}>HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/store" data={this.state.info}>STORE</Link></li>
                    <li className="topListItem"><Link className="link" to="/read/:bookId" >READ</Link></li>
                    <li className="topListItem"> <Link className="link" to="/:userId/library" data={this.state.info}>LIBRARY</Link></li>
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
                        <LoginButton />
                        
                    </li>
                )
                }
                <input type="text" className="search" placeholder="Search.."></input>
                <Link className="link" to="/store" ><i className="topSearchIcon fa-solid fa-magnifying-glass" /></Link>
            </div>
        </div>
    )
}

export default TopBar;
