const express = require('express');
const router = express.Router();

const appHelper = require('../../../util/app');
const bookController = require('../controllers/book.controller');

router
    .get(appHelper.createPath('book', 'book', false), bookController.list)
    .post(appHelper.createPath('book', 'book', false), bookController.create);

router
    .get(appHelper.createPath('book', 'book', true), bookController.get)
    .put(appHelper.createPath('book', 'book', true), bookController.update)
    .delete(appHelper.createPath('book', 'book', true), bookController.remove);

module.exports = router;
