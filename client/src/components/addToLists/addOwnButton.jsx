import React from "react";
import axios from "axios";

const addOwnButton = ({ userId, bookId }) => {
  const [isOwned, setIsOwned] = useState(false);
  const purchaseBook = async () => {
    // Redirect the user to the Google Books website to purchase the book
    window.open(`https://books.google.com/books?id=${book.id}`, "_blank");

    const response = await axios.put(`/appUser/${userId}/owned-books`, {
      bookId,
    });

    if (response.status === 200) {
      setIsOwned(true);
    }
  };

  

  return (
    <button onClick={purchaseBook}>
      {isOwned ? "Buy" : "Owned"}
    </button>
  );
};

export default addOwnButton;