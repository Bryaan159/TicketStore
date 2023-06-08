package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.dtos.SaveEventDTO;
import com.grupo05.proyecto.models.entities.Category;
import com.grupo05.proyecto.models.entities.Event;

public interface EventService {
	void save(SaveEventDTO info) throws Exception;
	void deleteById(String id) throws Exception;
	Event findOneById(String id);
	List<Event> findAll();
	List<Event> findByTtitleLike(String title);
	List<Event> findAllByCategory(Category category);
}
