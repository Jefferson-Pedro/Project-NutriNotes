package br.com.nutrinotes.dao.question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.nutrinotes.model.questions.Question;

public interface QuestionDAO extends JpaRepository<Question, Integer>{
	
	public List<Question> findByQuestions(String nome);
}
