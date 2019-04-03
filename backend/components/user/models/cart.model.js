const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartPackage = require('../../package/models/package.model');

const CartSchema = new Schema({
    package: {type: cartPackage.PackageSchema, default: cartPackage.PackageSchema},
});

module.exports = {
    CartSchema: CartSchema,
    CartModel: mongoose.model('Cart', CartSchema)
};
