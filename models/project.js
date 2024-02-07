const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName : {type: String, required: true},
    description : {type: String, required: true},
    author: { type: String, required: true}
});

const Project = mongoose.model("product", projectSchema);

module.exports = Project