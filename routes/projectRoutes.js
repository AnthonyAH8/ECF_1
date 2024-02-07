const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/authentication');
const projectController = require('../controllers/projectController')

router.get('/', isAuthenticated, projectController.allProjects);
router.post('/project-create', isAuthenticated, projectController.createProject);
router.post('/update-create', isAuthenticated, projectController.updateProject);
router.post('/delete-project', isAuthenticated, projectController.deleteProject)