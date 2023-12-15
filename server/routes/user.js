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
        .select('GoogleBookId')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;

    const books = await finalKnex('WishedBooks')
        .select('GoogleBookId')
        .where('userId', userId);

    res.json(books);
});

router.get('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;

    const top5Books = await finalKnex('Top5Books')
        .select('*')
        .where('userId', userId)

    res.json(top5Books);
});

router.get('/:userId/fav-rank', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;

    const favRank = await finalKnex('Top5Books')
        .select('BookRank')
        .where('userId', userId)
        .where('BookId', bookId);

    res.json(favRank);
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
    const friendIds = await finalKnex('UserFriends')
        .select('friendId')
        .where('userId', userId);


    const friendNames = [];
    for (const friend of friendIds) {
        const friendUN = await finalKnex('appUser').select('userName').where('userId', friend).first();
        friendNames.push({ userId: friend, friendUN });
    }

    res.json(friendNames);
});


//UPDATE appUser table data
router.put('/:userId', async (req, res) => {
    const userInfo = req.body.userInfo;
    const userId = userInfo.userId;

    await finalKnex('appUser')
        .where('userId', userId)
        .update({
            userFavGenre: userInfo.userFavGenre,
            userUN: userInfo.userUN,
        });


    res.json({ message: 'Genre, UserName updated successfully', userInfo: userInfo });
});

router.put('/:userId/current-read', async (req, res) => {
    const userId = req.params.userId;
    const newCurr = req.params.GoogleBookId;

    await finalKnex('appUser')
        .where('userId', userId)
        .update({ userCurrRead: newCurr });
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
        const userId = await finalKnex('appUser').insert([
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

router.post('/:userId/owned-books', async (req, res) => {
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

router.post('/:userId/top-5-fav-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;
    const rank = req.body.rank;

    for (let i = rank; i < 6; i++) {
        const existingBook = await finalKnex('Top5Books').where('userId', userId).andWhere('BookRank', i).first();
        if (existingBook) {
            await finalKnex('Top5Books').where('userId', userId).andWhere('BookRank', i).update({ BookRank: i + 1 });
        }
    }
    const existingBooksCount = await finalKnex('Top5Books').where('userId', userId).count('*');
    if (existingBooksCount >= 5) {
        await finalKnex('Top5Books').where('userId', userId)
        .andWhere('BookRank', 6)
        .delete();
    }
    await finalKnex('Top5Books').insert([
        {
          userId,
          BookId: bookId,
          BookRank: rank,
        }
      ], ['topBookId']);

    res.status(201).json({ message: 'Book added to favorites successfully.', bookRank: rank });
});

router.post('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;
    // Insert a new row into the wish_listed_books table
    const WishId = await finalKnex('WishedBooks').insert([
        {
            userId: userId,
            GoogleBookId: bookId
        }

    ], ['WishId']);

    res.json({ message: 'Wish-listed books list updated successfully', WishId: WishId });
});

router.delete('/:userId/wished-books', async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.body.bookId;
    await finalKnex('WishedBooks')
        .where('userId', userId)
        .andWhere('GoogleBookId', bookId)
        .delete();

    res.json({ message: 'Book removed successfully' });
});

router.post('/:userId/friends-list', async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.body.friendId;

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

    res.json({ message: 'Friend removed successfully' });
});

module.exports = router;