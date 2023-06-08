package com.grupo05.proyecto.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SaveCategoryDTO {
	@NotEmpty(message = "Id is required")
	private String idCategory;
	
	@NotEmpty(message = "Name is required")
	private String name;
}
