const express = require('express');
const bookController = require('../controllers/bookControllers');

const router = express.Router();

router.get('/', bookController.getBooks);
router.get('/:bookId', bookController.getBook);
router.get('/sr1/:titulo', bookController.getBookTitulo);
router.get('/sr2/:ISBN', bookController.getBookISBN);
router.get('/sr3/:autor', bookController.getBookAutor);
router.get('/sr4/:precio', bookController.getBookPrecio);
router.get('/sr5/:editorial', bookController.getBookEditorial);
router.post('/', bookController.createBook);
router.put('/:bookId', bookController.replaceBook);
router.patch('/:bookId', bookController.editBook);
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;
