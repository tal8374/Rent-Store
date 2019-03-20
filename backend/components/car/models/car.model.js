const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rent = require('./rent.model');

const CarSchema = new Schema({
    manufacture: {type: Schema.Types.String},
    model: {type: Schema.Types.String},
    dailyCost: {type: Schema.Types.Number},
    lateReturnFee: {type: Schema.Types.Number},
    mileage: {type: Schema.Types.Number},
    image: {type: Schema.Types.String},
    isAvailableForRent: {type: Schema.Types.Boolean},
    isProperForRent: {type: Schema.Types.Boolean},
    gear: {type: Schema.Types.String},
    number: {type: Schema.Types.String, required: true},
    creationYear: {type: Schema.Types.Number},
    type: {type: Schema.Types.String},
    rents: [{type: Schema.Types.ObjectId}],
});

module.exports = {
    CarSchema: CarSchema,
    CarModel: mongoose.model('Car', CarSchema)
};
