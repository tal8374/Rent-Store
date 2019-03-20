const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const userController = require('../controllers/login.controller');

router
    .post(appHelper.createPath('user', 'login', false), userController.login);

module.exports = router;
