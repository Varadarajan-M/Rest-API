const { Router } = require('express');
const {
	getBooks,
	addBook,
	getOneBook,
	editBook,
	deleteOneBook,
	deleteAllBooks,
} = require('../controllers/bookControllers');
/** 
 * Remove the duplicate code here , line no 13
 */
const Book = require('../models/book.model');
const router = Router();

router.route('/').get(getBooks).post(addBook).delete(deleteAllBooks);

router.route('/:id').get(getOneBook).patch(editBook).delete(deleteOneBook);

module.exports = router;
