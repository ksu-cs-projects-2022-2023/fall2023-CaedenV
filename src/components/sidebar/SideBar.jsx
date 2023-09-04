import "./sidebar.css"
export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <p>
                asdf asd ffas dfkjah hsdkljdfh klasjhdfjk hasskjghsakjghsakjlh.
                asdfgasjdf asdfasdf sadf asdfasdf.
            </p>
        </div>
        
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">A</li>
                <li className="sidebarListItem">A</li>
                <li className="sidebarListItem">A</li>
                <li className="sidebarListItem">A</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW THE PROGRESS</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-goodreads-g"></i>
            </div>
        </div>
    </div>
    
  )
}
