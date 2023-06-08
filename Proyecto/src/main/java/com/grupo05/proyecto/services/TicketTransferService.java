package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.dtos.TicketTransferDTO;
import com.grupo05.proyecto.models.entities.TicketTransfer;

public interface TicketTransferService {
	void save(TicketTransferDTO info) throws Exception;
	TicketTransfer findOneById(String id);
	List<TicketTransfer> findAll();
}
