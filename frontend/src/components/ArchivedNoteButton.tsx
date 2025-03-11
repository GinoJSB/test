import React from 'react';
import { archiveNote } from '../services/noteService';

interface ArchivedNoteButtonProps {
  noteId: number;
  archived: boolean;
  onArchived: () => void;
}

const ArchivedNoteButton: React.FC<ArchivedNoteButtonProps> = ({ noteId, archived, onArchived }) => {
  const handleArchive = async () => {
    await archiveNote(noteId, true);
    onArchived();
  };

  return (
    <button onClick={handleArchive}>
      {archived ? 'Unarchive' : 'Archive'}
    </button>
  );
};

export default ArchivedNoteButton;