package com.grupo05.proyecto.repositories;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.grupo05.proyecto.models.entities.TicketTransfer;

public interface TicketTransferRepository
	extends ListCrudRepository<TicketTransfer, UUID>{

}
