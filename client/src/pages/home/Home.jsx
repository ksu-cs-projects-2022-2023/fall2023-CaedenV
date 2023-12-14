import LibBook from "../../components/bookWithDesc/LibBooks";
import { getRecommendations } from '../../components/recs/RecBuilder';
import SideBar from "../../components/sidebar/SideBar"
import axios from "axios";
import { useState, useEffect } from "react";
import "./home.css"

const Home = ({backend, userId}) => {
  const [user, setUser] = useState({});
  const [top5, setTop5] = useState([]);
  const [ownedBooks, setOwnedBooks] = useState([]);


  const FetchData = async () => {
    axios.get(`${backend}/user/${userId}`)
      .then((response) => {
        setUser(response.data[0]);
      }
      );
    axios.get(`${backend}/user/${userId}/owned-books`)
      .then((response) => {
        setOwnedBooks(response.data[0]);
      }
      );
    axios.get(`${backend}/user/${userId}/top-5-fav-books`)
      .then((response) => {
        setTop5(response.data[0]);
      });
  }

  useEffect(() => {
    FetchData();
  }, [userId]);

  return (
    <div className="home">
      <h1 className="Welcome">Welcome to WeReader</h1>
      <div className="recsOverall">
        <h2>{user.userFavGenre} books you may enjoy:</h2>
        <div className="rec genre1">
          <ul className="genre1">

          </ul>
        </div>
        {top5 ? (
          <div className="top5">
            <h2>FavBook1 books you may enjoy:</h2>
            <ul className="genre2">
            </ul>
            <h2>FavBook2 books you may enjoy:</h2>
            <ul className="genre3">
            </ul>
          </div>
        ) : (<label>Look for your favorites in the Store.</label>)}

        {ownedBooks ? (
          <div className="owned">
            <h2>Because you read Book1:</h2>
            <ul className="bec1">
            </ul>
            <h2>Because you read Book2:</h2>
            <ul className="bec2">
            </ul>
            <h2>Because you read Book3:</h2>
            <ul className="bec3">
            </ul>
          </div>
        ) : (<label></label>)}

        <h2>Because you enjoyed Author1:</h2>
        <div className="rec auth1">
          <ul className="auth1">
          </ul>
        </div>

        <h2>Because you enjoyed Author2:</h2>
        <div className="rec auth2">
          <ul className="auth2">
          </ul>
        </div>

        <h2>Because you enjoyed Author3:</h2>
        <div className="rec auth3">
          <ul className="auth3">
          </ul>
        </div>
      </div>
      <SideBar />
    </div>
  )
}

export default Home;
