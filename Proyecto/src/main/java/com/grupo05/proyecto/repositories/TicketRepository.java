package com.grupo05.proyecto.repositories;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.grupo05.proyecto.models.entities.Ticket;

public interface TicketRepository
	extends ListCrudRepository<Ticket, UUID>{

}
