import LibBook from "../../components/bookWithDesc/LibBooks"
import SideBar from "../../components/sidebar/SideBar"
import { useParams } from "react-router-dom";
import "./home.css"

export default function Home(backend) {
  return (
      <div className="home">
        <h1 className="Welcome">Welcome to WeReader</h1>
        <div className="recsOverall">
          <h2>Genre books you may enjoy:</h2>
          <div className="rec genre1">
            <ul className="genre1">
              <li className="recBook"><LibBook /></li>
              
            </ul>
          </div>

          <h2>FavBook1 books you may enjoy:</h2>
          <div className="rec genre2">
            <ul className="genre2">
              <li className="recBook"><LibBook /></li>
              
            </ul>
          </div>

          <h2>FavBook2 books you may enjoy:</h2>
          <div className="rec genre3">
            <ul className="genre3">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>

          <h2>Because you read Book1:</h2>
          <div className="rec because1">
            <ul className="bec1">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>

          <h2>Because you read Book2:</h2>
          <div className="rec because2">
            <ul className="bec2">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>
          <h2>Because you read Book3:</h2>
          <div className="rec because3">
            <ul className="bec3">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>

          <h2>Because you enjoyed Author1:</h2>
          <div className="rec auth1">
            <ul className="auth1">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>

          <h2>Because you enjoyed Author2:</h2>
          <div className="rec auth2">
            <ul className="auth2">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>

          <h2>Because you enjoyed Author3:</h2>
          <div className="rec auth3">
            <ul className="auth3">
              <li className="recBook"><LibBook/></li>
              
            </ul>
          </div>
        </div>
        <SideBar />
      </div>
  )
}
