const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarRentSchema = new Schema({
    startDate: {type: Schema.Types.Date, default: Date.now()},
    returnDate: {type: Schema.Types.Date},
    actualReturnDate: {type: Schema.Types.Date},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = {
    RentSchema: CarRentSchema,
    RentModel: mongoose.model('Rent', CarRentSchema)
};
