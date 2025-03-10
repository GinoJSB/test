package com.example.demo.controller;
import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.model.Entity.Note;
import com.example.demo.service.INoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private INoteService notiServ;

    @GetMapping("/notes")
    public List<NoteResponseDTO> getNotas() {
        return notiServ.getNotes();
    }

    @PostMapping("/notes")
    public String saveNotas(@RequestBody NoteReqDTO noteReqDTO) {
        notiServ.saveNotes(noteReqDTO);
        return "The note was created successfully";
    }

    @DeleteMapping("/notes/{id}")
    public String deleteNotas(@PathVariable Long id) {
        notiServ.deleteNotes(id);
        return "The note was deleted successfully";
    }

    @PutMapping("/notes/{id}")
    public NoteResponseDTO updateNotas(@PathVariable Long id, @RequestBody NoteReqDTO noteReqDTO) {
        return notiServ.updateNote(id, noteReqDTO);
    }

    @PutMapping("/notes/archived/{id}")
    public String archiveNotas(@PathVariable Long id, @RequestParam(required = true) boolean archived) {
        notiServ.archiveNotes(id, archived);
        return archived ? "The note was archived successfully" : "The note was unarchived successfully";

    }
}

