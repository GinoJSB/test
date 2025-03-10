package com.example.demo.model.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class NoteResponseDTO {
    private Long id;
    private String title;
    private String content;
    private boolean archived;
    private CategoryResponseDTO category;
}
