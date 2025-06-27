import React, { useState } from "react";
import { Note } from "../models/Note";
import DeleteNoteButton from "./DeleteNoteButton";
import UnarchiveNoteButton from "./UnarchiveNoteButton";
import EditNoteForm from "./EditNoteForm";

interface ArchivedNoteListProps {
  notes: Note[];
  refreshNotes: () => void;
}

const ArchivedNoteList: React.FC<ArchivedNoteListProps> = ({
  notes,
  refreshNotes,
}) => {
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const handleEditClick = (id: number) => setEditingNoteId(id);
  const handleNoteUpdated = () => {
    setEditingNoteId(null);
    refreshNotes();
  };

  return (
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-4 mb-4" key={note.id}>
          <div className="card h-100 border-warning">
            <div className="card-body">
              {editingNoteId === note.id ? (
                <EditNoteForm
                  noteId={note.id}
                  onNoteUpdated={handleNoteUpdated}
                />
              ) : (
                <>
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                  <span className="badge bg-warning mb-3">
                    {note.category.name}
                  </span>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-warning btn-sm"
                      onClick={() => handleEditClick(note.id)}
                    >
                      Edit
                    </button>
                    <DeleteNoteButton
                      noteId={note.id}
                      onDeleted={refreshNotes}
                    />
                    <UnarchiveNoteButton
                      noteId={note.id}
                      onUnarchived={refreshNotes}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchivedNoteList;
