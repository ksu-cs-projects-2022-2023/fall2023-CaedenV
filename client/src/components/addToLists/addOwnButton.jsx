import React from "react";

const addOwnButton = ({ book }) => {
  const purchaseBook = () => {
    // Redirect the user to the Google Books website to purchase the book
    window.open(`https://books.google.com/books?id=${book.id}`, "_blank");
  };

  return (
    <button onClick={purchaseBook}>Buy</button>
  );
};

export default addOwnButton;