const Project = require('../models/project');

exports.createProject = async (req, res) => {
    try {
        const { projectname, description, author } = req.body;
        await Project.create({
            projectname,
            description,
            author,
        });
        res.status(201).json({ message: "Projet créé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la création de votre projet" });
    }
};

exports.allProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.log("Erreur lors de la récupération des projets:", error);
        res.status(500).json({ message: "Erreur lors de la récupération des projets" });
    }
};

exports.updateProject = async (req, res) => {
    try {
        await Project.findByIdAndUpdate(req.params.id, req.body);
        res.json("Modification du projet réussie");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json("Suppression du projet réussie");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};