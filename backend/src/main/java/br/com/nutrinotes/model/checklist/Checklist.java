package br.com.nutrinotes.model.checklist;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.model.department.Department;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "checklist")
public class Checklist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_checklist ")
	private Integer idChecklist;
	
	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "nome_gestor")
	private String nomeGestor;
	
	@Column(name = "data_auditoria")
	private LocalDate dataAuditoria;
	
	@ManyToOne
	@JoinColumn(name = "id_setores")
	@JsonIgnoreProperties("department") //Tabela department
	private Department idSetores;
	
	@ManyToOne
	@JoinColumn(name = "id_business")
	@JsonIgnoreProperties("business") //Tabela business
	private Business idBusiness;
	
	
	//SET AND GET
	
	public Integer getIdChecklist() {
		return idChecklist;
	}

	public void setIdChecklist(Integer idChecklist) {
		this.idChecklist = idChecklist;
	}
	
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getNomeGestor() {
		return nomeGestor;
	}

	public void setNomeGestor(String nomeGestor) {
		this.nomeGestor = nomeGestor;
	}

	public LocalDate getDataAuditoria() {
		return dataAuditoria;
	}

	public void setDataAuditoria(LocalDate dataAuditoria) {
		this.dataAuditoria = dataAuditoria;
	}

	public Department getIdSetores() {
		return idSetores;
	}

	public void setIdSetores(Department idSetores) {
		this.idSetores = idSetores;
	}

	public Business getIdBusiness() {
		return idBusiness;
	}

	public void setIdBusiness(Business idBusiness) {
		this.idBusiness = idBusiness;
	}

}
