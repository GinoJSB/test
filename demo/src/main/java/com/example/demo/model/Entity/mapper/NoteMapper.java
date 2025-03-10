package com.example.demo.model.Entity.mapper;

import com.example.demo.model.DTO.NoteReqDTO;
import com.example.demo.model.DTO.NoteResponseDTO;
import com.example.demo.model.Entity.Note;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import java.util.List;


@Mapper(componentModel = "spring", uses = { CategoryMapper.class })
public interface NoteMapper {

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Note updateNoteReqDTOToNote(NoteReqDTO dto, @MappingTarget Note note);


    @Mapping(target = "category", source = "category")
    NoteResponseDTO noteToNoteResponseDTO(Note note);

    List<NoteResponseDTO> notesToNotesResponseDTO(List<Note> notes);
}
