import React, { useState, useEffect } from "react";
import { Category } from "../models/category";
import { Note } from "../models/Note";
import { getNotes, getArchivedNotes } from "../services/noteService";

interface FilterNoteProps {
  onFilterChange: (filteredNotes: Note[]) => void;
  categories: Category[];
  isArchived?: boolean;
}

const FilterNote: React.FC<FilterNoteProps> = ({
  onFilterChange,
  categories,
  isArchived = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadNotes = async () => {
      setLoading(true);
      try {
        const notes = isArchived
          ? await getArchivedNotes()
          : (await getNotes()).filter((note) => !note.archived);

        applyFilter(notes, selectedCategory);
      } catch (error) {
        console.error("Error loading notes:", error);
      }
      setLoading(false);
    };

    loadNotes();
  }, [isArchived]);

  const applyFilter = (notes: Note[], category: string) => {
    const filtered =
      category === "all"
        ? notes
        : notes.filter(
            (note) =>
              note.category.name.toLowerCase() === category.toLowerCase()
          );

    onFilterChange(filtered);
  };

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
    try {
      const notes = isArchived
        ? await getArchivedNotes()
        : (await getNotes()).filter((note) => !note.archived);

      applyFilter(notes, category);
    } catch (error) {
      console.error("Error filtering notes:", error);
    }
  };

  const categoryOptions = ["All", ...categories.map((c) => c.name)];

  return (
    <div className="mb-4">
      <label className="form-label me-2">Filter by category:</label>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <select
          className="form-select w-auto d-inline-block"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          disabled={loading}
        >
          {categoryOptions.map((category) => (
            <option
              key={category}
              value={category === "All" ? "all" : category}
            >
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FilterNote;
