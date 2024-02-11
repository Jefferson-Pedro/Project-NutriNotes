package br.com.nutrinotes.service.questions;
import java.util.List;

import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Questions;


public interface IQuestions {
	public Questions create(Questions novo);
	public boolean update(Questions Questions, Integer id);
	public List<Questions> findAll();
	public List<Questions> findByQuestions(String nome);
	public Questions findById(Integer id);
	public boolean delete(Integer id);
	public List<QuestionDTO> finQuestionsByTemplate(Integer idTemplate);
	
}
