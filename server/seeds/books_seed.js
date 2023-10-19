/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const axios = require('axios');
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=fantasy');

  // Get the data from the Google Books API response.
  const books = response.data.items;
  // Format the data from the Google Books API
  const formattedData = [];
  for (const book of books) {
    formattedData.push({
      GoogleBookId: book.volumeId,
      BookTitle: book.title,
      BookAuthor: book.authors[0],
      BookPubDate: book.publishedDate,
      BookGenre: book.categories[0],
      BookDesc: book.description,
      BookAvgRating: book.averageRating,
    });
  }

  // Insert the data from the Google Books API into your table.
  await knex('Book').insert(formattedData);
};
