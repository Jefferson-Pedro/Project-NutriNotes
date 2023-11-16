package br.com.nutrinotes.dao.questions;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Questions;

public interface QuestionDAO extends JpaRepository<Questions, Integer>{
	
	public List<Questions> findByQuestion(String nome);
	
	//Criando Query Customizada para recuperar as questões por template
	@Query("SELECT new br.com.nutrinotes.dto.QuestionDTO(q.idQuestion, q.question) "
	        + "FROM Questions q "
	        + "WHERE q.template.idTemplate = :idTemplate")
	public List<QuestionDTO> findQuestionsByTemplate(@Param("idTemplate") Integer idTemplate);

}
