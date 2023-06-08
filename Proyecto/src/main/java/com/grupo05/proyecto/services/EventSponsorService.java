package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.entities.Event;
import com.grupo05.proyecto.models.entities.EventSponsor;
import com.grupo05.proyecto.models.entities.Sponsor;

public interface EventSponsorService {
	void save(Event event, Sponsor sponsor) throws Exception;
	void delete(EventSponsor eventSponsor) throws Exception;
	EventSponsor findOneById(String event, String sponsor);
	List<EventSponsor> findAll();
}
