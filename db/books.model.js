const mongoose = require('mongoose');
const { schemaOptions } = require('./options');

const BookSchema = new mongoose.Schema(schemaOptions);
const Book = mongoose.model('Book', BookSchema, 'Books');

module.exports = Book;
