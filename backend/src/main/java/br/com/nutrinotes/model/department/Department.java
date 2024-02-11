package br.com.nutrinotes.model.department;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "department")
public class Department {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_setores")
	private Integer idSetores;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo nome do gestor não pode ser nulo")
	@Column(name = "nome")
	private String nome;
	
	@ManyToOne
	@JoinColumn(name = "id_business")
	@JsonIgnoreProperties("setores")
	private Business idBusiness;
		
	//GET AND SET
	
	public Integer getIdSetores() {
		return idSetores;
	}

	public void setIdSetores(Integer idSetores) {
		this.idSetores = idSetores;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Business getIdBusiness() {
		return idBusiness;
	}

	public void setIdBusiness(Business idBusiness) {
		this.idBusiness = idBusiness;
	}
}
