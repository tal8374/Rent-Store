const carService = require('./car.service');
const Car = require('../models/car.model');
const Rent = require('../models/rent.model');
const async = require('async');
const _ = require('lodash');

function createSearchCarQuery(payload, callback) {
    payload.query = {_id: payload.req.params.rentId};

    callback(null, payload);
}

function createCarRent(payload, callback) {
    const car = payload.car;

    console.log(car)

    car.rents.push(payload.newRent);

    car
        .save()
        .then((car) => {
            payload.car = car;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function createRent(payload, callback) {
    const newRent = new Rent.RentModel(payload.req.body);

    return newRent
        .save()
        .then((newRent) => {
            payload.newRent = newRent;
            callback(null, payload);
        })
        .catch((err) => {
            console.log('here')
            console.log(err)
            callback(err);
        });
}

function create(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchCarQuery,
        carService.get,
        createRent,
        createCarRent
    ], function (err, result) {
        if (err) {
            console.log(err)
            callback(err)
        } else {
            callback(null, payload);
        }
    });
}

function remove(payload, callback) {
    Car.CarModel
        .update(
            {_id: payload.req.params.carId},
            {$unset: {rent: 1}}
        )
        .then((removedRent) => {
            payload.removedRent = removedRent;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    Car.CarModel
        .findOne({_id: payload.req.params.carId})
        .populate('rent.user')
        .then((carRent) => {
            payload.carRent = carRent.rent;

            callback(null, payload);
        })
        .catch((err) => {
            console.log('err')
            callback(err);
        });
}

function updateCarRent(payload, callback) {
    let car = payload.car;

    _.merge(car.rent, payload.req.body);

    car.save(function (err, updatedRent) {
        if (err) {
            callback(err)
        }

        payload.updatedRent = updatedRent;
        callback(null, payload);
    });
}

function update(payload, callback) {
    async.waterfall([
        function (callback) {
            callback(null, payload);
        },
        createSearchCarQuery,
        carService.get,
        updateCarRent
    ], function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, payload);
        }
    });
}


module.exports = {
    create,

    remove,

    get,

    update,
};
