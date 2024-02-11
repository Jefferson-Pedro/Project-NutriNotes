package br.com.nutrinotes.model.business;

import java.util.List;

import org.hibernate.validator.constraints.Length;
import org.springframework.context.annotation.Profile;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.department.Department;
import br.com.nutrinotes.model.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "business")
public class Business {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_business")
	private Integer idBusiness;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo nome não pode ser nulo")
	@Column(name = "nome")
	private String nome;
	
	@NotBlank
	@Length(max = 14)
	@NotNull(message = "O campo CNPJ não pode ser nulo")
	@Column(name = "cnpj")
	private String cnpj;
	
	@NotBlank
	@Length(max = 8)
	@NotNull(message = "O campo CEP não pode ser nulo")
	@Column(name = "cep")
	private String cep;
	
	@NotBlank
	@Length(max = 9)
	@Column(name = "telefone")
	private String telefone;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo logradouro não pode ser nulo")
	@Column(name = "logradouro")
	private String logradouro;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@Column(name = "compl")
	private String compl;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo cidade não pode ser nulo")
	@Column(name = "cidade")
	private String cidade;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo bairro não pode ser nulo")
	@Column(name = "bairro")
	private String bairro;
	
	@NotBlank
	@Length( max = 2)
	@NotNull(message = "O campo UF não pode ser nulo")
	@Column(name = "uf")
	private String uf;
	
	@Column(name = "representante")
	private String representante;
	
	@Column(name = "plano")
	private String plano;
	
	@ManyToOne
	@JoinColumn(name = "responsavel_tec")
	@JsonIgnoreProperties("business")
	private User responsavelTec;
	
	//No OneToMany não tem join column, só no contrário
	@OneToMany(mappedBy = "idBusiness", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("business")
    private List<Department> setores;

	
	//GETS E SETS

	public Integer getIdBusiness() {
		return idBusiness;
	}

	public void setIdBusiness(Integer idBusiness) {
		this.idBusiness = idBusiness;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getCompl() {
		return compl;
	}

	public void setCompl(String compl) {
		this.compl = compl;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getRepresentante() {
		return representante;
	}

	public void setRepresentante(String representante) {
		this.representante = representante;
	}

	public String getPlano() {
		return plano;
	}

	public void setPlano(String plano) {
		this.plano = plano;
	}

	public User getResponsavelTec() {
		return responsavelTec;
	}

	public void setResponsavelTec(User responsavelTec) {
		this.responsavelTec = responsavelTec;
	}
		
	public List<Department> getSetores() {
		return setores;
	}

	public void setSetores(List<Department> setores) {
		this.setores = setores;
	}

	@Override
	public String toString() {
		return "Business [idBusiness=" + idBusiness + ", nome=" + nome + ", cnpj=" + cnpj + ", cep=" + cep
				+ ", telefone=" + telefone + ", logradouro=" + logradouro + ", compl=" + compl + ", cidade=" + cidade
				+ ", bairro=" + bairro + ", uf=" + uf + ", representante=" + representante + ", plano=" + plano
				+ ", responsavelTec=" + responsavelTec + ", getIdBusiness()=" + getIdBusiness() + ", getNome()="
				+ getNome() + ", getCnpj()=" + getCnpj() + ", getCep()=" + getCep() + ", getTelefone()=" + getTelefone()
				+ ", getLogradouro()=" + getLogradouro() + ", getCompl()=" + getCompl() + ", getCidade()=" + getCidade()
				+ ", getBairro()=" + getBairro() + ", getUf()=" + getUf() + ", getRepresentante()=" + getRepresentante()
				+ ", getPlano()=" + getPlano() + ", getResponsavelTec()=" + getResponsavelTec() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
}
