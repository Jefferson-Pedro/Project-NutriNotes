package br.com.nutrinotes.dto;

public class QuestionByTemplate {
	
	private Integer id;
	private String question;
	
	public QuestionByTemplate(Integer id, String question) {
		super();
		this.id = id;
		this.question = question;
	}
		
	public QuestionByTemplate() {
		super();
	}

	//GETS E SETS
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	
}
