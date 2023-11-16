package br.com.nutrinotes.dto;

public class QuestionDTO {
	
	private Integer idQuestion;
	private String question;
	//private TemplateChecklist template;

	
	public QuestionDTO(Integer id, String question ) {
		this.idQuestion = id;
		this.question = question;	
	}
							//GETS E SETS

	public QuestionDTO() {}

	public Integer getIdquestion() {
		return idQuestion;
	}

	public void setIdquestion(Integer idQuestion) {
		this.idQuestion = idQuestion;
	}

	public String getquestion() {
		return question;
	}

	public void setquestion(String question) {
		this.question = question;
	}

}
