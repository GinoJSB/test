import React, { useState, useEffect } from 'react';
import { NoteReqDTO } from '../models/Note';
import { updateNote, getNotes } from '../services/noteService';
import { getCategories } from '../services/categoryServices';
import { Category } from '../models/category';

interface EditNoteFormProps {
  noteId: number;
  onNoteUpdated: () => void;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ noteId, onNoteUpdated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState<number>(1);
  const [archived, setArchived] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchNoteAndCategories = async () => {
      const notes = await getNotes();
      const note = notes.find((n) => n.id === noteId);
      if (note) {
        setTitle(note.title);
        setContent(note.content || '');
        setCategoryId(note.category.id);
        setArchived(note.archived); // Mantiene el estado original
      }
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    fetchNoteAndCategories();
  }, [noteId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedNote: NoteReqDTO = { title, content, archived, categoryId };
    await updateNote(noteId, updatedNote);
    onNoteUpdated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Update Note</button>
    </form>
  );
};

export default EditNoteForm;
