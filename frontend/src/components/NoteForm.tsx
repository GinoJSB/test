import React, { useState, useEffect } from "react";
import { NoteReqDTO } from "../models/Note";
import { saveNote } from "../services/noteService";
import { getCategories } from "../services/categoryServices";
import { Category } from "../models/category";

const NoteForm: React.FC<{ onNoteAdded: () => void }> = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Write the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content:
        </label>
        <textarea
          id="content"
          className="form-control"
          placeholder="Write your note here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select
          id="category"
          className="form-select"
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

      <button type="submit" className="btn btn-success w-100">
        Create Note
      </button>
    </form>
  );
};

export default NoteForm;
