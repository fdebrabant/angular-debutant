const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/login', userController.loginAction);
router.get('/logout', userController.logoutAction);
router.post('/password', userController.passwordAction);
router.post('/create', userController.createAction);

module.exports = router;
