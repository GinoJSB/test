package com.example.demo.model.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private boolean archived = false;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Note() {
    }

    public Note(Long id, String titulo, String contenido, boolean archived) {
        this.id = id;
        this.title = titulo;
        this.content = contenido;
        this.archived = archived;
    }
}

