class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    const { title = 'untitled', body, tags } = request.payload;
    const noteId = this._service.addNote({ title, body, tags });
    try {
      const note = this._service.getNote(noteId);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan.',
        data: {
          note,
        },
      });
      response.code(201);
      return response; 
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(400);
      return response;
    }
  }
  

  getNotesHandler() {
    console.log("di dalam handler getNotesHandler, masuk gk sih?");
    const notes = this._service.getNotes();
    const response = h.response({
      status: 'success',
      data: {
        notes,
      },
    });
    response.code(200);
    return response; 
  }

  getNoteIdByHandler(request, h) {
    try {
      const { id } = request.payload;
      const note = this._service.getNoteById(id);
      const response = h.response({
        status: 'success',
        data: {
          note,
        },
      });
      response.code(200);
      return response; 
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response; 
    }
  }

  putNoteByIdHandler(request, h) {
    try {
      const { id } = request.payload;
      const note = this._service.editNoteById(id, request.payload);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil diubah.',
        data: {
          note,
        },
      });
      response.code(200);
      return response; 
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response; 
    }
  }

  deleteNoteByIdHandler(request, h) {
    try {
      const { id } = request.payload;
      this._service.deleteNoteById(id);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus.',
      });
      response.code(200);
      return response; 
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(404);
      return response; 
    }
  }
}

module.exports = NotesHandler;
