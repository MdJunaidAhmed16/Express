const express = require('express');

const taskRoutes = express.Router();
const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controller/tasksController');

taskRoutes.route('/').get(getAllTasks).post(createTask);

taskRoutes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);




module.exports = taskRoutes;