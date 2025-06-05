// facades/bookFacade.js
const { getAllBooks, getBookByID, insertBook, modifyBook, delBook } = require("../services/book");

class BookFacade {
    getAllBooks() {
        return getAllBooks();
    }

    getBookById(id) {
        return getBookByID(id);
    }

    createBook(newBook) {
        insertBook(newBook);
    }

    updateBook(updatedBook, id) {
        modifyBook(updatedBook, id);
    }

    deleteBook(id) {
        delBook(id);
    }
}

module.exports = new BookFacade();