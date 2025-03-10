package com.example.demo.service;

import com.example.demo.model.DTO.CategoryResponseDTO;
import com.example.demo.model.Entity.Category;
import com.example.demo.repository.ICategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService implements ICategoryService {
    private final ICategoryRepository repository;

    public CategoryService(ICategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<CategoryResponseDTO> getAll() {
        List<Category> categories = repository.findAll();
        return categories.stream()
                .map(category -> CategoryResponseDTO.builder()
                        .id(category.getId())
                        .name(category.getName())
                        .build())
                .collect(Collectors.toList());
    }


}
