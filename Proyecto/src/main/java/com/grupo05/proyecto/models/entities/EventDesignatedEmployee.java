package com.grupo05.proyecto.models.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "event_designated_employee")
public class EventDesignatedEmployee {
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_event")
	private Event event;
	
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_employee")
	private User employee;
	
	public EventDesignatedEmployee(Event event, User employee) {
		super();
		this.event = event;
		this.employee = employee;
	}
}
