package com.example.demo.service;
import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.model.Entity.Category;
import com.example.demo.model.Entity.Note;
import com.example.demo.model.Entity.mapper.NoteMapper;
import com.example.demo.repository.INoteRepository;
import com.example.demo.service.category.ICategoryService;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.Optional;
import java.util.List;

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
        // Obtenemos la categoría correspondiente al ID enviado en el DTO
        Category category = categoryService.findAllById(List.of(dto.getCategoryId())).get(0);
        Note note = new Note();
        note = noteMapper.updateNoteReqDTOToNote(dto, note);
        note.setCategory(category);
        repository.save(note);
    }

    @Override
    public void deleteNotes(Long id) {
        repository.deleteById(id);
    }

    @Override
    public NoteResponseDTO findNotes(Long id) {
        Optional<Note> noteOpt = repository.findById(id);
        return noteMapper.noteToNoteResponseDTO(getNoteIfPresent(noteOpt, id));
    }

    @Override
    public NoteResponseDTO updateNote(Long id, NoteReqDTO notiReqDTO) {
        Optional<Note> noteOpt = repository.findById(id);
        Note note = noteMapper.updateNoteReqDTOToNote(notiReqDTO, getNoteIfPresent(noteOpt, id));


        Category category = categoryService.findAllById(List.of(notiReqDTO.getCategoryId())).get(0);
        note.setCategory(category);

        repository.save(note);
        return noteMapper.noteToNoteResponseDTO(note);
    }

    @Override
    public void archiveNotes(Long id, boolean archived) {
        Optional<Note> noteOpt = repository.findById(id);
        Note note = getNoteIfPresent(noteOpt, id);
        note.setArchived(archived);
        repository.save(note);
    }

    private Note getNoteIfPresent(Optional<Note> note, Long id) {
        if (note.isEmpty()) {
            throw new EntityNotFoundException("Note with id: " + id + " not found");
        }
        return note.get();
    }
}
