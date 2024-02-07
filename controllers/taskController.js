const Task = require('../models/tasks');

exports.showTasks = async (req, res) => {
    try {
        const tasks = await Task.findById( req.params.id);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message:'Erreur de récupération des tâches', error});
    }
};

exports.createTask = async (req, res) => {
    try {
        const { taskName, taskDescription } = req.body
        await Task.create({
            taskName,
            taskDescription,
        });
        res.status(201).json({ message: "Tâche créée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de votre tâche" });
    }
};

exports.updateTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Modification de la tâche réussie" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la modification du projet" });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Suppression du projet réussie" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression de la tâche" });
    }
};