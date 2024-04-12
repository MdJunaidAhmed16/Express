const express = require('express');

const router = express.Router();

// router.use(logger);

// finding the routes goes in order

// router.get('/', (req, res) => {
//     res.send("Redirected to users page");
// });

// router.get('/new', (req, res) => {
//     res.send("Redirected to users new add page");
// });

// // dynamically fetching with the routes
// router.get('/:id', (req, res) => {
//     let userId = req.params.id;
//     res.send(`Get with user id : ${userId}`);
// });

// as for the CRUD on particular URL every time we need to check :id like this to avoid this

router.route('/:id').get((req, res, next) => {
    let userId = req.params.id;
    res.send(`Get with user id : ${userId}`);
    console.log(req.user);
}).put((req, res) => {
    let userId = req.params.id;
    res.send(`Put : ${userId}`);
}).delete((req, res) => {
    let userId = req.params.id;
    res.send(`Deleting user id : ${userId}`);
});

const users = [{name : "Junaid"}, {name : "Abid"}];


// This is to do some action once the request has loaded the specified URI and do some action such as setting
// user in req and then printing the user from req
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

// function logger(req, res, next){
//     console.log(req.originalUrl);
//     next();
// }



module.exports = router;