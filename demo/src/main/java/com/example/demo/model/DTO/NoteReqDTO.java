package com.example.demo.model.DTO;

import jakarta.annotation.Nullable;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@Builder
@Getter
@Setter
public class    NoteReqDTO {
    @NotNull
    private String title;
    @Nullable
    private String content;
    @NotNull
    private Boolean archived;
    @NotNull
    private Long categoryId;
}
