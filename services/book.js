const fs = require('fs');

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"))
}

function getBookByID(id) {
  const books = JSON.parse(fs.readFileSync('./books.json'));
  const bookFound = books.find(book => book.id == id);
  return bookFound;
}

function insertBook(newBook) {
  const books = JSON.parse(fs.readFileSync('./books.json'));
  const newListBooks = [...books, newBook];
  fs.writeFileSync('books.json', JSON.stringify(newListBooks));
}

function modifyBook(updatedBook, id) {
  let books = JSON.parse(fs.readFileSync('./books.json'));
  const numericId = parseInt(id);
  const modifiedIndex = books.findIndex(book => book.id === numericId);

  const modifiedContent = { ...books[modifiedIndex], ...updatedBook };

  books[modifiedIndex] = modifiedContent;
  fs.writeFileSync('books.json', JSON.stringify(books));

}

function delBook(id) {
  let books = JSON.parse(fs.readFileSync('./books.json'));
  const numericId = parseInt(id);
  const bookIndex = books.findIndex(book => book.id === numericId);
  books.splice(bookIndex, 1);
  fs.writeFileSync('books.json', JSON.stringify(books));
}


module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    modifyBook,
    delBook
    };