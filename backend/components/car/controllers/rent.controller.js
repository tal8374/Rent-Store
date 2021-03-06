const carRentActionService = require('../services/rent.service');
const async = require('async');

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        carRentActionService.create
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.car});
        }
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        carRentActionService.get
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.carRent});
        }
    });
}

function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        carRentActionService.remove
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        }
        res.send({responseData: payload.removedCarRent});
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        carRentActionService.update
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedCarRent});
        }
    });
}

module.exports = {
    create,

    remove,

    get,

    update,
};
