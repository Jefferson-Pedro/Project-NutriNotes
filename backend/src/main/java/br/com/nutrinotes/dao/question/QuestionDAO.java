package br.com.nutrinotes.dao.question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.nutrinotes.model.questions.Question;

public interface QuestionDAO extends JpaRepository<Question, Integer>{
	
	public List<Question> findByQuestions(String nome);
	
	//Criando Query Customizada para recuperar as questões por template
	@Query("SELECT new "
			+ "br.com.nutrinotes.dto.QuestionByTemplate()"
			+ "FROM Question q"
			+ "WHERE q.template = :template")
	public List<Question> findQuestionsByTemplate();
	
}
