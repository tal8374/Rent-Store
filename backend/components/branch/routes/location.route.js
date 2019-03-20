const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const locationController = require('../controllers/location.controller');

router
    .post(appHelper.createPath('branch', 'location', false), locationController.create)
    .put(appHelper.createPath('branch', 'location', false), locationController.update)
    .get(appHelper.createPath('branch', 'location', false), locationController.get)
    .delete(appHelper.createPath('branch', 'location', false), locationController.remove);

module.exports = router;
