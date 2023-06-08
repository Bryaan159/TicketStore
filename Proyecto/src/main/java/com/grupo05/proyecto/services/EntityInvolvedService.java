package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.dtos.SaveEntityInvolvedDTO;
import com.grupo05.proyecto.models.entities.EntityInvolved;

public interface EntityInvolvedService {
	void save(SaveEntityInvolvedDTO info) throws Exception;
	void deleteById(String id) throws Exception;
	EntityInvolved findOneById(String id);
	List<EntityInvolved> findAll();
}
