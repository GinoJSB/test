import React from 'react';
import { archiveNote } from '../services/noteService';

interface Props {
  noteId: number;
  onUnarchived: () => void;
}

const UnarchiveNoteButton: React.FC<Props> = ({ noteId, onUnarchived }) => {
  const handleUnarchive = async () => {
    try {
      await archiveNote(noteId, false);
      onUnarchived();
    } catch (error) {
      console.error("Error al desarchivar:", error);
    }
  };

  return (
    <button 
      className="btn-unarchive"
      onClick={handleUnarchive}
    >
      Desarchivar
    </button>
  );
};

export default UnarchiveNoteButton;