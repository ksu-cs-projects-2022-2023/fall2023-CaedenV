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

module.exports = router;