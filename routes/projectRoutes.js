const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/authentication');
const projectController = require('../controllers/projectController');

router.get('/projects', projectController.allProjects);
router.post('/create-project', projectController.createProject);
router.put('/update-project', projectController.updateProject);
router.delete('/delete-project', projectController.deleteProject);

module.exports = router;