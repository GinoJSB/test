import React, { useState, useEffect } from "react";
import { Note } from "../models/Note";
import { getArchivedNotes } from "../services/noteService";
import ArchivedNoteList from "../components/ArchivedNoteList";

const ArchivedNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = async () => {
    try {
      const data = await getArchivedNotes();
      setNotes(data);
      console.log("Notas actualizadas:", data);
    } catch (error) {
      console.error("Error cargando notas:", error);
    }
  };

  useEffect(() => {
    refreshNotes();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Archived Notes</h1>
      <ArchivedNoteList notes={notes} refreshNotes={refreshNotes} />
    </div>
  );
};

export default ArchivedNotes;
