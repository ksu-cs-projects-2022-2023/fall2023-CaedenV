import "./book.css"

export default function Book() {
  return (
    <div className="book">
        <img
            className="bookCover"
            src="https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0" 
            alt="Book Cover" 
        />
        <div className="bookInfo">
            <div className="bookGenre">
                <span className="bookGenre">Sci-Fi</span>
                <span className="bookGenre">Romance</span>
                <span className="bookGenre">Young Adult</span>
            </div>
            <span className="bookTitle">Book Title</span>
            <span className="Pub_Auth"> Abe Lincoln | Aug 12, 2012</span>
            <div className="iconContainer">
              <span className="ratingNum">3.4</span>
              <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
              <i className="singleLen fa-solid fa-scroll"></i>
              <button className="buy">Buy</button>
            </div>
            
        </div>
    </div>
  )
}
