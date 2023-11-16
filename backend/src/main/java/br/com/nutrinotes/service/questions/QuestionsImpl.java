package br.com.nutrinotes.service.questions;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.nutrinotes.dao.questions.QuestionDAO;
import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Questions;

@Component
public class QuestionsImpl implements IQuestions {
	
	@Autowired
	QuestionDAO dao;

	@Override
	public boolean save(Questions novo) {
		if(novo.getQuestion().length() < 20) {
			System.err.println("Erro ao cadastrar o novo item, "
					+ "tem que ter no minimo 20 caracteres");
			return false;
		}
		dao.save(novo);
		return true;
	}

	@Override
	public Questions update(Questions Questions, Integer id) {
		Optional<Questions> res = dao.findById(id);
		  if (res.isPresent()) {
			  Questions  existingQuestions = res.get();
			  BeanUtils.copyProperties(Questions, existingQuestions, "idQuestionss");
			  return dao.save(existingQuestions);
		  }
		  System.err.println("Erro ao editar a questão!");
		return null;
	}

	@Override
	public List<Questions> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Questions> findByQuestions(String nome) {
		return dao.findByQuestion(nome);
	}

	@Override
	public Questions findById(Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(Integer id) {
		Optional<Questions> res = dao.findById(id);
		 if (res.isPresent()) {
			 dao.deleteById(id);
			 return true;
		 }
		 System.err.println("Ocorreu um erro para excluir a questão.");
		return false;
	}

	@Override
	public List<QuestionDTO> finQuestionsByTemplate(Integer idTemplate) {
		return dao.findQuestionsByTemplate(idTemplate);
	}
}
