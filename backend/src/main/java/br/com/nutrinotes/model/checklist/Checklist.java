package br.com.nutrinotes.model.checklist;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.business.Business;
import br.com.nutrinotes.model.departament.Department;
import br.com.nutrinotes.model.templates.TemplateDocumentation;
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
	
	@Column(name = "nome_gestor")
	private String nomeGestor;
	
	@Column(name = "data_auditoria")
	private Date dataAuditoria;
	
	@ManyToOne
	@JoinColumn(name = "id_setores")
	@JsonIgnoreProperties("department") //Tabela department
	private Department idSetores;
	
	@ManyToOne
	@JoinColumn(name = "id_business")
	@JsonIgnoreProperties("business") //Tabela business
	private Business idBusiness;
	
	@ManyToOne
	@JoinColumn(name = "id_template_documentation")
	@JsonIgnoreProperties("checklist_template_documentation") //Tabela checklist_template_documentation
	private TemplateDocumentation idTemplate_Documentation;

	
	//SET AND GET
	
	public Integer getIdChecklist() {
		return idChecklist;
	}

	public void setIdChecklist(Integer idChecklist) {
		this.idChecklist = idChecklist;
	}

	public String getNomeGestor() {
		return nomeGestor;
	}

	public void setNomeGestor(String nomeGestor) {
		this.nomeGestor = nomeGestor;
	}

	public Date getDataAuditoria() {
		return dataAuditoria;
	}

	public void setDataAuditoria(Date dataAuditoria) {
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

	public TemplateDocumentation getidTemplate_Documentation() {
		return idTemplate_Documentation;
	}

	public void setidTemplate_Documentation(TemplateDocumentation idChecklist_Documentation) {
		this.idTemplate_Documentation = idChecklist_Documentation;
	}
}
