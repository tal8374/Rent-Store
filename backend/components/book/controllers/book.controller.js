const bookService = require('../services/book.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookService.list
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.books});
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookService.get
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.book});
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.newBook});
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.removedBook});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.updatedBook});
    });
}

module.exports = {
    list,

    get,

    create,

    remove,

    update
};
