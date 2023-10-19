import LibBooks from "../../components/bookWithDesc/LibBooks"
import SideBar from "../../components/sidebar/SideBar"
import "./home.css"

export default function Home() {
  return (
    <>
      <div className="home">
        <h1 className="Welcome">Welcome to WeReader</h1>
        <div className="recsOverall">
          <h2>Genre1 books you may enjoy:</h2>
          <div className="rec genre1">
            <ul className="genre1">
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
            </ul>
          </div>

          <h2>Genre2 books you may enjoy:</h2>
          <div className="rec genre2">
            <ul className="genre2">
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook /></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Genre3 books you may enjoy:</h2>
          <div className="rec genre3">
            <ul className="genre3">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Because you read Book1:</h2>
          <div className="rec because1">
            <ul className="bec1">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Because you read Book2:</h2>
          <div className="rec because2">
            <ul className="bec2">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>
          <h2>Because you read Book3:</h2>
          <div className="rec because3">
            <ul className="bec3">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Because you enjoyed Author1:</h2>
          <div className="rec auth1">
            <ul className="auth1">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Because you enjoyed Author2:</h2>
          <div className="rec auth2">
            <ul className="auth2">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>

          <h2>Because you enjoyed Author3:</h2>
          <div className="rec auth3">
            <ul className="auth3">
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
              <li className="recBook"><LibBook/></li>
            </ul>
          </div>
        </div>
        <SideBar />
      </div>
    </>
  )
}
