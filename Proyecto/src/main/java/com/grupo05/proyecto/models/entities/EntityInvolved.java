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
@Table(name = "entity_involved")
public class EntityInvolved {
	@Id
	@Column(name = "id_entity_involved")
	private String idEntityInvolved;
	
	@Column(name = "name")
	private String name;
}
