const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {type: String, required: true},
    taskDescription : {type: String, required: true},
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task;