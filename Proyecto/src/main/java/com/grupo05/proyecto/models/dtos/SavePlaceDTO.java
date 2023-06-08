package com.grupo05.proyecto.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SavePlaceDTO {
	@NotEmpty(message = "Id is required")
	private String idPlace;
	
	@NotEmpty(message = "Name is required")
	private String name;
}
