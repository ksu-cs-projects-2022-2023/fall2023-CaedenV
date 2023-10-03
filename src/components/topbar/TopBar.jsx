import { Link } from "react-router-dom";
import "./topbar.css"
import Login from "../LoginBtns/Login";
import Logout from "../LoginBtns/Logout";
import { Component } from "react";

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            user: false,
        }
    }

    handler = (res) => {
        this.setState({
            info: {
                email: res.profileObj.email,
                last: res.profileObj.familyName,
                first: res.profileObj.givenName,
                id: res.profileObj.googleId,
                prof: res.profileObj.imageUrl,
                fullName: res.profileObj.name,
                login: true
            },
            user: true
        });
        console.log(this.state.user);
    }

    render() {
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
                        <li className="topListItem"> <Link className="link" to="/library" data={this.state.info}>LIBRARY</Link></li>
                        <li className="topListItem">
                            {this.state.user ? (<Logout />) : (
                                <li className="topListItem">
                                    <Login handler={this.handler} />
                                    
                                </li>)}
                        </li>

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
                        </li>
                    )
                    }
                    <input type="text" className="search" placeholder="Search.."></input>
                    <Link className="link" to="/store" ><i className="topSearchIcon fa-solid fa-magnifying-glass" /></Link>
                </div>
            </div>
        )
    }
}

export default TopBar;
