const cartService = require('../services/cart.service');
const async = require('async');

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        cartService.get,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.cart});
        }
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        cartService.create,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.cart})
        }
    });
}

async function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        cartService.remove,
    ], function (err, payload) {

        if (err) {
            res.send({backendErrorData: {mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedUser});
        }
    });
}

module.exports = {
    get,

    remove,

    create
};
