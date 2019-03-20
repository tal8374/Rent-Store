const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    role: [{type: Schema.Types.String}],
    image: {type: Schema.Types.String},
});

module.exports = {
    UserSchema: UserSchema,
    UserModel: mongoose.model('User', UserSchema)
};
