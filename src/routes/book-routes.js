const Router = require("express").Router;
const { createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook } = require("../controllers/book-controller");

const BookRouter = Router();

//  GET `/books` Get all the books: `getBooks()` controller
BookRouter.get("/", getBooks);

//  GET `/books/:bookId` Get a single book by its ID: `getSingleBook()` controller
BookRouter.get("/:bookId", getSingleBook);

//  POST `/books` Create a book: `createBook()` controller
BookRouter.post("/", createBook);

//  PATCH `/books/:bookId` Update a book by its id: `updateBook()` controller
BookRouter.patch("/:bookId", updateBook);

//  DELETE `/books/:bookId` Delete a book by its id: `deleteBook()` controller
BookRouter.delete("/:bookId", deleteBook);

module.exports = BookRouter;
