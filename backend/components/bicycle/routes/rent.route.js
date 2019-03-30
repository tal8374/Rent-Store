const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carRentController = require('../controllers/rent.controller');

router
    .post(appHelper.createPath('bicycle', 'rent', false), carRentController.create);

router
    .get(appHelper.createPath('bicycle', 'rent', true), carRentController.get)
    .delete(appHelper.createPath('bicycle', 'rent', true), carRentController.remove)
    .put(appHelper.createPath('bicycle', 'rent', true), carRentController.update);

module.exports = router;
