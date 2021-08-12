const mongoose = require('mongoose');


const schemaOptions = {
	title: {
		required: true,
		type: 'string',
		unique: true,
	},
	author: {
		required: true,
		type: 'string',
	},
	price: {
		required: true,
		type: 'number',
	},
};
const BookSchema = new mongoose.Schema(schemaOptions);
const Book = mongoose.model('Book', BookSchema, 'Books');

module.exports = Book;
