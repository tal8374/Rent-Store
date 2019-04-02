const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const rateController = require('../controllers/rate.controller');

router
    .post(appHelper.createPath('branch', 'rate', false), rateController.create);

router
    .put(appHelper.createPath('branch', 'rate', true), rateController.update)
    .delete(appHelper.createPath('branch', 'rate', true), rateController.remove);

module.exports = router;
