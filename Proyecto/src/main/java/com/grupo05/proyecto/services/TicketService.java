package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.entities.Locality;
import com.grupo05.proyecto.models.entities.Ticket;

public interface TicketService {
	void save(Locality locality) throws Exception;
	void deleteById(String id) throws Exception;
	Ticket findOneById(String id);
	List<Ticket> findAll();
	List<Ticket> findAllByLocality(Locality locality);
}
