const carService = require('./car.service');
const Rent = require('../../rent/models/rent.model');
const async = require('async');
const _ = require('lodash');

function createSearchCarQuery(payload, callback) {
    payload.query = {_id: payload.req.params.carId};

    callback(null, payload);
}

function createCarRent(payload, callback) {
    const car = payload.car;

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
            callback(err)
        } else {
            callback(null, payload);
        }
    });
}

function remove(payload, callback) {
    Rent.RentModel
        .remove({_id: payload.req.params.rentId}, function (err, removedCarRent) {
            if (err) {
                callback(err)
            } else {
                payload.removedCarRent = removedCarRent;
                callback(null, payload);
            }
        });
}

function get(payload, callback) {
    Rent.RentModel
        .findOne({_id: payload.req.params.rentId})
        .then((carRent) => {
            payload.carRent = carRent;

            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Rent.RentModel
        .update({_id: payload.req.params.rentId},
            payload.req.body, function (err, updatedCarRent) {
                if (err) {
                    callback(err)
                } else {
                    payload.updatedCarRent = updatedCarRent;
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
