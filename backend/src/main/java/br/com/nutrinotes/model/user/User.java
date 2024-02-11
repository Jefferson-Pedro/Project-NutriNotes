package br.com.nutrinotes.model.user;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_profile")
	private Integer idProfile;
	
	@NotBlank
	@NotNull(message = "O campo nome não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="nome", length = 100)
	private String nome;
	
	@NotBlank
	@NotNull(message = "O campo Data de Nascimento não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="data_nasc")
	private LocalDate data_nasc;
	
	@NotBlank
	@NotNull(message = "O campo sexo não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="sexo", length = 10)
	private String sexo;
	
	@NotBlank
	@Email(message = "Email não é válido")
	@NotNull(message = "O campo nome não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name="email", length = 50)
	private String email;
	
	@NotBlank
	@NotNull(message = "O campo senha não pode ser nulo")
	@Length(min = 3, max = 45)
	@Column(name="senha", length = 45)
	private String senha;
	
	@NotBlank
	@NotNull(message = "O campo senha não pode ser nulo")
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
		
	//GETS E SETS
	
	public Integer getIdProfile() {
		return idProfile;
	}

	public void setIdProfile(Integer idProfile) {
		this.idProfile = idProfile;
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
	
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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

	@Override
	public String toString() {
		return "Profile [idProfile=" + idProfile + ", nome=" + nome + ", data_nasc=" + data_nasc + ", sexo=" + sexo
				+ ", email=" + email + ", senha=" + senha + ", telefone=" + telefone + ", crn=" + crn + ", business=" + business + "]";
	}
}
