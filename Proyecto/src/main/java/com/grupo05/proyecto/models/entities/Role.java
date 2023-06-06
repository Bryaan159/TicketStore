package com.grupo05.proyecto.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "role")
public class Role {
	@Id
	@Column(name = "id_role")
	private String idRole;
	
	@Column(name = "name")
	private String name;
}
