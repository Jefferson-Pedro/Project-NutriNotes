package br.com.nutrinotes.dto;

import java.util.List;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserWithBusinessDTO {
	
	private Integer idUser;
	
	@NotBlank
	@NotNull(message = "O campo nome não pode ser nulo")
	private String nome;
			
	@NotBlank
	@Email(message = "Email não é válido")
	@NotNull(message = "O campo nome não pode ser nulo")
	private String email;
	
	@NotBlank
	@NotNull(message = "O campo sexo não pode ser nulo")
	private String crn;
	
	private List<BusinessDTO> business;

	//GET AND SET
	
	public Integer getIdUser() {
		return idUser;
	}

	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCrn() {
		return crn;
	}

	public void setCrn(String crn) {
		this.crn = crn;
	}

	public List<BusinessDTO> getBusiness() {
		return business;
	}

	public void setBusiness(List<BusinessDTO> business) {
		this.business = business;
	}
}
