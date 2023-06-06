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
@Table(name = "event_entity_involved")
public class EventEntityInvolved {
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_event")
	private Event event;
	
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_entity_involved")
	private EntityInvolved entityInvolved;
	
	public EventEntityInvolved(Event event, EntityInvolved entityInvolved) {
		super();
		this.event = event;
		this.entityInvolved = entityInvolved;
	}
}
