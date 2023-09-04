import "./libBooks.css"

export default function Libs() {
  return (
    <div className="libBooks">
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
        <div className="detContainer">
          <span className="singleAuthor">Author: <b>Abe Lincoln </b></span>
          <span className="split">|</span>
          <span className="singlePub">Aug 16, 2012</span>
        </div>
        <div className="iconContainer">
          <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
          <i className="singleLen fa-solid fa-scroll"></i>
          <button className="buy">Buy</button>
        </div>
        <span className="bookDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          officiis veritatis magnam provident dolores, recusandae sint laboriosam
          est sequi saepe placeat sit sunt ad praesentium odio. Corporis
          voluptatem veniam repellat! Quaerat, officiis veritatis magnam
          provident dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Fuga et voluptas ut sequi dolorum quo odit iure optio quaerat
          non. Nesciunt nemo in ratione. Beatae rerum illo officia facilis
          praesentium.
        </span>
      </div>
    </div>
  )
}
