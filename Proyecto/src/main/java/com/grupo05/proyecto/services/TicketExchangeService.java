package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.dtos.TicketExchangeDTO;
import com.grupo05.proyecto.models.entities.TicketExchange;

public interface TicketExchangeService {
	void save(TicketExchangeDTO info) throws Exception;
	TicketExchange findOneById(String id);
	List<TicketExchange> findAll();
}
