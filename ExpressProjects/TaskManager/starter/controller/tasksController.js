const getAllTasks = (req, res) =>{
    res.send("Get all tasks");
}

const createTask = (req, res) =>{
    res.send(req.body);
}

const getTask = (req, res) =>{
    res.send("Get single tasks");
}

const updateTask = (req, res) =>{
    res.send("update the tasks");
}

const deleteTask = (req, res) =>{
    res.send("delete the tasks");
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}