import "./review.css"

export default function Review() {
  return (
    <div className="review">
        <div className="reviewInfo">
            User Name
        </div>
        <span className="reviewTitle">
            adfdf asadff as asdf
            <i className="reviewIcon fa-solid fa-star-half-stroke"></i>
        </span>
        <hr/>
        <p className="revDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, 
            placeat! Sed, quos a nemo hic fuga velit consequatur numquam eos 
            molestias maxime error voluptates debitis. Esse repellat aliquam 
            mollitia eveniet. Sed, quos a nemo hic fuga velit consequatur numquam eos 
            molestias maxime.
        </p>
        <span className="reviewDate"> 1 hour ago</span>
    </div>
  )
}
