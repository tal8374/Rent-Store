const User = require("../models/user.model");
const Cart = require("../models/cart.model");

const async = require('async');
const _ = require('lodash');

function getUser(payload, callback) {
    User.UserModel.findOne(
        {_id: {$in: payload.req.params.userId}})
        .then((user) => {
            payload.user = user;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function addToCart(payload, callback) {
    const userCartPackage = payload.user.cart.package;
    const body = payload.req.body;

    for (let property in body.package) {
        if (body.package.hasOwnProperty(property) && property !== "_id") {
            const items = body.package[property];
            for (let i = 0; i < items.length; i++) {
                let idToSearch = items[i];

                const index = _.find(userCartPackage[property], function (ch) {
                    return ch._id.toString() === idToSearch;
                });

                console.log(index)

                if (index === undefined) {
                    userCartPackage[property].push(items[i]);
                }
            }
        }
    }

    payload.cart = userCartPackage;

    payload.user
        .save()
        .then(() => {
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
        addToCart,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function get(payload, callback) {
    User.UserModel
        .findOne({_id: payload.req.params.userId})
        .exec()
        .then((user) => {
            payload.cart = user.cart;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function removeCar(user, carId) {
    const index = user.package.cars.indexOf(carId);

    user.cart.package.cars.splice(index, 1);
}

function removeBook(user, carId) {
    const index = user.package.books.indexOf(carId);

    user.cart.package.books.splice(index, 1);
}

function removeBicycle(user, carId) {
    const index = user.package.books.indexOf(carId);

    user.cart.package.books.splice(index, 1);
}

function removeFromPackageHandler() {
    return {
        car: removeCar,
        book: removeBook,
        bicycle: removeBicycle,
    }
}

function removeFromPackage(payload, callback) {
    const user = payload.user;
    const query = payload.req.query;

    for (let property in query) {
        if (query.hasOwnProperty(property)) {
            removeFromPackageHandler()[property](user, query[property]);
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
        removeFromPackage,
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

module.exports = {
    get,

    remove,

    create
};
