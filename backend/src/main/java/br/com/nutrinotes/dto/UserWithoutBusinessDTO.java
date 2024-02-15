package br.com.nutrinotes.dto;

import br.com.nutrinotes.model.user.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserWithoutBusinessDTO {
	
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
	
	public static UserWithoutBusinessDTO fromUserWithoutBusinessDTO(User user) {
		UserWithoutBusinessDTO dto = new UserWithoutBusinessDTO();
		
		dto.setIdUser(user.getIdUser());
		dto.setNome(user.getNome());
		dto.setEmail(user.getEmail());
		dto.setCrn(user.getCrn());
		
		return dto;
	}
}
