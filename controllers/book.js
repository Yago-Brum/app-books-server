const bookFacade = require("../facades/bookFacade"); 

function getBooks(req, res) {
    try {
        const booksread = bookFacade.getAllBooks();
        res.send(booksread);
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const book = bookFacade.getBookById(id);
            if (book) { 
                res.send(book);
            } else {
                res.status(404).send('Book not found'); 
            }
        } else {
            res.status(422).send('Invalid book ID');
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body;
        if (req.body.title) {
            bookFacade.createBook(newBook);
            res.status(201).send('Book created successfully');
        } else {
            res.status(422).send('Book title is required'); 
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function patchBook(req, res) {
    try {
        const updatedBook = req.body;
        const id = req.params.id;

        if (id && Number(id)) {
            bookFacade.updateBook(updatedBook, id);
            res.send('Book updated successfully');
        } else {
            res.status(422).send('Invalid book ID');
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            bookFacade.deleteBook(id);
            res.send('Book deleted successfully');
        } else {
            res.status(422).send('Invalid book ID');
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
};