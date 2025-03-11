import React, { useState } from 'react';
import { Note } from '../models/Note';
import DeleteNoteButton from './DeleteNoteButton';
import UnarchiveNoteButton from './UnarchiveNoteButton';
import EditNoteForm from './EditNoteForm';

interface ArchivedNoteListProps {
  notes: Note[];
  refreshNotes: () => void;
}

const ArchivedNoteList: React.FC<ArchivedNoteListProps> = ({ notes, refreshNotes }) => {
  const [editingNoteId, setEditingNoteId] = useState<number | null>(null);

  const handleEditClick = (id: number) => setEditingNoteId(id);
  const handleNoteUpdated = () => {
    setEditingNoteId(null);
    refreshNotes();
  };

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div className="note-card archived" key={note.id}>
          {editingNoteId === note.id ? (
            <EditNoteForm noteId={note.id} onNoteUpdated={handleNoteUpdated} />
          ) : (
            <>
              <h3 className="note-heading">{note.title}</h3>
              <p className="note-text">{note.content}</p>
              <div className="category-badge">{note.category.name}</div>
              <div className="note-actions">
                <button className="btn" onClick={() => handleEditClick(note.id)}>
                  Editar
                </button>
                <DeleteNoteButton noteId={note.id} onDeleted={refreshNotes} />
                <UnarchiveNoteButton noteId={note.id} onUnarchived={refreshNotes} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArchivedNoteList;
