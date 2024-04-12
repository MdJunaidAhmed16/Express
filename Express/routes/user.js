const express = require('express');

const router = express.Router();

// finding the routes goes in order

router.get('/', (req, res) => {
    res.send("Redirected to users page");
});

router.get('/new', (req, res) => {
    res.send("Redirected to users new add page");
});

// dynamically fetching with the routes
router.get('/:id', (req, res) => {
    let userId = req.params.id;
    res.send(`Get with user id : ${userId}`);
});



module.exports = router;