const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/authentication');
const taskController = require('../controllers/taskController');

router.get('/show-tasks', isAuthenticated, taskController.showTasks);
router.post('/create-task', isAuthenticated, taskController.createTask);
router.put('/update-task', isAuthenticated, taskController.updateTask);
router.delete('/delete-task', isAuthenticated, taskController.deleteTask);

module.exports = router;