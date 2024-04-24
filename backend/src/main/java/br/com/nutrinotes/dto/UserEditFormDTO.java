package br.com.nutrinotes.dto;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;

public class UserEditFormDTO {
	
	@Column(name="id_user")
	private Integer idUser;
	
	@NotBlank(message = "Nome não pode estar em branco")
	@NotNull(message = "O campo nome não pode ser nulo")
	@Length(min = 3, max = 75, message = "Campo telefone deve ter entre 3 e 75 caracteres")
	@Column(name="nome")
	private String nome;
	
	@Past
	@NotNull(message = "O campo Data de Nascimento não pode ser nulo")
	@Column(name="data_nasc")
	private LocalDate data_nasc;
	
	@NotBlank
	@NotNull(message = "O campo sexo não pode ser nulo")
	@Length(max = 1 )
	@Column(name="sexo")
	private String sexo;
	
	@NotBlank
	@Email(message = "Email não é válido")
	@NotNull(message = "O campo nome não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="email", length = 50)
	private String email;
		
	@NotBlank
	@NotNull(message = "O campo telefone não pode ser nulo")
	@Length(min = 3, max = 45)
	@Column(name="telefone", length = 45)
	private String telefone;
	
	@NotBlank
	@NotNull(message = "O campo sexo não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="crn", length = 45)
	private String crn;
	
	@OneToMany(mappedBy = "responsavelTec", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("responsavelTec")
	private List<Business> business;

	//GET E SET

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

	public LocalDate getData_nasc() {
		return data_nasc;
	}

	public void setData_nasc(LocalDate data_nasc) {
		this.data_nasc = data_nasc;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCrn() {
		return crn;
	}

	public void setCrn(String crn) {
		this.crn = crn;
	}

	public List<Business> getBusiness() {
		return business;
	}

	public void setBusiness(List<Business> business) {
		this.business = business;
	}

//	@Override
//	public String toString() {
//		return "UserEditFormDTO [idUser=" + idUser + ", nome=" + nome + ", data_nasc=" + data_nasc + ", sexo=" + sexo
//				+ ", email=" + email + ", telefone=" + telefone + ", crn=" + crn + ", business=" + business + "]";
//	}
	
	
}
