const Trade = require("../models/trade.model");
const User = require("../../user/models/user.model");
const Car = require("../../car/models/car.model");
const Book = require("../../book/models/book.model");
const Bicycle = require("../../bicycle/models/bicycle.model");

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
            console.log(err)
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

function setCarWithPackageItemsTraded(payload, callback) {
    console.log(payload.newTrade)

    Car.CarModel.updateMany(
        {_id: {$in: payload.newTrade.withPackage.cars}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setBookWithPackageItemsTraded(payload, callback) {
    Book.BookModel.updateMany(
        {_id: {$in: payload.newTrade.withPackage.books}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setBicycleWithPackageItemsTraded(payload, callback) {
    Bicycle.BicycleModel.updateMany(
        {_id: {$in: payload.newTrade.withPackage.bicycles}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setCarForPackageItemsTraded(payload, callback) {
    Car.CarModel.updateMany(
        {_id: {$in: payload.newTrade.forPackage.cars}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setBookForPackageItemsTraded(payload, callback) {
    Book.BookModel.updateMany(
        {_id: {$in: payload.newTrade.forPackage.books}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setBicycleForPackageItemsTraded(payload, callback) {
    Bicycle.BicycleModel.updateMany(
        {_id: {$in: payload.newTrade.forPackage.bicycles}},
        {$push: {trades: payload.newTrade._id}},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function setPackageItemsTraded(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        setCarWithPackageItemsTraded,
        setBookWithPackageItemsTraded,
        setBicycleWithPackageItemsTraded,
        setCarForPackageItemsTraded,
        setBookForPackageItemsTraded,
        setBicycleForPackageItemsTraded,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createTrade,
        setPackageItemsTraded,
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

function removeForPackageTradeCarItems(payload, callback) {
    Car.CarModel.updateMany(
        {_id: {$in: payload.removedTrade.forPackage.cars}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeForPackageTradeBookItems(payload, callback) {
    Book.BookModel.updateMany(
        {_id: {$in: payload.removedTrade.forPackage.books}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeForPackageTradeBicycleItems(payload, callback) {
    Bicycle.BicycleModel.updateMany(
        {_id: {$in: payload.removedTrade.forPackage.bicycles}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            console.log(err)
            callback(err);
        });
}

function removeForPackageTrade(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        removeForPackageTradeCarItems,
        removeForPackageTradeBookItems,
        removeForPackageTradeBicycleItems,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}


function removeWithPackageTradeCarItems(payload, callback) {
    Car.CarModel.updateMany(
        {_id: {$in: payload.removedTrade.withPackage.cars}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeWithPackageTradeBookItems(payload, callback) {
    Book.BookModel.updateMany(
        {_id: {$in: payload.removedTrade.withPackage.books}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeWithPackageTradeBicycleItems(payload, callback) {
    Bicycle.BicycleModel.updateMany(
        {_id: {$in: payload.removedTrade.withPackage.bicycles}},
        {"$pull": {"trades": payload.removedTrade._id}},
        {"multi": true},
    )
        .then(() => {
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeWithPackageTrade(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        removeWithPackageTradeCarItems,
        removeWithPackageTradeBookItems,
        removeWithPackageTradeBicycleItems,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function remove(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        removeTrade,
        removeForPackageTrade,
        removeWithPackageTrade,
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
        .then((updatedTrade) => {
            payload.updatedTrade = updatedTrade;
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
