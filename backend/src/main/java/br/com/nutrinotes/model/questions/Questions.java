package br.com.nutrinotes.model.questions;

import org.hibernate.validator.constraints.Length;

import br.com.nutrinotes.model.templates.TemplateChecklist;
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
@Table(name = "questions_checklist")
public class Questions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_questions ")
	private Integer idQuestion;
	
	@NotBlank
	@Length(min = 3, max = 45)
	@NotNull(message = "O campo questão não pode ser nulo")
	@Column(name = "questao")
	private String question;
	
	@ManyToOne
	@JoinColumn(name = "id_template")
	private TemplateChecklist template;

						//GET E SET
	
	public Integer getIdQuestions() {
		return idQuestion;
	}

	public void setIdQuestions(Integer idQuestion) {
		this.idQuestion = idQuestion;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestions(String question) {
		this.question = question;
	}

	public TemplateChecklist getTemplate() {
		return template;
	}

	public void setTemplate(TemplateChecklist template) {
		this.template = template;
	}
}
