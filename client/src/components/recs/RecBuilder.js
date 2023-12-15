import fs from 'fs';
import natural from 'natural';
// Load the CSV data into a string (replace 'your_book_data.csv' with your file)
const csvData = fs.readFileSync('GoodReads_Books.csv', 'utf8');

// Parse CSV data into an array of objects
const books = csvData
  .trim()
  .split('\n')
  .map(row => row.split(','))
  .map(([isbn, title, author, description, genre, rating]) => ({
    isbn,
    title,
    author,
    description,
    genre,
    rating
  }));

// Preprocess the text data (combine title, author, description, genre into one field)
books.forEach(book => {
  book.text = `${book.title} ${book.author} ${book.description} ${book.genre}`;
});

// Tokenize and stem the text data
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

books.forEach(book => {
  const tokens = tokenizer.tokenize(book.text);
  const stemmedTokens = tokens.map(token => stemmer.stem(token));
  book.tokens = stemmedTokens;
});

// Function to calculate Jaccard similarity
function jaccardSimilarity(set1, set2) {
  const intersection = new Set([...set1].filter(token => set2.has(token)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / union.size;
}

// Function to get book recommendations
function getRecommendations(inputBook) {
  const inputTokens = tokenizer.tokenize(inputBook.text);
  const inputStemmedTokens = inputTokens.map(token => stemmer.stem(token));

  const recommendations = books
    .filter(book => book !== inputBook)
    .map(book => ({
      isbn: book.isbn,
      similarity: jaccardSimilarity(new Set(inputStemmedTokens), new Set(book.tokens))
    }))
    .sort((a, b) => b.similarity - a.similarity)
    .map(entry => entry.isbn);

  return recommendations.slice(0, 10);
}

// Example usage
// const inputBook = {
//   title: 'The Catcher in the Rye',
//   author: 'J.D. Salinger',
//   description: 'A classic novel about the struggles of a teenage boy.',
//   genre: 'Fiction'
// };

// console.log('Recommended ISBNs:', recommendations);
export { getRecommendations };
