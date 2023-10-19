const express = require('express')
const axios = require("axios")
const router = express.Router()
const knex = require('knex');
const knexConfig = require('./knexfile');
const knex = knex(knexConfig);

//GET appUser table data
router.get('/', async (req, res) => {
    const users = await knex('appUser')
        .select('*')
        .orderBy('userJoinedAt');

    res.json(users);
});

router.get('/:userId/owned-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await knex('OwnedBooks')
        .select('*')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await knex('WishedBooks')
        .select('*')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await knex('books')
        .select('*')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;

    const users = await knex('UserFriends')
        .select('*')
        .where('userId', userId);

    res.json(users);
});


//UPDATE appUser table data
router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;

    await knex('appUser')
        .update({
            userPicLink,
            userFavGenre,
        })
        .where('userId', userId);

    res.json({ message: 'User Pic & Genre updated successfully' });
});

router.put('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;

    await knex('Top5Books')
        .update({
            GoogleBookId,
            Priority,
        })
    where('userId', userId);
    res.json({ message: 'Top 5 updated successfully' });
});

// INSERTS into existing tables
router.put('/:userId/owned-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    // Insert a new row into the owned_books table
    await knex('OwnedBooks')
        .insert({
            userId: userId,
            GoogleBookId: bookId,
        });

    res.json({ message: 'Owned books list updated successfully' });
});

router.put('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    // Insert a new row into the wish_listed_books table
    await knex('WishedBooks')
        .insert({
            userId: userId,
            GoogleBookId: bookId,
        });

    res.json({ message: 'Wish-listed books list updated successfully' });
});

router.put('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    await knex('UserFriends')
        .insert({
            userId: userId,
            friendId: friendId,
        });
    res.json({ message: 'Friends list updated successfully' });
});

async function createUser(req, res) {
    // Get the user's name and email from the request body.
    const name = req.body.name;
    const email = req.body.email;
    const joinedAt = Date.now();
    const userLoggedIn = true;

    // Check if the user exists in the table.
    const user = await knex('appUser').where('email', email).first();

    // If the user doesn't exist, create a new user.
    if (!user) {
        await knex('appUser').insert({
            name,
            email,
            joinedAt,
            userLoggedIn,
        });
    }

    // Return a success response.
    res.status(201).json({ message: 'User created successfully.' });
}

module.exports = createUser;
module.exports = router;