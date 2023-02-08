const {
    addNoteHandler,
    getAllNotesHandler,
    getOneNotesHandler,
    editOneHandler,
    deleteNoteHandler
} = require('../handler');
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Ini halaman homepage';
        }
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getOneNotesHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editOneHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteHandler
    },
    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    }
];

module.exports = routes;
