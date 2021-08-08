const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};
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
module.exports = { connectionOptions, schemaOptions };
