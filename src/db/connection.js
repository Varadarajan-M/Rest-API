const mongoose = require('mongoose');
const {
	connectionOptions
} = require('./options');

const connectDb = () => {

	const MONGO_URI =  process.env.MONGO_URI;

	mongoose.connect(MONGO_URI, connectionOptions);
	const connection = mongoose.connection;
	connection.on('connected', () => {
		console.log('connected to database');
	});
};

module.exports = connectDb;