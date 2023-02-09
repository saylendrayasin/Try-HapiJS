const { nanoid } = require('nanoid');
const { notes } = require('./notes');

const addNoteHandler = (req, h) => {
    const { title, tags, body } = req.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString;
    const updateAt = createdAt;

    const newNote = {
        title,
        tags,
        body,
        id,
        createdAt,
        updateAt
    };

    notes.push(newNote);

    const isSucces = notes.filter((note) => note.id === id).length > 0;

    if (isSucces) {
        const response = h
            .response({
                status: 'Succes',
                error: false,
                message: 'Catatan berhasil ditambah',
                data: {
                    noteId: id
                }
            })
            .code(201);
        return response;
    }

    const response = h
        .response({
            status: 'fail',
            message: 'Catatan tidak bisa ditambahkan'
        })
        .code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: 'succes',
    data: {
        notes
    }
});

const getOneNotesHandler = (req, h) => {
    const { id } = req.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: 'succes',
            data: {
                note
            }
        };
    }

    const response = h
        .response({
            status: 'fail',
            message: 'Catatan tidak ditemukan'
        })
        .code(400);
    return response;
};

const editOneHandler = (req, h) => {
    const { id } = req.params;

    const { title, tags, body } = req.payload;
    const updateAt = new Date().toISOString;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updateAt
        };

        const response = h
            .response({
                status: 'succes',
                message: 'Berhasil memperbarui catatan'
            })
            .code(201);
        return response;
    }

    const response = h
        .response({
            status: 'fail',
            message: 'Gagal memperbarui catatan'
        })
        .code(404);
    return response;
};

const deleteNoteHandler = (req, h) => {
    const { id } = req.params;
    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);
        const response = h
            .response({
                status: 'succes',
                message: 'Catatan berhasil dihapus'
            })
            .code(200);
        return response;
    }

    const response = h
        .response({
            status: 'fail',
            message: 'Catatan tidak berhasil dihapus, catatan tidak ditemukan'
        })
        .code(404);
    return response;
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getOneNotesHandler,
    editOneHandler,
    deleteNoteHandler
};
