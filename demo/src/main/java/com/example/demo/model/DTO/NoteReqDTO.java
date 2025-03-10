package com.example.demo.model.DTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;
import jakarta.annotation.Nullable;

@Getter
@Setter
@Builder
public class NoteReqDTO {
    @NotNull
    private String title;
    @Nullable
    private String content;
    @NotNull
    private Boolean archived;
    @NotNull
    private Long categoryId;
}
