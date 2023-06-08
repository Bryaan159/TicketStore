package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.dtos.SaveCategoryDTO;
import com.grupo05.proyecto.models.entities.Category;

public interface CategoryService {
	void save(SaveCategoryDTO info) throws Exception;
	void deleteById(String id) throws Exception;
	Category findOneById(String id);
	List<Category> findAll();
}
