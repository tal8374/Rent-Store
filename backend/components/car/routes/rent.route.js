const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carRentController = require('../controllers/rent.controller');

router
    .post(appHelper.createPath('car', 'rent', false), carRentController.create)
    .get(appHelper.createPath('car', 'rent', false), carRentController.get)
    .delete(appHelper.createPath('car', 'rent', false), carRentController.remove)
    .put(appHelper.createPath('car', 'rent', false), carRentController.update);

module.exports = router;
