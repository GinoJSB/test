import React from 'react';
import NoteForm from '../components/NoteForm';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="form-wrapper">
        <h1 className="main-title">Crear Nueva Nota</h1>
        <NoteForm onNoteAdded={() => window.location.reload()} />
      </div>
    </div>
  );
};

export default Home;