const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const carRentController = require('../controllers/rent.controller');

router
    .post(appHelper.createPath('book', 'rent', false), carRentController.create);

router
    .get(appHelper.createPath('book', 'rent', true), carRentController.get)
    .delete(appHelper.createPath('book', 'rent', true), carRentController.remove)
    .put(appHelper.createPath('book', 'rent', true), carRentController.update);


module.exports = router;
