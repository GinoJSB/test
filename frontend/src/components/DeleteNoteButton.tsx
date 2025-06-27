import React from "react";
import { deleteNote } from "../services/noteService";

interface DeleteNoteButtonProps {
  noteId: number;
  onDeleted: () => void;
}

const DeleteNoteButton: React.FC<DeleteNoteButtonProps> = ({
  noteId,
  onDeleted,
}) => {
  const handleDelete = async () => {
    await deleteNote(noteId);
    onDeleted();
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteNoteButton;
