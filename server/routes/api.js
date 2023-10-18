const express = require("express")
const router = express.Router()

router.get('/', async (req, res) => {
    const url = req.originalUrl;
    const response = await fetch(url);

    if (!response.ok) {
        res.status(500).send('Error fetching book info');
        return;
    }

    const book = await
})