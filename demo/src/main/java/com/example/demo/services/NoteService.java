package com.example.demo.service;

import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.model.Entity.Note;
import com.example.demo.model.Entity.mapper.NoteMapper;
import com.example.demo.repository.INoteRepository;
import com.example.demo.services.category.ICategoryService;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService implements INoteService {
    private final INoteRepository repository;
    private final NoteMapper noteMapper;
    private final ICategoryService categoryService;

    public NoteService(INoteRepository repository, NoteMapper noteMapper, ICategoryService categoryService) {
        this.repository = repository;
        this.noteMapper = noteMapper;
        this.categoryService = categoryService;
    }

    @Override
    public List<NoteResponseDTO> getNotes() {
        List<Note> notes = repository.findAll();
        return noteMapper.notesToNotesResponseDTO(notes);
    }

    @Override
    public void saveNotes(NoteReqDTO dto) {

        var category = categoryService.findAllById(List.of(dto.getCategoryId())).get(0);
        Note note = noteMapper.updateNoteReqDTOToNote(dto, new Note());
        note.setCategory(category);
        repository.save(note);
    }


    private Note getNoteIfPresent(Optional<Note> note, Long id) {
        return note.orElseThrow(() -> new EntityNotFoundException("Note with id: " + id + " not found"));
    }
}
