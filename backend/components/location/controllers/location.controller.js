const userService = require('../services/user.service');
const async = require('async');

function list(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        userService.list,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.users)
    });
}

function createSearchUserQuery(payload, callback) {
    payload.query = {_id: payload.req.params.userId};

    callback(null, payload);
}

function get(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        createSearchUserQuery,
        userService.get,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.user)
    });
}

function create(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        userService.create,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.newUser)
    });
}

async function remove(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        userService.remove,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.removedUser)
    });
}

function update(req, res) {
    async.waterfall([
        function (callback) {
            callback(null, {req: req});
        },
        userService.update,
    ], function (err, result) {
        if (err) {
            res.send(err)
        }
        res.send(result.updatedUser)
    });
}

module.exports = {
    list,

    get,

    remove,

    update,

    create
};
