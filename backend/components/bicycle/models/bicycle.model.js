const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BicycleSchema = new Schema({
    frame: {type: Schema.Types.String},
    fork: {type: Schema.Types.String},
    derailleurRear: {type: Schema.Types.String},
    shifters: {type: Schema.Types.String},
    brakes: {type: Schema.Types.String},
    cassetee: {type: Schema.Types.String},
    tyres: {type: Schema.Types.String},
    motor: {type: Schema.Types.String},
    battery: {type: Schema.Types.String},
    size: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    rents: [{type: Schema.Types.ObjectId, ref: 'Rent'}],
});

module.exports = {
    BicycleSchema: BicycleSchema,
    BicycleModel: mongoose.model('Bicycle', BicycleSchema)
};
