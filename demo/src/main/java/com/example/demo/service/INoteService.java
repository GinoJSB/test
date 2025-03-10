package com.example.demo.service;

import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.model.Entity.Note;

import java.util.List;

public interface INoteService  {


    public void saveNotes (NoteReqDTO dto);


    public void deleteNotes (Long id);

    public NoteResponseDTO findNotes(Long id);



    public void archiveNotes (Long id, boolean archived);


    NoteResponseDTO updateNote(Long id, NoteReqDTO notiReqDTO);

    List<NoteResponseDTO> getNotes();
}
