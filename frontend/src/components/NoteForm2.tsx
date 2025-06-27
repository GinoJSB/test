import React, { useState } from "react";

const NoteForm2: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.length < 10) {
      alert("El contenido debe tener al menos 10 caracteres");
      return;
    }

    console.log("Titulo:", title);
    console.log("Contenido", content);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
      <div className="mb-3">
        <label className="form-label">Titulo</label>
        <input
          type="text"
          className="form-control"
          placeholder="Escribe un titulo breve"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title.trim() === "" && (
          <p className="text-danger mt-1">El titulo es obligatorio</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Contenido</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Guardar
      </button>
    </form>
  );
};

export default NoteForm2;
