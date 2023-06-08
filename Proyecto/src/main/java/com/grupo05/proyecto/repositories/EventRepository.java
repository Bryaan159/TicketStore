package com.grupo05.proyecto.repositories;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.grupo05.proyecto.models.entities.Event;

public interface EventRepository
	extends ListCrudRepository<Event, UUID>{

}
