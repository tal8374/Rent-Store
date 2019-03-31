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

function addCar(user, carId) {
    user.package.cars.push(carId);
}

function addBook(user, carId) {
    user.package.cars.push(carId);
}

function addBicycle(user, carId) {
    user.package.bicycles.push(carId);
}

function addToPackageHandler() {
    return {
        car: addCar,
        book: addBook,
        bicycle: addBicycle,
    }
}

function addToPackage(payload, callback) {
    const user = payload.user;
    const body = payload.req.body;

    for (let property in body) {
        if (body.hasOwnProperty(property)) {
            addToPackageHandler()[property](user, body[property]);
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
        addToPackage
    ], function (err, payload) {
        if (err) {
            callback(err);
        } else {
            callback(null, payload);
        }
    });
}

function removeCar(user, carId) {
    const index = user.package.cars.indexOf(carId);

    user.package.cars.splice(index, 1);
}

function removeBook(user, carId) {
    const index = user.package.books.indexOf(carId);

    user.package.books.splice(index, 1);
}

function removeBicycle(user, carId) {
    const index = user.package.books.indexOf(carId);

    user.package.books.splice(index, 1);
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
