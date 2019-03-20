const Car = require("../models/car.model");
const async = require('async');

function list(payload, callback) {
    Car.CarModel
        .find({})
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((cars) => {
            payload.cars = cars;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function get(payload, callback) {
    const query = {_id: payload.req.params.carId, ...payload.req.query}

    Car.CarModel
        .findOne(query)
        .populate({
            path: 'rents',
            model: 'Rent'
        })
        .exec()
        .then((car) => {
            payload.car = car;
            console.log(car)
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}


function createCar(payload, callback) {
    const newCar = new Car.CarModel(payload.req.body);

    return newCar
        .save()
        .then((newCar) => {
            payload.newCar = newCar;
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
        createCar
    ], function (err, result) {
        if (err) {
            callback(err)
        }

        callback(null, payload);
    });
}

function remove(payload, callback) {
    Car.CarModel
        .remove({_id: payload.req.params.carId})
        .exec()
        .then((removedCar) => {
            payload.removedCar = removedCar;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

function update(payload, callback) {
    Car.CarModel
        .findByIdAndUpdate({_id: payload.req.params.carId}, payload.req.body)
        .exec()
        .then((updatedCar) => {
            payload.updatedCar = updatedCar;
            callback(null, payload);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    list,

    get,

    create,

    remove,

    update
};
