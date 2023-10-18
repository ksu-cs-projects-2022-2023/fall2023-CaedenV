import React, { useState } from "react";

const addWishButton = ({ book }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const addToWishlist = async () => {
    // Add the book to the user's wishlist in the PostgreSQL database
    const response = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookId: book.id,
      }),
    });

    if (response.ok) {
      setIsWishlisted(true);
    } else {
      // Handle error
    }
  };

  return (
    <button onClick={addToWishlist} disabled={isWishlisted}>
      <i className="singleIcons fa-solid fa-list"></i>
    </button>
  );
};

export default addWishButton;
