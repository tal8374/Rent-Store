const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cancellation = require('../../cancellation/models/cancellation.model');
const Payment = require('../../payment/models/payment.model');

const TradeSchema = new Schema({
    createdAt: {type: Schema.Types.Date, default: Date.now()},
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    forUser: {type: Schema.Types.ObjectId, ref: 'User'},
    withPackage: {type: Schema.Types.ObjectId, ref: 'Package'},
    withPayment: {type: Payment.PaymentSchema},
    forPackage: {type: Schema.Types.ObjectId, ref: 'Package'},
    forPayment: {type: Payment.PaymentSchema},
    cancellation: {type: Cancellation.CancellationSchema},
    isAcceptedBy: {type: Schema.Types.Boolean},
    isAcceptedFor: {type: Schema.Types.Boolean},
});

module.exports = {
    TradeSchema: TradeSchema,
    TradeModel: mongoose.model('Trade', TradeSchema)
};
