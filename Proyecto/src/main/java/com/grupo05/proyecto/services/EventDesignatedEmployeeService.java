package com.grupo05.proyecto.services;

import java.util.List;

import com.grupo05.proyecto.models.entities.Event;
import com.grupo05.proyecto.models.entities.EventDesignatedEmployee;
import com.grupo05.proyecto.models.entities.User;

public interface EventDesignatedEmployeeService {
	void save(Event event, User employee) throws Exception;
	void delete(EventDesignatedEmployee eventDesignatedEmployee) throws Exception;
	EventDesignatedEmployee findOneById(String id, String employee);
	List<EventDesignatedEmployee> findAll();
}
