const bookRentService = require('../services/rent.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookRentService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.book});
        }
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookRentService.get
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.bookRent});
        }
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookRentService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        }
        res.send({responseData: payload.removedRent});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        bookRentService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedRent});
        }
    });
}

module.exports = {
    create,

    remove,

    get,

    update,
};
