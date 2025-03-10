package com.example.demo.controller;

import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.service.INoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NoteController {
    private final INoteService noteService;

    public NoteController(INoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<NoteResponseDTO> getNotes() {
        return noteService.getNotes();
    }

    @PostMapping
    public String saveNotes(@RequestBody NoteReqDTO noteReqDTO) {
        noteService.saveNotes(noteReqDTO);
        return "Note created successfully";
    }

    @DeleteMapping("/{id}")
    public String deleteNotes(@PathVariable Long id) {
        noteService.deleteNotes(id);
        return "Note deleted successfully";
    }

    @PutMapping("/{id}")
    public NoteResponseDTO updateNote(@PathVariable Long id, @RequestBody NoteReqDTO noteReqDTO) {
        return noteService.updateNote(id, noteReqDTO);
    }

    @PutMapping("/archived/{id}")
    public String archiveNotes(@PathVariable Long id, @RequestParam boolean archived) {
        noteService.archiveNotes(id, archived);
        return archived ? "Note archived successfully" : "Note unarchived successfully";
    }
}
