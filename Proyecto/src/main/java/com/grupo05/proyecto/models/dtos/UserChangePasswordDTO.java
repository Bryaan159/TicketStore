package com.grupo05.proyecto.models.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UserChangePasswordDTO {
	// Id user or email
	@NotEmpty(message = "Identifier is required")
	private String identifier;
	
	@NotEmpty(message = "Current password is required")
	private String currentPassword;
	
	@NotEmpty(message = "New password is required")
	private String newPassword;
}
