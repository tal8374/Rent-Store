const User = require("../models/user.model");
const Rate = require("../../rate/models/rate.model");
const async = require('async');

function createRate(payload, callback) {
    const newRate = new Rate.RateModel(payload.req.body);

    newRate
        .save()
        .then((newRate) => {
            payload.newRate = newRate;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


function addRateToUser(payload, callback) {
    User.UserModel.findOneAndUpdate(
        {_id: payload.req.params.userId},
        {$push: {rates: payload.newRate._id}},
    )
        .then((user) => {
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
        createRate,
        addRateToUser
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function removeFromUser(payload, callback) {
    User.UserModel
        .findByIdAndUpdate(
            {"_id": payload.req.params.userId},
            {"$pull": {"rates": payload.req.params.rateId}},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
                    payload.user = user;
                    callback(null, payload);
                }
            }
        )
}

function removeRate(payload, callback) {
    Rate.RateModel
        .findByIdAndRemove(
            {"_id": payload.req.params.rateId},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
                    payload.user = user;
                    callback(null, payload);
                }
            }
        )
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        removeFromUser,
        removeRate
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function update(payload, callback) {
    Rate.RateModel
        .findByIdAndUpdate({_id: payload.req.params.rateId}, payload.req.body)
        .exec()
        .then((updatedRate) => {
            payload.updatedRate = updatedRate;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    create,

    remove,

    update
};
