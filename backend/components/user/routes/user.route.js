const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const userController = require('../controllers/user.controller');

router
    .get(appHelper.createPath('user', 'user', false), userController.list)
    .post(appHelper.createPath('user', 'user', false), userController.create);

router
    .get(appHelper.createPath('user', 'user', true), userController.get)
    .put(appHelper.createPath('user', 'user', true), userController.update)
    .delete(appHelper.createPath('user', 'user', true), userController.remove);

module.exports = router;
