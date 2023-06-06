package com.grupo05.proyecto.models.entities;

import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@ToString(exclude = {"tickets"})
@Entity
@Table(name = "locality")
public class Locality {
	@Id
	@Column(name = "id_locality")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID idLocality;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "price")
	private Float price;
	
	@Column(name = "capacity")
	private Short capacity;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_event")
	private Event event;
	
	@OneToMany(mappedBy = "locality", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Ticket> tickets;
}
