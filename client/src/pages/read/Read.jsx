import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./read.css"

const Read = () => {
  const {bookId } = useParams();

  const [EmbeddedViewer, setEmbeddedViewer] = useState(null);

  useEffect(() => {
    //Load Google Books Embedded Viewer API
    google.books.load();
    //Creates a new embedded viewer and loads the book from the parameters
    const viewer = new google.books.DefaultViewer(document.getElementById('embedded-viewer'));
    viewer.load(bookId);
    //Sets the state of the EmbeddedViewer
    setEmbeddedViewer(viewer);
  }, [bookId]);

  if (!EmbeddedViewer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="reader" id="embedded-viewer"></div>
    </div>
  );
};

export default Read;
