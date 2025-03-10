package com.example.demo.service.category;

import com.example.demo.model.DTO.CategoryResponseDTO;
import com.example.demo.model.Entity.Category;
import com.example.demo.model.Entity.mapper.CategoryMapper;
import com.example.demo.repository.ICategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoryService implements ICategoryService {

    private final ICategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public CategoryService(ICategoryRepository categoryRepository, CategoryMapper categoryMapper) {
        this.categoryRepository = categoryRepository;
        this.categoryMapper = categoryMapper;
    }

    @Override
    public List<Category> findAllById(List<Long> ids) {
        return categoryRepository.findAllById(ids);
    }


    public List<CategoryResponseDTO> getAll() {
        List<Category> categories = categoryRepository.findAll();
        return categoryMapper.categoriesToCategoryResponseDTO(categories);
    }
}
