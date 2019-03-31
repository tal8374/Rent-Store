const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const userController = require('../controllers/package.controller');

router
    .post(appHelper.createPath('user', 'package', false), userController.create)
    .delete(appHelper.createPath('user', 'package', false), userController.remove);

module.exports = router;
