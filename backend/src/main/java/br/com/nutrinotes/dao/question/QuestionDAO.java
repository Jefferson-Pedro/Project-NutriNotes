package br.com.nutrinotes.dao.question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Question;
import br.com.nutrinotes.model.templates.TemplateChecklist;

public interface QuestionDAO extends JpaRepository<Question, Integer>{
	
	public List<Question> findByQuestions(String nome);
	
	//Criando Query Customizada para recuperar as questões por template
	@Query("SELECT new br.com.nutrinotes.dto.QuestionDTO(q.idQuestions, q.questions) "
	        + "FROM Question q "
	        + "WHERE q.template.idTemplate = :idTemplate")
	public List<QuestionDTO> findQuestionsByTemplate(@Param("idTemplate") Integer idTemplate);

}
