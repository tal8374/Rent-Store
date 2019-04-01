const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentSchema = new Schema({
    createdAt: {type: Schema.Types.Date, default: Date.now()},
    startDate: {type: Schema.Types.Date},
    returnDate: {type: Schema.Types.Date},
    actualReturnDate: {type: Schema.Types.Date},
    cancellationPolicy: {type: Schema.Types.String},
    lateReturnPolicy: {type: Schema.Types.String},
    dailyCost: {type: Schema.Types.Number},
    lateReturnFee: {type: Schema.Types.Number},
});

module.exports = {
    RentSchema: RentSchema,
    RentModel: mongoose.model('Rent', RentSchema)
};
