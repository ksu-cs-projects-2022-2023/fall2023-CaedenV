import React from 'react'
import "./searchArea.css"

const SearchArea = (props) => {
    const handleSearch = (e) => {
        props.searchBook(e.target.value, props.selectedSearchType);
    };

    return (
        <div className='SearchArea'>
            <select className='s type' id='type' value={props.selectedSearchType} onChange={(e) => props.setSelectedSearchType(e.target.value)}>
                <option value="rating">Rating</option>
                <option value="title">Book Title</option>
                <option value="author">Author</option>
                <option value="genre">Genre</option>
            </select>
            <form className="searchBar" onSubmit={handleSearch}>
                <input type="text" placeholder="Search" className="s Bar" onChange={handleSearch}/>
                <button type="submit" className="searchIcon"><i className="sIcon fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    )
}

export default SearchArea;
