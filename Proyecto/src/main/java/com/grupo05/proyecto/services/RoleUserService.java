package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.entities.Role;
import com.grupo05.proyecto.models.entities.RoleUser;
import com.grupo05.proyecto.models.entities.User;

public interface RoleUserService {
	void Save(Role role, User user) throws Exception;
	void delete(RoleUser roleUser) throws Exception;
	RoleUser findOneById(String role, String user);
	List<RoleUser> findAll();
}
