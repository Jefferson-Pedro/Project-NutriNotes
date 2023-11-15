package br.com.nutrinotes.service.question;

import java.util.List;

import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Question;


public interface IQuestion {
	public boolean save(Question novo);
	public Question update(Question question, Integer id);
	public List<Question> findAll();
	public List<Question> findByQuestions(String nome);
	public Question findById(Integer id);
	public boolean delete(Integer id);
	public List<QuestionDTO> finQuestionByTemplate(Integer idTemplate);
	
}
