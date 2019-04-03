const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cancellation = require('../../cancellation/models/cancellation.model');
const Payment = require('../../payment/models/payment.model');
const tradePackage = require('../../package/models/package.model');

const TradeSchema = new Schema({
    byUser: {type: Schema.Types.ObjectId, ref: 'User'},
    byUserPayment: {type: Payment.PaymentSchema},
    forUser: {type: Schema.Types.ObjectId, ref: 'User'},
    withPackage: {type: tradePackage.PackageSchema, default: tradePackage.PackageSchema},
    forPackage: {type: tradePackage.PackageSchema, default: tradePackage.PackageSchema},
    cancellation: {type: Cancellation.CancellationSchema},
    isAcceptedFor: {type: Schema.Types.Boolean},
    acceptedDate: {type: Schema.Types.Date},
    startDate: {type: Schema.Types.Date},
    returnDate: {type: Schema.Types.Date},
    actualReturnDate: {type: Schema.Types.Date},
});

module.exports = {
    TradeSchema: TradeSchema,
    TradeModel: mongoose.model('Trade', TradeSchema)
};
