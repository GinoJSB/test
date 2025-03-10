package com.example.demo.repository;

import com.example.demo.model.Entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface INoteRepository extends JpaRepository<Note, Long> {
}
