const Book = require('../db/books.model');

const addBook = async (req, res) => {
	const {
		title,
		author,
		price
	} = req.body;
	const newBook = new Book({
		title,
		author,
		price
	});
	await newBook
		.save()
		.catch(() => res.status(400).json({
			message: 'Cannot insert'
		}));
	await res.status(200).json(newBook);
};

const getOneBook = async (req, res) => {
	try {
		const {
			id
		} = req.params;
		const book = await Book.findById(id);
		if (book === null)
			return await res.status(400).json({
				message: 'No book found'
			});
		await res.status(200).json(book);
	} catch (err) {
		await res.status(400).json({
			message: 'No book found'
		});
	}
};

const getBooks = async (req, res) => {
	const books = await Book.find();
	if (books.length !== 0) await res.status(200).json(books);
	else await res.status(400).json({
		message: 'No books found'
	});
};

const editBook = async (req, res) => {
	try {
		const {
			id
		} = req.params;
		await Book.findByIdAndUpdate(id, req.body);
		await res.status(200).json({
			message: 'Updated Book successfully'
		});
	} catch (err) {
		await res.status(400).json({
			message: 'Cannot update'
		});
	}
};

const deleteOneBook = async (req, res) => {
	try {
		const {
			id
		} = req.params;
		await Book.findByIdAndDelete(id);
		await res.status(204).json({
			message: 'Deleted Book successfully'
		});
	} catch (err) {
		res.status(400).json({
			message: 'Cannot delete'
		});
	}
};

const deleteAllBooks = async (req, res) => {
	const response = await Book.deleteMany({});
	if (response.deletedCount !== 0)
		await res.status(204).json({
			message: 'Deleted all books'
		});
	else await res.status(400).json({
		message: 'No Documents found'
	});
};
module.exports = {
	addBook,
	getOneBook,
	getBooks,
	editBook,
	deleteOneBook,
	deleteAllBooks,
};