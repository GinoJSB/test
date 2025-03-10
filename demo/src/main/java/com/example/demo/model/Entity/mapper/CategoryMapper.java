package com.example.demo.model.Entity.mapper;

import com.example.demo.model.DTO.CategoryResponseDTO;
import com.example.demo.model.Entity.Category;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    List<CategoryResponseDTO> toCategoryResponseDTO(List<Category> categories);
}
