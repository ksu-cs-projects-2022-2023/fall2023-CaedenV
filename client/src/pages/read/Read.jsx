import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EmbeddedViewer } from "@google/books-js";
import "./read.css"

const Read = () => {
  const params = useParams();
  const bookId = params.bookId;

  const [bookMetadata, setBookMetadata] = useState(null);

  useEffect(() => {
    // Fetch the book's metadata from the Google Books API.
    const fetchBookMetadata = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const data = await response.json();
      setBookMetadata(data);
    };
 
    fetchBookMetadata();
  }, [bookId]);

  if (!bookMetadata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EmbeddedViewer bookId={bookId} />
    </div>
  );
};

export default Read;
