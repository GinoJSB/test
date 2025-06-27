import React, { useState, useEffect } from "react";
import { Note } from "../models/Note";
import { getNotes } from "../services/noteService";
import NoteList from "../components/NoteList";

const ActiveNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = () => {
    getNotes().then((data) => setNotes(data.filter((n) => !n.archived)));
  };

  useEffect(() => {
    refreshNotes();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Active Notes</h1>
      <NoteList notes={notes} refreshNotes={refreshNotes} />
    </div>
  );
};

export default ActiveNotes;
