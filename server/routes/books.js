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

router.put('/:bookId/avgRating', async (req, res) => {
    const bookId = req.params.bookId;
    const newAvg = req.body.newAvg;

    await finalKnex('Book')
        .where('GoogleBookId', bookId)
        .update({
            BookAvgRating: newAvg
        });

        res.json({ message: 'Book average rating updated' });
})

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
    try {
        const revTitle = req.body.title;
        const revText = req.body.text;
        const revRating = req.body.rating;
        const userId = req.body.userId;

        await finalKnex('Reviews').insert([
            {
                GoogleBookId: req.params.bookId,
                ReviewTitle: revTitle,
                ReviewText: revText,
                ReviewUserId: userId,
                ReviewRating: revRating,
            }
        ], ['ReviewId']);

        const oldRevs = await finalKnex('Reviews')
            .count('ReviewId')
            .where('GoogleBookId', req.params.bookId);
        var oldAvg = await finalKnex('Book')
            .select('BookAvgRating')
            .where('GoogleBookId', req.params.bookId);
        // var newAvg = revRating;
        // if (oldAvg) {
        //     newAvg = (oldAvg + revRating) / numRevs;
        // }

        //await finalKnex('Book').where('GoogleBookId', req.params.bookId).update({ BookAvgRating: newAvg });

        res.status(201).json({ message: 'Review successfully added. Avg Rating updated', numRevs: oldRevs || 0, oldAvg: oldAvg });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
    
})

module.exports = router;