package br.com.nutrinotes.dto;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.model.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Past;

public class UserViewDTO {
	
	@Column(name="id_user")
	private Integer idUser;
	
	@Length(min = 3, max = 75, message = "Campo telefone deve ter entre 3 e 75 caracteres")
	@Column(name="nome")
	private String nome;
	
	@Past
	@Column(name="data_nasc")
	private LocalDate data_nasc;
	
	@Length(max = 1 )
	@Column(name="sexo")
	private String sexo;
	
	@Email(message = "Email não é válido")
	@Length(min = 3, max = 75)
	@Column(name="email", length = 50)
	private String email;
	
	@Length(min = 3, max = 45)
	@Column(name="telefone", length = 45)
	private String telefone;
	
	@Length(min = 3, max = 75)
	@Column(name="crn", length = 45)
	private String crn;
	
	@Length(max = 255)
	@Column(name="link_photo")
	private String imageProfile;
	
	@OneToMany(mappedBy = "responsavelTec", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("responsavelTec")
	private List<Business> business;

	
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


	public String getImageProfile() {
		return imageProfile;
	}


	public void setImageProfile(String imageProfile) {
		this.imageProfile = imageProfile;
	}


	public List<Business> getBusiness() {
		return business;
	}


	public void setBusiness(List<Business> business) {
		this.business = business;
	}
	
	public static UserViewDTO fromUserWithoutBusinessDTO(User user) {
		UserViewDTO dto = new UserViewDTO();
		
		dto.setIdUser(user.getIdUser());
		dto.setNome(user.getNome());
		dto.setSexo(user.getSexo());
		dto.setEmail(user.getEmail());
		dto.setCrn(user.getCrn());
		
		return dto;
	}
}
