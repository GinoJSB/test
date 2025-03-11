import React from 'react';
import { deleteNote } from '../services/noteService';

interface DeleteNoteButtonProps {
  noteId: number;
  onDeleted: () => void;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({ noteId, onDeleted }) => {
  const handleDelete = async () => {
    await deleteNote(noteId);
    onDeleted();
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteNoteButton;