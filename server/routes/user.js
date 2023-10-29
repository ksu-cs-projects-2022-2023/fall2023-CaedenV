const express = require('express')
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

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await knex('appUser')
        .select('*')
        .where('userId', userId)
    res.json(user);
});

router.get('/:userId/curr-read', async (req, res) => {
    const userId = req.params.userId;
    const curr = await knex('appUser')
        .select('userCurrOwnRead')
        .where('userId',userId)
    res.json(curr);
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

router.get('/user/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;

    const top5Books = await knex('Top5Books')
        .where('userId', userId)
        .first();

    res.json(top5Books);
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
            userUN,
        })
        .where('userId', userId);

    res.json({ message: 'User Pic, Genre, UserName updated successfully' });
});

router.put('/user/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;
    const { top5Books } = req.body;

    await knex('Top5Books')
        .update({
            Book1Id: top5Books[0],
            Book2Id: top5Books[1],
            Book3Id: top5Books[2],
            Book4Id: top5Books[3],
            Book5Id: top5Books[4],
        })
        .where('userId', userId);

    res.json({ message: 'Top 5 updated successfully' });
});

// INSERTS and DELETES rows existing tables
router.post('/', async (req, res) => {
    const userId = await createUser(req.body.name, req.body.email);
})

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

router.delete('/user/:userId/friends-list/:friendId', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    await knex('UserFriends')
        .where('userId', userId)
        .where('friendId', friendId)
        .delete();

    res.json({ message: 'Friend removed successfully' });
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
        const [userId] = await knex('appUser').insert({
            name,
            email,
            joinedAt,
            userLoggedIn,
        }).returning('userId');

        // Return a success response.
        res.status(201).json({ message: 'User created successfully.', userId });
    } else {
        // Return a conflict response.
        res.status(200).json({ message: 'User already exists.', userId: user.userId });
    }
}

module.exports = createUser;
module.exports = router;