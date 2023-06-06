package com.grupo05.proyecto.models.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ticket")
public class Ticket {
	@Id
	@Column(name = "id_ticket")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID idTicket;
	
	@Column(name = "is_sold")
	private Boolean isSold;
	
	@Column(name = "date_purcharse")
	private Date datePurchase;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_locality")
	private Locality locality;
	
	// private User buyer;
	
	// private User owner;
}
