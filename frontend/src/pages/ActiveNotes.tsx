import React, { useState, useEffect } from 'react';
import { Note } from '../models/Note';
import { getNotes } from '../services/noteService';
import NoteList from '../components/NoteList';

const ActiveNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = () => {
    getNotes().then(data => setNotes(data.filter(n => !n.archived)));
  };

  useEffect(() => { refreshNotes(); }, []);

  return (
    <div className="page-container">
      <h1 className="main-title">Notas Activas</h1>
      <NoteList notes={notes} refreshNotes={refreshNotes} />
    </div>
  );
};


export default ActiveNotes;