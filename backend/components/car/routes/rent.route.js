const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carRentController = require('../controllers/rent.controller');

router
    .post(appHelper.createPath('car', 'rent', false), carRentController.create);

router
    .get(appHelper.createPath('car', 'rent', true), carRentController.get)
    .delete(appHelper.createPath('car', 'rent', true), carRentController.remove)
    .put(appHelper.createPath('car', 'rent', true), carRentController.update);

module.exports = router;
