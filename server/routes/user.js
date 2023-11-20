const express = require('express')
const router = express.Router()
const knex = require('knex');
const knexConfig = require('./knexfile');
const finalKnex = knex(knexConfig);

//GET appUser table data
router.get('/', async (req, res) => {
    const users = await finalKnex('appUser')
        .select('*')
        .orderBy('userJoinedAt');

    res.json(users);
});

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await finalKnex('appUser')
        .select('*')
        .where('userId', userId)
    res.json(user);
});

router.get('/:userId/curr-read', async (req, res) => {
    const userId = req.params.userId;
    const curr = await finalKnex('appUser')
        .select('userCurrOwnRead')
        .where('userId',userId)
    res.json(curr);
});

router.get('/:userId/owned-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await finalKnex('OwnedBooks')
        .select('*')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await finalKnex('WishedBooks')
        .select('*')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;

    const top5Books = await finalKnex('Top5Books')
        .where('userId', userId)
        .first();

    res.json(top5Books);
});

router.get('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;

    const users = await finalKnex('UserFriends')
        .select('*')
        .where('userId', userId);

    res.json(users);
});


//UPDATE appUser table data
router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;

    await finalKnex('appUser')
        .update({
            userPicLink,
            userFavGenre,
            userUN,
        })
        .where('userId', userId);

    res.json({ message: 'User Pic, Genre, UserName updated successfully' });
});

router.put('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;
    const { top5Books } = req.body;

    await finalKnex('Top5Books')
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
router.post('/create', async (req, res) => {
    console.log(req.body.name + ": " + req.body.email);
    const response = await createUser(req.body.name, req.body.email);
    const userId = response.data.userId
    res.json({message: 'createUser called successfully', userId});
})

router.put('/:userId/owned-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    // Insert a new row into the owned_books table
    await finalKnex('OwnedBooks')
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
    await finalKnex('WishedBooks')
        .insert({
            userId: userId,
            GoogleBookId: bookId,
        });

    res.json({ message: 'Wish-listed books list updated successfully' });
});

router.put('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    await finalKnex('UserFriends')
        .insert({
            userId: userId,
            friendId: friendId,
        });
    res.json({ message: 'Friends list updated successfully' });
});

router.delete('/:userId/friends-list/:friendId', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    await finalKnex('UserFriends')
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
    const user = await finalKnex('appUser').where('email', email).first();

    // If the user doesn't exist, create a new user.
    if (!user) {
        const [userId] = await finalKnex('appUser').insert({
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