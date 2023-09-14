import React from 'react'
import "./searchListResults.css"
import LibBooks from '../bookWithDesc/LibBooks'
import request from 'superagent';
import { Component } from "react"

class SearchListResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            results: []
        }
    }

    findSingle = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes/" + this.info.id + "?projection=lite&key=AIzaSyD2we9fItQNmaJdL0YiIT2PGlweOFdOhNg")
            .then((data) => {
                this.setState({ info: [...data.body.items] })
            })

    }
    render() {
        return (
            <div className='resultsList'>
                {
                    this.results.map((book, i) => {
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

                            findSingle={this.findSingle}
                        />
                    })
                }
            </div>
        )
    }

}

export default SearchListResults;
