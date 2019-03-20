const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carController = require('../controllers/car.controller');

router
    .post(appHelper.createPath('branch', 'car', false), carController.create);

router
    .delete(appHelper.createPath('branch', 'car', true), carController.remove);

module.exports = router;
