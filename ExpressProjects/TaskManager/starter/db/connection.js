const mongoose = require('mongoose');

const connection = "mongodb+srv://allsignin3:AllSignin@expressprojects.f5zrawa.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=ExpressProjects"

const connectDB = (url) =>{
    return mongoose.connect(connection, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology:true,
    });
}

module.exports = connectDB;
