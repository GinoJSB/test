import React, { useState, useEffect } from 'react';
import { NoteReqDTO } from '../models/Note';
import { saveNote } from '../services/noteService';
import { getCategories } from '../services/categoryServices';
import { Category } from '../models/category';

const NoteForm: React.FC<{ onNoteAdded: () => void }> = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState<number>(1);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: NoteReqDTO = {
      title,
      content,
      archived: false,
      categoryId,
    };
    await saveNote(newNote);
    onNoteAdded();
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          type="text"
          placeholder="Escribe un título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Contenido:</label>
        <textarea
          id="content"
          placeholder="Escribe tu nota aquí"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">
        Crear Nota
      </button>
    </form>
  );
};

export default NoteForm;