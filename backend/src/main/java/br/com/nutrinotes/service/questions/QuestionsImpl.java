package br.com.nutrinotes.service.questions;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.nutrinotes.dao.questions.QuestionDAO;
import br.com.nutrinotes.dto.QuestionDTO;
import br.com.nutrinotes.model.questions.Questions;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class QuestionsImpl implements IQuestions {
	
	@Autowired
	QuestionDAO dao;

	@Override
	public Questions create(@Valid @NotNull Questions novo) {
		
		return dao.save(novo);
	}

	@Override
	public boolean update(@Valid @NotNull Questions Questions, @NotNull @Positive Integer id) {
		Optional<Questions> res = dao.findById(id);
		  if (res.isPresent()) {
			  Questions  existingQuestions = res.get();
			  BeanUtils.copyProperties(Questions, existingQuestions, "idQuestionss");
			  dao.save(existingQuestions);
			  return true;
		  }
		  System.err.println("Erro ao editar a questão!");
		return false;
	}

	@Override
	public List<Questions> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Questions> findByQuestions(@NotNull @NotBlank String nome) {
		return dao.findByQuestion(nome);
	}

	@Override
	public Questions findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<Questions> res = dao.findById(id);
		 if (res.isPresent()) {
			 dao.deleteById(id);
			 return true;
		 }
		 System.err.println("Ocorreu um erro para excluir a questão.");
		return false;
	}

	@Override
	public List<QuestionDTO> finQuestionsByTemplate(@NotNull @Positive Integer idTemplate) {
		return dao.findQuestionsByTemplate(idTemplate);
	}
}
