package com.grupo05.proyecto.models.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = {"events"})
@Entity
@Table(name = "place")
public class Place {
	@Id
	@Column(name = "id_place")
	private String idPlace;
	
	@Column(name = "name")
	private String name;
	
	// relación 1-N con la tabla "event"
	@OneToMany(mappedBy = "place", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Event> events;
	
	public Place(String idPlace, String name) {
		super();
		this.idPlace = idPlace;
		this.name = name;
	}
}
