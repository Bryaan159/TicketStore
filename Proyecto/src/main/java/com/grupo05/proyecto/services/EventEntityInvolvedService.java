package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.entities.EntityInvolved;
import com.grupo05.proyecto.models.entities.Event;
import com.grupo05.proyecto.models.entities.EventEntityInvolved;

public interface EventEntityInvolvedService {
	void save(Event event, EntityInvolved entityInvolved) throws Exception;
	void delete(EventEntityInvolved eventEntityInvolved);
	EventEntityInvolved findOneById(String event, String entityInvolved);
	List<EventEntityInvolved> findAll();
}
