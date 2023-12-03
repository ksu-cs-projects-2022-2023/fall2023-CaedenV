const express = require('express')
const router = express.Router()
const knex = require('knex');
const knexConfig = require('../knexfile');
const finalKnex = knex(knexConfig.development);

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
        .select('userCurrRead')
        .where('userId', userId)
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

    const friends = await finalKnex('UserFriends')
        .select('friendId')
        .where('userId', userId);

    res.json(friends);
});

router.get('/:userId/friends-list/names', async (req, res) => {
    const userId = req.params.userId;
    const [friends, names] = await Promise.all([
        finalKnex('UserFriends').select('friendId').where('userId', userId),
        finalKnex('appUser').select('userName').whereIn('userId', friends.map(friend => friend.friendId)),
    ]);

    const friendNames = friends.map(friend => ({
        userId: friend.friendId,
        userName: names.find(name => name.userId === friend.friendId).userName,
    }));

    res.json(friendNames);
});


//UPDATE appUser table data
router.put('/:userId', async (req, res) => {
    const userInfo = req.params.userInfo;
    const userId = userInfo.userId;

    await finalKnex('appUser')
        .where('userId', userId)
        .update({
            userPicLink: userInfo.userPicLink,
            userFavGenre: userInfo.userFavGenre,
            userUN: userInfo.userUN,
        })


    res.json({ message: 'User Pic, Genre, UserName updated successfully', userInfo: userInfo });
});

router.put('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;
    const { top5Books } = req.body;

    await finalKnex('Top5Books')
        .where('userId', userId)
        .update({
            Book1Id: top5Books[0],
            Book2Id: top5Books[1],
            Book3Id: top5Books[2],
            Book4Id: top5Books[3],
            Book5Id: top5Books[4],
        });

    res.json({ message: 'Top 5 updated successfully' });
});

router.put('/:userId/current-read', async (req, res) => {
    const userId = req.params.userId;
    const newCurr = req.params.GoogleBookId;

    await finalKnex('appUser')
        .where('userId', userId)
        .update({ userCurrRead: newCurr});
})

// INSERTS and DELETES rows existing tables
router.post('/create', async (req, res) => {
    console.log(req.body.name + ": " + req.body.email);
    // Get the user's name and email from the request body.
    const name = req.body.name;
    const email = req.body.email;
    const pic = req.body.pic;
    const userLoggedIn = true;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const joinedAt = mm + '/' + dd + '/' + yyyy;

    // Check if the user exists in the table.
    const user = await finalKnex('appUser').where('userEmail', email).first();

    // If the user doesn't exist, create a new user.
    if (!user) {
        const [userId] = await finalKnex('appUser').insert([
            {
                userName: name,
                userEmail: email,
                userJoinedAt: joinedAt,
                userLoggedIn: userLoggedIn,
                userPicLink: pic
            }
        ], ['userId']);

        // Return a success response.
        res.status(201).json({ message: 'User created successfully.', userId: userId });
    } else {
        // Return a conflict response.
        res.status(200).json({ message: 'User already exists.', userId: user.userId });
    }
})

router.put('/:userId/owned-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    // Insert a new row into the owned_books table
    await finalKnex('OwnedBooks')
        .insert([
            {
                userId: userId,
                GoogleBookId: bookId
            }
        ]);

    res.json({ message: 'Owned books list updated successfully' });
});

router.put('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    // Insert a new row into the wish_listed_books table
    await finalKnex('WishedBooks')
        .insert([
            { userId: userId },
            { GoogleBookId: bookId }
        ]);

    res.json({ message: 'Wish-listed books list updated successfully' });
});

router.put('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;
    const friendUN = req.params.friendId;

    await finalKnex('UserFriends')
        .insert([
            {
                userId: userId,
                friendId: friendId
            }
        ]);
    res.json({ message: 'Friends list updated successfully' });
});

router.delete('/:userId/friends-list/:friendId', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    await finalKnex('UserFriends')
        .where('userId', userId)
        .where('friendId', friendId)
        .delete();

    res.json({ message: 'Friend removed successfully'});
});

module.exports = router;