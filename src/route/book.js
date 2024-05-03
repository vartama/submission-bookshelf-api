const { addBook, getBooks, detailBook, editBook, deleteBook } = require('../controller/bookController.js');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBook,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,

    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: detailBook,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook,
    },
];

module.exports = routes;