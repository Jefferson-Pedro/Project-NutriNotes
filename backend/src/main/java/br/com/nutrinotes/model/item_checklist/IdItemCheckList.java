package br.com.nutrinotes.model.item_checklist;

import java.io.Serializable;

import br.com.nutrinotes.model.checklist.Checklist;
import br.com.nutrinotes.model.questions.Questions;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class IdItemCheckList implements Serializable {
	
	public IdItemCheckList(Integer idch, Integer iditem) {
		Questions q = new Questions();
		Checklist c = new Checklist();
		
		c.setIdChecklist(idch);
		q.setIdQuestions(iditem);
		this.setChecklist(c);
		this.setQuestion(q);
	}
	
	public IdItemCheckList() {}

	@ManyToOne
	@JoinColumn(name = "id_questions")
	private Questions question;
	
	@ManyToOne
	@JoinColumn(name = "id_checklist")
	private Checklist checklist;
	

	public Questions getQuestions() {
		return question;
	}

	public void setQuestion(Questions question) {
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