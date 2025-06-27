import React from "react";
import NoteForm from "../components/NoteForm";

const Home: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h1 className="text-center mb-4">Create New Note</h1>
        <NoteForm onNoteAdded={() => window.location.reload()} />
      </div>
    </div>
  );
};

export default Home;
