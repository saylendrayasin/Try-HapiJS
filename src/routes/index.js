const { addNoteHandler, getAllNotesHandler } = require('../handler');
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
        method: 'POST',
        path: '/notes/{id}',
        handler: () => {}
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
