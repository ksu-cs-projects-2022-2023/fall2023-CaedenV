const express = require('express')
const router = express.Router()
const knex = require('knex');
const knexConfig = require('../knexfile');
const finalKnex = knex(knexConfig.development);

//GET Book all table data
router.get('/', async (req, res) => {
    const books = await finalKnex('Book')
        .select('*')
        .orderBy('BookTitle');

    res.json(books);
})

router.get('/:bookId', async (req, res) => {
    const bookId = req.params.bookId;
    const book = await finalKnex('Book')
        .select('*')
        .where('GoogleBookId', bookId)
    res.json(book); 
});


router.get('/:bookId/reviews', async (req, res) => {
    const bookId = req.params.bookId;
    const revs = await finalKnex('Reviews')
        .select('*')
        .where('GoogleBookId', bookId);

    res.json(revs);
});

//INSERT books into the table if not already there
router.post('/check-book', async (req, res) => {
    const {
        GoogleBookId,
        BookTitle,
        BookCoverLink,
        BookAuthor,
        BookGenre,
        BookDesc,
        BookAvgRating,
    } = req.body;

    //Checks if the book already exists in the database
    const bookExists = await finalKnex('Book').where('GoogleBookId', GoogleBookId).first();
    //If the book doesn't exist, add it.
    if (!bookExists) {
        await finalKnex('Book').insert([
            {
                GoogleBookId: GoogleBookId,
                BookTitle: BookTitle,
                BookCoverLink: BookCoverLink,
                BookAuthor: BookAuthor,
                BookGenre: BookGenre,
                BookDesc: BookDesc,
                BookAvgRating: BookAvgRating,
            }
        ]);

        // Return a success response.
        res.status(201).json({ message: 'Book created successfully.' });
    } else {
        // Return a conflict response.
        res.status(200).json({ message: 'Book already exists.' });
    }
})

router.post('/:bookId/insert-date', async (req, res) => {
    const bookId = req.params.bookId;
    const date = req.params.BookPubDate;
    await finalKnex('Book').insert([{ BookPubDate: date }]).where('GoogleBookId', bookId);

    res.status(201).json({ message: 'Date successfully added' });
})

router.post('/:bookId/reviews', async (req, res) => {
    const revTitle = req.body.title;
    const revText = req.body.text;
    const revRating = req.body.rating;
    const bookId = req.params.bookId;
    const userId = req.body.userId;

    await finalKnex('Reviews').insert([
        {
            GoogleBookId: bookId,
            ReviewTitle: revTitle,
            ReviewText: revText,
            ReviewUserId: userId,
            ReviewRating: revRating,
        }
    ], ['ReviewId']);

    res.status(201).json({ message: 'Review successfully added' });
})

module.exports = router;