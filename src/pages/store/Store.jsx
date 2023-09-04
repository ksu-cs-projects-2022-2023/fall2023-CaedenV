import "./store.css"
import LibBooks from "../../components/bookWithDesc/LibBooks"

export default function Store() {
  return (
    <div className="store">
      <label className="pageLabel">Store</label>
      <div className="sParameters">
        
        <select name="genre" id="genre" className="s Genre" placeholder="Genre">
          <optgroup label="Fiction">
            <option value="rom">Romance</option>
            <option value="scifan">Sci-Fi/Fantasy</option>
            <option value="myst">Mystery</option>
            <option value="thr">Thriller</option>
            <option value="ya">Young Adult</option>
            <option value="hor">Horror</option>
          </optgroup>
          <optgroup label="Nonfiction">
            <option value="mem">Memoir</option>
            <option value="self">Self-Help</option>
            <option value="rel">Religion/Spirituality</option>
            <option value="cult">Culture</option>
            <option value="hist">History</option>
            <option value="bio">Biography</option>
          </optgroup>
        </select>
        <select name="rate" id="rate" className="s Rate">
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
        <form className="searchBar">
          <input type="text" placeholder="Search" className="s Bar" />
          <button type="submit" className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>

      <div className="results">
        <label>Here's what we found for X:</label>
        <ul className="found">
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        <LibBooks />
        </ul>
      </div>
    </div>
  )
}
