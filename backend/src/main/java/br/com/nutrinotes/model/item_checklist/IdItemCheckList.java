package br.com.nutrinotes.model.item_checklist;

import java.io.Serializable;

import br.com.nutrinotes.model.checklist.Checklist;
import br.com.nutrinotes.model.questions.Question;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class IdItemCheckList implements Serializable {
	
	public IdItemCheckList(Integer idch, Integer iditem) {
		Question q = new Question();
		Checklist c = new Checklist();
		
		c.setIdChecklist(idch);
		q.setIdQuestions(iditem);
		this.setChecklist(c);
		this.setQuestion(q);
	}
	
	public IdItemCheckList() {}

	@ManyToOne
	@JoinColumn(name = "id_questions")
	private Question question;
	
	@ManyToOne
	@JoinColumn(name = "id_checklist")
	private Checklist checklist;
	

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	public Checklist getChecklist() {
		return checklist;
	}

	public void setChecklist(Checklist checklist) {
		this.checklist = checklist;
	}
}

/*Classe responsavel por tornar as chaves estrangeiras em chaves primarias compostas*/