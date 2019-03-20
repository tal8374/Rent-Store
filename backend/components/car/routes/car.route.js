const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carController = require('../controllers/car.controller');

router
    .get(appHelper.createPath('car', 'car', false), carController.list)
    .post(appHelper.createPath('car', 'car', false), carController.create);

router
    .get(appHelper.createPath('car', 'car', true), carController.get)
    .put(appHelper.createPath('car', 'car', true), carController.update)
    .delete(appHelper.createPath('car', 'car', true), carController.remove);

module.exports = router;
