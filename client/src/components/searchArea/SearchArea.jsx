import React from 'react'
import "./searchArea.css"

const SearchArea = (props) => {
    return (
        <div className='SearchArea'>
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
                <option value="5">4-5 Stars</option>
                <option value="4">3-4 Stars</option>
                <option value="3">2-3 Stars</option>
                <option value="2">1-2 Stars</option>
                <option value="1">0-1 Star</option>
            </select>
            <form className="searchBar" onSubmit={props.searchBook}>
                <input type="text" placeholder="Search" className="s Bar" onChange={props.handleSearch}/>
                <button type="submit" className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default SearchArea;
