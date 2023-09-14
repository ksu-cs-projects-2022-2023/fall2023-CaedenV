import "./sidebar.css"
export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT</span>
            <p>
                This website was built in 2023 as a senior project to
                combine an eReader with a social media aspect of encouraging
                the reading community and sharing what you love about books. I
                hope you like it!
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CONTACT</span>
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
