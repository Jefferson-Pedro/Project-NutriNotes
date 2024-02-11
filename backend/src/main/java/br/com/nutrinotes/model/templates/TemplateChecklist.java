package br.com.nutrinotes.model.templates;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.com.nutrinotes.model.department.Department;
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
@Table(name = "checklist_template")
public class TemplateChecklist {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_template")
	private Integer idTemplate;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo nome do template não pode ser nulo")
	@Column(name = "nome_template")
	private String nome;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo tipo checklist não pode ser nulo")
	@Column(name = "tipo_checklist")
	private String tipoChecklist;
	
	@NotBlank
	@NotNull()
	@Column(name = "frequencia")
	private Integer frequencia;
	
	@ManyToOne
	@JoinColumn(name = "id_setores")
	@JsonIgnoreProperties("checklist_template") //Tabela checklist_template
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
