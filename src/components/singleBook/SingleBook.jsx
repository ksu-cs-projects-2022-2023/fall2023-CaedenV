import "./singleBook.css"

export default function SingleBook() {
    return (
        <div className="singleBook">
            <div className="singleBookWrapper">

                <span className="bookCoverTitle">
                    <img src="https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0"
                        alt="Book Cover"
                        className="singleBookCover"
                    />
                    <span className="bookDetails">
                        <h1 className="singleBookTitle"> Book Title
                            <div className="singleBookOpt">
                            <button className="buy">Buy</button>
                                <i className="singleIcons fa-solid fa-list"></i>
                                <i className="singleIcons fa-solid fa-share"></i>
                            </div>
                        </h1>
                        <div className="singleBookInfo">
                            <span className="singleAuthor">Author: <b>Abe Lincoln </b></span>
                            <span className="split">|</span>
                            <span className="singlePub">Aug 16, 2012</span>
                            <span className="split">|</span>
                            <i className="singleLen fa-solid fa-scroll"></i>
                            <span className="split">|</span>
                            <span className="ratingNum">3.4</span>
                            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p className="singleBookDesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            ducimus, ullam cupiditate similique dolore quas blanditiis quo
                            doloremque molestias dolorum placeat fugiat recusandae neque
                            maxime deleniti minima dolores odit veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            ducimus, ullam cupiditate similique dolore quas blanditiis quo
                            doloremque molestias dolorum placeat fugiat recusandae neque
                            maxime deleniti minima dolores odit veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            ducimus, ullam cupiditate similique dolore quas blanditiis quo
                            doloremque molestias dolorum placeat fugiat recusandae neque
                            maxime deleniti minima dolores odit veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                            ducimus, ullam cupiditate similique dolore quas blanditiis quo
                            doloremque molestias dolorum placeat fugiat recusandae neque
                            maxime deleniti minima dolores odit veritatis.
                        </p>
                    </span>
                </span>
            </div>
        </div>
    )
}
