const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const rateController = require('../controllers/rate.controller');

router
    .post(appHelper.createPath('user', 'rate', false), rateController.create);

router
    .put(appHelper.createPath('user', 'rate', true), rateController.update)
    .delete(appHelper.createPath('user', 'rate', true), rateController.remove);

module.exports = router;
