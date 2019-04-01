const Trade = require("../models/trade.model");
const User = require("../../user/models/user.model");
const async = require('async');

function list(payload, callback) {
    Trade.TradeModel
        .find({})
        .exec()
        .then((trades) => {
            payload.trades = trades;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createTrade(payload, callback) {
    const newTrade = new Trade.TradeModel(payload.req.body);

    newTrade
        .save()
        .then((newTrade) => {
            payload.newTrade = newTrade;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addToByUserTrades(payload, callback) {
    User.UserModel.update(
        {_id: payload.req.body.byUser},
        {$push: {trades: payload.newTrade._id}},
    )
        .then((byUser) => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addToForUserTrades(payload, callback) {
    User.UserModel.update(
        {_id: payload.req.body.forUser},
        {$push: {trades: payload.newTrade._id}},
    )
        .then((forUser) => {
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
        createTrade,
        addToByUserTrades,
        addToForUserTrades,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function get(payload, callback) {
    Trade.TradeModel
        .findOne({_id: payload.req.params.tradeId})
        .exec()
        .then((trade) => {
            payload.trade = trade;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeTrade(payload, callback) {
    Trade.TradeModel
        .findByIdAndRemove({_id: payload.req.params.tradeId})
        .exec()
        .then((removedTrade) => {
            payload.removedTrade = removedTrade;
            console.log(payload.removedTrade)
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeByUserTrade(payload, callback) {
    User.UserModel
        .update(
            {"_id": payload.removedTrade.byUser},
            {"$pull": {"trades": payload.removedTrade._id}},
            {"multi": true},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, payload);
                }
            }
        )
}

function removeForUserTrade(payload, callback) {
    User.UserModel
        .update(
            {"_id": payload.removedTrade.forUser},
            {"$pull": {"trades": payload.removedTrade._id}},
            {"multi": true},
            function (err, user) {
                if (err) {
                    callback(err);
                } else {
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
        removeTrade,
        removeByUserTrade,
        removeForUserTrade,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function update(payload, callback) {
    Trade.TradeModel
        .findByIdAndUpdate({_id: payload.req.params.tradeId}, payload.req.body)
        .exec()
        .then((updatedUser) => {
            payload.updatedUser = updatedUser;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


module.exports = {
    list,

    get,

    remove,

    update,

    create
};
