const User = require("../models/user.model");
const async = require('async');

function getUser(payload, callback) {
    User.UserModel
        .findOne({_id: payload.req.params.userId})
        .exec()
        .then((user) => {
            payload.user = user;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addToRent(payload, callback) {
    const user = payload.user;
    const body = payload.req.body;

    for (let property in body) {
        if (body.hasOwnProperty(property)) {
            user[property].push(body[property])
        }
    }

    user
        .save()
        .then((updatedUser) => {
            payload.updatedUser = updatedUser;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        getUser,
        addToRent
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function removeFromPackage(payload, callback) {
    const user = payload.user;
    const query = payload.req.query;

    for (let property in query) {
        if (query.hasOwnProperty(property)) {
            let id = query[property];
            const index = user[property].indexOf(id);

            user[property].splice(index, 1);
        }
    }

    user
        .save()
        .then((updatedUser) => {
            payload.updatedUser = updatedUser;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        getUser,
        removeFromPackage
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}


module.exports = {
    remove,

    create
};
