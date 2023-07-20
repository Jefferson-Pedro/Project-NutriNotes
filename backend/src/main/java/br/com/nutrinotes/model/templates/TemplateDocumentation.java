package br.com.nutrinotes.model.templates;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.departament.Department;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "checklist_template_documentation")
public class TemplateDocumentation {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_template")
	private Integer idTemplate;
	
	@Column(name = "nome_template")
	private String nome;
	
	@Column(name = "tipo_checklist")
	private String tipoChecklist;
	
	@Column(name = "frequencia")
	private Integer frequencia;
	
	@ManyToOne
	@JoinColumn(name = "id_setores")
	@JsonIgnoreProperties("checklist_template_documentation") //Tabela checklist_template_documentation
	private Department idSetores;
	
	//GET AND SET

	public Integer getIdTemplate() {
		return idTemplate;
	}

	public void setIdTemplate(Integer idTemplate) {
		this.idTemplate = idTemplate;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipoChecklist() {
		return tipoChecklist;
	}

	public void setTipoChecklist(String tipoChecklist) {
		this.tipoChecklist = tipoChecklist;
	}

	public Integer getFrequencia() {
		return frequencia;
	}

	public void setFrequencia(Integer frequencia) {
		this.frequencia = frequencia;
	}

	public Department getIdSetores() {
		return idSetores;
	}

	public void setIdSetores(Department idSetores) {
		this.idSetores = idSetores;
	}
	
	
}
