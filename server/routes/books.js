const express = require('express')
const axios = require("axios")
const router = express.Router()
const knex = require('knex');
const knexConfig = require('./knexfile');
const knex = knex(knexConfig);

//GET Book all table data
router.get('/', async (req, res) => {
    const books = await knex('Book')
        .select('*')
        .orderBy('BookTitle');

    res.json(books);
})

router.get('/:bookId/reviews', async (req, res) => {
    const bookId = req.params.GoogleBookId;
    const revs = await knex('Reviews')
        .select('*')
        .where('GoogleBookId', bookId);

    res.json(revs);
});

//INSERT books into the table if not already there
router.post('/', async (req, res) => {
    const {
        GoogleBookId,
        BookTitle,
        BookCoverLink,
        BookAuthor,
        BookPubDate,
        BookGenre,
        BookDesc,
        BookAvgRating,
    } = req.body;

    const bookExists = await knex('Book').where('GoogleBookId', GoogleBookId).exists();

    if (!bookExists) {
        await knex('Book').insert({
            GoogleBookId,
            BookTitle,
            BookCoverLink,
            BookAuthor,
            BookPubDate,
            BookGenre,
            BookDesc,
            BookAvgRating,
        })

        // Return a success response.
        res.status(201).json({ message: 'Book created successfully.' });
    } else {
        // Return a conflict response.
        res.status(200).json({ message: 'Book already exists.' });
    }
})

module.exports = router;