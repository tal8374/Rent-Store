const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const viewController = require('../controllers/view.controller');

router
    .post(appHelper.createPath('user', 'view', false), viewController.create);

router
    .put(appHelper.createPath('user', 'view', true), viewController.update)
    .delete(appHelper.createPath('user', 'view', true), viewController.remove);

module.exports = router;
