const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentSchema = new Schema({
    startDate: {type: Schema.Types.Date, default: Date.now()},
    returnDate: {type: Schema.Types.Date},
    actualReturnDate: {type: Schema.Types.Date},
    cancellationPolicy: {type: Schema.Types.String},
    lateReturnPolicy: {type: Schema.Types.String},
    requestByUser: {type: Schema.Types.ObjectId, ref: 'User'},
    givenByUser: {type: Schema.Types.ObjectId, ref: 'User'},
    givenByBranch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    dailyCost: {type: Schema.Types.Number},
    lateReturnFee: {type: Schema.Types.Number},
});

module.exports = {
    RentSchema: RentSchema,
    RentModel: mongoose.model('Rent', RentSchema)
};
