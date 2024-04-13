

const express = require('express');
const app = express();
const taskRoutes = require('./router/taskRouter');
const connectDB = require('./db/connection');
require('dotenv').config()

app.use(express.json());



app.use('/api/v1/tasks', taskRoutes);

// app.get('/', (req, res) =>{
//     res.send("Hello there");
// })



const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log(`server listening at port : 3000`));
    } catch (error) {
        console.log(error);
    }
}

start();

