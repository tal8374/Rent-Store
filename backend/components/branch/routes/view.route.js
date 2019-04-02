const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const viewController = require('../controllers/view.controller');

router
    .post(appHelper.createPath('branch', 'view', false), viewController.create);

router
    .put(appHelper.createPath('branch', 'view', true), viewController.update)
    .delete(appHelper.createPath('branch', 'view', true), viewController.remove);

module.exports = router;
