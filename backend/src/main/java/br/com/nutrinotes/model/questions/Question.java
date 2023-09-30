package br.com.nutrinotes.model.questions;

import br.com.nutrinotes.model.templates.TemplateCheckList;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "questions_checklist")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_questions ")
	private Integer idQuestions;
	
	@Column(name = "questao")
	private String questions;
	
	@ManyToOne
	@JoinColumn(name = "id_template_documentation")
	private TemplateCheckList template;

	
	public Integer getIdQuestions() {
		return idQuestions;
	}

	public void setIdQuestions(Integer idQuestions) {
		this.idQuestions = idQuestions;
	}

	public String getQuestions() {
		return questions;
	}

	public void setQuestions(String questions) {
		this.questions = questions;
	}

	public TemplateCheckList getTemplate() {
		return template;
	}

	public void setTemplate(TemplateCheckList template) {
		this.template = template;
	}
	
	
	

	
}
