const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// as the logger is defined at the top so it logs everything
// everything goes in order if it would use below default path then the default path get would not be logged
app.use(logger);

// This Middleware is  to render the static files directly with the URI
app.use(express.static("public"));
// to read the req or res body
app.use(express.urlencoded({extended : true}));

// as I have declare over here the logger it is called as Middleware
// we can have n number of Middlewares this way
app.get('/', logger, (req, res) => {
    console.log("Started");
    res.render('index', {text: "World" });
})

const userRouter = require('./routes/user');

app.use("/users", userRouter);

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);