import React, { useState, useEffect } from 'react';
import { Note } from '../models/Note';
import { getArchivedNotes } from '../services/noteService';
import ArchivedNoteList from '../components/ArchivedNoteList';

const ArchivedNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = async () => {
    try {
      const data = await getArchivedNotes();
      setNotes(data);
      console.log("Notas actualizadas:", data); // Verificar en consola
    } catch (error) {
      console.error("Error cargando notas:", error);
    }
  };

  useEffect(() => { 
    refreshNotes();
  }, []);

  return (
    <div className="page-container">
      <h1 className="main-title">Notas Archivadas</h1>
      <ArchivedNoteList 
        notes={notes} 
        refreshNotes={refreshNotes} // Pasamos la función actualizada
      />
    </div>
  );
};

export default ArchivedNotes;