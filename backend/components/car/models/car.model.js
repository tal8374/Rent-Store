const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    number: {type: Schema.Types.Number, required: true, unique: true},
    manufacture: {type: Schema.Types.String},
    model: {type: Schema.Types.String},
    mileage: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    gear: {type: Schema.Types.String},
    kind: {type: Schema.Types.String},
    categories: [{type: Schema.Types.String}],
    creationYear: {type: Schema.Types.Number},
    isProperForRent: {type: Schema.Types.Boolean, default: true},
    isAvailableForRent: {type: Schema.Types.Boolean, default: true},
    rents: [{type: Schema.Types.ObjectId, ref: 'Rent'}],
});

module.exports = {
    CarSchema: CarSchema,
    CarModel: mongoose.model('Car', CarSchema)
};
