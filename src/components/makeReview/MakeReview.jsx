import "./makeReview.css"

export default function makeReview() {
    return (
        <div className="make">
            <form className="makeReview">
                <div className="makeRevGrp">
                    <div className="userName">
                        User Name
                    </div>
                    <input type="text" placeholder="How about a title?" className="revInput" autoFocus={true} />
                    <input type="int" placeholder="3" className="numStars"/>
                    <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
                    <hr />
                </div>
                <div className="makeRevGrp">
                    <textarea placeholder="How was it? Let us know in more detail..." type="text" className="revInput revText"></textarea>
                </div>
                <i class="revSubmit Icon fa-solid fa-pen-nib"></i>
            </form>
        </div>
    )
}
