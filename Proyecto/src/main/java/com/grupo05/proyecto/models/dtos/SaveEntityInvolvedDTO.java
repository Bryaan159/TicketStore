package com.grupo05.proyecto.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SaveEntityInvolvedDTO {
	@NotEmpty(message = "Id is required")
	private String idEntityInvolved;
	
	@NotEmpty(message = "Name is required")
	private String name;
}
