import React from 'react'
import "./searchListResults.css"
import LibBooks from '../bookWithDesc/LibBooks'

const SearchListResults = (props) => {
    return (
        <div className='resultsList'>
            {
                props.results.map((book, i) => {
                    return <LibBooks
                        miniCover={book.volumeInfo.imageLinks.smallThumbnail}
                        fullCover={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        pubDate={book.volumeInfo.publishedDate}
                        auth={book.volumeInfo.authors}
                        avgRate={book.volumeInfo.averageRating}
                        genres={book.volumeInfo.categories}
                        desc={book.volumeInfo.description}
                        id={book.id}
                        key={i}
                    />
                })
            }
        </div>
    )
}

export default SearchListResults;
