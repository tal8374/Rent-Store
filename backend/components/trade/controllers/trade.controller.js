const tradeService = require('../services/trade.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        tradeService.list,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.trades});
        }
    });
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        tradeService.get,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.trade});
        }
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        tradeService.create,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.newTrade})
        }
    });
}

async function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        tradeService.remove,
    ], function (err, payload) {

        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.removedTrade});
        }
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        tradeService.update,
    ], function (err, payload) {
        if (err) {
            res.send({backendErrorData:{mongoDBError: err}})
        } else {
            res.send({responseData: payload.updatedTrade});
        }
    });
}

module.exports = {
    list,

    get,

    remove,

    update,

    create
};
