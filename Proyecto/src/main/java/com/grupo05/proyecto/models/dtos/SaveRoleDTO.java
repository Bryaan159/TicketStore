package com.grupo05.proyecto.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SaveRoleDTO {
	@NotEmpty(message = "Id is required")
	private String idRole;
	
	@NotEmpty(message = "Name is required")
	private String name;
}
