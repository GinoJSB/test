import { Note, NoteReqDTO } from '../models/Note';

const API_URL = 'http://localhost:8080';

export const getNotes = async (): Promise<Note[]> => {
  const response = await fetch(`${API_URL}/notes`);
  return response.json();
};

export const getArchivedNotes = async (): Promise<Note[]> => {
  const notes = await getNotes();
  return notes.filter((note) => note.archived);
};

export const saveNote = async (note: NoteReqDTO): Promise<void> => {
  await fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
};

export const deleteNote = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/notes/${id}`, { method: 'DELETE' });
};

export const updateNote = async (id: number, note: NoteReqDTO): Promise<Note> => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return response.json();
};

export const archiveNote = async (id: number, archived: boolean): Promise<void> => {
  await fetch(`${API_URL}/notes/archived/${id}?archived=${archived}`, {
    method: 'PUT',
  });
};