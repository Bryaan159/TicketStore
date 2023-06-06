package com.grupo05.proyecto.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "role_user")
public class RoleUser {
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_role")
	private Role role;
	
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_user")
	private User user;
	
	public RoleUser(Role role, User user) {
		super();
		this.role = role;
		this.user = user;
	}
}
