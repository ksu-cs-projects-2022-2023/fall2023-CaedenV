import React from 'react'
import "./searchArea.css"

const SearchArea = (props) => {
    return (
        <div className='SearchArea'>
            <input type="text" id="genre" placeholder="genre" className="s Genre"/>
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
