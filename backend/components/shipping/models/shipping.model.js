const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Location = require('../../location/models/location.model');
const Tracking = require('../../tracking/models/tracking.model');
const Payment = require('../../payment/models/payment.model');

const ShippingSchema = new Schema({
    destinyAddress: {type: Location.LocationSchema},
    note: {type: Schema.Types.String},
    reachedAt: {type: Schema.Types.Date},
    tracking: {type: Tracking.TrackingSchema},
    payment: {type: Payment.PaymentSchema},
});

ShippingSchema
    .virtual('hasReached')
    .get(function () {
        return this.reachedAt !== null;
    });

module.exports = {
    ShippingSchema: ShippingSchema,
    ShippingModel: mongoose.model('Shipping', ShippingSchema)
};
