const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPackage = require('../../package/models/package.model');

const UserSchema = new Schema({
    firstName: {type: Schema.Types.String},
    lastName: {type: Schema.Types.String},
    registerAt: {type: Schema.Types.Date, default: Date.now()},
    dateOfBirth: {type: Schema.Types.Date},
    sex: {type: Schema.Types.String},
    phone: {type: Schema.Types.String},
    ID: {type: Schema.Types.String},
    email: {type: Schema.Types.String, required: true, unique: true},
    password: {type: Schema.Types.String},
    role: {type: Array, default: ['user']},
    image: {type: Schema.Types.String},
    package: {type: userPackage.PackageSchema, default: userPackage.PackageSchema},
    givenRentals: [{type: Schema.Types.ObjectId, ref: 'Rent'}],
    receivedRentals: [{type: Schema.Types.ObjectId, ref: 'Rent'}],
    trades: [{type: Schema.Types.ObjectId, ref: 'Trade'}],
    rates: [{type: Schema.Types.ObjectId, ref: 'Rate'}],
    views: [{type: Schema.Types.ObjectId, ref: 'View'}],
});

module.exports = {
    UserSchema: UserSchema,
    UserModel: mongoose.model('User', UserSchema)
};
