const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const isAuthenticated = require('../middlewares/authentication');


router.post('/create', userController.create);
router.post('/login', userController.login);
router.get('/', isAuthenticated, userController.profile)

module.exports = router
