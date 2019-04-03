const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shipping = require('../../shipping/models/shipping.model');

const RentSchema = new Schema({
    startDate: {type: Schema.Types.Date},
    returnDate: {type: Schema.Types.Date},
    actualReturnDate: {type: Schema.Types.Date},
    cancellationPolicy: {type: Schema.Types.String},
    lateReturnPolicy: {type: Schema.Types.String},
    dailyCost: {type: Schema.Types.Number},
    lateReturnFee: {type: Schema.Types.Number},
    shipping: {type: Shipping.ShippingSchema},
});

module.exports = {
    RentSchema: RentSchema,
    RentModel: mongoose.model('Rent', RentSchema)
};
