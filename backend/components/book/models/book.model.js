const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {type: Schema.Types.String},
    author: {type: Schema.Types.String},
    genre: {type: Schema.Types.String},
    image: {type: Schema.Types.String},
    rents: [{type: Schema.Types.ObjectId, ref: 'Rent'}],
    trades: [{type: Schema.Types.ObjectId, ref: 'Trade'}],
});

module.exports = {
    BookSchema: BookSchema,
    BookModel: mongoose.model('Book', BookSchema)
};
