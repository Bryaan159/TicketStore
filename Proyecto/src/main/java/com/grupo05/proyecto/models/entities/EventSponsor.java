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
@Table(name = "event_sponsor")
public class EventSponsor {
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_event")
	private Event event;
	
	@Id
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_sponsor")
	private Sponsor sponsor;
	
	public EventSponsor(Event event, Sponsor sponsor) {
		super();
		this.event = event;
		this.sponsor = sponsor;
	}
}
