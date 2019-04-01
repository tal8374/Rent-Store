const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    cardNumber: {type: Schema.Types.String},
    method: {type: Schema.Types.String},
});

module.exports = {
    PaymentSchema: PaymentSchema,
    PaymentModel: mongoose.model('Payment', PaymentSchema)
};
