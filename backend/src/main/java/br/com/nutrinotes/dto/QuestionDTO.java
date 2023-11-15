package br.com.nutrinotes.dto;

public class QuestionDTO {
	
	private Integer idQuestions;
	private String questions;
	//private TemplateChecklist template;

	
	public QuestionDTO(Integer id, String question ) {
		this.idQuestions = id;
		this.questions = question;
		
	}
	
	//GETS E SETS

	public QuestionDTO() {}

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

	/*public TemplateChecklist getTemplate() {
		return template;
	}

	public void setTemplate(TemplateChecklist template) {
		this.template = template;
	}*/
}
